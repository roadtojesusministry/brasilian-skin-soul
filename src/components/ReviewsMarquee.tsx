"use client";

const reviews = [
  { name: "Brittany Paden", text: "I absolutely love getting facials with Claudia. She is very knowledgeable and very kind. My skin has been improving since seeing her and I am so grateful. I would definitely recommend her services!" },
  { name: "Michele Lovio", text: "I have gone to Claudia for my skincare needs for more than 10 years now. I'm constantly impressed by her continuing education in the newest skincare treatments. This is clearly her passion." },
  { name: "Holly Hessel-Altman", text: "Claudia provides amazing facial treatments that rejuvenate and tighten my skin and reduce wrinkles. Her massages are relaxing and help reduce stress. I have been going to her for a number of years and she is wonderful." },
  { name: "Angelica Gisele Queiros", text: "I absolutely love my facials at Brasilian Skin Soul. Claudia is an expert in treating my difficult skin conditions — melasma combined with mature skin. I feel like a million dollars after my facial!" },
  { name: "Andrea Baca", text: "Claudia is amazing. I have gone to her for waxing and facials and she does both so well! Her facials are so relaxing and I always see an improvement in my skin. She's so gentle and kind. I always recommend her!" },
  { name: "Donna Holden", text: "I discovered Claudia many years ago at Best Face and Body. She is absolutely the best. I now live in Arizona and always book a facial with Claudia when I am back in California. She is incredibly knowledgeable." },
  { name: "Alexa Wheeler", text: "I've been going to Claudia for YEARS and she is the best! She walks you through every step of the facial, gives great product suggestions, and has helped my skin improve. I highly recommend her." },
  { name: "Jacqueline Da Silva", text: "Claudia's facials are truly a relaxing and pampering experience. She offers a wide variety of treatments that can be customized to fit your skin needs. I highly recommend Claudia!" },
  { name: "Susan Layfield", text: "I cannot recommend Claudia highly enough. I have been going to her for facials for over 15 years and have always received appropriate and effective professional treatments." },
  { name: "Eliana Howe", text: "Claudia is truly remarkable and she has been taking care of my skin for over 20 years. People compliment me on how healthy my skin looks and I always thank Claudia for all the different facials I've enjoyed." },
  { name: "Tery Smith", text: "Claudia is a wonderful person, kind, gentle and giving. I've been going to Claudia for many years and will for many more to come. She always knows exactly what my skin needs. ❤️" },
  { name: "Noelle Hunt", text: "I have been a client of Claudia's for 20+ years and every type of treatment has been an amazing experience. Claudia continues to learn new techniques to offer her clients the very best." },
  { name: "Dr. Eric Toder D.O.", text: "I recently had an excellent facial at Brasilian SkinSoul and my skin looks absolutely amazing. She expertly assessed my concerns and customized the appropriate treatment. Her touch is gentle and incredibly effective." },
  { name: "Dri Adorro", text: "Love Claudia. I have visited many other places before I met Claudia, and I am glad she came into my life. You walk out not only feeling good, but looking amazing, with an incredible glowing skin!" },
  { name: "Rackel Savadian", text: "I have been a client of Claudia's for close to twenty years. She is highly skilled, always recommending the best and most effective treatment for my skin. I always leave feeling radiant and refreshed." },
  { name: "Elizabete Pizzoferrato", text: "I have known Claudia for over twenty-five years and she has been taking such great care of me. She is the BEST. I recommend her services to anyone eager to find the best skincare specialist." },
  { name: "Gary Archer", text: "Love love love — Claudia is the best facialist. Been a client for 12 years, every facial is fantastic. Thank you!" },
  { name: "Yolanda Rodriguez", text: "Every facial I get with Claudia is heavenly! She always goes above and beyond. I've been coming to Claudia for 8 years and always get compliments on my skin — she is to thank ☺️" },
  { name: "Bonnie Best", text: "Claudia is an excellent aesthetician. Her expertise in every area of skincare is amazing. She trained & excelled at BFB Day Spa for 25 years, winning every award for excellence. She is a healer with love in her heart." },
  { name: "Erin Mason", text: "I've been trusting Claudia with my skin for over 20 years! More than an aesthetician, she is a healer. She knows how to nurture skin and soul. She provides a boost of vitality, youthfulness, and inner peace." },
  { name: "Lisa Falco", text: "I have been going to Claudia for years and just started bringing my teenage daughter as well. She is effective and caring. It is a wonderful experience to get facial treatments from Claudia. I highly recommend her!" },
  { name: "Lúcia Petrucci de Melo", text: "Claudia is an extraordinary professional. She has magic hands and offers quality service. Highly recommended." },
  { name: "Josy Johnson", text: "I absolutely loved the experience! Claudia is not only incredibly skilled and passionate about her work, but she also has a beautiful soul that makes you feel at ease from the moment you walk in." },
  { name: "Susan Jaeger", text: "I have been going to Claudia for years! She has the most magical hands and her facials are beyond heaven. She also does an amazing job waxing. I highly highly recommend Claudia!" },
  { name: "Francie Kaplan", text: "Wow!! Claudia is a fantastic esthetician. Every detail of the room is relaxing from the lighting to the pillow under your head. It's spotless too. Most importantly, she is kind, thoughtful and gentle." },
  { name: "Yolanda Kronnick", text: "Claudia is an excellent professional with lots of experience. Once you go to her, you want to come back more and more — it makes you feel loved and cared for. I totally recommend her services." },
  { name: "Andrea da Silva", text: "Claudia is absolutely terrific! Very professional, super knowledgeable and super kind. She purifies and makes glow not just your skin, but your soul with her kindness. She deserves all the stars ⭐️" },
  { name: "Tracy Rosenfield", text: "20 years later and Claudia is simply the best. She is so knowledgeable and amazing and I love every treatment I do with her." },
  { name: "Marty Hougen", text: "A hidden gem in Woodland Hills! Claudia is marvelous and her treatments are designed for each individual. Take an hour to be pampered and refreshed. You'll be glad you did!" },
  { name: "Rosemary Hintz", text: "As always, a perfect treatment today with Claudia. Facial, foot and hand massage. Just lovely!" },
  { name: "Danielle Rider", text: "Claudia is the absolute best! I've been getting facials with Claudia for the past 10 years. I have rosacea and fairly sensitive skin — she always tailors my facial to my needs." },
  { name: "Dani K'elly", text: "My experience with the facial cleansing and plasma treatment was incredible! My skin needed a boost and she truly applied the perfect treatment for my tired and dehydrated skin. I love Claudia 💯❤️" },
  { name: "Welberlânia Barbosa", text: "Claudia is simply wonderful — crossing her path felt like divine providence. After trying many dermatologists and estheticians, Claudia finally gave me the perfect routine for my skin." },
  { name: "Lucas' Mom", text: "I treated myself for a Cruise Facial and felt so overwhelmingly relaxed with Claudia's gentle hands. She explained every step of the pampering process. Whenever I see her, I let go and let Claudia take away all my stress 🥰" },
  { name: "Carole Mazer", text: "Claudia is not only incredibly effective and efficient at what she does, but she is also dependable, kind, mindful and thoughtful. Having a facial from her is always a wonderful experience!" },
  { name: "Nina Berger", text: "Facial with Claudia is always heavenly. Looking forward to the next facial every time." },
  { name: "Angela Wilson", text: "A visit to Claudia is always a wonderful experience as she really understands her craft. I highly recommend her." },
  { name: "Blake Doyle", text: "I have been a client of Claudia's for many years and will be for years to come. A true professional with decades of experience!" },
  { name: "Personal Assistant", text: "We are truly delighted to have discovered Claudia! As someone responsible for selecting only the highest-quality services for my employer, she exceeded every expectation." },
  { name: "Art M", text: "Claudia is a very beautiful person inside and out, very knowledgeable and caring in her craft. She made me feel very comfortable and cared for — my skin feels much better after my very first facial!" },
  { name: "Alessandra Raschkovsky", text: "Amazing Diamond Peel experience with Claudia! ⭐⭐⭐⭐⭐ I couldn't be happier — she made me feel comfortable throughout the entire process and the results were outstanding." },
];

