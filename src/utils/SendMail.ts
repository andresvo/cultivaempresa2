import nodemailer from "nodemailer";

interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
}

async function sendEmail(props: ISendEmail) {
  let transporter = nodemailer.createTransport({
    host: import.meta.env.MAIL_HOST,
    port: import.meta.env.MAIL_PORT,
    auth: {
      user: import.meta.env.MAIL_USER,
      pass: import.meta.env.MAIL_PASS,
    },
  });

  let message = {
    from: import.meta.env.MAIL_FROM,
    to: import.meta.env.MAIL_TO,
    subject: props.subject,
    name: props.name,
    html: props.html,
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };
