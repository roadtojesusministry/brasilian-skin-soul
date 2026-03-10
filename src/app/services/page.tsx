import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import TechInfoButton from "@/components/TechInfoButton";

export const metadata = {
  title: "Services | Brasilian Skin Soul — Woodland Hills, CA",
  description: "Explore our full menu of luxury facial treatments, body therapies, massage, waxing and treatment packages by Claudia Pieri in Woodland Hills, CA.",
};

const signature = [
  {
    name: "Royal Glow Facial",
    tagline: "The Ultimate Luxury Experience",
    desc: "Our most indulgent treatment. A full 2-hour journey combining oxygen therapy, microcurrent lifting, LED light, collagen masque, and a full massage. You'll leave looking and feeling transformed.",
    price: "$XXX",
    duration: "2 hr",
    badge: "FLAGSHIP",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    addons: ["Eye Lift — Stem Cell", "CO2 Lift", "Divine Décolleté"],
  },
  {
    name: "Intraceuticals Oxygen Facial",
    tagline: "Hydrate · Lift · Rejuvenate",
    desc: "Cutting-edge Oxygen Therapy delivers customized serums deep into the skin for intense hydration and anti-aging benefits. Includes eye mask, extractions, décolleté treatment and shoulder massage.",
    price: "$XXX",
    duration: "60+ min",
    badge: "BEST SELLER",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    addons: ["LED Light Therapy", "Dermaplane", "CO2 Lift"],
    series: "Illuminate Series",
  },
  {
    name: "Cold Plasma Rejuvenation",
    tagline: "Science Meets Skin",
    desc: "13,000 volts of cold plasma technology stimulate collagen and elastin production, amplifying absorption of skin boosters by up to 120×. A powerful non-invasive treatment with visible results.",
    price: "$XXX",
    duration: "60+ min",
    badge: "ADVANCED",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    addons: ["Eye Lift — Stem Cell", "Oxygen Therapy O2", "Glow Mask"],
    series: "Lift & Sculpt Series",
  },
  {
    name: "Microcurrent Lifting Facial",
    tagline: "The Non-Surgical Facelift",
    desc: "Gentle microcurrent waves stimulate facial muscles and boost collagen, delivering a natural lift and firming effect. Visible results from the very first session.",
    price: "$XXX",
    duration: "90 min",
    badge: "POPULAR",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    addons: ["Eye Lift — Stem Cell", "CO2 Lift", "Divine Décolleté"],
    series: "Lift & Sculpt Series",
  },
  {
    name: "Therma-Lift Sculpting Facial",
    tagline: "Tighten · Tone · Sculpt",
    desc: "Combines Therma-Lift sculpting technology with microdermabrasion and oxygen infusion to visibly tighten, firm, and smooth the skin. A favorite for those wanting a lifted, contoured look.",
    price: "$XXX",
    duration: "80 min",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    addons: ["LED Light Therapy", "Eye Lift — Stem Cell", "CO2 Lift"],
    series: "Lift & Sculpt Series",
  },
  {
    name: "Gua Sha Oxygen Facial",
    tagline: "Ancient Healing · Modern Glow",
    desc: "Traditional Gua Sha lymphatic drainage technique combined with oxygen infusion for a deeply relaxing, detoxifying treatment that reduces puffiness and gives skin a radiant, sculpted look.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    addons: ["LED Light Therapy", "Deep Extractions", "Glow Mask"],
    series: "Cellular Renewal Series",
  },
  {
    name: "Lift & Firm Facial",
    tagline: "Turn Back the Clock",
    desc: "A powerhouse anti-aging facial targeting fine lines, loss of elasticity, and dullness. Uses advanced peptides, firming masques, and lifting techniques customized to your skin.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    addons: ["Microcurrent Lifting", "Eye Lift — Stem Cell", "CO2 Lift"],
  },
  {
    name: "Oxygen Glow Facial",
    tagline: "Instant Radiance",
    desc: "Pure oxygen infusion delivers vitamins and nutrients directly into the skin, leaving you with an immediate, camera-ready glow. Perfect before a special event.",
    price: "$XXX",
    duration: "60 min",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    addons: ["Dermaplane", "LED Light Therapy", "Glow Mask"],
    series: "Illuminate Series",
  },
  {
    name: "Dermaplane Glow Facial",
    tagline: "Silky Smooth · Luminous",
    desc: "Physical exfoliation removes dead skin cells and peach fuzz for silky-smooth, luminous skin. Makeup applies flawlessly after.",
    price: "$XXX",
    duration: "60+ min",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    addons: ["Glycolic Peel", "Oxygen Therapy O2", "Glow Mask"],
    series: "Resurface & Refine Series",
  },
  {
    name: "Acne Facial",
    tagline: "Clear · Balance · Heal",
    desc: "A targeted treatment designed to deeply cleanse, reduce inflammation, clear breakouts, and balance oily skin. Gentle yet effective.",
    price: "$XXX",
    duration: "65 min",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    addons: ["LED Light Therapy", "Deep Extractions", "Glycolic Peel"],
  },
  {
    name: "Stem Cell Facial",
    tagline: "Deep Cellular Renewal",
    desc: "Plant-derived stem cells stimulate skin renewal and repair at a cellular level. Exceptional for mature skin seeking deep regeneration.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    addons: ["Eye Lift — Stem Cell", "Microcurrent Lifting", "CO2 Lift"],
    series: "Cellular Renewal Series",
  },
  {
    name: "LED Photo Facial",
    tagline: "Heal · Clarify · Renew",
    desc: "Targeted light therapy reduces inflammation, kills acne bacteria, stimulates collagen, and accelerates healing — all with zero downtime.",
    price: "$XXX",
    duration: "45+ min",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    addons: ["Deep Extractions", "CO2 Lift", "Glow Mask"],
    series: "Illuminate Series",
  },
  {
    name: "Teen Glow Facial",
    tagline: "Gentle · Balancing · Fresh",
    desc: "Specially formulated for teenage skin. Gentle deep cleanse, extractions, and balancing treatment that builds healthy skincare habits early.",
    price: "$XXX",
    duration: "50 min",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    addons: ["LED Light Therapy", "Deep Extractions", "Glow Mask"],
  },
  {
    name: "Pampering Spa Facial",
    tagline: "Pure Relaxation",
    desc: "A relaxing, classic spa facial with deep cleanse, steam, extractions, masque, and a full face and shoulder massage. Pure bliss.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    addons: ["Dermaplane", "Oxygen Therapy O2", "Divine Décolleté"],
  },
  {
    name: "Tropical Deluxe Facial",
    tagline: "Head-to-Toe Tropical Escape",
    desc: "Papaya enzyme scrub, glycolic peel, oxygen therapy, seaweed hand treatment, and reflexology foot massage — a full sensory journey.",
    price: "$XXX",
    duration: "75+ min",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    addons: ["LED Light Therapy", "Eye Lift — Stem Cell", "CO2 Lift"],
  },
  {
    name: "Executive Facial",
    tagline: "Results. No Downtime.",
    desc: "An efficient, results-driven facial for the busy professional. Deep cleanse, exfoliation, extractions and hydration — in under an hour.",
    price: "$XXX",
    duration: "50 min",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    addons: ["Dermaplane", "Microcurrent Lifting", "Glycolic Peel"],
  },
];

