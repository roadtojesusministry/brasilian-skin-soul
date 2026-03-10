import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Claudia Pieri | Brasilian Skin Soul — Woodland Hills, CA",
  description: "Meet Claudia Pieri — passionate Brasilian Skin Care Therapist with 28+ years of experience. Her personal journey of healing deepens every treatment she gives.",
};

const milestones = [
  { year: "1996", label: "Career began at Best Face & Body Spa" },
  { year: "2000s", label: "Mastered LED therapy, glycolic peels & microdermabrasion" },
  { year: "2010s", label: "Embraced cutting-edge technologies: Therma-Lift, Cold Plasma, Microcurrent" },
  { year: "2020", label: "Founded Brasilian SkinSoul — her own practice" },
  { year: "Today", label: "28+ years of experience, 50+ five-star reviews, clients for 20+ years" },
];

export default function About() {
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
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">The Heart Behind the Brand</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-light mb-6">Meet Claudia</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Passionate Brasilian Skin Care Therapist. Healer. Founder. A woman whose personal journey of transformation deepens every treatment she gives.
          </p>
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
                <p className="text-white/70 text-sm tracking-wide">Founder & Lead Skincare Therapist</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "28+", label: "Years Experience" },
                { value: "50+", label: "5-Star Reviews" },
                { value: "20+", label: "Year Clients" },
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
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Her Story</p>
              <h2 className="font-serif text-4xl text-forest font-light italic leading-tight mb-6">
                A Healer with Love<br />in Her Heart
              </h2>
            </div>

            {[
              "Your passionate Brasilian Skin Care Therapist with over 28 years of experience, I am dedicated to helping you achieve radiant skin and renewed self-confidence. My journey began at Best Face & Body Spa, where I perfected my craft through various treatments, including LED therapy, glycolic peels, microdermabrasion, and more specialized techniques.",
              "My love for skincare drives me to explore the latest technologies, ensuring that I continually expand my knowledge for your benefit. Life has gifted me with profound challenges, including a brain tumor that changed my face and brought about facial paralysis. This journey deepened my understanding of both physical and emotional healing, igniting my commitment to foster connections that heal the heart and soul.",
              "As the proud founder of Brasilian SkinSoul, my mission is clear: to heal your skin while boosting your self-esteem. I believe that true beauty emerges from within, and when your skin is healthy, your inner beauty shines brighter. There's nothing I cherish more than using advanced techniques and premium products to bring rejuvenation and transformation to your skin.",
              "Heartfelt words from clients like you — \"You have a magic touch\" and \"Thank you for healing my skin\" — inspire me daily. Knowing that I can positively impact your life motivates me to deliver exceptional service with every visit. I value the connections we build, and I'm committed to listening to your unique needs as both a healer and a supporter of your overall well-being.",
            ].map((para, i) => (
              <p key={i} className="text-forest-600 leading-relaxed text-lg">{para}</p>
            ))}

            {/* Highlighted quote */}
            <div className="border-l-4 border-gold pl-6 py-2 bg-cream-200 rounded-r-xl">
              <p className="font-serif text-2xl text-forest italic leading-relaxed">
                &ldquo;You don&apos;t have to face skin challenges alone. At Brasilian SkinSoul, I invite you to experience the gentle yet powerful touch that can make a real difference in your life. Let&apos;s embark on this journey together and uncover the beauty that lies within you!&rdquo;
              </p>
              <p className="text-forest-400 text-sm mt-3 font-medium">— Claudia Pieri</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/booking" className="bg-forest text-cream-100 px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
                Book with Claudia
              </Link>
              <Link href="/services" className="border border-forest text-forest px-8 py-4 rounded-full text-sm font-medium hover:bg-forest hover:text-cream-100 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">The Journey</p>
            <h2 className="font-serif text-4xl text-white font-light">28 Years of Mastery</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-forest-600" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
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
            Ready to Start<br /><span className="italic">Your Journey?</span>
          </h2>
          <p className="text-forest-500 mb-8">Experience the gentle yet powerful touch that makes a real difference.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-forest text-cream-100 px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors">
              Book an Appointment
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
