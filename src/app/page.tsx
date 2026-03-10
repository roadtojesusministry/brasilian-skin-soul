import Image from "next/image";
import Link from "next/link";
import ReviewsMarquee from "@/components/ReviewsMarquee";

const featuredServices = [
  {
    name: "Royal Glow Facial",
    tagline: "The Ultimate Experience",
    desc: "Our flagship 2-hour luxury treatment combining oxygen therapy, microcurrent lifting, LED light, and full massage. The pinnacle of skin transformation.",
    price: "$XXX",
    duration: "2 hr",
    badge: "FLAGSHIP",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    name: "Gua Sha Oxygen Facial",
    tagline: "Ancient Healing · Modern Glow",
    desc: "Traditional Gua Sha lymphatic drainage with oxygen infusion. Reduces puffiness, detoxifies, and leaves skin sculpted and radiant.",
    price: "$XXX",
    duration: "90 min",
    badge: null,
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
  },
  {
    name: "Microcurrent Lifting Facial",
    tagline: "The Non-Surgical Facelift",
    desc: "Gentle microcurrent waves stimulate facial muscles and boost collagen for a natural lift and firming effect. Visible results from session one.",
    price: "$XXX",
    duration: "90 min",
    badge: "POPULAR",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    name: "Acne Facial",
    tagline: "Clear · Balance · Heal",
    desc: "A targeted treatment designed to deeply cleanse, reduce inflammation, clear breakouts, and restore balance to acne-prone or oily skin.",
    price: "$XXX",
    duration: "65 min",
    badge: null,
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
];

const serviceCategories = [
  {
    label: "Signature Facials",
    href: "/services#signature",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
  {
    label: "Advanced Technology",
    href: "/services#advanced",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Body Treatments",
    href: "/services#body",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    label: "Massage & Add-ons",
    href: "/services#addons",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    label: "Waxing Services",
    href: "/services#waxing",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    label: "Treatment Packages",
    href: "/services#packages",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
];

const badgeColors: Record<string, string> = {
  FLAGSHIP: "bg-gold text-forest",
  POPULAR:  "bg-forest text-cream-100",
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
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
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
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=85"
            alt="Spa ambiance"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Woodland Hills, California</p>
            <h1 className="font-serif text-6xl md:text-7xl text-white font-light leading-[1.1] mb-6">
              Heal Your Skin.<br />
              <span className="italic text-gold">Transform</span><br />
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
              <span className="flex items-center gap-2"><StarIcon /> 50+ Five-Star Reviews</span>
              <span className="flex items-center gap-2"><LeafIcon /> 28 Years Experience</span>
              <span className="flex items-center gap-2"><SparkleIcon /> Advanced Technology</span>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 flex flex-col items-center gap-4">
              <Image src="/logo-circle-2.png" alt="Brasilian Skin Soul" width={200} height={200} className="drop-shadow-xl" />
              <div className="text-center">
                <p className="font-serif text-2xl text-white">Brasilian Skin Soul</p>
                <p className="text-xs text-white/60 tracking-widest uppercase mt-1">by Claudia Pieri</p>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ── SERVICE CATEGORIES STRIP ─────────────────────────── */}
      <section className="bg-forest py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceCategories.map((c) => (
              <Link key={c.label} href={c.href}
                className="flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-white/5 transition-colors text-center group">
                <span className="text-gold/80 group-hover:text-gold transition-colors">{c.svg}</span>
                <span className="text-xs text-white/70 font-medium leading-tight group-hover:text-white transition-colors">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-5xl md:text-6xl text-forest font-light">Signature Treatments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
              <div key={s.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest/20" />
                  {s.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${badgeColors[s.badge]}`}>
                      {s.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold font-medium uppercase tracking-wide mb-1">{s.tagline}</p>
                  <h3 className="font-serif text-xl text-forest mb-2 leading-tight">{s.name}</h3>
                  <p className="text-sm text-forest-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-forest-100">
                    <span className="font-bold text-forest text-base">{s.price}</span>
                    <span className="text-forest-400">{s.duration}</span>
                  </div>
                </div>
              </div>
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
          <div className="relative">
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
          </div>

          <div>
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
          </div>
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
          <Image src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1800&q=85" alt="Spa treatment" fill className="object-cover" />
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