const advancedPackages = [
  {
    name: "Lift & Sculpt Series",
    group: "Energy & Lifting",
    desc: "The ultimate non-surgical lifting protocol. Three progressive sessions combining microcurrent muscle training, Therma-Lift contouring, and Cold Plasma collagen stimulation. Each session builds on the last — the cumulative effect is a visibly lifted, firmed, and sculpted face.",
    technologies: ["Microcurrent Lifting", "Therma-Lift Technology", "Cold Plasma (13,000V)"],
    price: "$XXX",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Illuminate Series",
    group: "Light & Oxygen",
    desc: "Heal, hydrate, and brighten from within. Three sessions layering targeted LED light therapy, pressurized oxygen infusion (Intraceuticals), and CO2 carboxytherapy firming. Perfect for dull, uneven, or inflamed skin that needs a deep reset.",
    technologies: ["LED Photo Therapy", "Oxygen Infusion (Intraceuticals)", "CO2 Carboxytherapy"],
    price: "$XXX",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Resurface & Refine Series",
    group: "Resurfacing & Renewal",
    desc: "Progressive skin renewal that reveals smoother, more even-toned skin with every session. Combines professional microdermabrasion, surgical-grade Dermaplane exfoliation, and a glycolic peel for lasting texture transformation.",
    technologies: ["Microdermabrasion", "Dermaplane Exfoliation", "Glycolic Peel"],
    price: "$XXX",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    name: "Cellular Renewal Series",
    group: "Cellular Science",
    desc: "Deep regeneration from the inside out. Plant stem cell therapy triggers renewal at the deepest skin layer, far-infrared promotes circulation and natural detox, and Gua Sha lymphatic drainage sculpts and restores your skin's natural radiance.",
    technologies: ["Plant Stem Cell Therapy", "Far-Infrared Technology", "Gua Sha Lymphatic Drainage"],
    price: "$XXX",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
];

const addons = [
  { name: "Dermaplane", desc: "Removes dead skin cells and fine facial hair for silky smooth skin.", price: "$XX" },
  { name: "Glycolic Peel", desc: "Resurfaces skin and brightens tone with alpha hydroxy acid.", price: "$XX" },
  { name: "LED Light Therapy", desc: "Targeted light wavelengths for healing, collagen boost, or acne control.", price: "$XX" },
  { name: "CO2 Lift", desc: "Carboxytherapy mask delivers instant firming and brightening.", price: "$XX" },
  { name: "Eye Lift — Stem Cell", desc: "Targeted stem cell treatment to lift and firm the eye area.", price: "$XX" },
  { name: "Oxygen Therapy O2", desc: "Pure oxygen infusion to amplify any treatment with a deep hydration boost.", price: "$XX" },
  { name: "Microdermabrasion", desc: "Physical resurfacing for smooth, even-toned skin.", price: "$XX" },
  { name: "Microcurrent Lifting", desc: "Electrical muscle stimulation for instant lift and firmness.", price: "$XX" },
  { name: "Therma-Lift", desc: "Heat-based sculpting technology to tighten and contour.", price: "$XX" },
  { name: "Deep Extractions", desc: "Professional deep pore cleansing to remove blackheads and congestion.", price: "$XX" },
  { name: "Divine Décolleté", desc: "Targeted treatment for neck and chest area — reduces sun damage and fine lines.", price: "$XX" },
  { name: "Glow Mask", desc: "Brightening and hydrating masque for a radiant finish.", price: "$XX" },
];

const bodyMassage = [
  { name: "Back Facial", desc: "Everything your face gets — but for your back. Deep cleanse, exfoliation, steam, extractions, and masque.", price: "$XXX", duration: "60 min" },
  { name: "Salt Glow Back Treatment", desc: "Exfoliating salt scrub followed by nourishing body butter application for silky-smooth skin.", price: "$XXX", duration: "45 min" },
  { name: "Detox Aromawrap", desc: "Full-body detox wrap infused with essential oils to draw out impurities and deeply nourish.", price: "$XXX", duration: "60 min" },
  { name: "Infrared Wellness Wrap", desc: "Far-infrared technology promotes circulation, eases tension, and supports a natural detox.", price: "$XXX", duration: "60 min" },
  { name: "Reflexology + Foot Scrub", desc: "Therapeutic reflexology massage paired with a pampering pineapple enzyme foot scrub.", price: "$XXX", duration: "45 min" },
  { name: "Acupressure Face & Scalp Massage", desc: "Ancient pressure point therapy on the face and scalp to release tension and promote circulation.", price: "$XXX", duration: "45 min" },
  { name: "Hadado Japanese Facelift Massage", desc: "Traditional Japanese lifting massage technique that firms, sculpts, and brings a natural glow.", price: "$XXX", duration: "60 min" },
];

const waxing = [
  { name: "Eyebrow Shaping & Wax", price: "$XX" },
  { name: "Eyebrow Tinting", price: "$XX" },
  { name: "Lash Tinting", price: "$XX" },
  { name: "Full Face Wax", price: "$XX" },
  { name: "Lip Wax", price: "$XX" },
  { name: "Chin Wax", price: "$XX" },
  { name: "Cheeks Wax", price: "$XX" },
  { name: "Nose Wax", price: "$XX" },
  { name: "Underarm Wax", price: "$XX" },
  { name: "Leg Wax", price: "$XX" },
  { name: "French Bikini", price: "$XX" },
  { name: "Brazilian Wax", price: "$XX" },
  { name: "Playboy Wax", price: "$XX" },
  { name: "Back Wax", price: "$XX" },
  { name: "Chest Wax", price: "$XX" },
  { name: "Arm Wax", price: "$XX" },
  { name: "Shoulder Waxing", price: "$XX" },
];

const badgeColors: Record<string, string> = {
  "FLAGSHIP": "bg-gold text-forest",
  "BEST SELLER": "bg-forest text-cream-100",
  "ADVANCED": "bg-forest-700 text-cream-100",
  "POPULAR": "bg-gold text-forest",
};

export default function Services() {
  return (
    <>
    <Navbar />
    <div className="bg-cream-100 min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=80" alt="Spa" fill className="object-cover" />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Woodland Hills, CA</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-light mb-6">Our Services</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Every treatment is customized to your unique skin. Claudia&apos;s 28 years of expertise ensure you receive exactly what your skin needs.
          </p>
          <Link href="/booking" className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
            Book a Treatment
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
              <p className="text-xs uppercase tracking-[0.25em] font-medium">Advanced Technology · 3-Session Protocols</p>
            </div>
            <h2 className="font-serif text-5xl text-white font-light mb-4">The Transformation Series</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              One session is great. Three sessions is transformation. Each series is a progressive protocol built around one of our four core technology groups — results that compound with every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedPackages.map((p) => (
              <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/30 transition-all">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-gold">{p.icon}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-gold leading-tight">{p.group}</h3>
                      <p className="text-sm text-white/50 font-light mt-0.5">{p.name}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                    <div className="inline-flex items-center gap-1 bg-gold/15 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {p.sessions} Sessions
                    </div>
                    <TechInfoButton techNames={p.technologies} groupName={p.group} />
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="text-xs border border-white/15 text-white/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <span className="font-bold text-gold text-xl">{p.price}</span>
                  <Link href="/booking" className="bg-gold text-forest px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-gold-light transition-colors">
                    Book This Series
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
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Most Popular</p>
          <h2 className="font-serif text-5xl text-forest font-light">Signature Facials</h2>
          <p className="text-forest-500 mt-3 max-w-lg mx-auto">Our core menu — each treatment a unique experience designed to transform your skin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signature.map((s) => (
            <div key={s.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-forest/25" />
                {s.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${badgeColors[s.badge]}`}>
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gold font-medium uppercase tracking-wide mb-1">{s.tagline}</p>
                <h3 className="font-serif text-xl text-forest mb-2 leading-tight">{s.name}</h3>
                <p className="text-sm text-forest-500 leading-relaxed flex-1">{s.desc}</p>
                {s.series && (
                  <div className="mt-3 pt-3 border-t border-forest-50">
                    <Link href="#transformation-series" className="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors group">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      Part of <span className="font-medium group-hover:underline">{s.series}</span> →
                    </Link>
                  </div>
                )}
                {s.addons && (
                  <div className="mt-2">
                    <p className="text-xs text-forest-300 mb-1.5">Enhance with:</p>
                    <div className="flex flex-wrap gap-1">
                      {s.addons.map((addon) => (
                        <span key={addon} className="text-xs bg-gold/8 text-gold border border-gold/25 px-2 py-0.5 rounded-full">
                          + {addon}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-forest-100">
                  <span className="font-bold text-forest text-lg">{s.price}</span>
                  <span className="text-xs text-forest-400">{s.duration}</span>
                </div>
                <Link href="/booking" className="mt-3 block text-center bg-forest text-cream-100 py-2.5 rounded-full text-xs font-medium hover:bg-forest-700 transition-colors">
                  Book This Treatment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────────────── */}
      <section id="addons" className="py-24 bg-cream-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Customize Your Treatment</p>
            <h2 className="font-serif text-5xl text-forest font-light">Add-Ons</h2>
            <p className="text-forest-500 mt-3 max-w-lg mx-auto">Enhance any facial with one or more of these targeted boosters.</p>
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
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Full Body Care</p>
            <h2 className="font-serif text-5xl text-white font-light">Body & Massage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bodyMassage.map((s) => (
              <div key={s.name} className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="font-serif text-xl text-white mb-2">{s.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between text-sm pt-3 border-t border-white/10">
                  <span className="font-bold text-gold">{s.price}</span>
                  <span className="text-white/40 text-xs">{s.duration}</span>
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
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Hair Removal</p>
            <h2 className="font-serif text-5xl text-forest font-light">Waxing Services</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {waxing.map((w) => (
              <div key={w.name} className="bg-white rounded-xl p-4 border border-forest-100 flex items-center justify-between hover:border-forest-300 transition-colors">
                <span className="text-sm text-forest font-medium">{w.name}</span>
                <span className="text-sm text-gold font-semibold ml-2 flex-shrink-0">{w.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white font-light mb-4">Not sure where to start?</h2>
          <p className="text-white/60 mb-8">Book a consultation and Claudia will personally recommend the perfect treatment for your skin.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
              Book a Consultation
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
