import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Tagline */}
        <p className="text-center text-sm text-[#2e2a26]">
          Referral-based private practice · Limited openings
        </p>

        {/* Contact entry point */}
        <div className="flex justify-center py-6">
          <Link
            href="/request"
            className="group font-serif text-[14px] text-[#2e2b28]/70 transition-colors duration-200 hover:text-[#2e2b28]"
          >
            Begin a Conversation{' '}
            <span className="inline-block transition-transform duration-200 ease-in-out group-hover:translate-x-[3px]">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Copyright + Links */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-[#2e2a26]">
            &copy; {currentYear} Chava Floryn
          </p>
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <Link
              href="/privacy"
              className="text-sm text-[#2e2a26] transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#2e2a26] transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
