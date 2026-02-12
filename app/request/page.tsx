import type { Metadata } from 'next'
import { RequestForm } from '@/components/request-form'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Begin a Conversation | Chava Floryn',
  description: 'A short assessment to determine fit for a time-bound private intervention.',
}

export default function RequestPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Begin a Conversation
          </h1>
          <p className="mt-4 text-base text-[#5A5852] sm:text-lg">
            A short assessment to determine fit for a time-bound private intervention.
          </p>
          <p className="mt-4 text-sm text-[#7A776F]">
            Referral-based private practice · Limited openings
          </p>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Form */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl">
          <RequestForm />
        </div>
      </section>

      {/* Not therapy callout */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-xl">
          <Alert className="border-[rgba(0,0,0,0.08)] bg-card">
            <Info className="h-4 w-4 text-muted-foreground" />
            <AlertDescription>
              <span className="font-medium text-foreground">Not therapy / Not emergency care.</span>{' '}
              This is strategic intervention work, not clinical treatment. If you need immediate help, please contact local emergency services.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Emergency line */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs text-muted-foreground">
            If you're experiencing an emergency, contact local emergency services.
          </p>
        </div>
      </section>
    </div>
  )
}
