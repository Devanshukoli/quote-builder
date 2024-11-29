import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, quoteDetails } = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Create email content
    const emailContent = `
      <h2>Your Quote Details</h2>
      <div style="margin-bottom: 20px;">
        ${quoteDetails.items
          .map(
            (item) => `
          <div style="display: flex; justify-content: space-between; margin: 5px 0;">
            <span>${item.name}</span>
            <span>$${item.price}</span>
          </div>
        `
          )
          .join('')}
        <div style="border-top: 1px solid #ccc; margin-top: 10px; padding-top: 10px;">
          <strong>Total: $${quoteDetails.total}</strong>
        </div>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: 'Quote Builder <quote@example.com>',
      to: email,
      subject: 'Your Quote Details',
      html: emailContent,
    });

    console.log('Email sent successfully.');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
