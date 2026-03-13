"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang, type Lang } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const T = translations[lang].nav;

  const links = [
    { label: T.home,     href: "/" },
    { label: T.services, href: "/services" },
    { label: T.blog,     href: "/blog" },
    { label: T.about,    href: "/about" },
    { label: T.contact,  href: "/contact" },
  ];

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
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm text-forest-700 hover:text-forest tracking-wide transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/booking"
            className="bg-forest text-cream-100 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
            {T.bookNow}
          </Link>
          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {(['en', 'es', 'pt'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs px-2 py-1 rounded-full transition-colors ${
                  lang === l
                    ? 'bg-[#C9A96E] text-[#1B4D2E] font-semibold'
                    : 'text-[#42825e] hover:text-[#1B4D2E]'
                }`}
              >
                {l === 'en' ? '🇺🇸' : l === 'es' ? '🇪🇸' : '🇧🇷'}
              </button>
            ))}
          </div>
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
            {T.bookNow}
          </Link>
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-1">
            {(['en', 'es', 'pt'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false); }}
                className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                  lang === l
                    ? 'bg-[#C9A96E] text-[#1B4D2E] font-semibold'
                    : 'text-[#42825e] border border-[#c2daca] hover:text-[#1B4D2E]'
                }`}
              >
                {l === 'en' ? '🇺🇸 EN' : l === 'es' ? '🇪🇸 ES' : '🇧🇷 PT'}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
