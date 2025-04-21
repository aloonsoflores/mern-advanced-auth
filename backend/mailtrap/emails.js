import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verifica tu correo electrónico",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Correo electrónico enviado correctamente", response);
	} catch (error) {
		console.error(`Error al enviar la verificación`, error);

		throw new Error(`Error al enviar el correo electrónico de verificación: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
			template_variables: {
				company_info_name: "Auth Company",
				name: name,
			},
		});

		console.log("Correo electrónico de bienvenida enviado correctamente", response);
	} catch (error) {
		console.error(`Error al enviar el correo electrónico de bienvenida`, error);

		throw new Error(`Error al enviar el correo electrónico de bienvenida: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Restablece tu contraseña",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error al enviar el correo electrónico de restablecimiento de contraseña`, error);

		throw new Error(`Error al enviar el correo electrónico de restablecimiento de contraseña: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Restablecimiento de contraseña exitoso",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Correo electrónico de restablecimiento de contraseña enviado correctamente", response);
	} catch (error) {
		console.error(`Error al enviar correo electrónico de restablecimiento de contraseña`, error);

		throw new Error(`Error al enviar correo electrónico de restablecimiento de contraseña: ${error}`);
	}
};
