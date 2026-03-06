import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const inflectionLabels: Record<string, string> = {
  'new-role': 'Stepping into a new role',
  'team-conflict': 'Navigating conflict with a team member or partner',
  'decision-crossroads': 'Facing a critical decision at a crossroads',
  'growth-block': 'Feeling blocked despite outward success',
  'other': 'Other',
}

export async function POST(request: Request) {
  // Check for API key first
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.error('[v0] RESEND_API_KEY environment variable is not set')
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )
  }

  // Initialize Resend with verified API key
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

    const inflectionLabel = inflectionLabels[inflectionPoint] || inflectionPoint

    const emailContent = `
New Coaching Request

Personal Information:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Role/Title: ${roleTitle}
- Company/Industry: ${companyIndustry}

Coaching Context:
- Current Inflection Point: ${inflectionLabel}
- Most Urgent Decision: ${urgentDecision}
- Repeating Pattern: ${repeatingPattern}
- How they found you: ${referralSource || 'Not provided'}

Acknowledgments:
- Budget Acknowledged: ${budgetAcknowledgement ? 'Yes' : 'No'}
- Currently under psychiatrist care: ${psychiatristCare === 'yes' ? 'Yes' : psychiatristCare === 'no' ? 'No' : 'Not specified'}
- Willing to practice between sessions: ${willingToPractice === 'yes' ? 'Yes' : willingToPractice === 'no' ? 'No' : 'Not specified'}
    `.trim()

    const { error } = await resend.emails.send({
      from: 'Coaching Request <onboarding@resend.dev>',
      to: ['chavafloryn@gmail.com'],
      subject: `New Coaching Request from ${fullName}`,
      text: emailContent,
    })

    if (error) {
      console.error('[v0] Resend API error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[v0] Email send exception:', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
