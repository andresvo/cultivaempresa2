export const prerender = false;

import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/SendMail";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const nombre = data.get("nombre");
  const email = data.get("email");
  const telefono = data.get("telefono");
  // Validate the data - you'll probably want to do more than this
  if (!nombre || !email || !telefono) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  console.log("Nombre:", nombre);
  sendEmail({
    email: email as string,
    html: `Nombre: ${nombre}<br>Email: ${email}<br>Teléfono: ${telefono}`,
    subject: "Contacto web Cultiva Empresa",
    name: nombre as string,
  });
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
