import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ExternalLink, Play, Headphones, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media | Chava Floryn',
  description: 'Selected work and appearances from Chava Floryn.',
}

const podcastEpisodes = [
  {
    title: 'How Resistant Thinking Can Nurture You',
    description: 'A practical look at resistance, how it shows up in the body, and what it reveals about the pattern underneath.',
  },
  {
    title: 'The Art of Surrender',
    description: 'A short reflection and guided close that cultivates steadiness when facing difficulty.',
  },
  {
    title: 'Authenticity (Lessons from Dr. Gabor Maté and Alice Miller)',
    description: 'A reflection on authenticity as a daily practice, and what changes when you stop self-censoring under pressure.',
  },
]

export default function MediaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Media
          </h1>
          <p className="mt-4 text-base text-[#5A5852] sm:text-lg">
            Selected work and appearances.
          </p>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Book */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl uppercase tracking-wide">
            Book
          </h2>
          <div className="mt-8 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <img 
                src="/images/book-cover.jpg" 
                alt="Everything's Gonna Be Okay book cover by Chava Floryn"
                className="aspect-[2/3] w-32 shrink-0 rounded-lg border border-[rgba(0,0,0,0.08)] object-cover"
              />
              <div className="flex flex-col">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Everything's Gonna Be Okay: How to Nurture Yourself During a Storm
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#5A5852]">
                  For leaders navigating uncertainty, this book explores how to recognize internal patterns, regulate pressure, and lead with clarity when it matters most.
                </p>
                <div className="mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#5A5852] hover:text-foreground transition-colors">
                    View
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Podcast */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl uppercase tracking-wide">
            Selected Podcast Episodes
          </h2>
          <ul className="mt-8 divide-y divide-[rgba(0,0,0,0.08)]">
            {podcastEpisodes.map((episode) => (
              <li key={episode.title} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium text-foreground">{episode.title}</p>
                  <p className="mt-1 text-[13px] text-[#7A776F]">{episode.description}</p>
                </div>
                <a
                  href="#"
                  className="flex shrink-0 items-center gap-1 text-sm text-[#5A5852] hover:text-foreground transition-colors"
                >
                  <Headphones className="h-3.5 w-3.5" />
                  Listen
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Separator className="mx-auto w-16 bg-[rgba(0,0,0,0.08)]" />

      {/* Selected Interviews */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl uppercase tracking-wide">
            Selected Interviews
          </h2>
          <p className="mt-4 text-[13px] leading-[1.7] text-[#5A5852]">
            A small selection of interviews on resilience, regulation, and decision-making under pressure.
          </p>
          
          <div className="mt-8 space-y-6">
            {/* Interview 1 */}
            <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card overflow-hidden">
              <div className="aspect-video w-full bg-secondary flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)]">
                  <Play className="h-5 w-5 text-[#7A776F]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Remember to Nurture Yourself (Bounce Back)
                </h3>
                <div className="mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#5A5852] hover:text-foreground transition-colors">
                    Watch
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Interview 2 */}
            <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card overflow-hidden">
              <div className="aspect-video w-full bg-secondary flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)]">
                  <Play className="h-5 w-5 text-[#7A776F]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Interview
                </h3>
                <div className="mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#5A5852] hover:text-foreground transition-colors">
                    Watch
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <Alert className="border-[rgba(0,0,0,0.08)] bg-card">
            <Info className="h-4 w-4 text-muted-foreground" />
            <AlertDescription>
              Note: Chava's private work is referral-based and separate from public media.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
