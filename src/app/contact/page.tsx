export const metadata = {
  title: "Contact | Brasilian Skin Soul — Woodland Hills, CA",
  description: "Visit Brasilian Skin Soul by Claudia Pieri at 5303 Comercio Ln Suite #2, Woodland Hills, CA. Call (818) 577-5421 to book.",
};

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-cream-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-forest font-light">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.15em] text-gold mb-4">Location</p>
              <p className="font-serif text-2xl text-forest mb-2">Brasilian Skin Soul</p>
              <p className="text-forest-600 leading-relaxed">
                5303 Comercio Lane, Suite #2<br />
                Woodland Hills, CA 91364
              </p>
              <a
                href="https://maps.google.com/?q=5303+Comercio+Lane+Suite+2+Woodland+Hills+CA+91364"
                target="_blank" rel="noopener"
                className="inline-block mt-4 text-sm text-forest underline underline-offset-2 hover:text-gold transition-colors">
                Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.15em] text-gold mb-4">Phone</p>
              <a href="tel:+18185775421" className="font-serif text-3xl text-forest hover:text-gold transition-colors">
                (818) 577-5421
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.15em] text-gold mb-4">Hours</p>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday", hours: "Closed" },
                  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Friday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-forest-500">{day}</span>
                    <span className={hours === "Closed" ? "text-forest-300" : "text-forest font-medium"}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map + Book CTA */}
          <div className="space-y-8">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-forest-100 shadow-sm h-72">
              <iframe
                title="Brasilian Skin Soul Location"
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3e-o&q=5303+Comercio+Lane+Suite+2+Woodland+Hills+CA+91364"
              />
            </div>

            {/* Book CTA */}
            <div className="bg-forest text-cream-100 rounded-2xl p-8 text-center">
              <h2 className="font-serif text-3xl mb-3">Ready to Book?</h2>
              <p className="text-forest-300 mb-6 text-sm leading-relaxed">
                Call us or book online — Claudia is ready to help you achieve radiant, healthy skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+18185775421"
                  className="bg-gold text-forest font-medium px-6 py-3 rounded-full text-sm hover:bg-gold-light transition-colors">
                  📞 Call (818) 577-5421
                </a>
                <a href="/booking"
                  className="border border-cream-300 text-cream-100 px-6 py-3 rounded-full text-sm hover:bg-forest-700 transition-colors">
                  Book Online
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm text-center">
              <p className="text-xs uppercase tracking-[0.15em] text-gold mb-4">Follow Along</p>
              <a href="https://instagram.com/brasilianskinsoul" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors">
                📸 @brasilianskinsoul
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
