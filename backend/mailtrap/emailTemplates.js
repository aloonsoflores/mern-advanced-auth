export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Confirmación de correo electrónico - Tu App</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #333333; line-height: 1.6;">
  <div style="max-width: 640px; margin: 0 auto; padding: 20px 10px;">
    <!-- Header -->
    <!-- <div style="text-align: center; padding: 20px 0;"> -->
      <!-- <img src="https://ejemplo.com/logo.png" alt="Logo" style="max-width: 150px; height: auto;" /> --> <!-- Reemplazar con URL real -->
    <!-- </div> -->

    <!-- Contenido principal -->
    <div style="background: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; padding: 30px;">
      <h1 style="color: #2c3e50; margin: 0 0 25px 0; font-size: 24px; text-align: center;">
        Confirma tu dirección de correo
      </h1>
      
      <p style="margin: 0 0 16px 0;">Hola,</p>
      <p style="margin: 0 0 20px 0;">Gracias por registrarte en Tu App. Por favor utiliza el siguiente código de verificación:</p>
      
      <!-- Código de verificación -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px; text-align: center; margin: 25px 0; font-weight: bold;">
        <span style="font-size: 32px; letter-spacing: 3px; color: #27ae60;">{verificationCode}</span>
      </div>
      
      <!-- Alertas importantes -->
      <div style="background: #fff4e5; border-left: 4px solid #f6b73e; padding: 12px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px;">⚠️ Este código expirará en <strong>15 minutos</strong>. No compartas este código con nadie.</p>
      </div>
      
      <!-- Advertencia importante -->
      <div style="background: #fee; border: 1px solid #ffcccc; padding: 16px; border-radius: 4px; margin: 20px 0;">
        <p style="margin: 0; color: #d32f2f; font-size: 14px;">
          ⚠️ <strong>¿No reconoces esta actividad?</strong><br>
          Si no realizaste este cambio, por favor <a href="mailto:floalonso.abad@gmail.com" style="color: #d32f2f; text-decoration: underline;">contáctanos inmediatamente</a>.
        </p>
      </div>
    </div>

    <!-- Pie de página -->
    <div style="text-align: center; padding: 25px 0; color: #666666; font-size: 12px;">
      <p style="margin: 5px 0;">¿Necesitas ayuda? <a href="mailto:floalonso.abad@gmail.com" style="color: #27ae60; text-decoration: none;">Contacta a nuestro equipo</a></p>
      <p style="margin: 5px 0;">Este correo fue enviado a {userEmail}</p>
      <div style="margin: 15px 0;">
        <a href="#" style="color: #27ae60; text-decoration: none; margin: 0 10px;">Políticas de Privacidad</a>
        <a href="#" style="color: #27ae60; text-decoration: none; margin: 0 10px;">Términos de Servicio</a>
      </div>
      <p style="margin: 5px 0;">© 2023 Tu App. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Contraseña Actualizada - Tu App</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #333333; line-height: 1.6;">
  <div style="max-width: 640px; margin: 0 auto; padding: 20px 10px;">
    <!-- Header -->
    <!-- <div style="text-align: center; padding: 20px 0;"> -->
      <!-- <img src="https://ejemplo.com/logo.png" alt="Logo" style="max-width: 150px; height: auto;" /> --> <!-- Reemplazar con URL real -->
    <!-- </div> -->

    <!-- Contenido principal -->
    <div style="background: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; padding: 30px;">
      <div style="text-align: center; margin-bottom: 25px;">
        <div style="background: #27ae60; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
          <span style="color: white; font-size: 30px;">✓</span>
        </div>
      </div>
      
      <h1 style="color: #2c3e50; margin: 0 0 25px 0; font-size: 24px; text-align: center;">
        ¡Contraseña actualizada con éxito!
      </h1>
      
      <p style="margin: 0 0 16px 0;">Hola,</p>
      <p style="margin: 0 0 20px 0;">Tu contraseña ha sido actualizada correctamente el {fechaHora}. Ahora puedes acceder a tu cuenta con tus nuevas credenciales.</p>

      <!-- Botón de acción -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{loginLink}" style="background-color: #27ae60; color: white; padding: 14px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">Iniciar Sesión</a>
      </div>

      <!-- Alerta de seguridad -->
      <div style="background: #f8f9fa; border-left: 4px solid #27ae60; padding: 16px; margin: 25px 0; border-radius: 4px;">
        <h3 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 16px;">🔒 Recomendaciones de seguridad:</h3>
        <ul style="margin: 0; padding-left: 20px;">
          <li style="margin: 8px 0;">Usa una combinación única de letras, números y símbolos</li>
          <li style="margin: 8px 0;">Habilita la autenticación en dos pasos</li>
          <li style="margin: 8px 0;">Actualiza tu contraseña cada 3 meses</li>
          <li style="margin: 8px 0;">No reutilices contraseñas en otros servicios</li>
        </ul>
      </div>

      <!-- Advertencia importante -->
      <div style="background: #fee; border: 1px solid #ffcccc; padding: 16px; border-radius: 4px; margin: 20px 0;">
        <p style="margin: 0; color: #d32f2f; font-size: 14px;">
          ⚠️ <strong>¿No reconoces esta actividad?</strong><br>
          Si no realizaste este cambio, por favor <a href="mailto:floalonso.abad@gmail.com" style="color: #d32f2f; text-decoration: underline;">contáctanos inmediatamente</a>.
        </p>
      </div>
    </div>

    <!-- Pie de página -->
    <div style="text-align: center; padding: 25px 0; color: #666666; font-size: 12px;">
      <p style="margin: 5px 0;">¿Necesitas ayuda? <a href="mailto:floalonso.abad@gmail.com" style="color: #27ae60; text-decoration: none;">Contacta a nuestro equipo</a></p>
      <p style="margin: 5px 0;">Este correo fue enviado a {userEmail}</p>
      <div style="margin: 15px 0;">
        <a href="#" style="color: #27ae60; text-decoration: none; margin: 0 10px;">Políticas de Privacidad</a>
        <a href="#" style="color: #27ae60; text-decoration: none; margin: 0 10px;">Términos de Servicio</a>
      </div>
      <p style="margin: 5px 0;">© 2023 Tu App. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Solicitud de Restablecimiento - Tu App</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #333333; line-height: 1.6;">
  <div style="max-width: 640px; margin: 0 auto; padding: 20px 10px;">
    <!-- Header -->
    <!-- <div style="text-align: center; padding: 20px 0;"> -->
      <!-- <img src="https://ejemplo.com/logo.png" alt="Logo" style="max-width: 150px; height: auto;" /> --> <!-- Reemplazar con URL real -->
    <!-- </div> -->

    <!-- Contenido principal -->
    <div style="background: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; padding: 30px;">
      <h1 style="color: #2c3e50; margin: 0 0 25px 0; font-size: 24px; text-align: center;">
        Solicitud de restablecimiento de contraseña
      </h1>
      
      <p style="margin: 0 0 16px 0;">Hola,</p>
      <p style="margin: 0 0 20px 0;">Recibimos una solicitud para restablecer tu contraseña el <strong>{fechaHora}</strong>. Si no fuiste tú, ignora este mensaje o <a href="mailto:floalonso.abad@gmail.com" style="color: #d32f2f; text-decoration: underline;">notifícanoslo</a>.</p>

      <!-- Botón principal -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" style="background-color: #27ae60; color: white; padding: 14px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">Restablecer contraseña</a>
      </div>

      <!-- Código alternativo -->
      <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 25px 0; text-align: center;">
        <p style="margin: 0; font-size: 14px; color: #666;">
          Si el botón no funciona, copia y pega este enlace en tu navegador:<br>
          <span style="color: #27ae60; word-break: break-all;">{resetURL}</span>
        </p>
      </div>

      <!-- Alerta de seguridad -->
      <div style="background: #fff4e5; border-left: 4px solid #f6b73e; padding: 12px; margin: 20px 0; border-radius: 4px;">
        <h3 style="margin: 0 0 10px 0; color: #d32f2f; font-size: 16px;">⚠️ Importante:</h3>
        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
          <li style="margin: 8px 0;">El enlace expirará en 60 minutos</li>
          <li style="margin: 8px 0;">No compartas este enlace con nadie</li>
          <li style="margin: 8px 0;">Verifica que el dominio sea oficial de Tu App</li>
        </ul>
      </div>
      
      <!-- Advertencia importante -->
      <div style="background: #fee; border: 1px solid #ffcccc; padding: 16px; border-radius: 4px; margin: 20px 0;">
        <p style="margin: 0; color: #d32f2f; font-size: 14px;">
          ⚠️ <strong>¿No reconoces esta actividad?</strong><br>
          Si no realizaste este cambio, por favor <a href="mailto:floalonso.abad@gmail.com" style="color: #d32f2f; text-decoration: underline;">contáctanos inmediatamente</a>.
        </p>
      </div>
    </div>

    <!-- Pie de página -->
    <div style="text-align: center; padding: 25px 0; color: #666666; font-size: 12px; border-top: 2px solid #f0f0f0;">
      <p style="margin: 5px 0;">¿Necesitas ayuda? <a href="mailto:floalonso.abad@gmail.com" style="color: #27ae60; text-decoration: none;">Contacta a nuestro equipo</a></p>
      <p style="margin: 5px 0;">Este correo fue enviado a {userEmail}</p>
      <div style="margin: 15px 0;">
        <a href="#" style="color: #27ae60; text-decoration: none; margin: 0 10px;">Políticas de Privacidad</a>
        <a href="#" style="color: #27ae60; text-decoration: none; margin: 0 10px;">Términos de Servicio</a>
      </div>
      <p style="margin: 5px 0;">© 2023 Tu App. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
`;
