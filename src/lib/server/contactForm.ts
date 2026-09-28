export type ContactFormValues = {
	nimi: string;
	email: string;
	viesti: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const MAX_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 320;
const MAX_MESSAGE_LENGTH = 5000;

export function validateContactForm(input: { nimi: unknown; email: unknown; viesti: unknown }): {
	errors: ContactFormErrors;
	values: ContactFormValues;
} {
	const values: ContactFormValues = {
		nimi: typeof input.nimi === 'string' ? input.nimi.trim() : '',
		email: typeof input.email === 'string' ? input.email.trim() : '',
		viesti: typeof input.viesti === 'string' ? input.viesti.trim() : ''
	};
	const errors: ContactFormErrors = {};

	if (!values.nimi) {
		errors.nimi = 'Nimi on pakollinen.';
	} else if (values.nimi.length < 2) {
		errors.nimi = 'Vähintään 2 merkkiä nimessä.';
	} else if (values.nimi.length > MAX_NAME_LENGTH) {
		errors.nimi = 'Enintään 200 merkkiä nimessä.';
	} else if (
		[...values.nimi].some((character) => {
			const code = character.charCodeAt(0);
			return code < 32 || code === 127;
		})
	) {
		errors.nimi = 'Nimi sisältää virheellisiä merkkejä.';
	}

	if (!values.email) {
		errors.email = 'Sähköposti on pakollinen.';
	} else if (
		values.email.length > MAX_EMAIL_LENGTH ||
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
	) {
		errors.email = 'Anna kelvollinen sähköpostiosoite.';
	}

	if (!values.viesti) {
		errors.viesti = 'Viesti on pakollinen.';
	} else if (values.viesti.length < 10) {
		errors.viesti = 'Vähintään 10 merkkiä viestissä.';
	} else if (values.viesti.length > MAX_MESSAGE_LENGTH) {
		errors.viesti = 'Enintään 5000 merkkiä viestissä.';
	}

	return { errors, values };
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestsByClient = new Map<string, number[]>();

export function getClientKey(request: Request): string {
	return (
		request.headers.get('cf-connecting-ip') ??
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
		'unknown'
	);
}

export function isContactRateLimited(clientKey: string, now = Date.now()): boolean {
	const recentRequests = (requestsByClient.get(clientKey) ?? []).filter(
		(timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
	);

	if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
		requestsByClient.set(clientKey, recentRequests);
		return true;
	}

	recentRequests.push(now);
	requestsByClient.set(clientKey, recentRequests);
	return false;
}
