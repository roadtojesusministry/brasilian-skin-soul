'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLang();
  const T = translations[lang].about;

  return (
    <>
    <Navbar />
    <div className="bg-cream-100 min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1800&q=80" alt="Spa" fill className="object-cover" />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{T.heroTag}</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-light mb-6">{T.heroTitle}</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">{T.heroSubtitle}</p>
        </div>
      </section>

      {/* Main story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Photo + stats */}
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden h-[560px] shadow-2xl">
              <Image src="/claudia.jpg" alt="Claudia Pieri" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white text-3xl mb-1">Claudia Pieri</p>
                <p className="text-white/70 text-sm tracking-wide">{T.founderTitle}</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "28+", label: T.statsYearsLabel },
                { value: "60+", label: T.statsReviewsLabel },
                { value: "20+", label: T.statsClientsLabel },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 text-center border border-forest-100 shadow-sm">
                  <p className="font-serif text-3xl text-forest font-light">{s.value}</p>
                  <p className="text-xs text-forest-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Story text */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{T.storyTag}</p>
              <h2 className="font-serif text-4xl text-forest font-light italic leading-tight mb-6">
                {T.storyTitle.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
            </div>

            {[T.para1, T.para2, T.para3, T.para4].map((para, i) => (
              <p key={i} className="text-forest-600 leading-relaxed text-lg">{para}</p>
            ))}

            {/* Highlighted quote */}
            <div className="border-l-4 border-gold pl-6 py-2 bg-cream-200 rounded-r-xl">
              <p className="font-serif text-2xl text-forest italic leading-relaxed">
                &ldquo;{T.quote}&rdquo;
              </p>
              <p className="text-forest-400 text-sm mt-3 font-medium">{T.quoteAuthor}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/booking" className="bg-forest text-cream-100 px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
                {T.bookWithClaudia}
              </Link>
              <Link href="/services" className="border border-forest text-forest px-8 py-4 rounded-full text-sm font-medium hover:bg-forest hover:text-cream-100 transition-colors">
                {T.viewServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{T.timelineTag}</p>
            <h2 className="font-serif text-4xl text-white font-light">{T.timelineTitle}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-forest-600" />
            <div className="space-y-10">
              {T.milestones.map((m, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 md:text-right pl-14 md:pl-0 md:pr-10">
                    {i % 2 === 0 && (
                      <>
                        <p className="text-gold font-serif text-2xl font-light mb-1">{m.year}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{m.label}</p>
                      </>
                    )}
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold border-2 border-forest mt-1 flex-shrink-0" />
                  <div className="md:w-1/2 pl-14 md:pl-10">
                    {i % 2 !== 0 && (
                      <>
                        <p className="text-gold font-serif text-2xl font-light mb-1">{m.year}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{m.label}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-200 text-center">
        <div className="max-w-xl mx-auto px-6">
          <Image src="/logo-circle.png" alt="" width={72} height={72} className="mx-auto mb-6 rounded-full" />
          <h2 className="font-serif text-4xl text-forest font-light mb-4">
            {T.ctaTitle1}<br /><span className="italic">{T.ctaTitle2}</span>
          </h2>
          <p className="text-forest-500 mb-8">{T.ctaDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-forest text-cream-100 px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
              {T.ctaBookBtn}
            </Link>
            <a href="tel:+18185775421" className="border border-forest text-forest px-8 py-4 rounded-full text-sm hover:bg-forest hover:text-cream-100 transition-colors">
              (818) 577-5421
            </a>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
