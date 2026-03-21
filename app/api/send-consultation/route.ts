import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, company, service, message } = body

        // Check for environment variables
        const { SMTP_EMAIL, SMTP_PASSWORD, RECEIVER_EMAIL } = process.env

        if (!SMTP_EMAIL || !SMTP_PASSWORD) {
            console.error('SMTP variables not set.')
            return NextResponse.json(
                { error: 'Email configuration is missing on the server.' },
                { status: 500 }
            )
        }

        // Create the transporter configured for Microsoft 365 (Outlook)
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, // TLS requires secure false
            requireTLS: true,
            auth: {
                user: SMTP_EMAIL,
                pass: SMTP_PASSWORD,
            },
        })

        // Email layout
        const receivingEmail = RECEIVER_EMAIL || SMTP_EMAIL
        
        const mailOptions = {
            from: `Consultation Form <${SMTP_EMAIL}>`,
            to: receivingEmail,
            subject: `New ${service} Consultation Request from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #0d9488;">New Consultation Request</h2>
                    <p>You have received a new consultation inquiry from your website.</p>
                    <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 10px;">
                        <tr><td style="padding: 10px; border: 1px solid #e2e8f0; background-color: #f8fafc; font-weight: bold; width: 140px;">Service Required:</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${service}</td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #e2e8f0; background-color: #f8fafc; font-weight: bold;">Name:</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${name}</td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #e2e8f0; background-color: #f8fafc; font-weight: bold;">Email:</td><td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #e2e8f0; background-color: #f8fafc; font-weight: bold;">Phone:</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${phone || 'Not provided'}</td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #e2e8f0; background-color: #f8fafc; font-weight: bold;">Company:</td><td style="padding: 10px; border: 1px solid #e2e8f0;">${company || 'Not provided'}</td></tr>
                    </table>
                    <h3 style="margin-top: 25px; color: #0d9488;">Message:</h3>
                    <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #0d9488; white-space: pre-wrap; margin-top: 10px;">${message || 'No additional message.'}</div>
                </div>
            `,
        }

        // Send the email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Consultation request sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing consultation request with Nodemailer:', error)
        return NextResponse.json(
            { error: 'Failed to send consultation request' },
            { status: 500 }
        )
    }
}
