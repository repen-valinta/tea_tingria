import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

import ContactForm from './ContactForm.svelte';

describe('ContactForm.svelte', () => {
	it('renders a hidden honeypot and an enabled submit button', async () => {
		render(ContactForm);

		await expect.element(page.getByRole('button', { name: 'Lähetä' })).toBeEnabled();
		await expect.element(page.getByTestId('contact-honeypot')).not.toBeVisible();
		await expect.element(page.getByTestId('contact-honeypot')).toHaveAttribute('tabindex', '-1');
	});
});
