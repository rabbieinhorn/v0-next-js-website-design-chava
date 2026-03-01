import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react' // Import ArrowRight component

const rightTimeCards = [
  {
    title: 'A life-defining decision',
    description: 'When the stakes are too high for pattern-based reasoning.',
  },
  {
    title: 'Pattern repetition under pressure',
    description: 'The same outcome keeps appearing despite your best efforts.',
  },
  {
    title: 'Private instability, public responsibility',
    description: 'Maintaining performance while managing internal disruption.',
  },
  {
    title: 'Transition: relationship, leadership, identity',
    description: 'Navigating fundamental shifts without losing structural integrity.',
  },
]

const changesColumns = [
  {
    title: 'Stabilized emotional baseline',
    points: [
      'Reduced reactivity under pressure',
      'Consistent access to clarity',
      'Nervous system regulation',
    ],
  },
  {
    title: 'Clean decision-making',
    points: [
      'Separation of pattern from preference',
      'Capacity to hold complexity',
      'Confidence without rigidity',
    ],
  },
  {
    title: 'Durable boundaries and follow-through',
    points: [
      'Commitments that hold',
      'Sustainable personal protocols',
      'Reduced negotiation fatigue',
    ],
  },
]

const timelineSteps = [
  {
    step: '01',
    title: 'Intake + Baseline',
    description: 'Comprehensive assessment and orientation.',
  },
  {
    step: '02',
    title: 'Intervention Sessions',
    description: 'Four focused sessions over the engagement period.',
  },
  {
    step: '03',
    title: 'Daily Regulation Protocols',
    description: 'Structured practices for sustained regulation.',
  },
  {
    step: '04',
    title: 'Integration + Next Steps',
    description: 'Consolidation and sustainable transition.',
  },
]

const selectedWork = [
  {
    title: 'Book',
    subtitle: "Everything's Gonna Be Okay: How to Nurture Yourself During a Storm",
    description: 'For leaders making consequential decisions in uncertain times, this book reveals how to recognize internal patterns, regulate pressure, and lead with clarity when it matters most.',
    href: 'https://www.amazon.com/Everythings-Going-Be-Okay-Yourself-ebook/dp/B0BWF3KTD1',
    aspectRatio: 'aspect-[2/3]',
    cta: 'Read',
  },
  {
    title: 'Video',
    subtitle: '',
    description: 'An intimate look at the methodology behind pattern interruption and decision stabilization.',
    href: '/media',
    aspectRatio: 'aspect-video',
    cta: 'Watch',
  },
  {
    title: 'Podcast',
    subtitle: 'The Nurture Series',
    description: 'Short conversations and reflections on regulation, resilience, and pattern interruption.',
    href: '/media',
    aspectRatio: 'aspect-square',
    cta: 'Listen',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1A1D24] text-white">
        {/* Top bar: DECISION STABILIST */}
        <div className="px-6 pt-12 pb-6 md:pt-16 md:pb-8">
          <p className="text-center font-sans text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
            Decision<br />Stabilist
          </p>
        </div>

        {/* Main hero content */}
        <div className="border-t border-white/10 px-6 py-10 md:py-14">
          <div className="mx-auto max-w-6xl">
            {/* Top row: Available Via Zoom + tagline */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-12 mb-10 md:mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70 shrink-0">
                Available Via Zoom
              </span>
              <p className="font-serif text-lg md:text-xl text-white/80 italic">
                Irreversible Decisions Require Internal Stability.
              </p>
            </div>

            {/* Name + Portrait */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight text-white uppercase">
                Chava<br />Floryn
              </h1>
              <div className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-[320px] overflow-hidden shrink-0">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Professional portrait of Chava Floryn"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Purple accent line */}
        <div className="h-[3px] bg-[#8B5CF6]" />

        {/* Description + CTA area */}
        <div className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-xl md:text-2xl lg:text-[1.7rem] leading-relaxed text-white/85">
              Chava works privately with high-performing leaders at strategic inflection points — stabilizing decision-making under pressure through compressed, high-intensity intervention.
            </p>

            {/* Glass button */}
            <div className="mt-10 md:mt-12">
              <Link
                href="/request"
                className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30"
              >
                Request Qualification Assessment
              </Link>
            </div>

            {/* Tagline */}
            <p className="mt-14 md:mt-16 text-lg md:text-xl font-bold tracking-wide text-white">
              Selective. Discreet. Limited Capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-16 border-t border-border" />

      {/* When this is the right time */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            When this is the right time
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {rightTimeCards.map((card) => (
              <div 
                key={card.title} 
                className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-card px-6 py-6 transition-colors duration-200 hover:border-[rgba(0,0,0,0.12)]"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#7A776F]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-16 border-t border-border" />

      {/* What changes in four weeks */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[rgba(255,255,255,0.12)] bg-primary px-6 py-10 sm:px-10 md:px-12 md:py-12">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-primary-foreground sm:text-4xl md:text-[2.5rem] text-center">
            What changes in four weeks
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {changesColumns.map((column) => (
              <div 
                key={column.title} 
                className="rounded-xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.1)] px-5 py-6 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.15)]"
              >
                <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.8)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-foreground" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-16 border-t border-border" />

      {/* The Engagement Arc */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            The Engagement Arc
          </h2>
          <div className="mt-16 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.08)]" aria-hidden="true" />
            
            <div className="space-y-10">
              {timelineSteps.map((step, index) => (
                <div key={step.step} className="relative flex items-start gap-8 pl-12">
                  {/* Step number aligned to the line */}
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center">
                    <span className="font-mono text-xs font-medium text-[#7A776F]">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#7A776F]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-16 border-t border-border" />

      {/* A private practice */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            A private practice
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#5A5852]">
            A limited-volume practice ensuring depth, availability, and absolute confidentiality.
          </p>
          <div className="mt-8 rounded-lg border border-[rgba(0,0,0,0.08)] bg-card px-6 py-4">
            <p className="text-sm text-[#5A5852]">
              Not therapy. Not crisis psychiatry. Not for active addiction.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-16 border-t border-border" />

      {/* Selected work */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Selected work
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {selectedWork.map((work) => (
              <div key={work.title} className="flex flex-col">
                {/* Thumbnail placeholder */}
                <div className={`${work.aspectRatio} w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-secondary overflow-hidden`}>
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-xs text-[#7A776F] font-mono uppercase tracking-wider">
                      {work.title}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-foreground uppercase tracking-wide">
                  {work.title}
                </h3>
                {work.subtitle && (
                  <p className="mt-1 font-serif text-base text-foreground">
                    {work.subtitle}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-[#7A776F]">
                  {work.description}
                </p>
                {work.href.startsWith('http') ? (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm text-[#5A5852] hover:text-foreground transition-colors"
                  >
                    {work.cta}
                  </a>
                ) : (
                  <Link
                    href={work.href}
                    className="mt-3 text-sm text-[#5A5852] hover:text-foreground transition-colors"
                  >
                    {work.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="border-t border-[rgba(0,0,0,0.08)] bg-secondary px-6 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            If you've outgrown the pattern, you don't need more information, you need intervention.
          </h2>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/request">Begin a Conversation</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Investment shared upon acceptance. Engagements begin at $15,000.
          </p>
        </div>
      </section>
    </div>
  )
}
