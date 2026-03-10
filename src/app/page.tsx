import Image from "next/image";
import Link from "next/link";
import ReviewsMarquee from "@/components/ReviewsMarquee";

const featuredServices = [
  {
    name: "Hydra Facial Intraceutical",
    desc: "Transform, hydrate, lift & rejuvenate with cutting-edge Oxygen Therapy and customized anti-aging serums.",
    price: "$195+",
    duration: "60+ min",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    name: "Cold Plasma Rejuvenation",
    desc: "13,000 volts of plasma stimulate collagen & elastin, amplifying absorption of skin boosters by up to 120×.",
    price: "From $0",
    duration: "20+ min",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
  {
    name: "Therma-Lift Microderm",
    desc: "Tighten, tone & smooth with microdermabrasion, Therma-Lift sculpting, oxygen infusion & deep extractions.",
    price: "$185",
    duration: "80 min",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    name: "Cruise Facial",
    desc: "Head-to-toe tropical treatment: papaya enzyme, glycolic peel, oxygen therapy, reflexology & full massage.",
    price: "$185+",
    duration: "75+ min",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
  },
];

const serviceCategories = [
  { icon: "✨", label: "Signature Facials", count: "20+" },
  { icon: "⚡", label: "Advanced Technology", count: "10+" },
  { icon: "🌿", label: "Body Treatments", count: "8+" },
  { icon: "💆", label: "Massage & Add-ons", count: "15+" },
  { icon: "🪮", label: "Waxing Services", count: "20+" },
  { icon: "📦", label: "Treatment Packages", count: "6+" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=85"
            alt="Spa ambiance"
            fill
            className="object-cover"
            priority
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
              <Link href="/booking"
                className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
                Book Your Treatment
              </Link>
              <Link href="/services"
                className="border border-white/50 text-white px-8 py-4 rounded-full text-sm font-medium hover:border-gold hover:text-gold transition-colors">
                View Services
              </Link>
            </div>
            {/* Trust strip */}
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <span>⭐ 50+ Five-Star Reviews</span>
              <span>🌿 28 Years Experience</span>
              <span>💚 Advanced Technology</span>
            </div>
          </div>

          {/* Logo card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 flex flex-col items-center gap-4">
              <Image src="/logo-circle-2.png" alt="Brasilian Skin Soul" width={200} height={200} className="drop-shadow-xl" />
              <div className="text-center">
                <p className="font-serif text-2xl text-white">Brasilian Skin Soul</p>
                <p className="text-xs text-white/60 tracking-widest uppercase mt-1">by Claudia Pieri</p>
              </div>
              <Link href="/booking"
                className="mt-2 bg-gold text-forest px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-gold-light transition-colors">
                Book Now →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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
              <Link key={c.label} href="/services"
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors text-center group">
                <span className="text-2xl">{c.icon}</span>
                <span className="text-xs text-white/70 font-medium leading-tight group-hover:text-gold transition-colors">{c.label}</span>
                <span className="text-xs text-gold font-semibold">{c.count} services</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Signature Treatments</p>
            <h2 className="font-serif text-5xl md:text-6xl text-forest font-light">Most Loved Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
              <div key={s.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors" />
                </div>
                <div className="p-6">
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
              className="inline-block bg-forest text-cream-100 px-10 py-4 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
              View All 80+ Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT CLAUDIA ────────────────────────────────────── */}
      <section className="py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-[500px]">
              <Image
                src="/claudia.jpg"
                alt="Claudia Pieri"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white text-2xl">Claudia Pieri</p>
                <p className="text-white/70 text-sm">Founder & Lead Skincare Therapist</p>
              </div>
            </div>
            {/* floating stat */}
            <div className="absolute -top-4 -right-4 bg-gold text-forest rounded-2xl p-4 text-center shadow-xl">
              <p className="font-serif text-4xl font-bold">28</p>
              <p className="text-xs font-semibold uppercase tracking-wide">Years<br />Experience</p>
            </div>
          </div>

          {/* Text side */}
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
              Words from her clients — <em className="text-gold">"You have a magic touch"</em> and <em className="text-gold">"Thank you for healing my skin"</em> — inspire her every day.
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-2 bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
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
              <p className="text-3xl mb-3">📍</p>
              <p className="font-serif text-xl text-forest mb-1">Location</p>
              <p className="text-sm text-forest-500">5303 Comercio Ln, Suite #2<br />Woodland Hills, CA 91364</p>
            </div>
            <div>
              <p className="text-3xl mb-3">🕐</p>
              <p className="font-serif text-xl text-forest mb-1">Hours</p>
              <p className="text-sm text-forest-500">Tue–Fri: 9AM–6PM<br />Sat: 9AM–5PM · Mon & Sun: Closed</p>
            </div>
            <div>
              <p className="text-3xl mb-3">📞</p>
              <p className="font-serif text-xl text-forest mb-1">Call Us</p>
              <a href="tel:+18185775421" className="text-sm text-forest-500 hover:text-gold transition-colors">(818) 577-5421</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1800&q=85"
            alt="Spa treatment"
            fill
            className="object-cover"
          />
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
            <Link href="/booking"
              className="bg-gold text-forest font-semibold px-10 py-4 rounded-full text-sm hover:bg-gold-light transition-colors">
              Book Your Appointment
            </Link>
            <a href="tel:+18185775421"
              className="border border-white/40 text-white px-10 py-4 rounded-full text-sm hover:border-gold hover:text-gold transition-colors">
              📞 (818) 577-5421
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
