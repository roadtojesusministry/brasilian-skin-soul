import Image from "next/image";
import Link from "next/link";

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
  },
  {
    name: "Intraceuticals Oxygen Facial",
    tagline: "Hydrate · Lift · Rejuvenate",
    desc: "Cutting-edge Oxygen Therapy delivers customized serums deep into the skin for intense hydration and anti-aging benefits. Includes eye mask, extractions, décolleté treatment and shoulder massage.",
    price: "$XXX",
    duration: "60+ min",
    badge: "BEST SELLER",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
  {
    name: "Cold Plasma Rejuvenation",
    tagline: "Science Meets Skin",
    desc: "13,000 volts of cold plasma technology stimulate collagen and elastin production, amplifying absorption of skin boosters by up to 120×. A powerful non-invasive treatment with visible results.",
    price: "$XXX",
    duration: "60+ min",
    badge: "ADVANCED",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    name: "Therma-Lift Sculpting Facial",
    tagline: "Tighten · Tone · Sculpt",
    desc: "Combines Therma-Lift sculpting technology with microdermabrasion and oxygen infusion to visibly tighten, firm, and smooth the skin. A favorite for those wanting a lifted, contoured look.",
    price: "$XXX",
    duration: "80 min",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
  },
  {
    name: "Microcurrent Lifting Facial",
    tagline: "The Non-Surgical Facelift",
    desc: "Gentle microcurrent waves stimulate facial muscles and boost collagen, delivering a natural lift and firming effect. Visible results from the very first session.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
  },
  {
    name: "Gua Sha Oxygen Facial",
    tagline: "Ancient Healing · Modern Glow",
    desc: "Traditional Gua Sha lymphatic drainage technique combined with oxygen infusion for a deeply relaxing, detoxifying treatment that reduces puffiness and gives skin a radiant, sculpted look.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
  },
  {
    name: "Lift & Firm Facial",
    tagline: "Turn Back the Clock",
    desc: "A powerhouse anti-aging facial targeting fine lines, loss of elasticity, and dullness. Uses advanced peptides, firming masques, and lifting techniques customized to your skin.",
    price: "$XXX",
    duration: "90 min",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
  },
  {
    name: "Oxygen Glow Facial",
    tagline: "Instant Radiance",
    desc: "Pure oxygen infusion delivers vitamins and nutrients directly into the skin, leaving you with an immediate, camera-ready glow. Perfect before a special event.",
    price: "$XXX",
    duration: "60 min",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
  },
];

