import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import TechInfoButton from "@/components/TechInfoButton";
import { Crown, Leaf, Wind, Zap, Flame, Activity, Droplets, Sun, ShieldCheck, Dna, Flower, Award } from "lucide-react";

export const metadata = {
  title: "Services | Brasilian Skin Soul — Woodland Hills, CA",
  description: "Explore our full menu of luxury facial treatments, body therapies, massage, waxing and treatment packages by Claudia Pieri in Woodland Hills, CA.",
};

const signature = [
  {
    name: "Royal Glow Facial",
    tagline: "The Ultimate Luxury Experience",
    desc: "Our most indulgent treatment. A full 2-hour journey combining oxygen therapy, microcurrent lifting, LED light, collagen masque, and a full massage. The pinnacle of what professional skincare can achieve — you'll leave looking and feeling genuinely transformed.",
    price: "$295",
    duration: "2 hr",
    badge: "FLAGSHIP",
    icon: Crown,
    addons: ["Eye Lift — Stem Cell", "CO2 Lift", "Divine Décolleté"],
  },
  {
    name: "The Brasilian Ritual",
    tagline: "Where Beauty Meets Ritual",
    desc: "The most complete and immersive treatment on our menu — and our most uniquely Brazilian one. Papaya exfoliation, glycolic peel, oxygen therapy, CO2 firming mask, seaweed hand treatment, reflexology foot massage, and a full face, neck and shoulder massage. 90 minutes of pure ritual.",
    price: "$215",
    duration: "90+ min",
    badge: "RITUAL",
    icon: Leaf,
    addons: ["Eye Lift — Stem Cell", "Divine Décolleté", "LED Light Therapy"],
  },
  {
    name: "Intraceuticals Oxygen Facial",
    tagline: "Hydrate · Lift · Rejuvenate",
    desc: "The gold standard in oxygen-based skin therapy — trusted by skin professionals worldwide. Pressurized oxygen drives customized serums deep into layers no topical product can reach. The result: intense hydration, visible plumping, and a luminous anti-aging lift.",
    price: "$195",
    duration: "60+ min",
    badge: "BEST SELLER",
    icon: Wind,
    addons: ["LED Light Therapy", "Dermaplane", "CO2 Lift"],
  },
  {
    name: "Cold Plasma Rejuvenation",
    tagline: "Science Meets Skin",
    desc: "13,000 volts of cold plasma stimulate collagen and elastin while amplifying absorption of skin boosters by up to 120×. Opens micro-channels that drive active ingredients deeper than any topical product can reach. Non-invasive, with visible results from the very first session.",
    price: "$175",
    duration: "60+ min",
    badge: "ADVANCED",
    icon: Zap,
    addons: ["Eye Lift — Stem Cell", "Oxygen Therapy O2", "Glow Mask"],
  },
  {
    name: "Microcurrent Lifting Facial",
    tagline: "The Non-Surgical Facelift",
    desc: "Gentle microcurrent waves re-educate facial muscles, boosting collagen and delivering a natural lift from the muscle layer out. Where Therma-Lift sculpts from the outside, microcurrent rebuilds the foundation from within. Visible lift from the very first visit.",
    price: "$165",
    duration: "90 min",
    icon: Activity,
    addons: ["Eye Lift — Stem Cell", "CO2 Lift", "Divine Décolleté"],
  },
  {
    name: "Therma-Lift Sculpting Facial",
    tagline: "Tighten · Tone · Sculpt",
    desc: "Uses targeted heat to contour and tighten the skin from the surface — where Microcurrent trains the muscles from within, Therma-Lift sculpts from the outside. Combined with microdermabrasion and oxygen infusion, each session leaves your face visibly lifted, firmed, and refined.",
    price: "$185",
    duration: "80 min",
    icon: Flame,
    addons: ["LED Light Therapy", "Eye Lift — Stem Cell", "CO2 Lift"],
  },
  {
    name: "Lymph & Glow",
    tagline: "Detox · Sculpt · Radiate",
    desc: "The ultimate detox facial. Traditional Gua Sha lymphatic drainage sculpts and de-puffs, pressurized oxygen infusion floods skin with nutrients, and targeted LED light therapy accelerates healing and brightens from within. Three powerful modalities — one deeply restorative ritual.",
    price: "$185",
    duration: "90 min",
    icon: Droplets,
    addons: ["Deep Extractions", "Eye Lift — Stem Cell", "CO2 Lift"],
  },
  {
    name: "Smooth & Bright Facial",
    tagline: "Silky Smooth · Luminous · Renewed",
    desc: "Double exfoliation at its finest. Surgical-grade Dermaplane removes dead skin cells and peach fuzz for a silky-smooth canvas, then a Glycolic Peel resurfaces and brightens for lasting tone transformation. Makeup applies flawlessly. Skin glows for days.",
    price: "$175",
    duration: "70+ min",
    icon: Sun,
    addons: ["Oxygen Therapy O2", "LED Light Therapy", "Glow Mask"],
  },
  {
    name: "Clear Skin Protocol",
    tagline: "Cleanse · Heal · Balance",
    desc: "A clinical-grade acne treatment that goes beyond the surface. Deep extractions clear congestion, LED light therapy kills acne-causing bacteria and reduces inflammation, and a targeted balancing masque restores skin harmony. Designed for real results, not just a temporary fix.",
    price: "$165",
    duration: "65 min",
    icon: ShieldCheck,
    addons: ["Deep Extractions", "Glycolic Peel", "Glow Mask"],
  },
  {
    name: "Stem Cell Facial",
    tagline: "Deep Cellular Renewal",
    desc: "Plant-derived stem cells penetrate deep to trigger cellular renewal, stimulate collagen, and repair damage at its source — improving elasticity, reducing fine lines, and restoring a youthful density that creams and serums simply can't achieve. For anyone seeking deep, lasting regeneration.",
    price: "$185",
    duration: "90 min",
    icon: Dna,
    addons: ["Eye Lift — Stem Cell", "Microcurrent Lifting", "CO2 Lift"],
  },
  {
    name: "Teen Glow Facial",
    tagline: "Gentle · Balancing · Fresh",
    desc: "Designed for teenage skin — gentle enough for sensitive, developing complexions, effective enough to make a real difference. A deep cleanse, careful extractions, and a balancing masque address real concerns without stripping or irritating. A perfect first step into healthy skincare habits.",
    price: "$95",
    duration: "50 min",
    icon: Flower,
    addons: ["LED Light Therapy", "Deep Extractions", "Glow Mask"],
  },
  {
    name: "The Power Facial",
    tagline: "Maximum Results · Zero Downtime",
    desc: "Built for the professional who demands results without downtime. Deep cleanse, surgical-grade Dermaplane exfoliation, extractions, and targeted hydration — all delivered in under an hour. No fuss, no recovery time. Just polished, refreshed, camera-ready skin.",
    price: "$165",
    duration: "60 min",
    icon: Award,
    addons: ["Microcurrent Lifting", "Glycolic Peel", "CO2 Lift"],
  },
];

