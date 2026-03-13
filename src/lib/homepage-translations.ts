export type Lang = 'en' | 'es' | 'pt';

export interface HomepageStrings {
  // Language pill labels
  langEn: string;
  langEs: string;
  langPt: string;

  // Hero
  heroLocation: string;
  heroHeadline1: string;
  heroHeadline2: string; // "Transform" (italic)
  heroHeadline3: string;
  heroTagline: string;
  heroBookBtn: string;
  heroViewServicesBtn: string;
  heroReviews: string;
  heroExperience: string;
  heroBrandLabel: string;
  heroScroll: string;

  // Hero card service category labels
  catUniqueProtocols: string;
  catSignatureFacials: string;
  catBodyTreatments: string;
  catWaxingServices: string;

  // Advanced Technology section
  techSectionTag: string;
  techSectionTitle: string;
  techSectionDesc: string;
  techSeeAllBtn: string;

  // Tech group labels
  techGroup1: string; // Non-Surgical Lifting
  techGroup2: string; // Radiance & Healing
  techGroup3: string; // Texture & Tone
  techGroup4: string; // Detox & Cellular Renewal

  // Tech item descriptions (3 per group × 4 groups = 12)
  techDesc1_1: string; // Microcurrent Lifting
  techDesc1_2: string; // Therma-Lift Technology
  techDesc1_3: string; // Cold Plasma
  techDesc2_1: string; // LED Photo Therapy
  techDesc2_2: string; // Oxygen Infusion
  techDesc2_3: string; // CO2 Carboxytherapy
  techDesc3_1: string; // Microdermabrasion
  techDesc3_2: string; // Dermaplane Exfoliation
  techDesc3_3: string; // Glycolic Peel
  techDesc4_1: string; // Plant Stem Cell Therapy
  techDesc4_2: string; // Ultrasound Therapy
  techDesc4_3: string; // Gua Sha Lymphatic Drainage

  // Featured Services section
  featuredTag: string;
  featuredTitle: string;
  featuredExploreBtn: string;

  // About section
  aboutTag: string;
  aboutTitle1: string;
  aboutTitle2: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3Pre: string;
  aboutQuote1: string;
  aboutP3Mid: string;
  aboutQuote2: string;
  aboutP3Post: string;
  aboutBtn: string;
  aboutFounderTitle: string;

  // Location strip
  locationLabel: string;
  hoursLabel: string;
  callLabel: string;
  hoursText: string;

  // CTA section
  ctaTitle1: string;
  ctaTitle2: string;
  ctaTitle3: string;
  ctaDesc: string;
  ctaBookBtn: string;
}

