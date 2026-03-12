export interface Service {
  id: string;
  name: string;
  category: string;
  duration_min: number;
  price: number;
  description: string;
}

export const SERVICES: Service[] = [
  // ── Transformation Series ──────────────────────────────────────────────────
  {
    id: 'lift-sculpt',
    name: 'Lift & Sculpt Series',
    category: 'Transformation Series',
    duration_min: 120,
    price: 495,
    description: 'Microcurrent + Therma-Lift + Cold Plasma',
  },
  {
    id: 'illuminate',
    name: 'Illuminate Series',
    category: 'Transformation Series',
    duration_min: 90,
    price: 470,
    description: 'LED + Oxygen + CO2',
  },
  {
    id: 'resurface-refine',
    name: 'Resurface & Refine Series',
    category: 'Transformation Series',
    duration_min: 90,
    price: 425,
    description: 'Microdermabrasion + Dermaplane + Glycolic Peel',
  },
  {
    id: 'cellular-renewal',
    name: 'Cellular Renewal Series',
    category: 'Transformation Series',
    duration_min: 90,
    price: 460,
    description: 'Stem Cell + Far-Infrared + Gua Sha',
  },

  // ── Signature Facials ──────────────────────────────────────────────────────
  {
    id: 'royal-glow',
    name: 'Royal Glow Facial',
    category: 'Signature Facials',
    duration_min: 120,
    price: 350,
    description: 'Our signature 2-hour luxury treatment',
  },
  {
    id: 'brasilian-ritual',
    name: 'The Brasilian Ritual',
    category: 'Signature Facials',
    duration_min: 95,
    price: 285,
    description: 'Brand signature ritual treatment',
  },
  {
    id: 'intraceuticals',
    name: 'Intraceuticals Oxygen Facial',
    category: 'Signature Facials',
    duration_min: 65,
    price: 195,
    description: 'Best-selling oxygen infusion',
  },
  {
    id: 'cold-plasma',
    name: 'Cold Plasma Rejuvenation',
    category: 'Signature Facials',
    duration_min: 60,
    price: 175,
    description: 'Advanced plasma technology',
  },
  {
    id: 'therma-lift',
    name: 'Therma-Lift Sculpting Facial',
    category: 'Signature Facials',
    duration_min: 80,
    price: 185,
    description: 'Radiofrequency lifting',
  },
  {
    id: 'microcurrent',
    name: 'Microcurrent Lifting Facial',
    category: 'Signature Facials',
    duration_min: 90,
    price: 165,
    description: 'Bioelectric lifting',
  },
  {
    id: 'lymph-glow',
    name: 'Lymph & Glow',
    category: 'Signature Facials',
    duration_min: 90,
    price: 185,
    description: 'Lymphatic drainage + glow',
  },
  {
    id: 'stem-cell',
    name: 'Stem Cell Facial',
    category: 'Signature Facials',
    duration_min: 90,
    price: 185,
    description: 'Advanced stem cell therapy',
  },
  {
    id: 'smooth-bright',
    name: 'Smooth & Bright Facial',
    category: 'Signature Facials',
    duration_min: 75,
    price: 175,
    description: 'Brightening treatment',
  },
  {
    id: 'clear-skin',
    name: 'Clear Skin Protocol',
    category: 'Signature Facials',
    duration_min: 65,
    price: 165,
    description: 'Acne + clarifying',
  },
  {
    id: 'power-facial',
    name: 'The Power Facial',
    category: 'Signature Facials',
    duration_min: 60,
    price: 165,
    description: 'Results-driven essentials',
  },
  {
    id: 'teen-glow',
    name: 'Teen Glow Facial',
    category: 'Signature Facials',
    duration_min: 50,
    price: 95,
    description: 'Gentle teen skincare',
  },

  // ── Body & Massage ────────────────────────────────────────────────────────
  {
    id: 'back-facial',
    name: 'Back Facial',
    category: 'Body & Massage',
    duration_min: 60,
    price: 120,
    description: 'Deep cleanse, exfoliation, steam, extractions & masque for your back',
  },
  {
    id: 'salt-glow',
    name: 'Salt Glow Back Treatment',
    category: 'Body & Massage',
    duration_min: 45,
    price: 95,
    description: 'Exfoliating salt scrub + nourishing body butter',
  },
  {
    id: 'detox-aromawrap',
    name: 'Detox Aromawrap',
    category: 'Body & Massage',
    duration_min: 60,
    price: 115,
    description: 'Full-body detox wrap infused with essential oils',
  },
  {
    id: 'infrared-wrap',
    name: 'Infrared Wellness Wrap',
    category: 'Body & Massage',
    duration_min: 60,
    price: 105,
    description: 'Far-infrared technology for circulation and natural detox',
  },
  {
    id: 'reflexology',
    name: 'Reflexology',
    category: 'Body & Massage',
    duration_min: 45,
    price: 85,
    description: 'Therapeutic foot reflexology targeting pressure points',
  },
  {
    id: 'sculpt-release',
    name: 'Sculpt & Release Facial Massage',
    category: 'Body & Massage',
    duration_min: 75,
    price: 130,
    description: 'Facial acupressure + Hadado lifting + deep scalp massage',
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
  const ORDER = ['Transformation Series', 'Signature Facials', 'Body & Massage', 'Waxing'];
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

/** Format duration as "1 hr 30 min" / "50 min" / "2 hr" */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}
