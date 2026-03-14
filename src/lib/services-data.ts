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
  technologiesEN?: string[]; // always English — used for techScience lookup
  compound?: { headline: string; body: string };

  // Body & Massage
  pairWith?: string[];

  // Internationalization
  i18n?: {
    es?: Partial<Pick<Service, 'name' | 'tagline' | 'fullDesc' | 'seriesGroup' | 'technologies' | 'pairWith'> & { compoundHeadline?: string; compoundBody?: string; badge?: string }>;
    pt?: Partial<Pick<Service, 'name' | 'tagline' | 'fullDesc' | 'seriesGroup' | 'technologies' | 'pairWith'> & { compoundHeadline?: string; compoundBody?: string; badge?: string }>;
  };
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
    i18n: {
      es: {
        name: 'Serie Lifting & Escultura',
        seriesGroup: 'Lifting No Quirúrgico',
        fullDesc: 'El protocolo de lifting no quirúrgico definitivo. Las tres tecnologías se aplican juntas en cada sesión — sin rotaciones, sin divisiones. Tres sesiones progresivas que combinan el entrenamiento muscular con microcorriente, el contorneado Therma-Lift y la estimulación de colágeno con Plasma Frío. Cada sesión potencia la anterior — el efecto acumulado es un rostro visiblemente levantado, firme y esculpido.',
        technologies: ['Lifting por Microcorriente', 'Tecnología Therma-Lift', 'Plasma Frío (13.000V)'],
        compoundHeadline: 'Por qué tres sesiones multiplican el lifting.',
        compoundBody: 'La microcorriente reeduca los músculos faciales de la misma manera que el gimnasio desarrolla la fuerza — con cada sesión, el músculo responde más rápido y mantiene más tiempo porque recuerda la señal. Mientras tanto, Therma-Lift activa una ola de remodelación de colágeno que tarda semanas en desarrollarse completamente. Cuando comienza la segunda sesión, el colágeno de la primera aún está madurando — dos oleadas separadas de nuevo colágeno construyéndose simultáneamente. Para la tercera sesión, tienes tres ciclos de reparación superpuestos. El lifting después de tres sesiones no es tres veces una sesión. Es exponencial.',
      },
      pt: {
        name: 'Série Lifting & Escultura',
        seriesGroup: 'Lifting Não Cirúrgico',
        fullDesc: 'O protocolo definitivo de lifting não cirúrgico. As três tecnologias são aplicadas juntas em cada sessão — sem rotações, sem divisões. Três sessões progressivas combinando treinamento muscular com microcorrente, contorno Therma-Lift e estimulação de colágeno com Plasma Frio. Cada sessão potencializa a anterior — o efeito cumulativo é um rosto visivelmente mais elevado, firme e esculpido.',
        technologies: ['Lifting por Microcorrente', 'Tecnologia Therma-Lift', 'Plasma Frio (13.000V)'],
        compoundHeadline: 'Por que três sessões multiplicam o lifting.',
        compoundBody: 'A microcorrente reeduca os músculos faciais da mesma forma que a academia constrói força — a cada sessão, o músculo responde mais rápido e sustenta por mais tempo porque se lembra do sinal. Enquanto isso, o Therma-Lift desencadeia uma onda de remodelação de colágeno que leva semanas para se desenvolver completamente. Quando a segunda sessão começa, o colágeno da primeira ainda está amadurecendo — duas ondas separadas de novo colágeno construindo-se simultaneamente. Na terceira sessão, você tem três ciclos de reparo sobrepostos. O lifting após três sessões não é três vezes uma sessão. É exponencial.',
      },
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
    i18n: {
      es: {
        name: 'Serie Iluminación',
        seriesGroup: 'Luminosidad y Sanación',
        fullDesc: 'Sana, hidrata e ilumina desde adentro. Tres sesiones combinando terapia de luz LED dirigida, infusión de oxígeno a presión (Intraceuticals) y firmeza con carboxiterapia CO2. Las tres tecnologías se aplican juntas en cada sesión — sanando, inundando y tonificando la piel en un protocolo completo. Cada sesión se acumula sobre la anterior — en la tercera sesión, la luminosidad es innegable.',
        technologies: ['Fototerapia LED', 'Infusión de Oxígeno (Intraceuticals)', 'Carboxiterapia CO2'],
        compoundHeadline: 'Por qué el resplandor se profundiza con cada visita.',
        compoundBody: 'La fototerapia LED activa cromóforos dentro de las células de la piel — y las células ya activadas responden con mayor intensidad a la siguiente exposición. La infusión de oxígeno en la segunda sesión inunda tejidos que la primera dejó más hidratados y receptivos. La carboxiterapia CO2 entrena progresivamente la microcirculación — con cada sesión, la capacidad de tu piel para distribuir nutrientes y eliminar residuos mejora no solo durante el tratamiento, sino también en las semanas entre sesiones. Para la tercera sesión, estás iluminando una piel entrenada para brillar.',
      },
      pt: {
        name: 'Série Iluminação',
        seriesGroup: 'Luminosidade e Cura',
        fullDesc: 'Cure, hidrate e ilumine de dentro para fora. Três sessões combinando terapia de luz LED direcionada, infusão de oxigênio pressurizado (Intraceuticals) e firmeza com carboxiterapia CO2. As três tecnologias são aplicadas juntas em cada sessão — curando, inundando e firmando a pele em um protocolo completo. Cada sessão potencializa a anterior — na terceira sessão, a luminosidade é inegável.',
        technologies: ['Fototerapia LED', 'Infusão de Oxigênio (Intraceuticals)', 'Carboxiterapia CO2'],
        compoundHeadline: 'Por que o brilho se intensifica a cada visita.',
        compoundBody: 'A fototerapia LED ativa cromóforos dentro das células da pele — e as células já ativadas respondem com maior intensidade à próxima exposição. A infusão de oxigênio na segunda sessão inunda tecidos que a primeira deixou mais hidratados e receptivos. A carboxiterapia CO2 treina progressivamente a microcirculação — a cada sessão, a capacidade da sua pele de distribuir nutrientes e eliminar resíduos melhora não apenas durante o tratamento, mas nas semanas entre as sessões. Na terceira sessão, você está iluminando uma pele construída para brilhar.',
      },
    },
  },
  {
    id: 'resurface-refine',
    name: 'Resurface & Refine Series',
    category: 'Transformation Series',
    duration_min: 60,
    price: 465,
    description: 'Microdermabrasion + Dermaplane + Glycolic Peel',
    fullDesc: 'Three progressive sessions that strip away years of texture buildup and reveal the smoothest, most even-toned skin of your life. Diamond microdermabrasion resurfaces deep layers, surgical-grade Dermaplane clears peach fuzz and dead skin for a flawless canvas, and a professional glycolic peel dissolves surface damage to reveal bright, renewed skin beneath. Each session goes deeper — the cumulative result is a complexion that genuinely glows.',
    sessions: 3,
    seriesGroup: 'Texture & Tone',
    technologies: ['Microdermabrasion', 'Dermaplane Exfoliation', 'Glycolic Peel'],
    compound: {
      headline: 'Why the smoothness compounds across sessions.',
      body: 'The first session removes years of surface buildup — but the real transformation begins in session two, when the same modalities meet fresher, more responsive skin. Microdermabrasion triggers a collagen stimulus that thickens and strengthens the dermis, so session two\'s resurfacing goes deeper on healthier tissue. Glycolic acid\'s effectiveness increases with regular use as cellular turnover accelerates — by session three, your skin is in an active renewal cycle, not passively receiving treatment. Three sessions don\'t just resurface. They rebuild.',
    },
    i18n: {
      es: {
        name: 'Serie Renovación & Refinamiento',
        seriesGroup: 'Textura y Tono',
        fullDesc: 'Tres sesiones progresivas que eliminan años de acumulación de textura y revelan la piel más suave y uniforme de tu vida. La microdermoabrasión con punta de diamante resurface en capas profundas, el Dermaplane de grado quirúrgico elimina el vello fino y la piel muerta para un lienzo impecable, y un peeling de glicólico profesional disuelve el daño superficial para revelar una piel brillante y renovada. Cada sesión va más profundo — el resultado acumulado es un cutis que verdaderamente resplandece.',
        technologies: ['Microdermoabrasión', 'Exfoliación Dermaplane', 'Peeling de Glicólico'],
        compoundHeadline: 'Por qué la suavidad se acumula en las sesiones.',
        compoundBody: 'La primera sesión elimina años de acumulación superficial — pero la verdadera transformación comienza en la segunda sesión, cuando las mismas modalidades encuentran una piel más fresca y receptiva. La microdermoabrasión estimula el colágeno, que engrosa y fortalece la dermis — así, el resurfacing de la segunda sesión penetra más profundo en un tejido más saludable. La eficacia del ácido glicólico aumenta con el uso regular al acelerar la renovación celular — para la tercera sesión, tu piel está en un ciclo de renovación activo, no solo recibiendo pasivamente el tratamiento. Tres sesiones no solo resurface. Reconstruyen.',
      },
      pt: {
        name: 'Série Renovação & Refinamento',
        seriesGroup: 'Textura e Tom',
        fullDesc: 'Três sessões progressivas que removem anos de acúmulo de textura e revelam a pele mais suave e uniforme da sua vida. A microdermoabrasão com ponta de diamante ressurfaceia camadas profundas, o Dermaplane de grau cirúrgico elimina a penugem e as células mortas para uma tela impecável, e um peeling de glicólico profissional dissolve danos superficiais para revelar uma pele brilhante e renovada. Cada sessão vai mais fundo — o resultado cumulativo é uma tez que genuinamente brilha.',
        technologies: ['Microdermoabrasão', 'Esfoliação Dermaplane', 'Peeling de Glicólico'],
        compoundHeadline: 'Por que a suavidade se acumula entre as sessões.',
        compoundBody: 'A primeira sessão remove anos de acúmulo superficial — mas a verdadeira transformação começa na segunda sessão, quando as mesmas modalidades encontram uma pele mais fresca e receptiva. A microdermoabrasão desencadeia um estímulo de colágeno que engrossa e fortalece a derme — portanto, o ressurfaceamento da segunda sessão penetra mais fundo em um tecido mais saudável. A eficácia do ácido glicólico aumenta com o uso regular à medida que a renovação celular acelera — na terceira sessão, sua pele está em um ciclo de renovação ativo, não recebendo passivamente o tratamento. Três sessões não apenas ressurfaces. Elas reconstroem.',
      },
    },
  },
  {
    id: 'cellular-renewal',
    name: 'Detox & Cellular Renewal Series',
    category: 'Transformation Series',
    duration_min: 60,
    price: 475,
    description: 'Stem Cell + Ultrasound + Gua Sha',
    fullDesc: 'Deep regeneration and detox from the inside out. Plant stem cell therapy triggers renewal at the deepest skin layer, ultrasound waves amplify product absorption and stimulate cellular activity, and Gua Sha lymphatic drainage sculpts and restores your skin\'s natural radiance. The three work together in every session — stem cells trigger the repair, ultrasound drives it deeper, Gua Sha flushes what\'s been broken down. Three sessions of that compounding is transformation at the cellular level.',
    sessions: 3,
    seriesGroup: 'Detox & Cellular Renewal',
    technologies: ['Plant Stem Cell Therapy', 'Ultrasound Therapy', 'Gua Sha Lymphatic Drainage'],
    compound: {
      headline: 'Why cellular renewal multiplies with repetition.',
      body: 'Plant stem cell factors don\'t work once and disappear — they accumulate, layering signals that progressively wake up more of your skin\'s dormant renewal capacity. Ultrasound creates a transient permeability effect that deepens with each session, meaning actives penetrate further because the tissue has already been conditioned. Gua Sha lymphatic pathways stay progressively clearer between sessions — meaning session three achieves a depth of detox that session one never could. The science isn\'t just adding up. It\'s compounding.',
    },
    i18n: {
      es: {
        name: 'Serie Detox & Renovación Celular',
        seriesGroup: 'Desintoxicación y Renovación Celular',
        fullDesc: 'Regeneración profunda y desintoxicación desde adentro hacia afuera. La terapia con células madre vegetales activa la renovación en la capa más profunda de la piel, las ondas de ultrasonido amplían la absorción de productos y estimulan la actividad celular, y el drenaje linfático Gua Sha esculpe y restaura la luminosidad natural de la piel. Los tres trabajan juntos en cada sesión — las células madre activan la reparación, el ultrasonido la lleva más profundo, el Gua Sha elimina lo descompuesto. Tres sesiones de esa acumulación es transformación a nivel celular.',
        technologies: ['Terapia con Células Madre Vegetales', 'Terapia de Ultrasonido', 'Drenaje Linfático Gua Sha'],
        compoundHeadline: 'Por qué la renovación celular se multiplica con la repetición.',
        compoundBody: 'Los factores de células madre vegetales no actúan una vez y desaparecen — se acumulan, superponiendo señales que despiertan progresivamente más de la capacidad de renovación latente de tu piel. El ultrasonido crea un efecto de permeabilidad transitoria que se profundiza con cada sesión, lo que significa que los activos penetran más porque el tejido ya ha sido preparado. Las vías linfáticas del Gua Sha se mantienen progresivamente más despejadas entre sesiones — lo que significa que la tercera sesión alcanza una profundidad de desintoxicación que la primera nunca pudo. La ciencia no solo suma. Se acumula exponencialmente.',
      },
      pt: {
        name: 'Série Detox & Renovação Celular',
        seriesGroup: 'Desintoxicação e Renovação Celular',
        fullDesc: 'Regeneração profunda e desintoxicação de dentro para fora. A terapia com células-tronco vegetais aciona a renovação na camada mais profunda da pele, as ondas de ultrassom amplificam a absorção de produtos e estimulam a atividade celular, e a drenagem linfática Gua Sha esculpe e restaura a luminosidade natural da pele. Os três trabalham juntos em cada sessão — as células-tronco ativam o reparo, o ultrassom o leva mais fundo, o Gua Sha elimina o que foi degradado. Três sessões desse acúmulo é transformação no nível celular.',
        technologies: ['Terapia com Células-Tronco Vegetais', 'Terapia por Ultrassom', 'Drenagem Linfática Gua Sha'],
        compoundHeadline: 'Por que a renovação celular se multiplica com a repetição.',
        compoundBody: 'Os fatores de células-tronco vegetais não agem uma vez e desaparecem — eles se acumulam, sobrepondo sinais que progressivamente despertam mais da capacidade latente de renovação da sua pele. O ultrassom cria um efeito de permeabilidade transitória que se aprofunda a cada sessão, o que significa que os ativos penetram mais porque o tecido já foi condicionado. As vias linfáticas do Gua Sha permanecem progressivamente mais desobstruídas entre as sessões — o que significa que a terceira sessão alcança uma profundidade de desintoxicação que a primeira nunca conseguiu. A ciência não está apenas somando. Está se acumulando.',
      },
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
    fullDesc: 'Elevate your skincare journey with the luxurious Claudia\'s 2-hrs experience:\n\n• Microdermabrasion to resurface your skin and fade dark spots\n• Professional Pore Extractions to clarify and refresh\n• Microcurrent Therapy for a lifted and contoured appearance\n• Oxygen Therapy that infuses your skin with hydration and collagen, delivering a plump and youthful glow\n• LED Light Therapy to stimulate collagen production and enhance radiance\n• Relaxing Hand and Foot Massage to melt away tension and elevate your experience\n\nExperience the ultimate in skin pampering and let your natural beauty shine!',
    badge: 'FLAGSHIP',
    iconName: 'Crown',
    addons: ['Eye Lift — Stem Cell', 'CO2 Lift', 'Divine Décolleté'],
    imagePath: '/facial-royal-glow.jpg',
    displayDuration: '2 hr',
    i18n: {
      es: {
        badge: 'EMBLEMA',
        tagline: 'La Experiencia de Lujo Definitiva',
        fullDesc: 'La experiencia completa de Claudia en una sesión de 2 horas. La microdermoabrasión resurface la piel y atenúa las manchas oscuras. La microcorriente levanta y fortalece los músculos faciales. El LED estimula el colágeno en lo profundo de la piel. La terapia de oxígeno infunde colágeno para tonificar, rellenar y entregar un resplandor juvenil. Extracciones profesionales de poros más un relajante masaje de manos y pies para finalizar. Todo — sin escatimar nada.',
      },
      pt: {
        badge: 'CARRO-CHEFE',
        tagline: 'A Experiência de Luxo Definitiva',
        fullDesc: 'A experiência completa de Claudia em uma sessão de 2 horas. A microdermoabrasão ressurfaceia a pele e atenua manchas escuras. A microcorrente levanta e fortalece os músculos faciais. O LED estimula o colágeno nas camadas profundas da pele. A terapia de oxigênio infunde colágeno para firmar, preencher e proporcionar um brilho jovial. Extrações profissionais de poros e um relaxante massagem nas mãos e nos pés para finalizar. Tudo — sem guardar nada.',
      },
    },
  },
  {
    id: 'brasilian-ritual',
    name: 'The Brasilian Ritual',
    category: 'Signature Facials',
    duration_min: 95,
    price: 285,
    description: 'Brand signature ritual treatment',
    tagline: 'Ancient Wisdom · Brazilian Soul',
    fullDesc: 'A 90-minute immersive ritual inspired by ancient Brazilian healing traditions — designed to restore radiant skin, release deep tension, and bring body and spirit back into harmony.\n\n• Fresh papaya enzyme treatment to dissolve dull surface cells and reveal luminous skin\n• Facial acupressure & signature Brasilian lymphatic lifting massage to sculpt contours and reduce puffiness\n• Reflexology to stimulate healing pathways and encourage full-body balance\n• Cooling jade eye mask to de-puff the delicate eye area\n• Nourishing bamboo mask to replenish hydration and glow\n• Deeply relaxing scalp massage to melt away stress\n\nFace, feet, and scalp treated as one connected system — leaving your skin luminous, your body relaxed, and your energy renewed.\n\nIdeal for: stress relief, dull or tired skin, puffiness, and anyone seeking a deeply relaxing holistic facial.',
    badge: 'HOLISTIC',
    iconName: 'Leaf',
    addons: ['Eye Lift — Stem Cell', 'Divine Décolleté', 'LED Light Therapy'],
    imagePath: '/facial-brasilian-ritual.jpg',
    displayDuration: '90+ min',
    i18n: {
      es: {
        badge: 'HOLÍSTICO',
        tagline: 'Sabiduría Ancestral · Alma Brasileña',
        fullDesc: 'Una ceremonia de 90 minutos enraizada en tradiciones ancestrales de sanación. Un tratamiento enzimático de papaya abre el ritual — iluminando y suavizando el cutis, disolviendo células muertas con enzimas naturales de fruta. La acupresión facial luego activa puntos energéticos para levantar y liberar tensión profunda. El masaje linfático de lifting brasileño esculpe y desinfla. Una sesión de reflexología estimula las vías de sanación del cuerpo a través de puntos de presión específicos en los pies. Una mascarilla de jade refrescante para los ojos desinfla y restaura el delicado contorno ocular, seguida de una nutritiva mascarilla de bambú. Finaliza con un masaje de cuero cabelludo para derretir el estrés desde las raíces hacia abajo. Cada capa — rostro, pies, cuero cabelludo — restaurada al equilibrio.',
      },
      pt: {
        badge: 'HOLÍSTICO',
        tagline: 'Sabedoria Ancestral · Alma Brasileira',
        fullDesc: 'Uma cerimônia de 90 minutos enraizada em tradições ancestrais de cura. Um tratamento enzimático de mamão papaia abre o ritual — iluminando e suavizando a tez, dissolvendo células mortas com enzimas naturais de fruta. A acupressão facial então desperta pontos de energia para levantar e liberar tensão profunda. A massagem linfática de lifting brasileiro esculpe e desincha. Uma sessão de reflexologia estimula os caminhos curativos do corpo por meio de pontos de pressão específicos nos pés. Uma máscara de jade refrescante para os olhos desincha e restaura a delicada área orbital, seguida de uma nutritiva máscara de bambu. Finalizada com uma massagem no couro cabeludo para derreter o estresse das raízes para baixo. Cada camada — rosto, pés, couro cabeludo — trazida de volta ao equilíbrio.',
      },
    },
  },
  {
    id: 'therma-lift',
    name: 'Microderm Therma-Lift Facial',
    category: 'Signature Facials',
    duration_min: 80,
    price: 185,
    description: 'Microdermabrasion + Therma-Lift technology',
    tagline: 'Resurface · Sculpt · Illuminate',
    fullDesc: 'The ultimate surface-to-structure treatment. Diamond-tip microdermabrasion strips away texture and dead cells to reveal a fresh, smooth canvas — then Therma-Lift technology sculpts and tightens from the outside in. Finished with a vitamin C oxygenation infusion for the ultimate glow. Two powerful modalities plus a radiance-sealing finale: resurface, lift, and illuminate. Visible refinement and firmness from the very first visit.',
    badge: 'POPULAR',
    iconName: 'Flame',
    addons: ['LED Light Therapy', 'Eye Lift — Stem Cell', 'CO2 Lift'],
    imagePath: '/facial-therma-lift.jpg',
    displayDuration: '80 min',
    i18n: {
      es: {
        badge: 'POPULAR',
        tagline: 'Resurface · Esculpe · Ilumina',
        fullDesc: 'El tratamiento de superficie a estructura definitivo. La microdermoabrasión con punta de diamante elimina la textura y las células muertas para revelar un lienzo fresco y suave — luego la tecnología Therma-Lift esculpe y tonifica desde afuera hacia adentro. Finaliza con una infusión de oxigenación con vitamina C para el resplandor máximo. Dos potentes modalidades más un cierre sellador de luminosidad: resurface, levanta e ilumina. Refinamiento y firmeza visibles desde la primera visita.',
      },
      pt: {
        badge: 'POPULAR',
        tagline: 'Resurface · Esculpe · Ilumina',
        fullDesc: 'O tratamento definitivo de superfície a estrutura. A microdermoabrasão com ponta de diamante elimina a textura e as células mortas para revelar uma tela fresca e suave — então a tecnologia Therma-Lift esculpe e firma de fora para dentro. Finalizado com uma infusão de oxigenação com vitamina C para o máximo brilho. Duas modalidades poderosas mais um final selador de luminosidade: resurface, levanta e ilumina. Refinamento e firmeza visíveis desde a primeira visita.',
      },
    },
  },
  {
    id: 'cold-plasma',
    name: 'Cold Plasma Rejuvenation',
    category: 'Signature Facials',
    duration_min: 60,
    price: 195,
    description: 'Advanced plasma technology',
    tagline: 'Science Meets Skin',
    fullDesc: '13,000 volts of cold plasma stimulate collagen and elastin while amplifying absorption of skin boosters by up to 120×. Includes professional pore extractions and stem cell infusion — active ingredients are driven deeper into freshly cleared channels for maximum cellular renewal. Finished with a stem cell oxygen infusion to stimulate cell renewal and deep rejuvenation from within. Non-invasive, with visible results from the very first session.',
    badge: 'ADVANCED',
    iconName: 'Zap',
    addons: ['Eye Lift — Stem Cell', 'Therma-Lift', 'Glow Mask'],
    imagePath: '/facial-cold-plasma.jpg',
    displayDuration: '60+ min',
    i18n: {
      es: {
        badge: 'AVANZADO',
        tagline: 'La Ciencia al Servicio de Tu Piel',
        fullDesc: '13.000 voltios de plasma frío estimulan el colágeno y la elastina mientras amplían la absorción de activos hasta 120×. Incluye extracciones profesionales de poros e infusión de células madre — los ingredientes activos penetran más profundo en canales recién despejados para una máxima renovación celular. Finaliza con una infusión de oxígeno con células madre para estimular la renovación celular y el rejuvenecimiento profundo desde adentro. No invasivo, con resultados visibles desde la primera sesión.',
      },
      pt: {
        badge: 'AVANÇADO',
        tagline: 'A Ciência ao Serviço da Sua Pele',
        fullDesc: '13.000 volts de plasma frio estimulam o colágeno e a elastina enquanto amplificam a absorção de ativos em até 120×. Inclui extrações profissionais de poros e infusão de células-tronco — os ingredientes ativos são conduzidos mais profundamente em canais recém-abertos para máxima renovação celular. Finalizado com uma infusão de oxigênio com células-tronco para estimular a renovação celular e o rejuvenescimento profundo de dentro. Não invasivo, com resultados visíveis desde a primeira sessão.',
      },
    },
  },
  {
    id: 'intraceuticals',
    name: 'Intraceuticals Oxygen Facial',
    category: 'Signature Facials',
    duration_min: 65,
    price: 195,
    description: 'Best-selling oxygen infusion',
    tagline: 'Hydrate · Lift · Rejuvenate',
    fullDesc: 'The gold standard in oxygen-based skin therapy — trusted by skin professionals worldwide. Cutting-edge Intraceuticals infusion delivers customized serums deep into the skin using pressurized oxygen, for intense hydration, visible plumping, and a luminous anti-aging lift. Includes professional pore extractions to clear impurities for a fresh complexion, a firming eye mask to reduce puffiness and fine lines, and a Décolleté Renewal Treatment to minimize fine lines and sun damage. Finished with a relaxing massage of the hands, neck, and shoulders. Transform, hydrate, lift, and rejuvenate — leave with a radiant glow and a youthful appearance.',
    iconName: 'Wind',
    addons: ['LED Light Therapy', 'Dermaplane', 'CO2 Lift'],
    imagePath: '/facial-intraceuticals.jpg',
    displayDuration: '60+ min',
    i18n: {
      es: {
        tagline: 'Hidrata · Levanta · Rejuvenece',
        fullDesc: 'El estándar de oro en terapia cutánea a base de oxígeno — confiado por profesionales de la piel en todo el mundo. La avanzada infusión Intraceuticals entrega sueros personalizados en lo profundo de la piel utilizando oxígeno a presión, para una hidratación intensa, un relleno visible y un lifting anti-envejecimiento luminoso. Incluye extracciones profesionales de poros para limpiar impurezas y lograr un cutis fresco, una mascarilla firmante para los ojos que reduce la hinchazón y las líneas finas, y un Tratamiento de Renovación de Escote que minimiza las líneas finas y el daño solar. Finaliza con un relajante masaje de manos, cuello y hombros. Transforma, hidrata, levanta y rejuvenece — sal con un resplandor radiante y una apariencia juvenil.',
      },
      pt: {
        tagline: 'Hidrata · Levanta · Rejuvenesce',
        fullDesc: 'O padrão-ouro em terapia cutânea à base de oxigênio — confiado por profissionais de pele em todo o mundo. A avançada infusão Intraceuticals entrega séruns personalizados nas camadas profundas da pele usando oxigênio pressurizado, para hidratação intensa, preenchimento visível e um lifting anti-envelhecimento luminoso. Inclui extrações profissionais de poros para limpar impurezas e renovar a tez, uma máscara firmante para os olhos que reduz inchaço e linhas finas, e um Tratamento de Renovação do Decote que minimiza linhas finas e danos solares. Finalizado com um relaxante massagem nas mãos, pescoço e ombros. Transforme, hidrate, levante e rejuvenesça — saia com um brilho radiante e uma aparência jovial.',
      },
    },
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
    i18n: {
      es: {
        tagline: 'Desintoxica · Esculpe · Irradia',
        fullDesc: 'El facial desintoxicante definitivo. El drenaje linfático Gua Sha tradicional esculpe y desinfla, la infusión de oxígeno a presión inunda la piel de nutrientes, y la terapia de luz LED dirigida acelera la sanación e ilumina desde adentro. Tres poderosas modalidades — un ritual profundamente restaurador.',
      },
      pt: {
        tagline: 'Desintoxica · Esculpe · Irradia',
        fullDesc: 'O facial desintoxicante definitivo. A drenagem linfática Gua Sha tradicional esculpe e desincha, a infusão de oxigênio pressurizado inunda a pele de nutrientes, e a terapia de luz LED direcionada acelera a cura e ilumina de dentro. Três modalidades poderosas — um ritual profundamente restaurador.',
      },
    },
  },
  {
    id: 'stem-cell',
    name: 'Stem Cell Facial',
    category: 'Signature Facials',
    duration_min: 90,
    price: 185,
    description: 'Advanced stem cell therapy',
    tagline: 'Deep Cellular Renewal',
    fullDesc: 'A complete cellular renewal ritual. Begins with professional pore extractions and a glycolic peel to resurface and refresh the skin\'s canvas, then ultrasound waves open micro-channels for maximum penetration as plant-derived stem cell serums are infused deep — triggering cellular renewal, stimulating collagen, and repairing damage at its source. Oxygen therapy floods the skin with nutrients and amplifies every active ingredient. A cooling eye mask de-puffs and restores the delicate eye area, followed by a relaxing neck and shoulder massage to complete the experience. The result: visibly firmer, smoother skin with a luminosity that no topical product can achieve.',
    iconName: 'Dna',
    addons: ['Eye Lift — Stem Cell', 'Microcurrent Lifting', 'CO2 Lift'],
    imagePath: '/facial-stem-cell.jpg',
    displayDuration: '90 min',
    i18n: {
      es: {
        tagline: 'Renovación Celular Profunda',
        fullDesc: 'Un ritual completo de renovación celular. Comienza con extracciones profesionales de poros y un peeling de glicólico para resurface y refrescar el lienzo de la piel, luego las ondas de ultrasonido abren microcanales para una penetración máxima mientras los sueros de células madre de origen vegetal se infunden en profundidad — activando la renovación celular, estimulando el colágeno y reparando el daño en su origen. La terapia de oxígeno inunda la piel de nutrientes y amplifica cada ingrediente activo. Una mascarilla enfriante para los ojos desinfla y restaura el delicado contorno ocular, seguida de un relajante masaje de cuello y hombros para completar la experiencia. El resultado: una piel visiblemente más firme y suave con una luminosidad que ningún producto tópico puede lograr.',
      },
      pt: {
        tagline: 'Renovação Celular Profunda',
        fullDesc: 'Um ritual completo de renovação celular. Começa com extrações profissionais de poros e um peeling de glicólico para ressurfacear e renovar a tela da pele, depois as ondas de ultrassom abrem microcanais para penetração máxima enquanto séruns de células-tronco de origem vegetal são infundidos profundamente — ativando a renovação celular, estimulando o colágeno e reparando os danos na origem. A terapia de oxigênio inunda a pele de nutrientes e amplifica cada ingrediente ativo. Uma máscara refrescante para os olhos desincha e restaura a delicada área orbital, seguida de um relaxante massagem no pescoço e ombros para completar a experiência. O resultado: pele visivelmente mais firme e suave com uma luminosidade que nenhum produto tópico consegue alcançar.',
      },
    },
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
    i18n: {
      es: {
        tagline: 'Suave como Seda · Luminosa · Renovada',
        fullDesc: 'Doble exfoliación en su máxima expresión. El Dermaplane de grado quirúrgico elimina células muertas y vello fino para un lienzo suave como seda, luego un Peeling de Glicólico resurface e ilumina para una transformación duradera del tono. El maquillaje se aplica a la perfección. La piel resplandece durante días.',
      },
      pt: {
        tagline: 'Sedosa · Luminosa · Renovada',
        fullDesc: 'Dupla esfoliação em sua melhor expressão. O Dermaplane de grau cirúrgico remove células mortas e penugem para uma tela suave como seda, depois um Peeling de Glicólico ressurfaceia e ilumina para uma transformação duradoura do tom. A maquiagem aplica-se perfeitamente. A pele brilha por dias.',
      },
    },
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
    i18n: {
      es: {
        tagline: 'Limpia · Sana · Equilibra',
        fullDesc: 'Un tratamiento clínico para el acné que va más allá de la superficie. Las extracciones profundas limpian la congestión, la terapia de luz LED elimina las bacterias causantes del acné y reduce la inflamación, y una mascarilla equilibrante específica restaura la armonía de la piel. Diseñado para resultados reales, no solo una solución temporal.',
      },
      pt: {
        tagline: 'Limpa · Cura · Equilibra',
        fullDesc: 'Um tratamento clínico para acne que vai além da superfície. As extrações profundas limpam a congestão, a terapia de luz LED elimina as bactérias causadoras de acne e reduz a inflamação, e uma máscara equilibrante direcionada restaura a harmonia da pele. Desenvolvido para resultados reais, não apenas uma solução temporária.',
      },
    },
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
    i18n: {
      es: {
        tagline: 'Suave · Equilibrante · Fresco',
        fullDesc: 'Diseñado para la piel adolescente — suficientemente suave para complexiones sensibles en desarrollo, efectivo para marcar una diferencia real. Una limpieza profunda, extracciones cuidadosas y una mascarilla equilibrante abordan preocupaciones reales sin irritar ni resecar. Un primer paso perfecto hacia hábitos de cuidado saludable de la piel.',
      },
      pt: {
        tagline: 'Suave · Equilibrante · Fresco',
        fullDesc: 'Desenvolvido para a pele adolescente — suave o suficiente para complexões sensíveis em desenvolvimento, eficaz para fazer uma diferença real. Uma limpeza profunda, extrações cuidadosas e uma máscara equilibrante abordam preocupações reais sem ressecar ou irritar. Um primeiro passo perfeito para hábitos saudáveis de cuidado com a pele.',
      },
    },
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
    i18n: {
      es: {
        name: 'Facial de Espalda',
        fullDesc: 'Todo lo que tu rostro recibe — pero para tu espalda. Limpieza profunda, exfoliación, vapor, extracciones y mascarilla.',
        pairWith: ['Mascarilla Luminosa', 'Fototerapia LED', 'Extracciones Profundas'],
      },
      pt: {
        name: 'Facial de Costas',
        fullDesc: 'Tudo o que seu rosto recebe — mas para as suas costas. Limpeza profunda, esfoliação, vapor, extrações e máscara.',
        pairWith: ['Máscara Iluminadora', 'Fototerapia LED', 'Extrações Profundas'],
      },
    },
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
    i18n: {
      es: {
        name: 'Tratamiento de Exfoliación Salina para la Espalda',
        fullDesc: 'Exfoliación con sal seguida de aplicación de mantequilla corporal nutritiva para una piel suave como seda.',
        pairWith: ['Envoltura de Bienestar Infrarroja', 'Envoltura Detox con Aromas'],
      },
      pt: {
        name: 'Tratamento de Esfoliação com Sal para as Costas',
        fullDesc: 'Esfoliação com sal seguida de aplicação de manteiga corporal nutritiva para uma pele sedosamente suave.',
        pairWith: ['Envoltório de Bem-estar Infravermelho', 'Envoltório Detox Aromático'],
      },
    },
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
    i18n: {
      es: {
        name: 'Envoltura Detox con Aromas',
        fullDesc: 'Envoltura desintoxicante de cuerpo completo infundida con aceites esenciales para extraer impurezas y nutrir profundamente.',
        pairWith: ['Reflexología', 'Envoltura de Bienestar Infrarroja'],
      },
      pt: {
        name: 'Envoltório Detox Aromático',
        fullDesc: 'Envoltório desintoxicante de corpo inteiro infundido com óleos essenciais para eliminar impurezas e nutrir profundamente.',
        pairWith: ['Reflexologia', 'Envoltório de Bem-estar Infravermelho'],
      },
    },
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
    i18n: {
      es: {
        name: 'Envoltura de Bienestar Infrarroja',
        fullDesc: 'La tecnología de infrarrojo lejano promueve la circulación, alivia la tensión y apoya una desintoxicación natural.',
        pairWith: ['Envoltura Detox con Aromas', 'Reflexología'],
      },
      pt: {
        name: 'Envoltório de Bem-estar Infravermelho',
        fullDesc: 'A tecnologia de infravermelho distante promove a circulação, alivia a tensão e apoia uma desintoxicação natural.',
        pairWith: ['Envoltório Detox Aromático', 'Reflexologia'],
      },
    },
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
    i18n: {
      es: {
        name: 'Reflexología',
        fullDesc: 'Reflexología terapéutica en los pies dirigida a puntos de presión que corresponden a órganos y sistemas de todo el cuerpo — promoviendo la circulación, reduciendo el estrés y apoyando la respuesta natural de sanación del organismo.',
        pairWith: ['Masaje Facial Esculpir y Liberar'],
      },
      pt: {
        name: 'Reflexologia',
        fullDesc: 'Reflexologia terapêutica nos pés direcionada a pontos de pressão que correspondem a órgãos e sistemas por todo o corpo — promovendo a circulação, reduzindo o estresse e apoiando a resposta natural de cura do organismo.',
        pairWith: ['Massagem Facial Esculpir e Liberar'],
      },
    },
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
    i18n: {
      es: {
        name: 'Masaje Facial Esculpir y Liberar',
        fullDesc: 'Un ritual completo de masaje facial y de cuero cabelludo. La acupresión facial trabaja los puntos energéticos para disolver la tensión, estimular la circulación y restaurar la vitalidad natural — luego la técnica de lifting Hadado esculpe, tonifica y aporta un resplandor luminoso. Finaliza con un masaje profundo de cuero cabelludo para una relajación total de principio a fin. Dos técnicas potentes en una sesión continua.',
        pairWith: ['Reflexología', 'Lifting de Ojos — Células Madre'],
      },
      pt: {
        name: 'Massagem Facial Esculpir e Liberar',
        fullDesc: 'Um ritual completo de massagem facial e no couro cabeludo. A acupressão facial mira pontos de energia para dissolver a tensão, estimular a circulação e restaurar a vitalidade natural — então a técnica de lifting Hadado esculpe, firma e proporciona um brilho luminoso. Finalizado com uma massagem profunda no couro cabeludo para um relaxamento completo. Duas técnicas poderosas em uma sessão fluída.',
        pairWith: ['Reflexologia', 'Lifting Ocular — Células-Tronco'],
      },
    },
  },

  // ── Waxing ────────────────────────────────────────────────────────────────
  {
    id: 'wax-eyebrow',
    name: 'Eyebrow Shaping & Wax',
    category: 'Waxing',
    duration_min: 15,
    price: 25,
    description: 'Precision eyebrow shaping and wax',
    i18n: { es: { name: 'Depilación y Modelado de Cejas' }, pt: { name: 'Modelagem e Depilação de Sobrancelhas' } },
  },
  {
    id: 'wax-eyebrow-tint',
    name: 'Eyebrow Tinting',
    category: 'Waxing',
    duration_min: 15,
    price: 25,
    description: 'Eyebrow color tinting',
    i18n: { es: { name: 'Tinte de Cejas' }, pt: { name: 'Tingimento de Sobrancelhas' } },
  },
  {
    id: 'wax-lash-tint',
    name: 'Lash Tinting',
    category: 'Waxing',
    duration_min: 20,
    price: 30,
    description: 'Lash color tinting',
    i18n: { es: { name: 'Tinte de Pestañas' }, pt: { name: 'Tingimento de Cílios' } },
  },
  {
    id: 'wax-full-face',
    name: 'Full Face Wax',
    category: 'Waxing',
    duration_min: 30,
    price: 65,
    description: 'Complete facial hair removal',
    i18n: { es: { name: 'Depilación Facial Completa' }, pt: { name: 'Depilação Facial Completa' } },
  },
  {
    id: 'wax-lip',
    name: 'Lip Wax',
    category: 'Waxing',
    duration_min: 10,
    price: 15,
    description: 'Upper lip hair removal',
    i18n: { es: { name: 'Depilación de Labio' }, pt: { name: 'Depilação do Buço' } },
  },
  {
    id: 'wax-chin',
    name: 'Chin Wax',
    category: 'Waxing',
    duration_min: 10,
    price: 15,
    description: 'Chin hair removal',
    i18n: { es: { name: 'Depilación de Mentón' }, pt: { name: 'Depilação do Queixo' } },
  },
  {
    id: 'wax-cheeks',
    name: 'Cheeks Wax',
    category: 'Waxing',
    duration_min: 15,
    price: 20,
    description: 'Cheek hair removal',
    i18n: { es: { name: 'Depilación de Mejillas' }, pt: { name: 'Depilação das Bochechas' } },
  },
  {
    id: 'wax-nose',
    name: 'Nose Wax',
    category: 'Waxing',
    duration_min: 10,
    price: 15,
    description: 'Nose hair removal',
    i18n: { es: { name: 'Depilación de Nariz' }, pt: { name: 'Depilação do Nariz' } },
  },
  {
    id: 'wax-underarm',
    name: 'Underarm Wax',
    category: 'Waxing',
    duration_min: 15,
    price: 30,
    description: 'Underarm hair removal',
    i18n: { es: { name: 'Depilación de Axilas' }, pt: { name: 'Depilação das Axilas' } },
  },
  {
    id: 'wax-leg',
    name: 'Leg Wax',
    category: 'Waxing',
    duration_min: 45,
    price: 70,
    description: 'Full leg waxing',
    i18n: { es: { name: 'Depilación de Piernas' }, pt: { name: 'Depilação das Pernas' } },
  },
  {
    id: 'wax-french-bikini',
    name: 'French Bikini',
    category: 'Waxing',
    duration_min: 30,
    price: 55,
    description: 'French bikini wax',
    i18n: { es: { name: 'Bikini Francés' }, pt: { name: 'Depilação Francesa' } },
  },
  {
    id: 'wax-brazilian',
    name: 'Brazilian Wax',
    category: 'Waxing',
    duration_min: 45,
    price: 65,
    description: 'Full Brazilian wax',
    i18n: { es: { name: 'Cera Brasileña' }, pt: { name: 'Depilação Brasileira' } },
  },
  {
    id: 'wax-playboy',
    name: 'Playboy Wax',
    category: 'Waxing',
    duration_min: 45,
    price: 75,
    description: 'Playboy wax',
    i18n: { es: { name: 'Cera Playboy' }, pt: { name: 'Depilação Playboy' } },
  },
  {
    id: 'wax-back',
    name: 'Back Wax',
    category: 'Waxing',
    duration_min: 30,
    price: 65,
    description: 'Back hair removal',
    i18n: { es: { name: 'Depilación de Espalda' }, pt: { name: 'Depilação das Costas' } },
  },
  {
    id: 'wax-chest',
    name: 'Chest Wax',
    category: 'Waxing',
    duration_min: 30,
    price: 55,
    description: 'Chest hair removal',
    i18n: { es: { name: 'Depilación de Pecho' }, pt: { name: 'Depilação do Peito' } },
  },
  {
    id: 'wax-arm',
    name: 'Arm Wax',
    category: 'Waxing',
    duration_min: 25,
    price: 50,
    description: 'Full arm wax',
    i18n: { es: { name: 'Depilación de Brazos' }, pt: { name: 'Depilação dos Braços' } },
  },
  {
    id: 'wax-shoulder',
    name: 'Shoulder Waxing',
    category: 'Waxing',
    duration_min: 20,
    price: 35,
    description: 'Shoulder hair removal',
    i18n: { es: { name: 'Depilación de Hombros' }, pt: { name: 'Depilação dos Ombros' } },
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

/** Returns a service with localized fields applied for the given language. Falls back to English for any missing override. */
export function getLocalizedService(service: Service, lang: string): Service {
  if (lang === 'en' || !service.i18n?.[lang as 'es' | 'pt']) return service;
  const override = service.i18n[lang as 'es' | 'pt']!;
  return {
    ...service,
    name: override.name ?? service.name,
    tagline: override.tagline ?? service.tagline,
    fullDesc: override.fullDesc ?? service.fullDesc,
    seriesGroup: override.seriesGroup ?? service.seriesGroup,
    technologies: override.technologies ?? service.technologies,
    technologiesEN: service.technologies, // always preserve English names for techScience lookup
    pairWith: override.pairWith ?? service.pairWith,
    badge: override.badge ?? service.badge,
    compound: service.compound
      ? {
          headline: override.compoundHeadline ?? service.compound.headline,
          body: override.compoundBody ?? service.compound.body,
        }
      : undefined,
  };
}

/** Format duration as "1 hr 30 min" / "50 min" / "2 hr" */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}