const specialty = [
  {
    name: "Dermaplane Glow Facial",
    desc: "Physical exfoliation removes dead skin cells and peach fuzz for silky-smooth, luminous skin. Makeup applies flawlessly after.",
    price: "$XXX", duration: "60+ min",
  },
  {
    name: "Acne Facial",
    desc: "A targeted treatment designed to deeply cleanse, reduce inflammation, clear breakouts, and balance oily skin. Gentle yet effective.",
    price: "$XXX", duration: "65 min",
  },
  {
    name: "Stem Cell Facial",
    desc: "Plant-derived stem cells stimulate skin renewal and repair at a cellular level. Exceptional for mature skin seeking deep regeneration.",
    price: "$XXX", duration: "90 min",
  },
  {
    name: "LED Photo Facial",
    desc: "Targeted light therapy reduces inflammation, kills acne bacteria, stimulates collagen, and accelerates healing — all with zero downtime.",
    price: "$XXX", duration: "45+ min",
  },
  {
    name: "Teen Glow Facial",
    desc: "Specially formulated for teenage skin. Gentle deep cleanse, extractions, and balancing treatment that builds healthy skincare habits early.",
    price: "$XXX", duration: "50 min",
  },
  {
    name: "Pampering Spa Facial",
    desc: "A relaxing, classic spa facial with deep cleanse, steam, extractions, masque, and a full face and shoulder massage. Pure bliss.",
    price: "$XXX", duration: "90 min",
  },
  {
    name: "Tropical Deluxe Facial",
    desc: "Head-to-toe tropical experience with papaya enzyme scrub, glycolic peel, oxygen therapy, seaweed hand treatment, and reflexology foot massage.",
    price: "$XXX", duration: "75+ min",
  },
  {
    name: "Executive Facial",
    desc: "An efficient, results-driven facial for the busy professional. Deep cleanse, exfoliation, extractions and hydration — in under an hour.",
    price: "$XXX", duration: "50 min",
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

const packages = [
  { name: "Glow Series — Microdermabrasion", desc: "3 sessions of professional microdermabrasion for progressive skin renewal and lasting smoothness.", price: "$XXX", sessions: 3 },
  { name: "Lift Series — Eye Lift Stem Cell", desc: "3 targeted eye lift treatments using stem cell technology to firm, brighten, and reduce fine lines.", price: "$XXX", sessions: 3 },
  { name: "Sculpt Series — Therma-Lift", desc: "3 Therma-Lift sculpting sessions for progressive tightening and contouring results.", price: "$XXX", sessions: 3 },
  { name: "Revive Series — Microcurrent", desc: "3 microcurrent sessions to train facial muscles, build lift, and restore youthful contours.", price: "$XXX", sessions: 3 },
  { name: "Radiance Series — LED Photo", desc: "3 LED photo treatments targeting your specific concern — acne, aging, or pigmentation.", price: "$XXX", sessions: 3 },
];

const badgeColors: Record<string, string> = {
  "FLAGSHIP": "bg-gold text-forest",
  "BEST SELLER": "bg-forest text-cream-100",
  "ADVANCED": "bg-forest-700 text-cream-100",
};

export default function Services() {
  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Hero */}
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

      {/* Signature Facials */}
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

      {/* Specialty Treatments */}
      <section id="advanced" className="py-24 bg-cream-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">For Every Skin Type</p>
            <h2 className="font-serif text-5xl text-forest font-light">Specialty Treatments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialty.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-forest-100 shadow-sm hover:shadow-md hover:border-forest-300 transition-all">
                <h3 className="font-serif text-xl text-forest mb-2">{s.name}</h3>
                <p className="text-sm text-forest-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between text-sm pt-3 border-t border-forest-100">
                  <span className="font-bold text-forest">{s.price}</span>
                  <span className="text-forest-400 text-xs">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section id="signature" className="py-24 max-w-6xl mx-auto px-6">
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
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-forest text-sm">{a.name}</p>
                  <span className="text-gold font-semibold text-sm">{a.price}</span>
                </div>
                <p className="text-xs text-forest-400 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body & Massage */}
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

      {/* Waxing */}
      <section id="advanced" className="py-24 bg-cream-200">
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

      {/* Packages */}
      <section id="signature" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Save More</p>
          <h2 className="font-serif text-5xl text-forest font-light">Treatment Packages</h2>
          <p className="text-forest-500 mt-3 max-w-lg mx-auto">Commit to your skin and save. Each package is 3 sessions of your chosen treatment for progressive, lasting results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm hover:shadow-md hover:border-gold transition-all">
              <div className="inline-flex items-center gap-1 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {p.sessions} Sessions
              </div>
              <h3 className="font-serif text-2xl text-forest mb-3 leading-tight">{p.name}</h3>
              <p className="text-sm text-forest-500 leading-relaxed mb-6">{p.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-forest-100">
                <span className="font-bold text-forest text-xl">{p.price}</span>
                <Link href="/booking" className="bg-forest text-cream-100 px-5 py-2 rounded-full text-xs font-medium hover:bg-forest-700 transition-colors">
                  Book Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white font-light mb-4">Not sure where to start?</h2>
          <p className="text-white/60 mb-8">Book a consultation and Claudia will personally recommend the perfect treatment for your skin.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold text-forest px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors">
              Book a Consultation
            </Link>
            <a href="tel:+18185775421" className="border border-white/30 text-white px-8 py-4 rounded-full text-sm hover:border-gold hover:text-gold transition-colors">
              📞 (818) 577-5421
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
