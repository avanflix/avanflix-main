import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send lead details to Avanflix
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "reachus@avanflix.com",
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation to visitor
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting Avanflix",
      html: `
        <h2>Thank you for contacting Avanflix</h2>
        <p>We have received your request and our team will contact you shortly.</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Email Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message",
      },
      { status: 500 }
    );
  }
}