export const t: Record<Lang, HomepageStrings> = {
  en: {
    langEn: 'English',
    langEs: 'Español',
    langPt: 'Português',

    heroLocation: 'Woodland Hills, California',
    heroHeadline1: 'Heal Your Skin.',
    heroHeadline2: 'Transform',
    heroHeadline3: 'Your Life.',
    heroTagline:
      'Advanced skincare by Claudia Pieri — 28 years of experience and a personal journey of transformation that deepens every treatment she gives.',
    heroBookBtn: 'Book Your Treatment',
    heroViewServicesBtn: 'View Services',
    heroReviews: '60+ Five-Star Reviews',
    heroExperience: '28 Years Experience',
    heroBrandLabel: 'by Claudia Pieri',
    heroScroll: 'Scroll',

    catUniqueProtocols: 'Unique Protocols',
    catSignatureFacials: 'Signature Facials',
    catBodyTreatments: 'Body Treatments',
    catWaxingServices: 'Waxing Services',

    techSectionTag: 'What Sets Us Apart',
    techSectionTitle: 'Precision Protocols',
    techSectionDesc:
      'Four meticulously engineered programs — each one a precision stack of complementary technologies working in unison. No filler. No single-modality guesswork. Just compounding results.',
    techSeeAllBtn: 'See All Treatments →',

    techGroup1: 'Non-Surgical Lifting',
    techGroup2: 'Radiance & Healing',
    techGroup3: 'Texture & Tone',
    techGroup4: 'Detox & Cellular Renewal',

    techDesc1_1: 'Electrical muscle stimulation for a natural, non-surgical lift',
    techDesc1_2: 'Heat-based sculpting to tighten skin and contour the face',
    techDesc1_3: 'Amplifies absorption of skin boosters by up to 120× and stimulates collagen',
    techDesc2_1: 'Red, blue & near-infrared light to heal, clarify, and regenerate',
    techDesc2_2: 'Pressurized oxygen drives customized serums deep into the skin',
    techDesc2_3: 'Carbon dioxide mask delivers instant firming and brightening',
    techDesc3_1: 'Diamond-tip resurfacing for smooth, even-toned skin',
    techDesc3_2: 'Surgical-grade blade removes dead cells and peach fuzz',
    techDesc3_3: 'Alpha hydroxy acid resurfaces and brightens for a fresh glow',
    techDesc4_1: 'Triggers skin renewal and repair at the deepest cellular layer',
    techDesc4_2: 'Sound wave technology that deeply cleanses, enhances product absorption, and stimulates cellular renewal',
    techDesc4_3: 'Ancient sculpting technique to detox, de-puff, and restore natural radiance',

    featuredTag: 'Most Loved',
    featuredTitle: 'Signature Treatments',
    featuredExploreBtn: 'Explore All Treatments',

    aboutTag: 'Meet Your Therapist',
    aboutTitle1: 'A Healer with',
    aboutTitle2: 'Love in Her Heart',
    aboutP1:
      'With over 28 years of experience, Claudia Pieri has dedicated her life to helping clients achieve radiant skin and renewed self-confidence.',
    aboutP2:
      'A profound personal journey — including a brain tumor that brought about facial paralysis — deepened her understanding of both physical and emotional healing. This experience ignites her commitment to connections that heal the heart and soul.',
    aboutP3Pre: 'Words from her clients — ',
    aboutQuote1: '\u201cYou have a magic touch\u201d',
    aboutP3Mid: ' and ',
    aboutQuote2: '\u201cThank you for healing my skin\u201d',
    aboutP3Post: ' — inspire her every day.',
    aboutBtn: "Read Claudia\u2019s Full Story \u2192",
    aboutFounderTitle: 'Founder & Lead Skincare Therapist',

    locationLabel: 'Location',
    hoursLabel: 'Hours',
    callLabel: 'Call Us',
    hoursText: 'Tue\u2013Fri: 9AM\u20136PM\nSat: 9AM\u20135PM \u00b7 Mon & Sun: Closed',

    ctaTitle1: 'Ready to',
    ctaTitle2: 'Transform',
    ctaTitle3: 'Your Skin?',
    ctaDesc:
      "You don\u2019t have to face skin challenges alone. Let\u2019s embark on this journey together.",
    ctaBookBtn: 'Book Your Appointment',
  },

  es: {
    langEn: 'Inglés',
    langEs: 'Español',
    langPt: 'Portugués',

    heroLocation: 'Woodland Hills, California',
    heroHeadline1: 'Sana Tu Piel.',
    heroHeadline2: 'Transforma',
    heroHeadline3: 'Tu Vida.',
    heroTagline:
      'Cuidado avanzado de la piel por Claudia Pieri — 28 años de experiencia y un viaje personal de transformación que profundiza cada tratamiento que ofrece.',
    heroBookBtn: 'Reserva Tu Tratamiento',
    heroViewServicesBtn: 'Ver Servicios',
    heroReviews: '60+ Reseñas de Cinco Estrellas',
    heroExperience: '28 Años de Experiencia',
    heroBrandLabel: 'por Claudia Pieri',
    heroScroll: 'Desplazar',

    catUniqueProtocols: 'Protocolos Únicos',
    catSignatureFacials: 'Faciales Exclusivos',
    catBodyTreatments: 'Tratamientos Corporales',
    catWaxingServices: 'Servicios de Depilación',

    techSectionTag: 'Lo Que Nos Diferencia',
    techSectionTitle: 'Protocolos de Precisión',
    techSectionDesc:
      'Cuatro programas meticulosamente diseñados — cada uno una combinación precisa de tecnologías complementarias trabajando en unidad. Sin relleno. Sin suposiciones de una sola modalidad. Solo resultados compuestos.',
    techSeeAllBtn: 'Ver Todos los Tratamientos →',

    techGroup1: 'Lifting No Quirúrgico',
    techGroup2: 'Luminosidad y Sanación',
    techGroup3: 'Textura y Tono',
    techGroup4: 'Desintoxicación y Renovación Celular',

    techDesc1_1: 'Estimulación muscular eléctrica para un lift natural no quirúrgico',
    techDesc1_2: 'Escultura térmica para tensar la piel y contornear el rostro',
    techDesc1_3: 'Amplifica la absorción de potenciadores de la piel hasta 120× y estimula el colágeno',
    techDesc2_1: 'Luz roja, azul e infrarroja cercana para sanar, aclarar y regenerar',
    techDesc2_2: 'El oxígeno presurizado introduce sueros personalizados en lo profundo de la piel',
    techDesc2_3: 'La máscara de dióxido de carbono ofrece firmeza y luminosidad instantáneas',
    techDesc3_1: 'Resurfacing con punta de diamante para una piel suave y uniforme',
    techDesc3_2: 'La hoja de grado quirúrgico elimina células muertas y vello fino',
    techDesc3_3: 'El ácido alfa hidroxi resurface y aclara para un brillo fresco',
    techDesc4_1: 'Activa la renovación y reparación de la piel en la capa celular más profunda',
    techDesc4_2: 'Tecnología de ondas de sonido que limpia profundamente, mejora la absorción y estimula la renovación celular',
    techDesc4_3: 'Técnica de escultura antigua para desintoxicar, desinflamar y restaurar el brillo natural',

    featuredTag: 'Los Más Amados',
    featuredTitle: 'Tratamientos Exclusivos',
    featuredExploreBtn: 'Explorar Todos los Tratamientos',

    aboutTag: 'Conoce a Tu Terapeuta',
    aboutTitle1: 'Una Sanadora con',
    aboutTitle2: 'Amor en Su Corazón',
    aboutP1:
      'Con más de 28 años de experiencia, Claudia Pieri ha dedicado su vida a ayudar a sus clientes a lograr una piel radiante y una confianza renovada.',
    aboutP2:
      'Un profundo viaje personal — incluyendo un tumor cerebral que causó parálisis facial — profundizó su comprensión de la sanación física y emocional. Esta experiencia enciende su compromiso con las conexiones que sanan el corazón y el alma.',
    aboutP3Pre: 'Las palabras de sus clientes — ',
    aboutQuote1: '\u201cTienes un toque mágico\u201d',
    aboutP3Mid: ' y ',
    aboutQuote2: '\u201cGracias por sanar mi piel\u201d',
    aboutP3Post: ' — la inspiran cada día.',
    aboutBtn: 'Leer la Historia Completa de Claudia →',
    aboutFounderTitle: 'Fundadora y Terapeuta Principal de la Piel',

    locationLabel: 'Ubicación',
    hoursLabel: 'Horario',
    callLabel: 'Llámanos',
    hoursText: 'Mar\u2013Vie: 9AM\u20136PM\nSáb: 9AM\u20135PM \u00b7 Lun y Dom: Cerrado',

    ctaTitle1: '¿Lista para',
    ctaTitle2: 'Transformar',
    ctaTitle3: 'Tu Piel?',
    ctaDesc: 'No tienes que enfrentar los desafíos de la piel sola. Emprendamos este viaje juntas.',
    ctaBookBtn: 'Reserva Tu Cita',
  },

  pt: {
    langEn: 'Inglês',
    langEs: 'Espanhol',
    langPt: 'Português',

    heroLocation: 'Woodland Hills, Califórnia',
    heroHeadline1: 'Cure Sua Pele.',
    heroHeadline2: 'Transforme',
    heroHeadline3: 'Sua Vida.',
    heroTagline:
      'Cuidados avançados com a pele por Claudia Pieri — 28 anos de experiência e uma jornada pessoal de transformação que aprofunda cada tratamento que ela oferece.',
    heroBookBtn: 'Agende Seu Tratamento',
    heroViewServicesBtn: 'Ver Serviços',
    heroReviews: '60+ Avaliações Cinco Estrelas',
    heroExperience: '28 Anos de Experiência',
    heroBrandLabel: 'por Claudia Pieri',
    heroScroll: 'Rolar',

    catUniqueProtocols: 'Protocolos Únicos',
    catSignatureFacials: 'Faciais Exclusivos',
    catBodyTreatments: 'Tratamentos Corporais',
    catWaxingServices: 'Serviços de Depilação',

    techSectionTag: 'O Que Nos Diferencia',
    techSectionTitle: 'Protocolos de Precisão',
    techSectionDesc:
      'Quatro programas meticulosamente desenvolvidos — cada um uma combinação precisa de tecnologias complementares trabalhando em uníssono. Sem preenchimento. Sem adivinhações de modalidade única. Apenas resultados compostos.',
    techSeeAllBtn: 'Ver Todos os Tratamentos →',

    techGroup1: 'Lifting Não Cirúrgico',
    techGroup2: 'Luminosidade e Cura',
    techGroup3: 'Textura e Tom',
    techGroup4: 'Desintoxicação e Renovação Celular',

    techDesc1_1: 'Estimulação muscular elétrica para um lifting natural, não cirúrgico',
    techDesc1_2: 'Escultura térmica para firmar a pele e contornar o rosto',
    techDesc1_3: 'Amplifica a absorção de boosters de pele em até 120× e estimula o colágeno',
    techDesc2_1: 'Luz vermelha, azul e infravermelho próximo para curar, clarear e regenerar',
    techDesc2_2: 'Oxigênio pressurizado leva soros personalizados às camadas mais profundas da pele',
    techDesc2_3: 'Máscara de dióxido de carbono oferece firmeza e luminosidade instantâneas',
    techDesc3_1: 'Resurfacing com ponta de diamante para pele suave e uniforme',
    techDesc3_2: 'Lâmina de grau cirúrgico remove células mortas e pelos finos',
    techDesc3_3: 'Ácido alfa-hidroxi renova e ilumina para um brilho fresco',
    techDesc4_1: 'Ativa a renovação e reparação da pele na camada celular mais profunda',
    techDesc4_2: 'Tecnologia de ondas sonoras que limpa profundamente, melhora a absorção e estimula a renovação celular',
    techDesc4_3: 'Técnica de escultura ancestral para desintoxicar, desinflamar e restaurar o brilho natural',

    featuredTag: 'Os Mais Amados',
    featuredTitle: 'Tratamentos Exclusivos',
    featuredExploreBtn: 'Explorar Todos os Tratamentos',

    aboutTag: 'Conheça Sua Terapeuta',
    aboutTitle1: 'Uma Curadora com',
    aboutTitle2: 'Amor no Coração',
    aboutP1:
      'Com mais de 28 anos de experiência, Claudia Pieri dedicou sua vida a ajudar clientes a alcançar uma pele radiante e uma autoconfiança renovada.',
    aboutP2:
      'Uma profunda jornada pessoal — incluindo um tumor cerebral que causou paralisia facial — aprofundou sua compreensão da cura física e emocional. Essa experiência acende seu compromisso com conexões que curam o coração e a alma.',
    aboutP3Pre: 'As palavras de seus clientes — ',
    aboutQuote1: '\u201cVocê tem um toque mágico\u201d',
    aboutP3Mid: ' e ',
    aboutQuote2: '\u201cObrigada por curar minha pele\u201d',
    aboutP3Post: ' — a inspiram todos os dias.',
    aboutBtn: 'Ler a História Completa de Claudia →',
    aboutFounderTitle: 'Fundadora e Terapeuta Principal de Skincare',

    locationLabel: 'Localização',
    hoursLabel: 'Horário',
    callLabel: 'Ligue',
    hoursText: 'Ter\u2013Sex: 9h\u201318h\nSáb: 9h\u201317h \u00b7 Seg e Dom: Fechado',

    ctaTitle1: 'Pronta para',
    ctaTitle2: 'Transformar',
    ctaTitle3: 'Sua Pele?',
    ctaDesc: 'Você não precisa enfrentar desafios de pele sozinha. Vamos embarcar nessa jornada juntas.',
    ctaBookBtn: 'Agende Seu Horário',
  },
};
