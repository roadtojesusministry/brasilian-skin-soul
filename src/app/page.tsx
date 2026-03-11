import Image from "next/image";
import Link from "next/link";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import TechInfoButton from "@/components/TechInfoButton";
import FadeIn from "@/components/FadeIn";


const featuredServices = [
  {
    name: "Royal Glow Facial",
    tagline: "The Ultimate Experience",
    desc: "Our most indulgent treatment. A full 2-hour journey combining oxygen therapy, microcurrent lifting, LED light, collagen masque, and a full massage. The pinnacle of what professional skincare can achieve — you'll leave looking and feeling genuinely transformed.",
    price: "$295",
    duration: "2 hr",
    badge: "FLAGSHIP",
    image: "/facial-royal-glow.jpg",
  },
  {
    name: "Intraceuticals Oxygen Facial",
    tagline: "Hydrate · Lift · Rejuvenate",
    desc: "The gold standard in oxygen-based skin therapy — trusted by skin professionals worldwide. Pressurized oxygen drives customized serums deep into layers no topical product can reach. The result: intense hydration, visible plumping, and a luminous anti-aging lift.",
    price: "$195",
    duration: "60+ min",
    badge: "BEST SELLER",
    image: "/facial-intraceuticals.jpg",
  },
  {
    name: "Cold Plasma Rejuvenation",
    tagline: "Science Meets Skin",
    desc: "13,000 volts of cold plasma stimulate collagen and elastin while amplifying absorption of skin boosters by up to 120×. Opens micro-channels that drive active ingredients deeper than any topical product can reach. Non-invasive, with visible results from the very first session.",
    price: "$175",
    duration: "60+ min",
    badge: "ADVANCED",
    image: "/facial-cold-plasma.jpg",
  },
  {
    name: "Microcurrent Lifting Facial",
    tagline: "The Non-Surgical Facelift",
    desc: "Gentle microcurrent waves re-educate facial muscles, boosting collagen and delivering a natural lift from the muscle layer out. Where Therma-Lift sculpts from the outside, microcurrent rebuilds the foundation from within. Visible lift from the very first visit.",
    price: "$165",
    duration: "90 min",
    badge: "POPULAR",
    image: "/facial-microcurrent.jpg",
  },
];

const serviceCategories = [
  {
    label: "Unique Protocols",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    label: "Signature Facials",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
  {
    label: "Body Treatments",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    label: "Waxing Services",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
];

// Advanced technology items organized by category
const advancedTech = [
  {
    group: "Non-Surgical Lifting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    items: [
      { name: "Microcurrent Lifting", desc: "Electrical muscle stimulation for a natural, non-surgical lift" },
      { name: "Therma-Lift Technology", desc: "Heat-based sculpting to tighten skin and contour the face" },
      { name: "Cold Plasma (13,000V)", desc: "Amplifies absorption of skin boosters by up to 120× and stimulates collagen" },

    ],
  },
  {
    group: "Radiance & Healing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    items: [
      { name: "LED Photo Therapy", desc: "Red, blue & near-infrared light to heal, clarify, and regenerate" },
      { name: "Oxygen Infusion (Intraceuticals)", desc: "Pressurized oxygen drives customized serums deep into the skin" },
      { name: "CO2 Carboxytherapy", desc: "Carbon dioxide mask delivers instant firming and brightening" },

    ],
  },
  {
    group: "Texture & Tone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    items: [
      { name: "Microdermabrasion", desc: "Diamond-tip resurfacing for smooth, even-toned skin" },
      { name: "Dermaplane Exfoliation", desc: "Surgical-grade blade removes dead cells and peach fuzz" },
      { name: "Glycolic Peel", desc: "Alpha hydroxy acid resurfaces and brightens for a fresh glow" },
    ],
  },
  {
    group: "Cellular Science",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    items: [
      { name: "Plant Stem Cell Therapy", desc: "Triggers skin renewal and repair at the deepest cellular layer" },
      { name: "Far-Infrared Technology", desc: "Promotes circulation, eases tension, and supports natural detox" },
      { name: "Gua Sha Lymphatic Drainage", desc: "Ancient technique enhanced with modern oxygen infusion for deep detox" },
    ],
  },
];

const badgeColors: Record<string, string> = {
  FLAGSHIP:    "bg-gold text-forest",
  "BEST SELLER": "bg-forest text-cream-100",
  ADVANCED:    "bg-forest-700 text-cream-100",
  POPULAR:     "bg-gold text-forest",
};

// SVG icons for trust strip
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold flex-shrink-0">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
  </svg>
);
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5.4 8.1-9 9 3.6 3.6 10.8 4.5 14.4 0 .9-3.6-.9-7.2-5.4-9Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>
);
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

