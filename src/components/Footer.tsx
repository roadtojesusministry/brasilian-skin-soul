import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image src="/logo-circle.png" alt="Brasilian Skin Soul" width={64} height={64} className="rounded-full mb-4 opacity-90" />
            <p className="font-serif text-2xl text-cream-100 mb-2">Brasilian Skin Soul</p>
            <p className="text-sm text-forest-300 tracking-widest uppercase mb-4">by Claudia Pieri</p>
            <p className="text-sm text-forest-300 leading-relaxed">
              Healing skin. Restoring confidence. Transforming lives.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/services" },
                { label: "About Claudia", href: "/about" },
                { label: "Book Appointment", href: "/booking" },
                { label: "Contact", href: "/contact" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="text-sm text-forest-300 hover:text-cream-100 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-4">Find Us</p>
            <div className="flex flex-col gap-3 text-sm text-forest-300">
              <p>📍 5303 Comercio Ln, Suite #2<br />Woodland Hills, CA 91364</p>
              <p>📞 <a href="tel:+18185775421" className="hover:text-cream-100 transition-colors">(818) 577-5421</a></p>
              <p>📸 <a href="https://instagram.com/brasilianskinsoul" target="_blank" rel="noopener" className="hover:text-cream-100 transition-colors">@brasilianskinsoul</a></p>
              <Link href="/booking"
                className="mt-2 inline-block bg-gold text-forest font-medium px-5 py-2.5 rounded-full text-sm hover:bg-gold-light transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 pt-6 text-center text-xs text-forest-400">
          © {new Date().getFullYear()} Brasilian Skin Soul by Claudia Pieri. All rights reserved. · Woodland Hills, CA
        </div>
      </div>
    </footer>
  );
}
