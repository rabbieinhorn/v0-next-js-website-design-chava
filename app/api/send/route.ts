import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Force rebuild: 2026-03-05
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY is not set. Available env vars:', Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('API')))
    return NextResponse.json(
      { error: 'Email service not configured. Please contact the site administrator.' },
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
      psychiatristCare,
      willingToPractice,
      referralSource,
    } = body

    const inflectionLabels: Record<string, string> = {
      leadership: 'Leadership transition / role change',
      relationship: 'Relationship / family decision',
      business: 'Business scale / exit / high-stakes decision',
      burnout: 'Burnout / chronic stress pattern',
      other: 'Other',
    }

    const { error } = await resend.emails.send({
      from: 'Chava Floryn Website <onboarding@resend.dev>',
      to: ['chavafloryn@gmail.com'],
      subject: `New Engagement Request from ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3B3A36;">
          <h2 style="color: #4A4843; border-bottom: 1px solid #e0dcd6; padding-bottom: 12px;">
            New Engagement Request
          </h2>

          <h3 style="color: #4A4843; margin-top: 24px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top; width: 160px;">Name</td>
              <td style="padding: 6px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Email</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #4A4843;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Phone</td>
              <td style="padding: 6px 0;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Role / Title</td>
              <td style="padding: 6px 0;">${roleTitle}</td>
            </tr>
            ${companyIndustry ? `<tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Company / Industry</td>
              <td style="padding: 6px 0;">${companyIndustry}</td>
            </tr>` : ''}
          </table>

          <h3 style="color: #4A4843; margin-top: 24px;">Situation Assessment</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top; width: 160px;">Inflection Point</td>
              <td style="padding: 6px 0;">${inflectionLabels[inflectionPoint] || inflectionPoint}</td>
            </tr>
          </table>

          <p style="margin-top: 16px;"><strong>What decision feels most urgent right now?</strong></p>
          <p style="background: #f7f4ef; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${urgentDecision}</p>

          <p style="margin-top: 16px;"><strong>What pattern keeps repeating?</strong></p>
          <p style="background: #f7f4ef; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${repeatingPattern}</p>

          <h3 style="color: #4A4843; margin-top: 24px;">Screening</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top; width: 280px;">Under psychiatrist / addiction care?</td>
              <td style="padding: 6px 0;">${psychiatristCare === 'yes' ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Willing to do daily practice?</td>
              <td style="padding: 6px 0;">${willingToPractice === 'yes' ? 'Yes' : 'No'}</td>
            </tr>
          </table>

          <h3 style="color: #4A4843; margin-top: 24px;">Referral</h3>
          <p>${referralSource}</p>

          <hr style="border: none; border-top: 1px solid #e0dcd6; margin-top: 32px;" />
          <p style="font-size: 12px; color: #7A776F; margin-top: 12px;">
            Budget acknowledged: $15,000 minimum. Reply directly to this email to respond to ${fullName}.
          </p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
