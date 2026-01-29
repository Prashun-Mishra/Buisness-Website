import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, company, service, message } = body

        // Here you would integrate with an email service like Resend, SendGrid, or Nodemailer
        // For now, we'll log the data and return success

        console.log('Consultation Request Received:', {
            name,
            email,
            phone,
            company,
            service,
            message,
            timestamp: new Date().toISOString(),
        })

        // TODO: Replace with actual email sending logic
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY)
        // await resend.emails.send({
        //   from: 'noreply@yourdomain.com',
        //   to: 'owner@yourdomain.com',
        //   subject: `New ${service} Consultation Request from ${name}`,
        //   html: `
        //     <h2>New Consultation Request</h2>
        //     <p><strong>Service:</strong> ${service}</p>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${message}</p>
        //   `,
        // })

        return NextResponse.json(
            { message: 'Consultation request sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing consultation request:', error)
        return NextResponse.json(
            { error: 'Failed to send consultation request' },
            { status: 500 }
        )
    }
}
