import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Check, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Private Work | Chava Floryn',
  description: 'Confidential, time-bound intervention for leaders navigating high-stakes transitions.',
}

const intensiveIncludes = [
  '4 private sessions (Zoom)',
  'Baseline assessment + goal definition',
  'Daily regulation protocol (5–15 minutes/day)',
  'Business-hours messaging support (Mon–Fri, 9am–1pm)',
  'Integration plan after each session',
]

const whoThisIsFor = [
  'Executives and founders under real decision pressure',
  'High-functioning leaders repeating a costly pattern',
  'People willing to do daily work between sessions',
  'People who value discretion and speed',
  'Those navigating transition: relationship, leadership, identity',
  'Leaders who need intervention, not information',
]

const whoThisIsNotFor = [
  'Active addiction',
  'Acute psychiatric instability requiring immediate clinical care',
  'People seeking fantasy or validation',
  'People unwilling to self-reflect or do daily practice',
]

const faqItems = [
  {
    question: 'Is this therapy?',
    answer: 'No. This is not therapy, and I am not acting as your therapist. This is strategic intervention work focused on pattern recognition, emotional regulation, and decision-making under pressure.',
  },
  {
    question: 'Do you work with couples?',
    answer: 'Case-by-case. If both parties are committed to the work and the presenting issue fits my methodology, I may consider it. Most engagements are individual.',
  },
  {
    question: 'Do you guarantee outcomes?',
    answer: 'No guarantees. What I offer is high accountability, direct feedback, and a structured process. Results depend on your willingness to engage fully with the work.',
  },
  {
    question: 'How do we start?',
    answer: 'Request consideration through the form. If there appears to be fit, I\'ll schedule a brief assessment call. If accepted, we begin within 1–2 weeks.',
  },
]

export default function PrivateWorkPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Private Work
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#5A5852] sm:text-lg">
            Confidential, time-bound intervention for leaders navigating high-stakes transitions.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/request">Request Consideration</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-[#7A776F]">
            Engagements begin at $15,000 · Limited openings
          </p>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Offer Cards */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Decision Stabilization Intensive */}
            <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card p-6 transition-colors duration-200 hover:border-[rgba(0,0,0,0.12)]">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                The Decision Stabilization Intensive
              </h3>
              <p className="mt-1 text-sm text-[#7A776F]">4 Weeks / Virtual</p>
              <div className="mt-6 space-y-6">
                <ul className="space-y-3">
                  {intensiveIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.7] text-[#5A5852]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Separator className="bg-[rgba(0,0,0,0.08)]" />
                <div>
                  <p className="text-sm font-medium text-foreground">Outcomes</p>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#7A776F]">
                    Pattern interruption, emotional regulation, decision clarity.
                  </p>
                </div>
                <p className="text-xs text-[#7A776F] italic">
                  Designed to build self-reliance, not dependency.
                </p>
              </div>
            </div>

            {/* In-Person Intensive */}
            <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card p-6 transition-colors duration-200 hover:border-[rgba(0,0,0,0.12)]">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Private In-Person Intensive
              </h3>
              <p className="mt-1 text-sm text-[#7A776F]">By Invitation</p>
              <div className="mt-6 space-y-6">
                <p className="text-[13px] leading-[1.7] text-[#5A5852]">
                  A personal retreat container for complex transitions. This format is reserved for situations requiring deeper immersion and physical presence.
                </p>
                <p className="text-[13px] leading-[1.7] text-[#5A5852]">
                  In-person intensives are structured around your specific circumstances and may include extended sessions, environmental assessment, and real-time intervention.
                </p>
                <Separator className="bg-[rgba(0,0,0,0.08)]" />
                <p className="text-sm font-medium text-foreground">
                  In-person intensives begin at $25,000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Who this is for */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Who this is for
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {whoThisIsFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.7] text-[#5A5852]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Who this is not for */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Who this is not for
          </h2>
          <ul className="mt-10 space-y-3">
            {whoThisIsNotFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.7] text-[#7A776F]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(0,0,0,0.20)]" />
                {item}
              </li>
            ))}
          </ul>
          <Alert className="mt-8 border-[rgba(0,0,0,0.08)] bg-card">
            <Info className="h-4 w-4 text-muted-foreground" />
            <AlertDescription>
              If you need clinical treatment, I will refer you to appropriate care.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* What the process feels like */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            What the process feels like
          </h2>
          <div className="mt-10 space-y-6">
            <p className="text-base leading-relaxed text-[#5A5852]">
              <span className="font-medium text-foreground">We locate the root pattern.</span>{' '}
              Beneath the presenting issue—whether it's a decision, a relationship, or a leadership challenge—there is usually a deeper structure driving the repetition. We find it.
            </p>
            <p className="text-base leading-relaxed text-[#5A5852]">
              <span className="font-medium text-foreground">We stabilize the nervous system response under load.</span>{' '}
              High-stakes moments trigger predictable responses. Through targeted protocols, we build your capacity to remain regulated when it matters most.
            </p>
            <p className="text-base leading-relaxed text-[#5A5852]">
              <span className="font-medium text-foreground">We install new decision behavior and boundaries.</span>{' '}
              Insight without action is entertainment. The work is complete when new patterns are durable—held not by willpower, but by restructured internal architecture.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-[rgba(0,0,0,0.08)]">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5852]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[rgba(0,0,0,0.08)] bg-secondary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Begin the process
          </h2>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/request">Request Consideration</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-[#7A776F]">
            Confidential. Selective. Time-bound.
          </p>
        </div>
      </section>
    </div>
  )
}