// SVG icons for reviews stats
const ReviewStarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

// SVG icons for location strip
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold mx-auto mb-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold mx-auto mb-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold mx-auto mb-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.16.67-2.197 1.718-2.654C5.322 3.086 6.75 3 8.25 3c.844 0 1.688.04 2.525.117.488.044.9.37 1.038.843l.758 2.7a1.125 1.125 0 0 1-.26 1.065L11 9.036a9.75 9.75 0 0 0 3.963 3.963l1.311-1.311a1.125 1.125 0 0 1 1.065-.26l2.7.758c.473.138.799.55.843 1.038.077.837.117 1.681.117 2.525 0 1.5-.086 2.928-.684 4.282-.457 1.048-1.494 1.718-2.654 1.718H18c-8.284 0-15-6.716-15-15v-.162Z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video hero background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-room.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-forest/65" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Woodland Hills, California</p>
            <h1 className="font-serif text-6xl md:text-7xl text-white font-light leading-[1.1] mb-6">
              Heal Your Skin.<br />
              <span className="italic text-gold animate-[shimmer_3s_ease-in-out_infinite]">Transform</span><br />
              Your Life.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-md">
              Advanced skincare by Claudia Pieri — 28 years of experience and a personal journey of transformation that deepens every treatment she gives.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/booking" className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
                Book Your Treatment
              </Link>
              <Link href="/services" className="border border-white/50 text-white px-8 py-4 rounded-full text-sm font-medium hover:border-gold hover:text-gold transition-colors">
                View Services
              </Link>
            </div>
            {/* Trust strip with SVG icons */}
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><StarIcon /> 60+ Five-Star Reviews</span>
              <span className="flex items-center gap-2"><LeafIcon /> 28 Years Experience</span>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 flex flex-col items-center gap-6 min-w-[280px]">
              <Image src="/logo-circle-2.png" alt="Brasilian Skin Soul" width={180} height={180} className="drop-shadow-xl animate-[breathe_4s_ease-in-out_infinite]" />
              <div className="text-center">
                <p className="font-serif text-2xl text-white">Brasilian Skin Soul</p>
                <p className="text-xs text-white/60 tracking-widest uppercase mt-1">by Claudia Pieri</p>
              </div>
              <div className="w-full border-t border-white/15 pt-3 flex flex-col gap-1">
                {serviceCategories.map((c) => (
                  <div key={c.label}
                    className="flex items-center gap-3 text-white/70 text-xs py-2 px-3 rounded-xl">
                    <span className="text-gold/70 [&>svg]:w-4 [&>svg]:h-4">{c.svg}</span>
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ── PHILOSOPHY BRIDGE ────────────────────────────────── */}
      <section className="bg-forest py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold/70 mb-6">The BSS Difference</p>
          <p className="font-serif text-2xl md:text-3xl text-white font-light leading-relaxed mb-3">
            Most spas offer one technology at a time.
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Claudia builds protocols — four curated programs that layer the most powerful modalities together in every session, each amplifying the others for results no single treatment can achieve.
          </p>
        </div>
      </section>

      {/* ── ADVANCED TECHNOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-forest border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-gold mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <p className="text-xs uppercase tracking-[0.25em] font-medium">What Sets Us Apart</p>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white font-light mb-4">
              Advanced Technology
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
              Claudia combines 28 years of hands-on mastery with cutting-edge skincare technology — giving you results you simply cannot get at a standard spa. Each protocol layers multiple technologies in a single session — amplifying results no single treatment can achieve.
            </p>
          </div></FadeIn>

          {/* 4 Unique Protocols intro */}
          <FadeIn><div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-gold/70 text-center mb-6">Our Unique Protocols</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Lift & Sculpt Series", tech: "Microcurrent · Therma-Lift · Cold Plasma" },
                { name: "Illuminate Series", tech: "LED · Oxygen Intraceuticals · CO2" },
                { name: "Resurface & Refine Series", tech: "Microdermabrasion · Dermaplane · Glycolic Peel" },
                { name: "Cellular Renewal Series", tech: "Stem Cell · Far-Infrared · Gua Sha" },
              ].map((p) => (
                <div key={p.name} className="bg-white/5 border border-gold/20 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
                  <p className="font-serif text-lg text-white font-light leading-snug mb-2">{p.name}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{p.tech}</p>
                </div>
              ))}
            </div>
          </div></FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedTech.map((group, i) => (
              <FadeIn key={group.group} delay={i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : ''}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-gold">{group.icon}</span>
                    <h3 className="text-sm uppercase tracking-[0.2em] text-gold font-semibold">{group.group}</h3>
                  </div>
                  <TechInfoButton techNames={group.items.map((i) => i.name)} groupName={group.group} />
                </div>
                <div className="flex flex-col gap-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{item.name}</p>
                        <p className="text-white/50 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services"
              className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full text-sm font-medium hover:bg-gold hover:text-forest transition-colors">
              See All Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-5xl md:text-6xl text-forest font-light">Signature Treatments</h2>
          </div></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s, i) => (
              <FadeIn key={s.name} delay={i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : ''}>
              <div
                className="gold-hover group bg-white rounded-2xl border border-forest-100 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={s.image} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
                  {s.badge && (
                    <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[s.badge]}`}>
                      {s.badge}
                    </span>
                  )}
                  <h3 className="absolute bottom-3 left-4 right-4 font-serif text-lg text-cream-100 leading-tight">{s.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold font-medium uppercase tracking-wide mb-2">{s.tagline}</p>
                  <p className="text-sm text-forest-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-forest-100">
                    <span className="font-bold text-forest text-base">{s.price}</span>
                    <span className="text-forest-400">{s.duration}</span>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services"
              className="inline-block border border-forest text-forest px-10 py-4 rounded-full text-sm font-medium hover:bg-forest hover:text-cream-100 transition-colors">
              Explore All Treatments
            </Link>
          </div>


        </div>
      </section>

      {/* ── ABOUT CLAUDIA ────────────────────────────────────── */}
      <section className="py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn><div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-[500px]">
              <Image src="/claudia.jpg" alt="Claudia Pieri" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white text-2xl">Claudia Pieri</p>
                <p className="text-white/70 text-sm">Founder & Lead Skincare Therapist</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gold text-forest rounded-2xl p-4 text-center shadow-xl">
              <p className="font-serif text-4xl font-bold">28</p>
              <p className="text-xs font-semibold uppercase tracking-wide">Years<br />Experience</p>
            </div>
          </div></FadeIn>

          <FadeIn delay="delay-150"><div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Meet Your Therapist</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white font-light italic leading-tight mb-6">
              A Healer with<br />Love in Her Heart
            </h2>
            <p className="text-white/70 leading-relaxed mb-4 text-lg">
              With over 28 years of experience, Claudia Pieri has dedicated her life to helping clients achieve radiant skin and renewed self-confidence.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              A profound personal journey — including a brain tumor that brought about facial paralysis — deepened her understanding of both physical and emotional healing. This experience ignites her commitment to connections that heal the heart and soul.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Words from her clients — <em className="text-gold">&ldquo;You have a magic touch&rdquo;</em> and <em className="text-gold">&ldquo;Thank you for healing my skin&rdquo;</em> — inspire her every day.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
              Read Claudia&apos;s Full Story →
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ── REVIEWS MARQUEE ─────────────────────────────────── */}
      <ReviewsMarquee />

      {/* ── LOCATION STRIP ──────────────────────────────────── */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <PinIcon />
              <p className="font-serif text-xl text-forest mb-1">Location</p>
              <p className="text-sm text-forest-500">5303 Comercio Ln, Suite #2<br />Woodland Hills, CA 91364</p>
            </div>
            <div>
              <ClockIcon />
              <p className="font-serif text-xl text-forest mb-1">Hours</p>
              <p className="text-sm text-forest-500">Tue–Fri: 9AM–6PM<br />Sat: 9AM–5PM · Mon &amp; Sun: Closed</p>
            </div>
            <div>
              <PhoneIcon />
              <p className="font-serif text-xl text-forest mb-1">Call Us</p>
              <a href="tel:+18185775421" className="text-sm text-forest-500 hover:text-gold transition-colors">(818) 577-5421</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cta-bg.jpg" alt="Spa treatment" fill className="object-cover" />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <Image src="/logo-circle.png" alt="" width={80} height={80} className="mx-auto mb-6 opacity-90 rounded-full" />
          <h2 className="font-serif text-5xl md:text-6xl text-white font-light mb-4">
            Ready to <span className="italic text-gold">Transform</span><br />Your Skin?
          </h2>
          <p className="text-white/70 mb-8 text-lg max-w-md mx-auto">
            You don&apos;t have to face skin challenges alone. Let&apos;s embark on this journey together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold text-forest font-semibold px-10 py-4 rounded-full text-sm hover:bg-gold-light transition-colors">
              Book Your Appointment
            </Link>
            <a href="tel:+18185775421" className="border border-white/40 text-white px-10 py-4 rounded-full text-sm hover:border-gold hover:text-gold transition-colors">
              (818) 577-5421
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
