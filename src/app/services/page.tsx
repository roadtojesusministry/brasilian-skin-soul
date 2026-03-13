'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import TechInfoButton from "@/components/TechInfoButton";
import { Crown, Leaf, Wind, Zap, Flame, Activity, Droplets, Sun, ShieldCheck, Dna, Flower, Award } from "lucide-react";
import { getServicesByCategory, formatDuration, type Service } from "@/lib/services-data";
import { useLang } from "@/lib/language-context";
import { translations } from "@/lib/translations";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _Activity = Activity;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _Award = Award;

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Crown, Leaf, Wind, Zap, Flame, Activity, Droplets, Sun, ShieldCheck, Dna, Flower, Award,
};

// Custom SVG icons for each Transformation Series item (keyed by service id)
const SERIES_ICONS: Record<string, React.ReactNode> = {
  'lift-sculpt': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  'illuminate': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  ),
  'resurface-refine': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  ),
  'cellular-renewal': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  ),
};

// Add-ons / boosters — separate concept, not bookable services
const addons = [
  { name: "Dermaplane", desc: "Removes dead skin cells and fine facial hair for silky smooth skin.", price: "$45" },
  { name: "Glycolic Peel", desc: "Resurfaces skin and brightens tone with alpha hydroxy acid.", price: "$35" },
  { name: "LED Light Therapy", desc: "Targeted light wavelengths for healing, collagen boost, or acne control.", price: "$40" },
  { name: "CO2 Lift", desc: "Carboxytherapy mask delivers instant firming and brightening.", price: "$45" },
  { name: "Eye Lift — Stem Cell", desc: "Targeted stem cell treatment to lift and firm the eye area.", price: "$50" },
  { name: "Oxygen Therapy O2", desc: "Pure oxygen infusion to amplify any treatment with a deep hydration boost.", price: "$40" },
  { name: "Microdermabrasion", desc: "Physical resurfacing for smooth, even-toned skin.", price: "$55" },
  { name: "Microcurrent Lifting", desc: "Electrical muscle stimulation for instant lift and firmness.", price: "$55" },
  { name: "Therma-Lift", desc: "Advanced sculpting technology to tighten and contour the face.", price: "$60" },
  { name: "Deep Extractions", desc: "Professional deep pore cleansing to remove blackheads and congestion.", price: "$30" },
  { name: "Divine Décolleté", desc: "Targeted treatment for neck and chest area — reduces sun damage and fine lines.", price: "$45" },
  { name: "Glow Mask", desc: "Brightening and hydrating masque for a radiant finish.", price: "$25" },
];

const badgeColors: Record<string, string> = {
  "FLAGSHIP": "bg-gold text-forest",
  "BEST SELLER": "bg-forest text-cream-100",
  "ADVANCED": "bg-forest-700 text-cream-100",
  "POPULAR": "bg-gold text-forest",
  "RITUAL": "bg-gold text-forest",
  "HOLISTIC": "bg-gold text-forest",
};

