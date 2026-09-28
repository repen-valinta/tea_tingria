import { describe, expect, it } from 'vitest';

import { getClientKey, isContactRateLimited, validateContactForm } from './contactForm';

describe('validateContactForm', () => {
	it('trims valid values', () => {
		const result = validateContactForm({
			nimi: '  Tea Tingria  ',
			email: ' tea@example.com ',
			viesti: '  Tämä on riittävä viesti.  '
		});

		expect(result.errors).toEqual({});
		expect(result.values).toEqual({
			nimi: 'Tea Tingria',
			email: 'tea@example.com',
			viesti: 'Tämä on riittävä viesti.'
		});
	});

	it('reports missing fields correctly', () => {
		expect(validateContactForm({ nimi: '', email: '', viesti: '' }).errors).toEqual({
			nimi: 'Nimi on pakollinen.',
			email: 'Sähköposti on pakollinen.',
			viesti: 'Viesti on pakollinen.'
		});
	});

	it('rejects invalid lengths and control characters', () => {
		const result = validateContactForm({
			nimi: 'A\nB',
			email: 'not-an-email',
			viesti: 'lyhyt'
		});

		expect(result.errors).toEqual({
			nimi: 'Nimi sisältää virheellisiä merkkejä.',
			email: 'Anna kelvollinen sähköpostiosoite.',
			viesti: 'Vähintään 10 merkkiä viestissä.'
		});
	});
});

describe('contact rate limiting', () => {
	it('identifies the Cloudflare client IP', () => {
		const request = new Request('https://example.com', {
			headers: { 'cf-connecting-ip': '203.0.113.10', 'x-forwarded-for': '198.51.100.1' }
		});

		expect(getClientKey(request)).toBe('203.0.113.10');
	});

	it('allows five requests and rejects the sixth within the window', () => {
		const clientKey = `test-${crypto.randomUUID()}`;
		const now = Date.now();

		for (let index = 0; index < 5; index += 1) {
			expect(isContactRateLimited(clientKey, now + index)).toBe(false);
		}

		expect(isContactRateLimited(clientKey, now + 5)).toBe(true);
		expect(isContactRateLimited(clientKey, now + 15 * 60 * 1000 + 1)).toBe(false);
	});
});
