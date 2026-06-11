import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      brandName,
      email,
      phoneNumber,
      location,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    console.log("SMTP Connected");

    console.log({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passExists: !!process.env.SMTP_PASS,
    });
    // Send lead details to Avanflix
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "reachus@avanflix.com",
      subject: `New Contact Form Submission - ${brandName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>brandName:</strong> ${brandName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Location:</strong> ${location}</p>
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

  }
  catch (error) {
    console.error("Email Error:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
        code: error.code,
        response: error.response,
        command: error.command,
      },
      { status: 500 }
    );
  }
}