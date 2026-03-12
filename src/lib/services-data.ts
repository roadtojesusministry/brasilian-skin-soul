export type ServiceCategory = 'Transformation Series' | 'Signature Facials' | 'Body & Massage' | 'Waxing';

export interface Service {
  // Booking (required)
  id: string;
  name: string;
  category: ServiceCategory;
  duration_min: number;   // ALL 4 Transformation Series = 60. Exact minutes for slot blocking.
  price: number;          // dollars
  description: string;    // short, for booking UI

  // Services page (optional)
  tagline?: string;
  fullDesc?: string;
  badge?: string;
  iconName?: string;      // e.g. 'Crown', 'Leaf' — mapped to Lucide in the page
  addons?: string[];
  imagePath?: string;     // e.g. '/facial-royal-glow.jpg'
  displayDuration?: string; // e.g. '2 hr', '90+ min'

  // Transformation Series only
  sessions?: number;
  seriesGroup?: string;
  technologies?: string[];
  compound?: { headline: string; body: string };

  // Body & Massage
  pairWith?: string[];
}

export const SERVICES: Service[] = [
  // ── Transformation Series ──────────────────────────────────────────────────
  {
    id: 'lift-sculpt',
    name: 'Lift & Sculpt Series',
    category: 'Transformation Series',
    duration_min: 60,
    price: 495,
    description: 'Microcurrent + Therma-Lift + Cold Plasma',
    fullDesc: 'The ultimate non-surgical lifting protocol. All three technologies are delivered together in every session — not rotated, not split. Three progressive sessions combining microcurrent muscle training, Therma-Lift contouring, and Cold Plasma collagen stimulation. Each session builds on the last — the cumulative effect is a visibly lifted, firmed, and sculpted face.',
    sessions: 3,
    seriesGroup: 'Non-Surgical Lifting',
    technologies: ['Microcurrent Lifting', 'Therma-Lift Technology', 'Cold Plasma (13,000V)'],
    compound: {
      headline: 'Why three sessions compounds the lift.',
      body: 'Microcurrent re-educates facial muscles the same way the gym builds strength — each session, the muscle responds faster and holds longer because it remembers the signal. Meanwhile, Therma-Lift triggers a collagen remodeling wave that takes weeks to fully develop. When session two begins, session one\'s collagen is still maturing — two separate waves of new collagen building simultaneously. By session three, you have three overlapping repair cycles on top of each other. The lift after three sessions isn\'t three times one session. It\'s exponential.',
    },
  },
  {
    id: 'illuminate',
    name: 'Illuminate Series',
    category: 'Transformation Series',
    duration_min: 60,
    price: 470,
    description: 'LED + Oxygen + CO2',
    fullDesc: 'Heal, hydrate, and brighten from within. Three sessions layering targeted LED light therapy, pressurized oxygen infusion (Intraceuticals), and CO2 carboxytherapy firming. All three delivered together every session — healing, flooding, and firming the skin in one complete protocol. Each session compounds on the last — by session three, the radiance is undeniable.',
    sessions: 3,
    seriesGroup: 'Radiance & Healing',
    technologies: ['LED Photo Therapy', 'Oxygen Infusion (Intraceuticals)', 'CO2 Carboxytherapy'],
    compound: {
      headline: 'Why the glow deepens with every visit.',
      body: 'LED phototherapy activates chromophores inside skin cells — and cells already activated respond more strongly to the next exposure. Oxygen infusion in session two is flooding tissue that session one left more hydrated and receptive. CO2 carboxytherapy progressively trains your skin\'s microcirculation — with each session, your skin\'s baseline ability to deliver nutrients and flush waste improves not just during treatment but in the weeks between. By session three, you\'re illuminating skin that has been built to glow.',
    },
  },
  {
    id: 'resurface-refine',
    name: 'Resurface & Refine Series',
    category: 'Transformation Series',
    duration_min: 60,
    price: 425,
    description: 'Microdermabrasion + Dermaplane + Glycolic Peel',
    fullDesc: 'Three progressive sessions that strip away years of texture buildup and reveal the smoothest, most even-toned skin of your life. Diamond microdermabrasion resurfaces deep layers, surgical-grade Dermaplane clears peach fuzz and dead skin for a flawless canvas, and a professional glycolic peel dissolves surface damage to reveal bright, renewed skin beneath. Each session goes deeper — the cumulative result is a complexion that genuinely glows.',
    sessions: 3,
    seriesGroup: 'Texture & Tone',
    technologies: ['Microdermabrasion', 'Dermaplane Exfoliation', 'Glycolic Peel'],
    compound: {
      headline: 'Why the smoothness compounds across sessions.',
      body: 'The first session removes years of surface buildup — but the real transformation begins in session two, when the same modalities meet fresher, more responsive skin. Microdermabrasion triggers a collagen stimulus that thickens and strengthens the dermis, so session two\'s resurfacing goes deeper on healthier tissue. Glycolic acid\'s effectiveness increases with regular use as cellular turnover accelerates — by session three, your skin is in an active renewal cycle, not passively receiving treatment. Three sessions don\'t just resurface. They rebuild.',
    },
  },
  {
    id: 'cellular-renewal',
    name: 'Detox & Cellular Renewal Series',
    category: 'Transformation Series',
    duration_min: 60,
    price: 460,
    description: 'Stem Cell + Ultrasound + Gua Sha',
    fullDesc: 'Deep regeneration and detox from the inside out. Plant stem cell therapy triggers renewal at the deepest skin layer, ultrasound waves amplify product absorption and stimulate cellular activity, and Gua Sha lymphatic drainage sculpts and restores your skin\'s natural radiance. The three work together in every session — stem cells trigger the repair, ultrasound drives it deeper, Gua Sha flushes what\'s been broken down. Three sessions of that compounding is transformation at the cellular level.',
    sessions: 3,
    seriesGroup: 'Detox & Cellular Renewal',
    technologies: ['Plant Stem Cell Therapy', 'Ultrasound Therapy', 'Gua Sha Lymphatic Drainage'],
    compound: {
      headline: 'Why cellular renewal multiplies with repetition.',
      body: 'Plant stem cell factors don\'t work once and disappear — they accumulate, layering signals that progressively wake up more of your skin\'s dormant renewal capacity. Ultrasound creates a transient permeability effect that deepens with each session, meaning actives penetrate further because the tissue has already been conditioned. Gua Sha lymphatic pathways stay progressively clearer between sessions — meaning session three achieves a depth of detox that session one never could. The science isn\'t just adding up. It\'s compounding.',
    },
  },

  // ── Signature Facials ──────────────────────────────────────────────────────
  {
    id: 'royal-glow',
    name: 'Royal Glow Facial',
    category: 'Signature Facials',
    duration_min: 120,
    price: 350,
    description: 'Our signature 2-hour luxury treatment',
    tagline: 'The Ultimate Luxury Experience',
    fullDesc: 'Our most indulgent treatment. A full 2-hour journey combining oxygen therapy, microcurrent lifting, LED light, collagen masque, and a full massage. The pinnacle of what professional skincare can achieve — you\'ll leave looking and feeling genuinely transformed.',
    badge: 'FLAGSHIP',
    iconName: 'Crown',
    addons: ['Eye Lift — Stem Cell', 'CO2 Lift', 'Divine Décolleté'],
    imagePath: '/facial-royal-glow.jpg',
    displayDuration: '2 hr',
  },
  {
    id: 'brasilian-ritual',
    name: 'The Brasilian Ritual',
    category: 'Signature Facials',
    duration_min: 95,
    price: 285,
    description: 'Brand signature ritual treatment',
    tagline: 'Ancient Wisdom · Brazilian Soul',
    fullDesc: 'A 90-minute ceremony rooted in ancient healing traditions. Facial acupressure awakens energy points to lift and release deep tension. Brazilian lymphatic lifting massage sculpts and de-puffs. A reflexology session stimulates the body\'s healing pathways through targeted foot pressure points. A cooling jade eye mask de-puffs and restores the delicate eye area, while a nourishing bamboo face mask renews the complexion. Finished with a scalp massage to melt stress from the roots down. Every layer — face, feet, scalp — brought back into balance.',
    badge: 'HOLISTIC',
    iconName: 'Leaf',
    addons: ['Eye Lift — Stem Cell', 'Divine Décolleté', 'LED Light Therapy'],
    imagePath: '/facial-brasilian-ritual.jpg',
    displayDuration: '90+ min',
  },
  {
    id: 'therma-lift',
    name: 'Microderm Therma-Lift Facial',
    category: 'Signature Facials',
    duration_min: 80,
    price: 185,
    description: 'Radiofrequency lifting',
    tagline: 'Resurface · Sculpt · Illuminate',
    fullDesc: 'The ultimate surface-to-structure treatment. Diamond-tip microdermabrasion strips away texture and dead cells to reveal a fresh, smooth canvas — then Therma-Lift heat technology sculpts and tightens from the outside in. Two powerful modalities in one session: resurface the skin, then contour and lift it. Visible refinement and firmness from the very first visit.',
    badge: 'POPULAR',
    iconName: 'Flame',
    addons: ['LED Light Therapy', 'Eye Lift — Stem Cell', 'CO2 Lift'],
    imagePath: '/facial-therma-lift.jpg',
    displayDuration: '80 min',
  },
  {
    id: 'intraceuticals',
    name: 'Intraceuticals Oxygen Facial',
    category: 'Signature Facials',
    duration_min: 65,
    price: 195,
    description: 'Best-selling oxygen infusion',
    tagline: 'Hydrate · Lift · Rejuvenate',
    fullDesc: 'The gold standard in oxygen-based skin therapy — trusted by skin professionals worldwide. Pressurized oxygen drives customized serums deep into layers no topical product can reach. The result: intense hydration, visible plumping, and a luminous anti-aging lift.',
    iconName: 'Wind',
    addons: ['LED Light Therapy', 'Dermaplane', 'CO2 Lift'],
    imagePath: '/facial-intraceuticals.jpg',
    displayDuration: '60+ min',
  },
  {
    id: 'cold-plasma',
    name: 'Cold Plasma Rejuvenation',
    category: 'Signature Facials',
    duration_min: 60,
    price: 175,
    description: 'Advanced plasma technology',
    tagline: 'Science Meets Skin',
    fullDesc: '13,000 volts of cold plasma stimulate collagen and elastin while amplifying absorption of skin boosters by up to 120×. Opens micro-channels that drive active ingredients deeper than any topical product can reach. Non-invasive, with visible results from the very first session.',
    badge: 'ADVANCED',
    iconName: 'Zap',
    addons: ['Eye Lift — Stem Cell', 'Oxygen Therapy O2', 'Glow Mask'],
    imagePath: '/facial-cold-plasma.jpg',
    displayDuration: '60+ min',
  },
  {
    id: 'lymph-glow',
    name: 'Lymph & Glow',
    category: 'Signature Facials',
    duration_min: 90,
    price: 185,
    description: 'Lymphatic drainage + glow',
    tagline: 'Detox · Sculpt · Radiate',
    fullDesc: 'The ultimate detox facial. Traditional Gua Sha lymphatic drainage sculpts and de-puffs, pressurized oxygen infusion floods skin with nutrients, and targeted LED light therapy accelerates healing and brightens from within. Three powerful modalities — one deeply restorative ritual.',
    iconName: 'Droplets',
    addons: ['Deep Extractions', 'Eye Lift — Stem Cell', 'CO2 Lift'],
    imagePath: '/facial-lymph-glow.jpg',
    displayDuration: '90 min',
  },
  {
    id: 'stem-cell',
    name: 'Stem Cell Facial',
    category: 'Signature Facials',
    duration_min: 90,
    price: 185,
    description: 'Advanced stem cell therapy',
    tagline: 'Deep Cellular Renewal',
    fullDesc: 'Plant-derived stem cells penetrate deep to trigger cellular renewal, stimulate collagen, and repair damage at its source — improving elasticity, reducing fine lines, and restoring a youthful density that creams and serums simply can\'t achieve. For anyone seeking deep, lasting regeneration.',
    iconName: 'Dna',
    addons: ['Eye Lift — Stem Cell', 'Microcurrent Lifting', 'CO2 Lift'],
    imagePath: '/facial-stem-cell.jpg',
    displayDuration: '90 min',
  },
  {
    id: 'smooth-bright',
    name: 'Smooth & Bright Facial',
    category: 'Signature Facials',
    duration_min: 75,
    price: 175,
    description: 'Brightening treatment',
    tagline: 'Silky Smooth · Luminous · Renewed',
    fullDesc: 'Double exfoliation at its finest. Surgical-grade Dermaplane removes dead skin cells and peach fuzz for a silky-smooth canvas, then a Glycolic Peel resurfaces and brightens for lasting tone transformation. Makeup applies flawlessly. Skin glows for days.',
    iconName: 'Sun',
    addons: ['Oxygen Therapy O2', 'LED Light Therapy', 'Glow Mask'],
    imagePath: '/facial-smooth-bright.jpg',
    displayDuration: '70+ min',
  },
  {
    id: 'clear-skin',
    name: 'Clear Skin Protocol',
    category: 'Signature Facials',
    duration_min: 65,
    price: 165,
    description: 'Acne + clarifying',
    tagline: 'Cleanse · Heal · Balance',
    fullDesc: 'A clinical-grade acne treatment that goes beyond the surface. Deep extractions clear congestion, LED light therapy kills acne-causing bacteria and reduces inflammation, and a targeted balancing masque restores skin harmony. Designed for real results, not just a temporary fix.',
    iconName: 'ShieldCheck',
    addons: ['Deep Extractions', 'Glycolic Peel', 'Glow Mask'],
    imagePath: '/facial-clear-skin.jpg',
    displayDuration: '65 min',
  },
  {
    id: 'teen-glow',
    name: 'Teen Glow Facial',
    category: 'Signature Facials',
    duration_min: 50,
    price: 95,
    description: 'Gentle teen skincare',
    tagline: 'Gentle · Balancing · Fresh',
    fullDesc: 'Designed for teenage skin — gentle enough for sensitive, developing complexions, effective enough to make a real difference. A deep cleanse, careful extractions, and a balancing masque address real concerns without stripping or irritating. A perfect first step into healthy skincare habits.',
    iconName: 'Flower',
    addons: ['LED Light Therapy', 'Deep Extractions', 'Glow Mask'],
    imagePath: '/facial-teen-glow.jpg',
    displayDuration: '50 min',
  },

  // ── Body & Massage ────────────────────────────────────────────────────────
  {
    id: 'back-facial',
    name: 'Back Facial',
    category: 'Body & Massage',
    duration_min: 60,
    price: 120,
    description: 'Deep cleanse, exfoliation, steam, extractions & masque for your back',
    fullDesc: 'Everything your face gets — but for your back. Deep cleanse, exfoliation, steam, extractions, and masque.',
    displayDuration: '60 min',
    pairWith: ['Glow Mask', 'LED Light Therapy', 'Deep Extractions'],
  },
  {
    id: 'salt-glow',
    name: 'Salt Glow Back Treatment',
    category: 'Body & Massage',
    duration_min: 45,
    price: 95,
    description: 'Exfoliating salt scrub + nourishing body butter',
    fullDesc: 'Exfoliating salt scrub followed by nourishing body butter application for silky-smooth skin.',
    displayDuration: '45 min',
    pairWith: ['Infrared Wellness Wrap', 'Detox Aromawrap'],
  },
  {
    id: 'detox-aromawrap',
    name: 'Detox Aromawrap',
    category: 'Body & Massage',
    duration_min: 60,
    price: 115,
    description: 'Full-body detox wrap infused with essential oils',
    fullDesc: 'Full-body detox wrap infused with essential oils to draw out impurities and deeply nourish.',
    displayDuration: '60 min',
    pairWith: ['Reflexology', 'Infrared Wellness Wrap'],
  },
  {
    id: 'infrared-wrap',
    name: 'Infrared Wellness Wrap',
    category: 'Body & Massage',
    duration_min: 60,
    price: 105,
    description: 'Far-infrared technology for circulation and natural detox',
    fullDesc: 'Far-infrared technology promotes circulation, eases tension, and supports a natural detox.',
    displayDuration: '60 min',
    pairWith: ['Detox Aromawrap', 'Reflexology'],
  },
  {
    id: 'reflexology',
    name: 'Reflexology',
    category: 'Body & Massage',
    duration_min: 45,
    price: 85,
    description: 'Therapeutic foot reflexology targeting pressure points',
    fullDesc: 'Therapeutic foot reflexology targeting pressure points that correspond to organs and systems throughout the body — promoting circulation, reducing stress, and supporting the body\'s natural healing response.',
    displayDuration: '45 min',
    pairWith: ['Sculpt & Release Facial Massage'],
  },
  {
    id: 'sculpt-release',
    name: 'Sculpt & Release Facial Massage',
    category: 'Body & Massage',
    duration_min: 75,
    price: 130,
    description: 'Facial acupressure + Hadado lifting + deep scalp massage',
    fullDesc: 'A full facial and scalp massage ritual that does it all. Facial acupressure targets energy points to dissolve tension, stimulate circulation, and restore natural vitality — then the Hadado lifting technique sculpts, firms, and brings a luminous glow. Finished with a deep scalp massage for complete head-to-treatment relaxation. Two powerful techniques in one seamless session.',
    displayDuration: '75 min',
    pairWith: ['Reflexology', 'Eye Lift — Stem Cell'],
  },

  // ── Waxing ────────────────────────────────────────────────────────────────
  {
    id: 'wax-eyebrow',
    name: 'Eyebrow Shaping & Wax',
    category: 'Waxing',
    duration_min: 15,
    price: 25,
    description: 'Precision eyebrow shaping and wax',
  },
  {
    id: 'wax-eyebrow-tint',
    name: 'Eyebrow Tinting',
    category: 'Waxing',
    duration_min: 15,
    price: 25,
    description: 'Eyebrow color tinting',
  },
  {
    id: 'wax-lash-tint',
    name: 'Lash Tinting',
    category: 'Waxing',
    duration_min: 20,
    price: 30,
    description: 'Lash color tinting',
  },
  {
    id: 'wax-full-face',
    name: 'Full Face Wax',
    category: 'Waxing',
    duration_min: 30,
    price: 65,
    description: 'Complete facial hair removal',
  },
  {
    id: 'wax-lip',
    name: 'Lip Wax',
    category: 'Waxing',
    duration_min: 10,
    price: 15,
    description: 'Upper lip hair removal',
  },
  {
    id: 'wax-chin',
    name: 'Chin Wax',
    category: 'Waxing',
    duration_min: 10,
    price: 15,
    description: 'Chin hair removal',
  },
  {
    id: 'wax-cheeks',
    name: 'Cheeks Wax',
    category: 'Waxing',
    duration_min: 15,
    price: 20,
    description: 'Cheek hair removal',
  },
  {
    id: 'wax-nose',
    name: 'Nose Wax',
    category: 'Waxing',
    duration_min: 10,
    price: 15,
    description: 'Nose hair removal',
  },
  {
    id: 'wax-underarm',
    name: 'Underarm Wax',
    category: 'Waxing',
    duration_min: 15,
    price: 30,
    description: 'Underarm hair removal',
  },
  {
    id: 'wax-leg',
    name: 'Leg Wax',
    category: 'Waxing',
    duration_min: 45,
    price: 70,
    description: 'Full leg waxing',
  },
  {
    id: 'wax-french-bikini',
    name: 'French Bikini',
    category: 'Waxing',
    duration_min: 30,
    price: 55,
    description: 'French bikini wax',
  },
  {
    id: 'wax-brazilian',
    name: 'Brazilian Wax',
    category: 'Waxing',
    duration_min: 45,
    price: 65,
    description: 'Full Brazilian wax',
  },
  {
    id: 'wax-playboy',
    name: 'Playboy Wax',
    category: 'Waxing',
    duration_min: 45,
    price: 75,
    description: 'Playboy wax',
  },
  {
    id: 'wax-back',
    name: 'Back Wax',
    category: 'Waxing',
    duration_min: 30,
    price: 65,
    description: 'Back hair removal',
  },
  {
    id: 'wax-chest',
    name: 'Chest Wax',
    category: 'Waxing',
    duration_min: 30,
    price: 55,
    description: 'Chest hair removal',
  },
  {
    id: 'wax-arm',
    name: 'Arm Wax',
    category: 'Waxing',
    duration_min: 25,
    price: 50,
    description: 'Full arm wax',
  },
  {
    id: 'wax-shoulder',
    name: 'Shoulder Waxing',
    category: 'Waxing',
    duration_min: 20,
    price: 35,
    description: 'Shoulder hair removal',
  },
];

/** Grouped by category, sorted by canonical ORDER */
export function getServicesGrouped(): Record<string, Service[]> {
  const ORDER: ServiceCategory[] = ['Transformation Series', 'Signature Facials', 'Body & Massage', 'Waxing'];
  const raw = SERVICES.reduce<Record<string, Service[]>>((acc, svc) => {
    if (!acc[svc.category]) acc[svc.category] = [];
    acc[svc.category].push(svc);
    return acc;
  }, {});
  // Return a new object with keys sorted by ORDER
  const sorted: Record<string, Service[]> = {};
  ORDER.forEach(cat => { if (raw[cat]) sorted[cat] = raw[cat]; });
  // Any categories not in ORDER appended at the end
  Object.keys(raw).forEach(cat => { if (!sorted[cat]) sorted[cat] = raw[cat]; });
  return sorted;
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

/** Format duration as "1 hr 30 min" / "50 min" / "2 hr" */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}
