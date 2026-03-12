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
    price: 435,
    description: 'LED + Oxygen + CO2',
  },
  {
    id: 'resurface-refine',
    name: 'Resurface & Refine Series',
    category: 'Transformation Series',
    duration_min: 90,
    price: 360,
    description: 'Microdermabrasion + Dermaplane + Glycolic Peel',
  },
  {
    id: 'cellular-renewal',
    name: 'Cellular Renewal Series',
    category: 'Transformation Series',
    duration_min: 90,
    price: 420,
    description: 'Stem Cell + Far-Infrared + Gua Sha',
  },

  // ── Signature Facials ──────────────────────────────────────────────────────
  {
    id: 'royal-glow',
    name: 'Royal Glow Facial',
    category: 'Signature Facials',
    duration_min: 120,
    price: 295,
    description: 'Our signature 2-hour luxury treatment',
  },
  {
    id: 'brasilian-ritual',
    name: 'The Brasilian Ritual',
    category: 'Signature Facials',
    duration_min: 95,
    price: 215,
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
];

/** Grouped by category, preserving declaration order */
export function getServicesGrouped(): Record<string, Service[]> {
  return SERVICES.reduce<Record<string, Service[]>>((acc, svc) => {
    if (!acc[svc.category]) acc[svc.category] = [];
    acc[svc.category].push(svc);
    return acc;
  }, {});
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
