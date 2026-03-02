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
      <section className="relative bg-[#4A4843] text-white dark-focus">
        {/* Main hero content */}
        <div className="px-5 py-8 sm:px-6 md:py-14">
          <div className="mx-auto max-w-6xl">
            {/* Name + Portrait */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
              <div>
                {/* Tagline */}
                <p className="font-serif text-base sm:text-lg text-white/85 italic mb-3 md:mb-4">
                  Irreversible Decisions Require Internal Stability.
                </p>
                <h1 className="font-serif text-[2.75rem] leading-[0.9] sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white uppercase">
                  Chava<br />Floryn
                </h1>
              </div>
              <div className="relative aspect-[4/5] w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] overflow-hidden shrink-0 isolate">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Chava Floryn, private practice therapist, seated in white suit"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description + CTA area */}
        <div className="px-5 py-10 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-[1.7rem] leading-relaxed text-white/95">
              Chava works privately with high-performing leaders at strategic inflection points — stabilizing decision-making under pressure through compressed, high-intensity intervention.
            </p>

            {/* CTA button */}
            <div className="mt-8 md:mt-12">
              <Link
                href="/request"
                aria-label="Begin a conversation with Chava Floryn"
                className="inline-block rounded-[3px] bg-[#f0ece4] px-10 py-4 font-serif text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.2em] text-[#2e2b28] transition-colors hover:bg-[#2e2b28] hover:text-[#f0ece4] dark-focus-ring"
              >
                Begin a Conversation
              </Link>
              <p className="mt-3 font-serif text-[11px] italic text-white/60" aria-hidden="true">
                Engagements begin with a qualification assessment.
              </p>
            </div>

            {/* Tagline */}
            <p className="mt-10 md:mt-16 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-white/70" aria-hidden="true">
              Selective. Discreet. Limited Capacity.
            </p>
          </div>
        </div>

        {/* Ambient detail */}
        <p className="absolute bottom-7 left-8 font-serif text-[10px] uppercase tracking-[0.25em] text-white/45" aria-hidden="true">
          Available via Zoom
        </p>
      </section>

      {/* When this is the right time */}
      <section className="px-5 pt-12 pb-12 sm:px-6 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            When this is the right time
          </h2>
          <div className="mt-8 md:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2">
            {rightTimeCards.map((card) => (
              <div 
                key={card.title} 
                className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-card px-6 py-6 transition-colors duration-200 hover:border-[rgba(0,0,0,0.12)]"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#2e2a26]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmospheric linen texture strip */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image
          src="/images/texture-linen-strip.jpg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#5a5550]/20" />
      </div>

      {/* What changes in four weeks */}
      <section className="px-5 py-12 sm:px-6 md:py-24">
        <div className="dark-focus mx-auto max-w-5xl rounded-2xl border border-[rgba(255,255,255,0.12)] bg-primary px-5 py-8 sm:px-10 md:px-12 md:py-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-primary-foreground sm:text-4xl md:text-[2.5rem] text-center">
            What changes in four weeks
          </h2>
          <div className="mt-8 md:mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
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
                    <li key={point} className="flex items-start gap-3 text-sm text-white/90">
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
      <section className="px-5 py-12 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            The Engagement Arc
          </h2>
          <div className="mt-10 md:mt-16 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.08)]" aria-hidden="true" />
            
            <div className="space-y-10">
              {timelineSteps.map((step, index) => (
                <div key={step.step} className="relative flex items-start gap-8 pl-12">
                  {/* Step number aligned to the line */}
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center">
                    <span className="font-mono text-xs font-medium text-[#2e2a26]">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#2e2a26]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A private practice — with atmospheric interior image */}
      <section className="px-5 py-12 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Left: atmospheric image */}
            <div className="relative h-[280px] md:h-[360px] w-full md:w-[45%] shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/images/atmosphere-interior.jpg"
                alt=""
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#5a5550]/20 rounded-xl" />
            </div>
            {/* Right: text content */}
            <div className="flex-1 md:pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                A private practice
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#2e2a26]">
                A limited-volume practice ensuring depth, availability, and absolute confidentiality.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4">
                <div className="h-px w-[60px] bg-[#5a5550]/30" />
                <p className="font-serif text-lg italic text-[#5a5550] md:text-xl">
                  {'Not therapy \u00B7 Not crisis psychiatry \u00B7 Not for active addiction'}
                </p>
                <div className="h-px w-[60px] bg-[#5a5550]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-16 border-t border-border" />

      {/* Selected work */}
      <section className="relative px-5 py-12 sm:px-6 md:py-24 overflow-hidden">
        {/* Subtle paper grain texture background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <Image
            src="/images/texture-paper-grain.jpg"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-center">
            Selected work
          </h2>
          <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-3">
            {selectedWork.map((work) => (
              <div key={work.title} className="flex flex-col">
                {/* Thumbnail */}
                {work.title === 'Book' ? (
                  <div className={`${work.aspectRatio} w-full rounded-xl bg-[#2e2b28] overflow-hidden flex flex-col items-center justify-center px-6`}>
                    <p className="font-serif text-[14px] leading-snug text-white text-center text-balance">
                      {"Everything's Gonna Be Okay"}
                    </p>
                    <span className="mt-3 block h-px w-8 bg-white/25" />
                    <p className="mt-3 font-serif text-[9px] uppercase tracking-[0.2em] text-white/50">
                      Chava Floryn
                    </p>
                  </div>
                ) : work.title === 'Video' ? (
                  <div className={`${work.aspectRatio} w-full rounded-xl border border-[#d9d4cc] bg-[#f3f0ea] overflow-hidden flex items-center justify-center`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5a5550]/40">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="ml-0.5">
                        <path d="M13 8L1 15V1L13 8Z" fill="#5a5550" fillOpacity="0.6" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className={`${work.aspectRatio} w-full rounded-xl border border-[#d9d4cc] bg-[#f3f0ea] overflow-hidden flex items-center justify-center gap-1`}>
                    <span className="inline-block w-[1.5px] rounded-full bg-[#5a5550]/50" style={{ height: '12px' }} />
                    <span className="inline-block w-[1.5px] rounded-full bg-[#5a5550]/50" style={{ height: '20px' }} />
                    <span className="inline-block w-[1.5px] rounded-full bg-[#5a5550]/50" style={{ height: '28px' }} />
                    <span className="inline-block w-[1.5px] rounded-full bg-[#5a5550]/50" style={{ height: '20px' }} />
                    <span className="inline-block w-[1.5px] rounded-full bg-[#5a5550]/50" style={{ height: '12px' }} />
                  </div>
                )}
                <h3 className="mt-4 font-serif text-lg font-medium text-foreground uppercase tracking-wide">
                  {work.title}
                </h3>
                {work.subtitle && (
                  <p className="mt-1 font-serif text-base text-foreground">
                    {work.subtitle}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-[#2e2a26]">
                  {work.description}
                </p>
                {work.href.startsWith('http') ? (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-serif text-[11px] uppercase tracking-[0.2em] text-[#2e2b28] border-b border-[#2e2b28]/40 pb-px transition-all duration-200 ease-in-out hover:border-[#2e2b28] hover:translate-x-0.5"
                  >
                    {work.cta}
                  </a>
                ) : (
                  <Link
                    href={work.href}
                    className="mt-3 inline-block font-serif text-[11px] uppercase tracking-[0.2em] text-[#2e2b28] border-b border-[#2e2b28]/40 pb-px transition-all duration-200 ease-in-out hover:border-[#2e2b28] hover:translate-x-0.5"
                  >
                    {work.cta}
                  </Link>
                )}
                {(work.title === 'Video' || work.title === 'Podcast') && (
                  <a
                    href="#transcript"
                    className="mt-1.5 inline-block font-serif text-[11px] italic text-[#2e2b28]/50 transition-colors duration-200 hover:text-[#2e2b28]/80"
                  >
                    {work.title === 'Video' ? 'View transcript \u2193' : 'Read transcript \u2193'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="border-t border-[rgba(0,0,0,0.08)] bg-secondary px-5 py-14 sm:px-6 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            If you've outgrown the pattern, you don't need more information, you need intervention.
          </h2>
          <div className="mt-10">
            <Link
              href="/request"
              aria-label="Begin a conversation with Chava Floryn"
              className="inline-block rounded-[4px] bg-[#3a3530] px-8 py-4 font-serif text-sm font-medium uppercase tracking-[0.2em] text-[#f3f0ea] transition-colors hover:bg-[#5a5550]"
            >
              Begin a Conversation
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Investment shared upon acceptance. Engagements begin at $15,000.
          </p>
        </div>
      </section>
    </div>
  )
}
