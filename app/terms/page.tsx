import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Terms of Service | Chava Floryn',
  description: 'Terms of service for Chava Floryn\'s private practice website.',
}

export default function TermsPage() {
  return (
    <div className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-[#7A776F]">
          Last updated: January 2026
        </p>

        <Separator className="my-10 bg-[rgba(0,0,0,0.08)]" />

        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Informational Purpose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              The content on this website is provided for informational purposes only. It does not constitute professional advice, and no guarantees are made regarding outcomes, results, or the applicability of any information to your specific circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Not Therapy or Medical Care
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              The services described on this website are not therapy, counseling, psychiatric treatment, or medical care. Chava Floryn is not acting as a licensed therapist, psychologist, or healthcare provider. If you are experiencing a mental health emergency or require clinical treatment, please contact a qualified healthcare professional or emergency services immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Confidentiality
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              All client engagements are conducted with strict confidentiality. Information shared during the intake process and throughout any engagement is held in confidence and will not be disclosed without explicit consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Right to Refuse Service
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              Acceptance into this practice is at the sole discretion of Chava Floryn. Submission of a Request Consideration form does not guarantee acceptance. The right to decline any inquiry or discontinue any engagement is reserved without obligation to provide a reason.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Payment and Scheduling
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              Payment terms, scheduling, and engagement agreements are communicated directly to accepted clients and are not detailed on this website. All financial and logistical arrangements are finalized after acceptance into the practice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Changes to Terms
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A5852]">
              These terms may be updated from time to time. Continued use of this website constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
