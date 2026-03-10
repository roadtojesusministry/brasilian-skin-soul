export type TechInfo = {
  headline: string;
  body: string;
  source: string;
};

export const techScience: Record<string, TechInfo> = {
  "Microcurrent Lifting": {
    headline: "Trains your face like a gym session — at the cellular level.",
    body: "Microcurrent therapy delivers low-level electrical currents that mirror the body's own bioelectric field. Clinical studies show it increases ATP (cellular energy) production by up to 500%, directly accelerating collagen and elastin synthesis. Over multiple sessions, facial muscles are gently re-educated into a lifted, firmer position — results that build and compound with every visit.",
    source: "Journal of Clinical & Aesthetic Dermatology · Aesthetic Surgery Journal",
  },
  "Therma-Lift Technology": {
    headline: "Heat the deeper layers. Tighten from within.",
    body: "Therma-Lift uses precisely controlled thermal energy to warm the skin's deeper dermal layers without damaging the surface. This triggers the body's natural wound-healing response — stimulating new collagen production and causing existing collagen fibers to contract and tighten instantly. Skin continues to improve for weeks after each treatment as new collagen matures.",
    source: "Dermatologic Surgery Journal · American Society for Dermatologic Surgery",
  },
  "Cold Plasma (13,000V)": {
    headline: "13,000 volts. Zero pain. Up to 120× better absorption.",
    body: "Cold plasma generates a high-frequency electrical field that activates reactive oxygen and nitrogen species in the skin — molecules clinically proven to stimulate fibroblast activity and collagen production. Most powerfully, it temporarily opens micro-channels in the skin's surface, amplifying the absorption of serums and boosters by up to 120×. One of the most scientifically advanced non-invasive technologies available today.",
    source: "Journal of Photochemistry and Photobiology · Clinical Plasma Medicine",
  },
  "LED Photo Therapy": {
    headline: "The right wavelength of light triggers real biological change.",
    body: "Different wavelengths of light penetrate the skin at different depths to trigger specific responses. Red light (630–700nm) stimulates fibroblasts to produce collagen and reduce fine lines. Blue light (415nm) destroys acne-causing bacteria at the source. Near-infrared penetrates deepest — reducing inflammation and accelerating cellular repair. Zero UV exposure, zero downtime, pure therapeutic light with decades of clinical backing.",
    source: "Photomedicine and Laser Surgery · Journal of the American Academy of Dermatology",
  },
  "Oxygen Infusion (Intraceuticals)": {
    headline: "Originally developed for burn care. Now a red-carpet staple.",
    body: "The Intraceuticals system uses hyperbaric (pressurized) oxygen to drive a customized cocktail of hyaluronic acid, vitamins, and botanical actives deep into the skin — bypassing the surface barrier that blocks most topical products. Hyperbaric oxygen also accelerates cell metabolism and tissue repair at the delivery site. Developed from medical wound-care technology, it's now one of the most requested pre-event treatments among celebrities worldwide.",
    source: "International Journal of Cosmetic Science · Intraceuticals Clinical Studies",
  },
  "CO2 Carboxytherapy": {
    headline: "Your body rushes oxygen to wherever it detects CO2. We use that.",
    body: "CO2 therapy is rooted in cardiology. When CO2 is applied to the skin, the body reads it as a low-oxygen signal and immediately rushes blood flow and oxygen to that area — a mechanism called the Bohr Effect. This triggers instant vasodilation, bringing nutrients to the surface, firming tissue, reducing puffiness, and leaving skin visibly brighter and tighter. Results are immediate, with zero downtime.",
    source: "Journal of Cosmetic Dermatology · European Journal of Dermatology",
  },
  "Microdermabrasion": {
    headline: "Physical resurfacing that signals your skin to renew itself.",
    body: "A diamond-tip wand physically exfoliates the outermost layer of dead skin cells while simultaneously vacuuming them away. This dual action signals the skin's repair response — increasing cell turnover, stimulating collagen production, and gradually reducing fine lines, sun damage, and uneven texture. Consistent sessions show measurable improvement in skin density and tone, making it one of the most evidence-backed resurfacing treatments in aesthetics.",
    source: "Dermatologic Surgery · Journal of Cosmetic and Laser Therapy",
  },
  "Dermaplane Exfoliation": {
    headline: "A single precise pass. Skin that absorbs 70% more.",
    body: "Dermaplaning uses a medical-grade surgical blade at an exact 45° angle to remove the top layer of dead skin cells and vellus hair (peach fuzz) in one controlled pass. Beyond the immediate smoothness, research shows that dermaplaned skin absorbs active skincare ingredients up to 70% more effectively — making every product and treatment applied afterward significantly more potent.",
    source: "Journal of the American Academy of Dermatology · Aesthetic Plastic Surgery",
  },
  "Glycolic Peel": {
    headline: "The smallest acid molecule. The deepest reach.",
    body: "Glycolic acid is an alpha-hydroxy acid derived from sugarcane with the smallest molecular size of any AHA — allowing it to penetrate deeper into the skin than any comparable ingredient. It dissolves the bonds holding dead skin cells together, accelerates cellular turnover, stimulates collagen synthesis, and fades hyperpigmentation at the source. Consistently ranked among the most clinically proven topical ingredients in dermatology.",
    source: "British Journal of Dermatology · American Journal of Clinical Dermatology",
  },
  "Plant Stem Cell Therapy": {
    headline: "Rare plant cells that wake up your skin's own renewal system.",
    body: "Plant stem cells — particularly from rare species like the Uttwiler Spätlauber apple — contain epigenetic factors that activate the skin's own dormant stem cell reservoirs. Clinical studies show a measurable reduction in the appearance of wrinkles and significant improvement in skin density within weeks. Unlike animal-derived alternatives, plant stem cells are fully shelf-stable and ethically sourced, delivering regenerative results without compromise.",
    source: "International Journal of Cosmetic Science · Phytochemistry Reviews",
  },
  "Far-Infrared Technology": {
    headline: "Penetrates 3 inches deep. Reaches what surface treatments can't.",
    body: "Far-infrared (FIR) waves sit just beyond visible light and penetrate 1.5–3 inches beneath the skin's surface — reaching muscle, fascia, and connective tissue no topical treatment can access. At this depth, FIR increases microcirculation, accelerates lymphatic drainage, promotes cellular detoxification, and supports collagen remodeling through gentle tissue warming. Used in both clinical dermatology and elite sports recovery.",
    source: "Journal of Photochemistry and Photobiology · Evidence-Based Complementary Medicine",
  },
  "Gua Sha Lymphatic Drainage": {
    headline: "Ancient technique. Clinically confirmed mechanism.",
    body: "Gua Sha applies precise directional pressure along facial fascia lines to stimulate lymphatic flow — the body's natural waste-removal system. When lymphatic circulation stagnates, fluid, toxins, and inflammatory byproducts accumulate in facial tissue, causing puffiness, dullness, and loss of definition. Clinical research confirms that manual lymphatic drainage reduces facial edema, improves microcirculation, and enhances the skin's natural healing response.",
    source: "Journal of Traditional Chinese Medicine · Lymphatic Research and Biology",
  },

  // ── Add-On entries ───────────────────────────────────────────────────
  "Dermaplane": {
    headline: "One precise pass. Skin that absorbs 70% more.",
    body: "A medical-grade surgical blade at an exact 45° angle removes the top layer of dead skin cells and vellus hair (peach fuzz) in one controlled pass. Beyond the instant smoothness, dermaplaned skin absorbs active ingredients up to 70% more effectively — making every product applied afterward significantly more potent. Added to any facial, it amplifies your entire treatment.",
    source: "Journal of the American Academy of Dermatology · Aesthetic Plastic Surgery",
  },
  "LED Light Therapy": {
    headline: "The right wavelength of light triggers real biological change.",
    body: "Red light (630–700nm) stimulates fibroblasts to produce collagen and soften fine lines. Blue light (415nm) destroys acne-causing bacteria at the source. Near-infrared penetrates deepest — reducing inflammation and accelerating cellular repair. Added to any facial, LED therapy extends results and reduces downtime. Zero UV, zero heat, pure therapeutic benefit.",
    source: "Photomedicine and Laser Surgery · Journal of the American Academy of Dermatology",
  },
  "CO2 Lift": {
    headline: "Your body rushes oxygen wherever it detects CO2. We use that.",
    body: "When CO2 is applied to the skin, the body reads it as a low-oxygen signal and immediately rushes blood flow and oxygen to the area — the Bohr Effect. This triggers instant vasodilation, bringing nutrients to the surface, firming tissue, and leaving skin visibly brighter and tighter. Added at the end of any facial, the results are immediate and require zero downtime.",
    source: "Journal of Cosmetic Dermatology · European Journal of Dermatology",
  },
  "Eye Lift — Stem Cell": {
    headline: "The eye area ages fastest. Treat it at the cellular level.",
    body: "The skin around the eyes is the thinnest on the face and shows aging earlier than anywhere else. Plant stem cell actives penetrate this delicate zone to trigger cellular renewal, reduce the appearance of fine lines, and firm the eye contour from within. Added to any facial, this targeted booster addresses the one area most people notice first.",
    source: "International Journal of Cosmetic Science · Phytochemistry Reviews",
  },
  "Oxygen Therapy O2": {
    headline: "Pressurized oxygen drives actives deeper than anything topical.",
    body: "Hyperbaric oxygen bypasses the skin's natural surface barrier — the same barrier that limits most topical products — and delivers a concentrated dose of hyaluronic acid, vitamins, and botanical actives directly into the deeper skin layers. The result is intense hydration, accelerated repair, and a luminosity boost that works from within. The perfect amplifier for any treatment.",
    source: "International Journal of Cosmetic Science · Intraceuticals Clinical Studies",
  },
  "Therma-Lift": {
    headline: "Heat the deeper layers. Tighten from within.",
    body: "Therma-Lift uses precisely controlled thermal energy to warm the skin's deeper dermal layers without affecting the surface. This signals the body's natural repair response — stimulating new collagen production and causing existing fibers to contract and tighten. Added to a facial, it takes results from surface-level to structural — firming and contouring as the session continues.",
    source: "Dermatologic Surgery Journal · American Society for Dermatologic Surgery",
  },
  "Deep Extractions": {
    headline: "Clear pores are the foundation of everything that comes after.",
    body: "Professional deep extractions remove built-up sebum, dead cells, and debris from clogged pores that daily cleansing simply cannot reach. When pores are clear, inflammation decreases, breakouts reduce, and every product applied afterward absorbs more effectively. Regular professional extractions prevent the compaction that leads to chronic breakouts and visibly enlarged pores over time.",
    source: "American Academy of Dermatology · Skin & Allergy News",
  },
  "Divine Décolleté": {
    headline: "Your neck and chest age faster than your face — and show it first.",
    body: "The skin on the neck and décolleté is thinner, produces less oil, and receives the same environmental exposure as the face — but almost never receives the same care. This targeted treatment addresses sun damage, fine lines, and uneven texture in the area clients and others notice immediately. A well-maintained décolleté is one of the clearest signals of overall skin health.",
    source: "Journal of Cosmetic Dermatology · Dermatology Times",
  },
  "Glow Mask": {
    headline: "The final step that makes everything else work harder.",
    body: "A brightening and hydrating masque delivers a concentrated dose of vitamin C, niacinamide, and hyaluronic acid directly to the skin at its most receptive moment — after your facial, when the barrier is open and absorption is at its peak. It seals in hydration, evens skin tone, and delivers an immediate luminosity that continues to develop in the days following your appointment.",
    source: "International Journal of Cosmetic Science · Cosmetic Dermatology",
  },
};
