import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

// Validate email configuration
const emailConfig = z.object({
  EMAIL_ID: z.string().email(),
  EMAIL_PASSWORD: z.string().min(1)
}).safeParse({
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
});

// Validate request body schema
const QuoteItemSchema = z.object({
  type: z.string(),
  description: z.string(),
  price: z.number()
});

const RequestSchema = z.object({
  email: z.string().email(),
  items: z.array(QuoteItemSchema),
  total: z.string()
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate email configuration
    if (!emailConfig.success) {
      throw new Error('Invalid email configuration. Please check EMAIL_ID and EMAIL_PASSWORD in .env file.');
    }

    // Validate request body
    const body = await request.json();
    const validatedData = RequestSchema.safeParse(body);
    
    if (!validatedData.success) {
      throw new Error('Invalid request data: ' + validatedData.error.message);
    }

    const { email, items, total } = validatedData.data;

    // Create transporter with validated config
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailConfig.data.EMAIL_ID,
        pass: emailConfig.data.EMAIL_PASSWORD
      }
    });

    // Create email content with proper typing
    const emailContent = `
      <h2>Your Quote Details</h2>
      <div style="margin-bottom: 20px;">
        ${items.map(item => `
          <div style="margin: 10px 0; padding: 10px; background-color: #f8f9fa; border-radius: 4px;">
            <div style="font-weight: bold;">${item.type}</div>
            <div>${item.description}</div>
            <div style="color: #666;">Price: $${item.price.toFixed(2)}</div>
          </div>
        `).join('')}
        <div style="margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd;">
          <strong>Total: ${total}</strong>
        </div>
      </div>
    `;

    // Verify SMTP connection
    await transporter.verify();

    // Send email with proper error handling
    const info = await transporter.sendMail({
      from: `"Quote Builder" <${emailConfig.data.EMAIL_ID}>`,
      to: email,
      subject: 'Your Quote Details',
      html: emailContent,
    });

    console.log('Email sent successfully:', info.messageId);

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: info.messageId 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check your email credentials.';
      } else if (error.message.includes('configuration')) {
        errorMessage = error.message;
      } else {
        errorMessage = `Email sending failed: ${error.message}`;
      }
    }

    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};