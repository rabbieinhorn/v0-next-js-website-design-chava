'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/private-work', label: 'Engagements' },
  { href: '/about', label: 'About' },
  { href: '/media', label: 'Media' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(0,0,0,0.08)] bg-[#F7F4EF]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <Image
            src="/images/cf-logo.png"
            alt="Chava Floryn monogram"
            width={60}
            height={60}
            className="h-[30px] w-[30px] object-contain"
          />
          <span className="font-serif text-[15px] font-normal tracking-tight text-foreground">
            Chava Floryn
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-foreground',
                pathname === item.href
                  ? 'text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-foreground/40'
                  : 'text-[#2e2a26]'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request"
            className="ml-2 inline-block rounded-[4px] bg-[#3a3530] px-5 py-2 font-serif text-xs font-medium uppercase tracking-[0.2em] text-[#f3f0ea] transition-colors hover:bg-[#5a5550]"
          >
            Begin a Conversation
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <SheetHeader className="text-left">
              <SheetTitle className="font-serif text-lg font-medium">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-base font-medium transition-colors hover:text-foreground',
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link
                  href="/request"
                  className="mt-4 block w-full rounded-[4px] bg-[#3a3530] px-5 py-3 text-center font-serif text-xs font-medium uppercase tracking-[0.2em] text-[#f3f0ea] transition-colors hover:bg-[#5a5550]"
                >
                  Begin a Conversation
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