const advancedPackages = [
  {
    name: "Lift & Sculpt Series",
    group: "Non-Surgical Lifting",
    desc: "The ultimate non-surgical lifting protocol. All three technologies are delivered together in every session — not rotated, not split. Three progressive sessions combining microcurrent muscle training, Therma-Lift contouring, and Cold Plasma collagen stimulation. Each session builds on the last — the cumulative effect is a visibly lifted, firmed, and sculpted face.",
    technologies: ["Microcurrent Lifting", "Therma-Lift Technology", "Cold Plasma (13,000V)"],
    price: "$495",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Illuminate Series",
    group: "Radiance & Healing",
    desc: "Heal, hydrate, and brighten from within. Three sessions layering targeted LED light therapy, pressurized oxygen infusion (Intraceuticals), and CO2 carboxytherapy firming. All three delivered together every session — healing, flooding, and firming the skin in one complete protocol. Each session compounds on the last — by session three, the radiance is undeniable.",
    technologies: ["LED Photo Therapy", "Oxygen Infusion (Intraceuticals)", "CO2 Carboxytherapy"],
    price: "$435",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Resurface & Refine Series",
    group: "Texture & Tone",
    desc: "Three progressive sessions that strip away years of texture buildup and reveal the smoothest, most even-toned skin of your life. Diamond microdermabrasion resurfaces deep layers, surgical-grade Dermaplane clears peach fuzz and dead skin for a flawless canvas, and a professional glycolic peel dissolves surface damage to reveal bright, renewed skin beneath. Each session goes deeper — the cumulative result is a complexion that genuinely glows.",
    technologies: ["Microdermabrasion", "Dermaplane Exfoliation", "Glycolic Peel"],
    price: "$360",
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
    desc: "Deep regeneration from the inside out. Plant stem cell therapy triggers renewal at the deepest skin layer, far-infrared promotes circulation and natural detox, and Gua Sha lymphatic drainage sculpts and restores your skin's natural radiance. The three work together in every session — stem cells trigger the repair, infrared accelerates it, Gua Sha flushes what's been broken down. Three sessions of that compounding is transformation at the cellular level.",
    technologies: ["Plant Stem Cell Therapy", "Far-Infrared Technology", "Gua Sha Lymphatic Drainage"],
    price: "$420",
    sessions: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
];

const addons = [
  { name: "Dermaplane", desc: "Removes dead skin cells and fine facial hair for silky smooth skin.", price: "$45" },
  { name: "Glycolic Peel", desc: "Resurfaces skin and brightens tone with alpha hydroxy acid.", price: "$35" },
  { name: "LED Light Therapy", desc: "Targeted light wavelengths for healing, collagen boost, or acne control.", price: "$40" },
  { name: "CO2 Lift", desc: "Carboxytherapy mask delivers instant firming and brightening.", price: "$45" },
  { name: "Eye Lift — Stem Cell", desc: "Targeted stem cell treatment to lift and firm the eye area.", price: "$50" },
  { name: "Oxygen Therapy O2", desc: "Pure oxygen infusion to amplify any treatment with a deep hydration boost.", price: "$40" },
  { name: "Microdermabrasion", desc: "Physical resurfacing for smooth, even-toned skin.", price: "$55" },
  { name: "Microcurrent Lifting", desc: "Electrical muscle stimulation for instant lift and firmness.", price: "$55" },
  { name: "Therma-Lift", desc: "Heat-based sculpting technology to tighten and contour.", price: "$60" },
  { name: "Deep Extractions", desc: "Professional deep pore cleansing to remove blackheads and congestion.", price: "$30" },
  { name: "Divine Décolleté", desc: "Targeted treatment for neck and chest area — reduces sun damage and fine lines.", price: "$45" },
  { name: "Glow Mask", desc: "Brightening and hydrating masque for a radiant finish.", price: "$25" },
];

const bodyMassage = [
  { name: "Back Facial", desc: "Everything your face gets — but for your back. Deep cleanse, exfoliation, steam, extractions, and masque.", price: "$120", duration: "60 min" },
  { name: "Salt Glow Back Treatment", desc: "Exfoliating salt scrub followed by nourishing body butter application for silky-smooth skin.", price: "$95", duration: "45 min" },
  { name: "Detox Aromawrap", desc: "Full-body detox wrap infused with essential oils to draw out impurities and deeply nourish.", price: "$115", duration: "60 min" },
  { name: "Infrared Wellness Wrap", desc: "Far-infrared technology promotes circulation, eases tension, and supports a natural detox.", price: "$105", duration: "60 min" },
  { name: "Reflexology + Foot Scrub", desc: "Therapeutic reflexology massage paired with a pampering pineapple enzyme foot scrub.", price: "$85", duration: "45 min" },
  { name: "Acupressure Face & Scalp Massage", desc: "Ancient pressure point therapy on the face and scalp to release tension and promote circulation.", price: "$80", duration: "45 min" },
  { name: "Hadado Japanese Facelift Massage", desc: "Traditional Japanese lifting massage technique that firms, sculpts, and brings a natural glow.", price: "$110", duration: "60 min" },
];

const waxing = [
  { name: "Eyebrow Shaping & Wax", price: "$25" },
  { name: "Eyebrow Tinting", price: "$25" },
  { name: "Lash Tinting", price: "$30" },
  { name: "Full Face Wax", price: "$65" },
  { name: "Lip Wax", price: "$15" },
  { name: "Chin Wax", price: "$15" },
  { name: "Cheeks Wax", price: "$20" },
  { name: "Nose Wax", price: "$15" },
  { name: "Underarm Wax", price: "$30" },
  { name: "Leg Wax", price: "$70" },
  { name: "French Bikini", price: "$55" },
  { name: "Brazilian Wax", price: "$65" },
  { name: "Playboy Wax", price: "$75" },
  { name: "Back Wax", price: "$65" },
  { name: "Chest Wax", price: "$55" },
  { name: "Arm Wax", price: "$50" },
  { name: "Shoulder Waxing", price: "$35" },
];

const badgeColors: Record<string, string> = {
  "FLAGSHIP": "bg-gold text-forest",
  "BEST SELLER": "bg-forest text-cream-100",
  "ADVANCED": "bg-forest-700 text-cream-100",
  "POPULAR": "bg-gold text-forest",
  "RITUAL": "bg-gold text-forest",
};

export default function Services() {
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
                      <p className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium mb-1">{p.group}</p>
                      <h3 className="font-serif text-2xl text-gold leading-tight">{p.name}</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="inline-flex items-center gap-1 bg-gold/15 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {p.sessions} Sessions
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="text-xs border border-white/15 text-white/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-5">
                  <TechInfoButton techNames={p.technologies} groupName={p.group} />
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
            <div key={s.name}
              className="gold-hover group bg-white rounded-2xl border border-forest-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex flex-col flex-1">
                {/* Slim green strip */}
                <div className="relative bg-forest flex flex-col items-center justify-center py-5 px-4 text-center">
                  <s.icon className="w-6 h-6 text-gold mb-2 opacity-90" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-cream-100 leading-tight">{s.name}</h3>
                  {s.badge && (
                    <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[s.badge]}`}>
                      {s.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gold font-medium uppercase tracking-wide mb-2">{s.tagline}</p>
                <p className="text-sm text-forest-500 leading-relaxed flex-1">{s.desc}</p>
                {s.addons && (
                  <div className="mt-2">
                    <p className="text-xs text-forest-300 mb-1.5">Enhance with:</p>
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
                  <span className="font-bold text-forest text-lg">{s.price}</span>
                  <span className="text-xs text-forest-400">{s.duration}</span>
                </div>
                <Link href="/booking" className="mt-3 block text-center bg-forest text-cream-100 py-2.5 rounded-full text-xs font-medium hover:bg-forest-700 transition-colors">
                  Book This Treatment
                </Link>
                </div>{/* end inner p-5 */}
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
