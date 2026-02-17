import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const rightTimeCards = [
  {
    title: 'Leadership Transition',
    description:
      'You\'re navigating a new role, scaling decision, or organizational shift that demands a different internal operating system.',
  },
  {
    title: 'High-Stakes Decision',
    description:
      'A consequential choice is approaching—exit, restructure, partnership—and you need clarity, not more opinions.',
  },
  {
    title: 'Repeating Pattern',
    description:
      'The same dynamic keeps surfacing across relationships, teams, or decisions—and surface-level fixes haven\'t resolved it.',
  },
  {
    title: 'Burnout / Misalignment',
    description:
      'Success by every external measure, but something fundamental feels off. Energy, drive, or coherence has eroded.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Request',
    description: 'Submit a brief intake form. If it\'s a fit, you\'ll hear back within 2 business days.',
  },
  {
    step: '02',
    title: 'Discovery Call',
    description: 'A confidential conversation to assess alignment and define the engagement scope.',
  },
  {
    step: '03',
    title: 'Engagement',
    description: 'Time-bound, intensive work designed to produce durable internal realignment.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Confidential strategic counsel for leaders at inflection points
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#5A5852] sm:text-lg text-pretty">
            Chava Floryn works with ultra-high-net-worth founders, CEOs, and senior leaders navigating moments of significant personal, professional, or existential transition.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/request">
                Begin a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Right Time Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            The Right Time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#5A5852]">
            This work is designed for a specific moment. You may recognize yourself here.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {rightTimeCards.map((card) => (
              <Card
                key={card.title}
                className="border-[rgba(0,0,0,0.08)] bg-card transition-colors duration-200 hover:border-[rgba(0,0,0,0.12)]"
              >
                <CardContent className="px-6 py-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#7A776F]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Process Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            The Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[#5A5852]">
            Engagements are short, intensive, and designed for durable change.
          </p>
          <div className="mt-12 space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <span className="font-serif text-2xl font-medium text-primary/40">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#7A776F]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(0,0,0,0.08)] bg-secondary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Ready to begin?
          </h2>
          <p className="mt-4 text-[#5A5852]">
            Submit a request and we&apos;ll be in touch if it&apos;s a fit.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/request">
              Request Consideration
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-[#7A776F]">
            Referral-based private practice &middot; Limited openings
          </p>
        </div>
      </section>
    </div>
  )
}
