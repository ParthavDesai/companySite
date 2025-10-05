import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json() as {
      name: string;
      email: string;
      message: string;
    };

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
