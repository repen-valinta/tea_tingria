import { fail } from '@sveltejs/kit';
import { CONTACT_TO_EMAIL, RESEND_API_KEY, RESEND_FROM_EMAIL } from '$app/env/private';
import { Resend } from 'resend';

import { getClientKey, isContactRateLimited, validateContactForm } from '$lib/server/contactForm';
import type { Actions } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		// This field is intentionally not announced to assistive technology. A filled
		// value is a strong signal that an automated client submitted the form.
		if (formData.get('website')) {
			return { success: true };
		}

		if (isContactRateLimited(getClientKey(request))) {
			return fail(429, {
				sendError: 'Liian monta yhteydenottoa. Yritä hetken kuluttua uudelleen.'
			});
		}

		const { errors, values } = validateContactForm({
			nimi: formData.get('nimi'),
			email: formData.get('email'),
			viesti: formData.get('viesti')
		});

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				values
			});
		}

		try {
			const { error } = await resend.emails.send({
				from: RESEND_FROM_EMAIL,
				to: CONTACT_TO_EMAIL,
				replyTo: values.email,
				subject: `Yhteydenotto verkkosivulta - ${values.nimi}`,
				text: [values.viesti, '', '------', 'Lähettäjä:', values.nimi, values.email].join('\n')
			});

			if (error) {
				console.error('email error', error);

				return fail(500, {
					sendError: 'Viestin lähetys epäonnistui.',
					values
				});
			}
		} catch (error) {
			console.error('email request error', error);

			return fail(500, {
				sendError: 'Viestin lähetys epäonnistui.',
				values
			});
		}

		return {
			success: true
		};
	}
};