const half = Math.ceil(reviews.length / 2);
const row1 = reviews.slice(0, half);
const row2 = reviews.slice(half);

function ReviewCard({ review }: { review: { name: string; text: string } }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-forest-100 shadow-sm mx-3">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-forest-700 text-sm leading-relaxed mb-4 line-clamp-4">&ldquo;{review.text}&rdquo;</p>
      <p className="text-xs font-semibold text-forest-500">— {review.name}</p>
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <section className="py-20 bg-cream-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Client Love</p>
        <h2 className="font-serif text-4xl md:text-5xl text-forest font-light mb-4">What People Are Saying</h2>
        <div className="flex items-center justify-center gap-8 mt-4 text-sm text-forest-500">
          <span className="flex items-center gap-2">⭐ <strong className="text-forest">5.0</strong> on Google</span>
          <span className="flex items-center gap-2">💬 <strong className="text-forest">50+</strong> Reviews</span>
          <span className="flex items-center gap-2">🌿 <strong className="text-forest">20+ year</strong> loyal clients</span>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="https://www.google.com/search?q=Brasilian+SkinSoul+by+Claudia+Pieri+Woodland+Hills"
          target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 border border-forest text-forest px-6 py-3 rounded-full text-sm font-medium hover:bg-forest hover:text-cream-100 transition-colors">
          Read All Reviews on Google →
        </a>
      </div>
    </section>
  );
}
