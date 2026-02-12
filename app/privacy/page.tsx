import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Privacy Policy | Chava Floryn',
  description: 'Privacy policy for Chava Floryn\'s private practice website.',
}

export default function PrivacyPage() {
  return (
    <div className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#7A776F]">
          Last updated: January 2026
        </p>

        <Separator className="my-10 bg-[rgba(0,0,0,0.08)]" />

        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              When you submit the Request Consideration form, we collect the following information: your name, email address, responses to screening questions, and any additional context you choose to provide. This information is submitted voluntarily and is necessary to assess fit for potential engagement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              Your information is used solely to contact you regarding your inquiry and to assess whether there is a potential fit for working together. We do not use your information for marketing purposes, and we do not share, sell, or rent your personal data to third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Data Retention
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              Form submissions are retained only as long as necessary to respond to your inquiry. If no engagement occurs, your data is deleted. If you become a client, information is handled according to separate confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Cookies
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              This website uses minimal, essential cookies required for basic functionality. We do not use advertising cookies, tracking pixels, or third-party analytics that identify individual users.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              For questions about this privacy policy or to request deletion of your data, please contact:{' '}
              <a href="mailto:privacy@chavafloryn.com" className="text-primary hover:text-[#5C6D7E] transition-colors">
                privacy@chavafloryn.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
