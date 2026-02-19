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
    title: 'Nurturing Imperfections',
    description: 'An interview with the Vice President of Marketing at Beacon Health -- one of the nation\'s largest healthcare organizations -- whose leadership is defined by courage, humility, and the ability to integrate lived experience into executive decision-making.',
    href: 'https://open.spotify.com/episode/2rxwmyZvop9X1mMcYxWuuZ?si=CaYAONeTShKBiddBUufzKg',
  },
  {
    title: 'Resistant Thinking',
    description: 'What are you resistant to? Where do you feel it in your body? Examine your resistance and explore the pattern it is trying to help you acknowledge. Invite it in as your companion to becoming more self-aware -- for all awareness leads to the possibility of healing.',
    href: 'https://open.spotify.com/episode/2cZdUIOwRgiNTuB5Gc9U5G?si=VFxWZNasT46L-oE96tKUnQ',
  },
  {
    title: 'Authenticity',
    description: 'Inspired by Dr. Gabor Mat\u00e9\'s "The Myth of Normal" and Alice Miller\'s "The Drama of the Gifted Child," a reflection on how leaning into our authentic selves is a daily practice -- including how using authenticity as a tool prevented a teen suicide.',
    href: 'https://open.spotify.com/episode/5WFOqpTY1KeOxMJxZX9VXE?si=3VBvLEwWQH-XuJWah_PdHQ',
  },
  {
    title: 'How to Heal',
    description: 'Observe your thoughts, then think about better ones. A compiled list of exercises to take the guesswork out of crafting different thoughts -- not about getting it right, but about repeating the practice until thinking good thoughts becomes second nature.',
    href: 'https://open.spotify.com/episode/54SNkHabtid5HIGuH2VnFJ?si=eIC-quaUSMeYwVEb1CEPfA',
  },
  {
    title: 'The Art of Surrender',
    description: 'If you are in need to surrender to a big, difficult thing, get cozy and listen to this episode. Ending with a short meditation aimed at training your muscle memory into the warrior stance of surrender.',
    href: 'https://open.spotify.com/episode/5xJjmBSjpB9oMVhjvZx3q1?si=adtFnZeES-6Xog6f8jDq4g',
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
                  {"Everything's Gonna Be Okay: How to Nurture Yourself During a Storm"}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#5A5852]">
                  {"For leaders making consequential decisions in uncertain times, Everything's Gonna Be Okay reveals how to recognize internal patterns, regulate pressure, and lead with clarity when it matters most."}
                </p>
                <div className="mt-4">
                  <a href="https://www.amazon.com/Everythings-Going-Be-Okay-Yourself-ebook/dp/B0BWF3KTD1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#5A5852] hover:text-foreground transition-colors">
                    View on Amazon
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
                  href={episode.href}
                  target="_blank"
                  rel="noopener noreferrer"
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

      {/* Video */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl uppercase tracking-wide">
            Video
          </h2>
          <p className="mt-4 text-[13px] leading-[1.7] text-[#5A5852]">
            An intimate look at the methodology behind pattern interruption and decision stabilization.
          </p>
          
          <div className="mt-8 space-y-6">
            {/* Interview 1 */}
            <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/hu3bInK9DoE"
                  title="Chava Floryn Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <div className="mt-2">
                  <a href="https://www.youtube.com/watch?v=hu3bInK9DoE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#5A5852] hover:text-foreground transition-colors">
                    Watch on YouTube
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Interview 2 */}
            <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-card overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/tGsfoupiS9w"
                  title="Chava Floryn Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <div className="mt-2">
                  <a href="https://www.youtube.com/watch?v=tGsfoupiS9w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#5A5852] hover:text-foreground transition-colors">
                    Watch on YouTube
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
              Note: Chava{"'"}s private work is referral-based and separate from public media.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