export default function Services() {
  const { lang } = useLang();
  const T = translations[lang].services;

  const transformationSeries = getServicesByCategory('Transformation Series');
  const signatureFacials = getServicesByCategory('Signature Facials');
  const bodyMassage = getServicesByCategory('Body & Massage');
  const waxing = getServicesByCategory('Waxing');

  return (
    <>
    <Navbar />

    <div className="bg-cream-100 min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-bg.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/services-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{T.heroTag}</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-light mb-6">{T.heroTitle}</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">{T.heroDesc}</p>
          <Link href="/booking" className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
            {T.heroBookBtn}
          </Link>
        </div>
      </section>

      {/* ── THE TRANSFORMATION SERIES ────────────────────────── */}
      <section id="transformation-series" className="py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-gold mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <p className="text-xs uppercase tracking-[0.25em] font-medium">{T.seriesTag}</p>
            </div>
            <h2 className="font-serif text-5xl text-white font-light mb-4">{T.seriesTitle}</h2>
            <p className="text-white/60 max-w-xl mx-auto">{T.seriesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationSeries.map((p) => (
              <div key={p.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/30 transition-all">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-gold">{SERIES_ICONS[p.id]}</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium mb-1">{p.seriesGroup}</p>
                      <h3 className="font-serif text-2xl text-gold leading-tight">{p.name}</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="inline-flex items-center gap-1 bg-gold/15 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {T.seriesSessionsBadge(p.sessions ?? 3)}
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{p.fullDesc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.technologies?.map((tech) => (
                    <span key={tech} className="text-xs border border-white/15 text-white/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-5">
                  <TechInfoButton techNames={p.technologies ?? []} groupName={p.seriesGroup ?? p.name} />
                </div>
                {p.compound && (
                  <div className="border-t border-white/10 pt-5 mt-2 mb-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-gold/70 font-semibold mb-2">{T.seriesWhyCompounds}</p>
                    <p className="text-gold font-serif text-base italic leading-snug mb-2">&ldquo;{p.compound.headline}&rdquo;</p>
                    <p className="text-white/50 text-xs leading-relaxed">{p.compound.body}</p>
                  </div>
                )}
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <span className="font-bold text-gold text-xl">${p.price}</span>
                    <p className="text-white/50 text-xs mt-0.5">for all 3 sessions — not per session</p>
                  </div>
                  <Link href="/booking" className="bg-gold text-forest px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-gold-light transition-colors">
                    {T.seriesBookBtn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE FACIALS ────────────────────────────────── */}
      <section id="signature" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{T.signatureTag}</p>
          <h2 className="font-serif text-5xl text-forest font-light">{T.signatureTitle}</h2>
          <p className="text-forest-500 mt-3 max-w-lg mx-auto">{T.signatureDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureFacials.map((s: Service) => {
            const IconComponent = s.iconName ? ICON_MAP[s.iconName] : null;
            return (
              <div key={s.id}
                className="gold-hover group bg-white rounded-2xl border border-forest-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="flex flex-col flex-1">
                  {/* Image header */}
                  <div className="relative h-44 overflow-hidden">
                    <Image src={s.imagePath ?? `/${s.id}.jpg`} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-forest/30" />
                    {s.badge && (
                      <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${badgeColors[s.badge]}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-gold font-medium uppercase tracking-wide mb-2">{s.tagline}</p>
                  <div className="flex items-center gap-2 mb-2">
                    {IconComponent && <IconComponent className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />}
                    <h3 className="font-serif text-xl text-forest leading-tight">{s.name}</h3>
                  </div>
                  <p className="text-sm text-forest-500 leading-relaxed flex-1">{s.fullDesc}</p>
                  {s.addons && (
                    <div className="mt-2">
                      <p className="text-xs text-forest-300 mb-1.5">{T.enhanceWith}</p>
                      <div className="flex flex-wrap gap-1">
                        {s.addons.map((addon) => (
                          <span key={addon} className="text-xs bg-gold/12 text-gold/80 border border-gold/35 px-2 py-0.5 rounded-full">
                            + {addon}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-forest-100">
                    <span className="font-bold text-forest text-lg">${s.price}</span>
                    <span className="text-xs text-forest-400">{s.displayDuration ?? formatDuration(s.duration_min)}</span>
                  </div>
                  <Link href="/booking" className="mt-3 block text-center bg-forest text-cream-100 py-2.5 rounded-full text-xs font-medium hover:bg-forest-700 transition-colors">
                    {T.signatureBookBtn}
                  </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────────────── */}
      <section id="addons" className="py-24 bg-cream-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{T.addonsTag}</p>
            <h2 className="font-serif text-5xl text-forest font-light">{T.addonsTitle}</h2>
            <p className="text-forest-500 mt-3 max-w-lg mx-auto">{T.addonsDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-forest-100 hover:border-forest-300 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-forest text-sm">{a.name}</p>
                      <TechInfoButton techNames={[a.name]} groupName={a.name} iconOnly />
                    </div>
                    <span className="text-gold font-semibold text-sm flex-shrink-0">{a.price}</span>
                  </div>
                  <p className="text-xs text-forest-400 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY & MASSAGE ───────────────────────────────────── */}
      <section id="body" className="py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{T.bodyTag}</p>
            <h2 className="font-serif text-5xl text-white font-light">{T.bodyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bodyMassage.map((s: Service) => (
              <div key={s.id} className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="font-serif text-xl text-white mb-2">{s.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{s.fullDesc}</p>
                {s.pairWith && s.pairWith.length > 0 && (
                  <div className="mt-2 mb-3">
                    <p className="text-xs text-white/30 mb-1.5">{T.pairWith}</p>
                    <div className="flex flex-wrap gap-1">
                      {s.pairWith.map((addon) => (
                        <span key={addon} className="text-xs bg-gold/10 text-gold/70 border border-gold/25 px-2 py-0.5 rounded-full">
                          + {addon}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm pt-3 border-t border-white/10">
                  <span className="font-bold text-gold">${s.price}</span>
                  <span className="text-white/40 text-xs">{s.displayDuration ?? formatDuration(s.duration_min)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAXING ───────────────────────────────────────────── */}
      <section id="waxing" className="py-24 bg-cream-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{T.waxingTag}</p>
            <h2 className="font-serif text-5xl text-forest font-light">{T.waxingTitle}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {waxing.map((w: Service) => (
              <div key={w.id} className="bg-white rounded-xl p-4 border border-forest-100 flex flex-col gap-1 hover:border-forest-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-forest font-medium">{w.name}</span>
                  <span className="text-sm text-gold font-semibold ml-2 flex-shrink-0">${w.price}</span>
                </div>
                <span className="text-xs text-forest-400">{formatDuration(w.duration_min)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white font-light mb-4">{T.ctaTitle}</h2>
          <p className="text-white/60 mb-8">{T.ctaDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
              {T.ctaBookBtn}
            </Link>
            <a href="tel:+18185775421" className="border border-white/30 text-white px-8 py-4 rounded-full text-sm hover:border-gold hover:text-gold transition-colors">
              (818) 577-5421
            </a>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
