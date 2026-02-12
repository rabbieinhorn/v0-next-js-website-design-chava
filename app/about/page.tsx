import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Chava Floryn',
  description: 'A private practice built for high-stakes moments. Learn more about Chava Floryn.',
}

const principles = [
  {
    title: 'Discretion',
    description: 'Every engagement is held in complete confidence. Privacy is non-negotiable.',
  },
  {
    title: 'Precision',
    description: 'We locate the root structure quickly and intervene with surgical accuracy.',
  },
  {
    title: 'Self-reliance',
    description: 'The goal is durable change—not ongoing dependency.',
  },
  {
    title: 'Speed with structure',
    description: 'Time-bound containers that move fast without sacrificing depth.',
  },
]

const selectedWork = [
  { title: 'Book', description: 'On pattern recognition and executive decision-making' },
  { title: 'Podcast', description: 'Conversations on leadership and internal operating systems' },
  { title: 'Documentary', description: 'An intimate look at the work and its methodology' },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
                About Chava
              </h1>
              <p className="mt-4 text-base text-[#5A5852] sm:text-lg">
                A private practice built for high-stakes moments.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.08)]">
                <Image
                  src="/images/about.jpg"
                  alt="Chava Floryn portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Bio */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-base leading-relaxed text-[#5A5852] sm:text-lg sm:leading-relaxed">
            Chava Floryn is a confidential transformational performance coach to ultra-high-net-worth founders, CEOs, and senior leaders navigating moments of significant personal, professional, or existential inflection. Formerly the Senior Wellness Advisor at Centner Wellness Center and community leader for 25 plus years, she has worked with thousands of people in her career. Her work is centered on stabilizing the internal operating system, interrupting entrenched patterns, regulating pressure at the nervous-system level, and restoring executive clarity when the cost of misalignment is high.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#5A5852] sm:text-lg sm:leading-relaxed">
            Known for rapid diagnostic insight and surgical intervention, Chava identifies root dynamics with speed and precision, enabling leaders to make consequential decisions from coherence rather than force. She maintains a highly selective, referral-only practice and works in short, intensive engagements designed to produce durable internal realignment, without dependency, visibility, or unnecessary process.
          </p>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Principles */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Principles
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <div 
                key={principle.title} 
                className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-card px-6 py-6 transition-colors duration-200 hover:border-[rgba(0,0,0,0.12)]"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#7A776F]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Selected Work */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Selected Work
          </h2>
          <ul className="mt-10 space-y-4">
            {selectedWork.map((work) => (
              <li key={work.title}>
                <Link
                  href="/media"
                  className="group flex items-center justify-between border-b border-[rgba(0,0,0,0.08)] py-4 transition-colors hover:border-[rgba(0,0,0,0.18)]"
                >
                  <div>
                    <p className="font-medium text-foreground">{work.title}</p>
                    <p className="mt-1 text-[13px] text-[#7A776F]">{work.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#7A776F] transition-colors group-hover:text-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(0,0,0,0.08)] bg-secondary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Button asChild size="lg">
            <Link href="/request">Request Consideration</Link>
          </Button>
          <p className="mt-4 text-sm text-[#7A776F]">
            Referral-based private practice · Limited openings
          </p>
        </div>
      </section>
    </div>
  )
}
