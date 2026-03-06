import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const inflectionLabels: Record<string, string> = {
  'leadership-transition': 'Leadership Transition',
  'team-dynamics': 'Team Dynamics',
  'growth-plateau': 'Growth Plateau',
  'merger-integration': 'Merger/Integration',
  'personal-crossroads': 'Personal Crossroads',
  'other': 'Other',
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured. RESEND_API_KEY is missing.' },
      { status: 500 }
    )
  }
  
  const resend = new Resend(apiKey)
  
  try {
    const body = await request.json()

    const {
      fullName,
      email,
      phone,
      roleTitle,
      companyIndustry,
      inflectionPoint,
      urgentDecision,
      repeatingPattern,
      referralSource,
      budgetAcknowledgement,
      psychiatristCare,
      willingToPractice,
    } = body

    const { data, error } = await resend.emails.send({
      from: 'Chava Floryn <onboarding@resend.dev>',
      to: ['chavatombosky@gmail.com'],
      subject: `New Consultation Request from ${fullName}`,
      html: `
        <h2>New Consultation Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Role/Title:</strong> ${roleTitle}</p>
        <p><strong>Company/Industry:</strong> ${companyIndustry}</p>
        
        <h3>Situation Details</h3>
        <p><strong>Inflection Point:</strong> ${inflectionLabels[inflectionPoint] || inflectionPoint}</p>
        <p><strong>Urgent Decision:</strong> ${urgentDecision}</p>
        <p><strong>Repeating Pattern:</strong> ${repeatingPattern}</p>
        
        <h3>Additional Information</h3>
        <p><strong>Referral Source:</strong> ${referralSource || 'Not provided'}</p>
        <p><strong>Budget Acknowledged:</strong> ${budgetAcknowledgement ? 'Yes' : 'No'}</p>
        <p><strong>Open to Psychiatrist Care:</strong> ${psychiatristCare === 'yes' ? 'Yes' : psychiatristCare === 'no' ? 'No' : 'Not specified'}</p>
        <p><strong>Willing to Practice:</strong> ${willingToPractice === 'yes' ? 'Yes' : willingToPractice === 'no' ? 'No' : 'Not specified'}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    )
  }
}
