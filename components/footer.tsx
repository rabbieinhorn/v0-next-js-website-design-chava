import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Copyright */}
          <p className="text-sm text-[#5A5852]">
            &copy; {currentYear} Chava Floryn
          </p>

          {/* Tagline */}
          <p className="text-sm text-[#7A776F]">
            Referral-based private practice · Limited openings
          </p>

          {/* Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <Link
              href="/privacy"
              className="text-sm text-[#5A5852] transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#5A5852] transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
