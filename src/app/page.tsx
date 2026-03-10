import Image from "next/image";
import Link from "next/link";
import ReviewsMarquee from "@/components/ReviewsMarquee";

const featuredServices = [
  {
    name: "Hydra Facial Intraceutical",
    desc: "Oxygen therapy designed to transform, hydrate, lift & rejuvenate your skin with cutting-edge infusion technology.",
    price: "$195+",
    duration: "60+ min",
    emoji: "✨",
  },
  {
    name: "Cold Plasma Rejuvenation",
    desc: "13,000 volts of plasma stimulate collagen & elastin, amplifying absorption of skin boosters by up to 120×.",
    price: "From $0",
    duration: "20+ min",
    emoji: "⚡",
  },
  {
    name: "Special Therma-Lift Microderm",
    desc: "Tighten, tone & smooth with microdermabrasion, Therma-Lift sculpting, oxygen infusion & deep extractions.",
    price: "$185",
    duration: "80 min",
    emoji: "🌿",
  },
  {
    name: "Cruise Facial",
    desc: "Head-to-toe tropical treatment: papaya enzyme, glycolic peel, oxygen therapy, reflexology & full massage.",
    price: "$185+",
    duration: "75+ min",
    emoji: "🌺",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-100 pt-20">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-forest rounded-bl-[120px]" />
        </div>
        <div className="absolute top-20 right-8 opacity-10 hidden lg:block">
          <Image src="/logo.png" alt="" width={420} height={420} className="object-contain" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Woodland Hills, CA</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest font-light leading-tight mb-6">
              Heal Your Skin.<br />
              <span className="italic">Transform</span><br />
              Your Life.
            </h1>
            <p className="text-forest-600 text-lg leading-relaxed mb-8 max-w-md">
              Advanced skincare treatments by Claudia Pieri — 28 years of experience, powered by a personal journey of healing and transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking"
                className="bg-forest text-cream-100 px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
                Book Your Treatment
              </Link>
              <Link href="/services"
                className="border border-forest text-forest px-8 py-4 rounded-full text-sm font-medium hover:bg-forest hover:text-cream-100 transition-colors">
                View Services
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-forest-500">
              <span className="flex items-center gap-2">⭐ 40+ 5-Star Reviews</span>
              <span className="flex items-center gap-2">🌿 28 Years Experience</span>
              <span className="flex items-center gap-2">💚 Advanced Technology</span>
            </div>
          </div>

          {/* Logo / image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-forest-200 rounded-full opacity-20 scale-110" />
              <Image
                src="/logo-circle-2.png"
                alt="Brasilian Skin Soul"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6 py-2">
        <div className="leaf-divider text-gold">🦋</div>
      </div>

      {/* ABOUT SNIPPET */}
      <section className="bg-forest text-cream-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Meet Your Therapist</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-6 leading-tight">
              Claudia Pieri
            </h2>
            <p className="text-forest-200 leading-relaxed mb-4">
              With over 28 years of experience as a passionate Brazilian Skin Care Therapist, Claudia has dedicated her life to helping clients achieve radiant skin and renewed self-confidence.
            </p>
            <p className="text-forest-200 leading-relaxed mb-8">
              A personal journey through profound challenges — including a brain tumor that brought about facial paralysis — deepened her understanding of both physical and emotional healing. This experience ignites her commitment to foster connections that heal the heart and soul.
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium">
              Read Claudia&apos;s Full Story →
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-forest-600 shadow-2xl">
              <Image src="/claudia.jpg" alt="Claudia Pieri" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest font-light">Signature Treatments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
              <div key={s.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-forest-100 hover:shadow-md hover:border-forest-300 transition-all group">
                <div className="text-3xl mb-4">{s.emoji}</div>
                <h3 className="font-serif text-xl text-forest mb-3 leading-tight">{s.name}</h3>
                <p className="text-sm text-forest-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between text-xs text-forest-400 mt-auto pt-4 border-t border-forest-100">
                  <span className="font-semibold text-forest text-sm">{s.price}</span>
                  <span>{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services"
              className="inline-block border border-forest text-forest px-8 py-4 rounded-full text-sm font-medium hover:bg-forest hover:text-cream-100 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <ReviewsMarquee />

      {/* CTA */}
      <section className="py-20 bg-forest text-cream-100 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Image src="/logo-circle.png" alt="" width={80} height={80} className="mx-auto mb-6 opacity-80 rounded-full" />
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Ready to Transform<br /><span className="italic">Your Skin?</span>
          </h2>
          <p className="text-forest-300 mb-8 text-lg">
            You don&apos;t have to face skin challenges alone. Let&apos;s embark on this journey together.
          </p>
          <Link href="/booking"
            className="inline-block bg-gold text-forest font-medium px-10 py-4 rounded-full text-sm hover:bg-gold-light transition-colors">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
