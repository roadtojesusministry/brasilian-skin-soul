"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-forest-200/40">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-circle.png" alt="Brasilian Skin Soul" width={52} height={52} className="rounded-full" />
          <div className="hidden sm:block">
            <p className="font-serif text-forest text-xl font-semibold leading-tight">Brasilian Skin Soul</p>
            <p className="text-xs text-forest-400 tracking-widest uppercase">by Claudia Pieri</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm text-forest-700 hover:text-forest tracking-wide transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/booking"
            className="bg-forest text-cream-100 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
            Book Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-forest" onClick={() => setOpen(!open)}>
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-100 border-t border-forest-200/40 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-forest-700 py-1 text-base">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)}
            className="bg-forest text-cream-100 px-5 py-3 rounded-full text-sm font-medium text-center">
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
