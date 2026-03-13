import { t as homepageT, type HomepageStrings } from './homepage-translations';
import type { Lang } from './language-context';

// ─── Navbar ──────────────────────────────────────────────────────────────────

export interface NavStrings {
  home: string;
  services: string;
  blog: string;
  about: string;
  contact: string;
  bookNow: string;
}

// ─── Services Page ────────────────────────────────────────────────────────────

export interface ServicesStrings {
  heroTag: string;
  heroTitle: string;
  heroDesc: string;
  heroBookBtn: string;

  seriesTag: string;
  seriesTitle: string;
  seriesDesc: string;
  seriesSessionsBadge: (n: number) => string;
  seriesWhyCompounds: string;
  seriesBookBtn: string;

  signatureTag: string;
  signatureTitle: string;
  signatureDesc: string;
  signatureBookBtn: string;

  addonsTag: string;
  addonsTitle: string;
  addonsDesc: string;

  bodyTag: string;
  bodyTitle: string;

  waxingTag: string;
  waxingTitle: string;

  ctaTitle: string;
  ctaDesc: string;
  ctaBookBtn: string;

  pairWith: string;
  enhanceWith: string;
}

// ─── Booking Page ─────────────────────────────────────────────────────────────

export interface BookingStrings {
  onlineBookingTag: string;
  bookTitle: string;
  bookSubtitle: string;

  // Step labels
  stepService: string;
  stepAddOns: string;
  stepDate: string;
  stepTime: string;
  stepDetails: string;

  // Step 2 - Add-Ons
  step2Tag: string;
  step2Title: string;
  step2Optional: (serviceName: string) => string;

  treatmentTotal: string;
  estDuration: string;
  skipAddOns: string;
  continueWithAddOns: string;

  // Step 3 - Date
  step3Tag: string;
  step3Title: string;
  step3SeriesTitle: (sessionNum: number) => string;
  seriesTag: (sessionNum: number) => string;

  // Step 4 - Time
  step4Tag: string;
  step4Title: string;
  step4SeriesTitle: (sessionNum: number) => string;
  checkingAvailability: string;
  noAvailabilityTitle: string;
  noAvailabilityDesc: string;
  pickDifferentDate: string;

  // Step 5 - Details
  step5Tag: string;
  step5Title: string;
  bookingSummary: string;

  labelService: string;
  labelAddOns: string;
  labelDate: string;
  labelTime: string;
  labelInvestment: string;
  labelSession: (n: number) => string;
  threeSessionPackage: string;

  labelFullName: string;
  labelEmail: string;
  labelPhone: string;
  labelNotes: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderNotes: string;

  confirmBook: string;
  confirmAllSessions: string;
  confirming: string;
  paymentNote: string;

  // Step 6 - Confirmation
  allSet: string;
  bookedSingle: string;
  bookedSeries: string;
  confirmationEmailSent: string;
  addToCalendar: string;
  backToHome: string;
  yourAppointment: string;
  yourSeriesJourney: string;

  // Series-specific
  noPressure: string;
  noPressureDesc: string;
  spacingRecommendation: string;
  openHours: string;

  continueBtn: string;
  backBtn: string;
  policyAgreement: string;
}

// ─── About Page ───────────────────────────────────────────────────────────────

export interface AboutStrings {
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;

  storyTag: string;
  storyTitle: string;

  para1: string;
  para2: string;
  para3: string;
  para4: string;
  quote: string;
  quoteAuthor: string;

  bookWithClaudia: string;
  viewServices: string;

  statsYearsLabel: string;
  statsReviewsLabel: string;
  statsClientsLabel: string;

  timelineTag: string;
  timelineTitle: string;

  milestones: Array<{ year: string; label: string }>;

  ctaTitle1: string;
  ctaTitle2: string;
  ctaDesc: string;
  ctaBookBtn: string;

  founderTitle: string;
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

export interface ContactStrings {
  tag: string;
  title: string;

  locationLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  getDirections: string;

  days: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    closed: string;
  };

  ctaTitle: string;
  ctaDesc: string;
  ctaCallBtn: string;
  ctaBookBtn: string;

  followLabel: string;
}

// ─── Reschedule Page ──────────────────────────────────────────────────────────

export interface RescheduleStrings {
  loadingBooking: string;
  checking: string;

  errorTitle: string;
  errorDesc: string;
  errorContactDesc: string;
  backToHome: string;

  successTag: string;
  successTitle: string;
  successDesc: string;
  updatedAppointment: string;
  confirmationSentTo: string;

  rescheduleTag: string;
  changeTitle: string;
  greeting: (name: string) => string;
  currentBooking: string;

  labelService: string;
  labelSession: string;
  labelDate: string;
  labelTime: string;
  labelNewDate: string;
  labelNewTime: string;

  selectNewDate: string;
  openHours: string;
  backBtn: string;

  sessionOf: (n: number, total: number) => string;

  selectNewDateTitle: string;
  selectNewTimeTitle: string;
  noAvailabilityTitle: string;
  noAvailabilityDesc: string;
  pickDifferentDate: string;
  checkingAvailability: string;

  confirmRescheduleTag: string;
  confirmRescheduleQuestion: string;
  newAppointment: string;
  confirmRescheduleBtn: string;
  rescheduling: string;
  confirmationWillBeSent: (email: string) => string;
}

// ─── Combined ─────────────────────────────────────────────────────────────────

export interface SiteTranslations {
  homepage: HomepageStrings;
  nav: NavStrings;
  services: ServicesStrings;
  booking: BookingStrings;
  about: AboutStrings;
  contact: ContactStrings;
  reschedule: RescheduleStrings;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ENGLISH
// ═══════════════════════════════════════════════════════════════════════════════

const en: SiteTranslations = {
  homepage: homepageT.en,

  nav: {
    home: 'Home',
    services: 'Services',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    bookNow: 'Book Now',
  },

  services: {
    heroTag: 'Woodland Hills, CA',
    heroTitle: 'Our Services',
    heroDesc: "Every treatment is customized to your unique skin. Claudia's 28 years of expertise ensure you receive exactly what your skin needs.",
    heroBookBtn: 'Book a Treatment',

    seriesTag: 'Advanced Technology · 3-Session Protocols',
    seriesTitle: 'The Transformation Series',
    seriesDesc: 'One session is a treatment. Three sessions is a transformation. Each series is a three-session journey — every appointment building on the last, going deeper, delivering results that actually last.',
    seriesSessionsBadge: (n) => `${n} Sessions`,
    seriesWhyCompounds: 'Why It Compounds',
    seriesBookBtn: 'Book This Series',

    signatureTag: 'Single Session',
    signatureTitle: 'Signature Treatments',
    signatureDesc: 'Our core menu — each treatment a unique experience designed to transform your skin.',
    signatureBookBtn: 'Book This Treatment',

    addonsTag: 'Customize Your Treatment',
    addonsTitle: 'Add-Ons',
    addonsDesc: 'Enhance any facial with one or more of these targeted boosters.',

    bodyTag: 'Full Body Care',
    bodyTitle: 'Body & Massage',

    waxingTag: 'Hair Removal',
    waxingTitle: 'Waxing Services',

    ctaTitle: 'Not sure where to start?',
    ctaDesc: 'Book a consultation and Claudia will personally recommend the perfect treatment for your skin.',
    ctaBookBtn: 'Book a Consultation',

    pairWith: 'Pair with:',
    enhanceWith: 'Enhance with:',
  },

  booking: {
    onlineBookingTag: 'Online Booking',
    bookTitle: 'Book Your Treatment',
    bookSubtitle: 'Choose a service to begin',

    stepService: 'Service',
    stepAddOns: 'Add-Ons',
    stepDate: 'Date',
    stepTime: 'Time',
    stepDetails: 'Details',

    step2Tag: 'Step 2 of 5',
    step2Title: 'Enhance Your Treatment',
    step2Optional: (name) => `Optional — add targeted boosters to your ${name}`,

    treatmentTotal: 'Treatment total:',
    estDuration: 'Est. duration:',
    skipAddOns: 'Skip Add-Ons →',
    continueWithAddOns: 'Continue with Add-Ons →',

    step3Tag: 'Step 3 of 5',
    step3Title: 'Select a Date',
    step3SeriesTitle: (n) => `Choose a Date — Session ${n}`,
    seriesTag: (n) => `Session ${n} of 3`,

    step4Tag: 'Step 4 of 5',
    step4Title: 'Select a Time',
    step4SeriesTitle: (n) => `Choose a Time — Session ${n}`,
    checkingAvailability: 'Checking availability…',
    noAvailabilityTitle: 'No availability',
    noAvailabilityDesc: 'There are no open slots on this date. Please choose another day.',
    pickDifferentDate: 'Pick a Different Date',

    step5Tag: 'Step 5 of 5',
    step5Title: 'Complete Your Booking',
    bookingSummary: 'Booking Summary',

    labelService: 'Service',
    labelAddOns: 'Add-Ons',
    labelDate: 'Date',
    labelTime: 'Time',
    labelInvestment: 'Investment',
    labelSession: (n) => `Session ${n}`,
    threeSessionPackage: '3-session package',

    labelFullName: 'Full Name',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelNotes: 'Notes (optional)',
    placeholderName: 'Jane Smith',
    placeholderEmail: 'jane@example.com',
    placeholderPhone: '(818) 555-0100',
    placeholderNotes: 'Any skin concerns, allergies, or special requests…',

    confirmBook: 'Confirm & Book',
    confirmAllSessions: 'Confirm All 3 Sessions →',
    confirming: 'Confirming…',
    paymentNote: 'Payment is collected at the time of your appointment.',

    allSet: 'All Set!',
    bookedSingle: "You're booked! ✨",
    bookedSeries: 'Your series is booked! ✨',
    confirmationEmailSent: 'A confirmation email has been sent to',
    addToCalendar: '📅 Add to Google Calendar',
    backToHome: 'Back to Home',
    yourAppointment: 'Your Appointment',
    yourSeriesJourney: 'Your 3-Session Journey',

    noPressure: 'No pressure on dates 🌿',
    noPressureDesc: 'Pick something that works for now — you can reschedule any session anytime using the link in your confirmation email.',
    spacingRecommendation: 'We recommend spacing sessions 1–2 weeks apart for best results.',
    openHours: 'Open Tuesday – Friday 9am–6pm · Saturday 9am–5pm',

    continueBtn: 'Continue →',
    backBtn: 'Back',
    policyAgreement: 'I understand that all sales are final. I may reschedule any session at any time, as many times as needed.',
  },

  about: {
    heroTag: 'The Heart Behind the Brand',
    heroTitle: 'Meet Claudia',
    heroSubtitle: "Passionate Brasilian Skin Care Therapist. Healer. Founder. A woman whose personal journey of transformation deepens every treatment she gives.",

    storyTag: 'Her Story',
    storyTitle: 'A Healer with Love\nin Her Heart',

    para1: "Your passionate Brasilian Skin Care Therapist with over 28 years of experience, I am dedicated to helping you achieve radiant skin and renewed self-confidence. My journey began at Best Face & Body Spa, where I perfected my craft through various treatments, including LED therapy, glycolic peels, microdermabrasion, and more specialized techniques.",
    para2: "My love for skincare drives me to explore the latest technologies, ensuring that I continually expand my knowledge for your benefit. Life has gifted me with profound challenges, including a brain tumor that changed my face and brought about facial paralysis. This journey deepened my understanding of both physical and emotional healing, igniting my commitment to foster connections that heal the heart and soul.",
    para3: "As the proud founder of Brasilian SkinSoul, my mission is clear: to heal your skin while boosting your self-esteem. I believe that true beauty emerges from within, and when your skin is healthy, your inner beauty shines brighter. There's nothing I cherish more than using advanced techniques and premium products to bring rejuvenation and transformation to your skin.",
    para4: 'Heartfelt words from clients like you — "You have a magic touch" and "Thank you for healing my skin" — inspire me daily. Knowing that I can positively impact your life motivates me to deliver exceptional service with every visit. I value the connections we build, and I\'m committed to listening to your unique needs as both a healer and a supporter of your overall well-being.',

    quote: "You don't have to face skin challenges alone. At Brasilian SkinSoul, I invite you to experience the gentle yet powerful touch that can make a real difference in your life. Let's embark on this journey together and uncover the beauty that lies within you!",
    quoteAuthor: '— Claudia Pieri',

    bookWithClaudia: 'Book with Claudia',
    viewServices: 'View Services',

    statsYearsLabel: 'Years Experience',
    statsReviewsLabel: '5-Star Reviews',
    statsClientsLabel: 'Year Loyal Clients',

    timelineTag: 'The Journey',
    timelineTitle: '28 Years of Mastery',

    milestones: [
      { year: '1996', label: 'Career began at Best Face & Body Spa' },
      { year: '2000s', label: 'Mastered LED therapy, glycolic peels & microdermabrasion' },
      { year: '2010s', label: 'Embraced cutting-edge technologies: Therma-Lift, Cold Plasma, Microcurrent' },
      { year: '2020', label: 'Founded Brasilian SkinSoul — her own practice' },
      { year: 'Today', label: '28+ years of experience, 60+ five-star reviews, clients for 20+ years' },
    ],

    ctaTitle1: 'Ready to Start',
    ctaTitle2: 'Your Journey?',
    ctaDesc: 'Experience the gentle yet powerful touch that makes a real difference.',
    ctaBookBtn: 'Book an Appointment',

    founderTitle: 'Founder & Lead Skincare Therapist',
  },

  contact: {
    tag: 'Get In Touch',
    title: 'Contact Us',

    locationLabel: 'Location',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    getDirections: 'Get Directions →',

    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
    },

    ctaTitle: 'Ready to Book?',
    ctaDesc: 'Call us or book online — Claudia is ready to help you achieve radiant, healthy skin.',
    ctaCallBtn: '📞 Call (818) 577-5421',
    ctaBookBtn: 'Book Online',

    followLabel: 'Follow Along',
  },

  reschedule: {
    loadingBooking: 'Loading your booking…',
    checking: 'Loading…',

    errorTitle: 'This link is invalid',
    errorDesc: 'This reschedule link is invalid or has already been used.',
    errorContactDesc: 'Please contact us at',
    backToHome: 'Back to Home',

    successTag: 'All Set!',
    successTitle: 'Rescheduled! ✨',
    successDesc: 'Your session has been updated.',
    updatedAppointment: 'Updated Appointment',
    confirmationSentTo: 'A confirmation email has been sent to',

    rescheduleTag: 'Reschedule',
    changeTitle: 'Change Your Appointment',
    greeting: (name) => `Hi ${name} — here's your current booking:`,
    currentBooking: 'Current Booking',

    labelService: 'Service',
    labelSession: 'Session',
    labelDate: 'Date',
    labelTime: 'Time',
    labelNewDate: 'New Date',
    labelNewTime: 'New Time',

    selectNewDate: 'Select a New Date →',
    openHours: 'Open Tuesday – Friday 9am–6pm · Saturday 9am–5pm',
    backBtn: 'Back',

    sessionOf: (n, total) => `Session ${n} of ${total}`,

    selectNewDateTitle: 'Select a New Date',
    selectNewTimeTitle: 'Select a New Time',
    noAvailabilityTitle: 'No availability',
    noAvailabilityDesc: 'No open slots on this date. Please choose another day.',
    pickDifferentDate: 'Pick a Different Date',
    checkingAvailability: 'Checking availability…',

    confirmRescheduleTag: 'Confirm Reschedule',
    confirmRescheduleQuestion: 'Does this look right?',
    newAppointment: 'New Appointment',
    confirmRescheduleBtn: 'Confirm Reschedule →',
    rescheduling: 'Rescheduling…',
    confirmationWillBeSent: (email) => `A confirmation email will be sent to ${email}`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// ESPAÑOL
// ═══════════════════════════════════════════════════════════════════════════════

const es: SiteTranslations = {
  homepage: homepageT.es,

  nav: {
    home: 'Inicio',
    services: 'Servicios',
    blog: 'Blog',
    about: 'Nosotros',
    contact: 'Contacto',
    bookNow: 'Reservar',
  },

  services: {
    heroTag: 'Woodland Hills, CA',
    heroTitle: 'Nuestros Servicios',
    heroDesc: 'Cada tratamiento está personalizado para tu piel única. Los 28 años de experiencia de Claudia garantizan que recibas exactamente lo que tu piel necesita.',
    heroBookBtn: 'Reservar un Tratamiento',

    seriesTag: 'Tecnología Avanzada · Protocolos de 3 Sesiones',
    seriesTitle: 'La Serie de Transformación',
    seriesDesc: 'Una sesión es un tratamiento. Tres sesiones es una transformación. Cada serie es un viaje de tres sesiones — cada cita construyendo sobre la anterior, profundizando, entregando resultados que realmente duran.',
    seriesSessionsBadge: (n) => `${n} Sesiones`,
    seriesWhyCompounds: 'Por Qué Se Acumula',
    seriesBookBtn: 'Reservar Esta Serie',

    signatureTag: 'Sesión Individual',
    signatureTitle: 'Tratamientos Exclusivos',
    signatureDesc: 'Nuestro menú principal — cada tratamiento una experiencia única diseñada para transformar tu piel.',
    signatureBookBtn: 'Reservar Este Tratamiento',

    addonsTag: 'Personaliza Tu Tratamiento',
    addonsTitle: 'Complementos',
    addonsDesc: 'Mejora cualquier facial con uno o más de estos potenciadores específicos.',

    bodyTag: 'Cuidado Corporal Completo',
    bodyTitle: 'Cuerpo y Masajes',

    waxingTag: 'Depilación',
    waxingTitle: 'Servicios de Depilación',

    ctaTitle: '¿No sabes por dónde empezar?',
    ctaDesc: 'Reserva una consulta y Claudia te recomendará personalmente el tratamiento perfecto para tu piel.',
    ctaBookBtn: 'Reservar una Consulta',

    pairWith: 'Combina con:',
    enhanceWith: 'Mejora con:',
  },

  booking: {
    onlineBookingTag: 'Reservas en Línea',
    bookTitle: 'Reserva Tu Tratamiento',
    bookSubtitle: 'Elige un servicio para comenzar',

    stepService: 'Servicio',
    stepAddOns: 'Extras',
    stepDate: 'Fecha',
    stepTime: 'Hora',
    stepDetails: 'Detalles',

    step2Tag: 'Paso 2 de 5',
    step2Title: 'Mejora Tu Tratamiento',
    step2Optional: (name) => `Opcional — agrega potenciadores específicos a tu ${name}`,

    treatmentTotal: 'Total del tratamiento:',
    estDuration: 'Duración estimada:',
    skipAddOns: 'Omitir Extras →',
    continueWithAddOns: 'Continuar con Extras →',

    step3Tag: 'Paso 3 de 5',
    step3Title: 'Selecciona una Fecha',
    step3SeriesTitle: (n) => `Elige una Fecha — Sesión ${n}`,
    seriesTag: (n) => `Sesión ${n} de 3`,

    step4Tag: 'Paso 4 de 5',
    step4Title: 'Selecciona una Hora',
    step4SeriesTitle: (n) => `Elige una Hora — Sesión ${n}`,
    checkingAvailability: 'Verificando disponibilidad…',
    noAvailabilityTitle: 'Sin disponibilidad',
    noAvailabilityDesc: 'No hay horarios disponibles en esta fecha. Por favor elige otro día.',
    pickDifferentDate: 'Elegir Otra Fecha',

    step5Tag: 'Paso 5 de 5',
    step5Title: 'Completa Tu Reserva',
    bookingSummary: 'Resumen de la Reserva',

    labelService: 'Servicio',
    labelAddOns: 'Extras',
    labelDate: 'Fecha',
    labelTime: 'Hora',
    labelInvestment: 'Inversión',
    labelSession: (n) => `Sesión ${n}`,
    threeSessionPackage: 'Paquete de 3 sesiones',

    labelFullName: 'Nombre Completo',
    labelEmail: 'Correo Electrónico',
    labelPhone: 'Teléfono',
    labelNotes: 'Notas (opcional)',
    placeholderName: 'María García',
    placeholderEmail: 'maria@ejemplo.com',
    placeholderPhone: '(818) 555-0100',
    placeholderNotes: 'Preocupaciones de la piel, alergias o solicitudes especiales…',

    confirmBook: 'Confirmar y Reservar',
    confirmAllSessions: 'Confirmar las 3 Sesiones →',
    confirming: 'Confirmando…',
    paymentNote: 'El pago se recolecta en el momento de tu cita.',

    allSet: '¡Todo Listo!',
    bookedSingle: '¡Estás reservada! ✨',
    bookedSeries: '¡Tu serie está reservada! ✨',
    confirmationEmailSent: 'Se ha enviado un correo de confirmación a',
    addToCalendar: '📅 Agregar a Google Calendar',
    backToHome: 'Volver al Inicio',
    yourAppointment: 'Tu Cita',
    yourSeriesJourney: 'Tu Viaje de 3 Sesiones',

    noPressure: 'Sin presión con las fechas 🌿',
    noPressureDesc: 'Elige algo que funcione por ahora — puedes reprogramar cualquier sesión en cualquier momento usando el enlace en tu correo de confirmación.',
    spacingRecommendation: 'Recomendamos espaciar las sesiones 1–2 semanas para mejores resultados.',
    openHours: 'Abierto Martes – Viernes 9am–6pm · Sábado 9am–5pm',

    continueBtn: 'Continuar →',
    backBtn: 'Atrás',
    policyAgreement: 'Entiendo que todas las ventas son finales. Puedo reprogramar cualquier sesión en cualquier momento, tantas veces como sea necesario.',
  },

  about: {
    heroTag: 'El Corazón de la Marca',
    heroTitle: 'Conoce a Claudia',
    heroSubtitle: 'Apasionada Terapeuta Brasileña del Cuidado de la Piel. Sanadora. Fundadora. Una mujer cuyo viaje personal de transformación profundiza cada tratamiento que da.',

    storyTag: 'Su Historia',
    storyTitle: 'Una Sanadora con Amor\nen Su Corazón',

    para1: 'Tu apasionada Terapeuta Brasileña del Cuidado de la Piel con más de 28 años de experiencia, estoy dedicada a ayudarte a lograr una piel radiante y una confianza renovada. Mi viaje comenzó en Best Face & Body Spa, donde perfeccioné mi arte a través de varios tratamientos, incluyendo terapia LED, peeling de glicólico, microdermoabrasión y técnicas más especializadas.',
    para2: 'Mi amor por el cuidado de la piel me impulsa a explorar las últimas tecnologías, asegurando que continúe expandiendo mi conocimiento para tu beneficio. La vida me ha regalado desafíos profundos, incluyendo un tumor cerebral que cambió mi rostro y ocasionó parálisis facial. Este viaje profundizó mi comprensión de la sanación física y emocional, encendiendo mi compromiso de fomentar conexiones que sanan el corazón y el alma.',
    para3: 'Como la orgullosa fundadora de Brasilian SkinSoul, mi misión es clara: sanar tu piel mientras elevo tu autoestima. Creo que la verdadera belleza emerge desde adentro, y cuando tu piel está saludable, tu belleza interior brilla más. No hay nada que atesore más que usar técnicas avanzadas y productos premium para traer rejuvenecimiento y transformación a tu piel.',
    para4: 'Las palabras sinceras de clientes como tú — "Tienes un toque mágico" y "Gracias por sanar mi piel" — me inspiran a diario. Saber que puedo impactar positivamente tu vida me motiva a brindar un servicio excepcional en cada visita. Valoro las conexiones que construimos, y estoy comprometida a escuchar tus necesidades únicas como sanadora y apoyo para tu bienestar general.',

    quote: "No tienes que enfrentar los desafíos de la piel sola. En Brasilian SkinSoul, te invito a experimentar el toque suave pero poderoso que puede hacer una verdadera diferencia en tu vida. ¡Embarquémonos en este viaje juntas y descubramos la belleza que hay dentro de ti!",
    quoteAuthor: '— Claudia Pieri',

    bookWithClaudia: 'Reservar con Claudia',
    viewServices: 'Ver Servicios',

    statsYearsLabel: 'Años de Experiencia',
    statsReviewsLabel: 'Reseñas 5 Estrellas',
    statsClientsLabel: 'Años de Clientes Fieles',

    timelineTag: 'El Viaje',
    timelineTitle: '28 Años de Maestría',

    milestones: [
      { year: '1996', label: 'La carrera comenzó en Best Face & Body Spa' },
      { year: '2000s', label: 'Dominó la terapia LED, peeling de glicólico y microdermoabrasión' },
      { year: '2010s', label: 'Adoptó tecnologías de vanguardia: Therma-Lift, Cold Plasma, Microcorriente' },
      { year: '2020', label: 'Fundó Brasilian SkinSoul — su propia práctica' },
      { year: 'Hoy', label: 'Más de 28 años de experiencia, más de 60 reseñas de cinco estrellas, clientes por más de 20 años' },
    ],

    ctaTitle1: '¿Lista para Comenzar',
    ctaTitle2: 'Tu Viaje?',
    ctaDesc: 'Experimenta el toque suave pero poderoso que hace una verdadera diferencia.',
    ctaBookBtn: 'Reservar una Cita',

    founderTitle: 'Fundadora y Terapeuta Principal de la Piel',
  },

  contact: {
    tag: 'Contáctanos',
    title: 'Contáctanos',

    locationLabel: 'Ubicación',
    phoneLabel: 'Teléfono',
    hoursLabel: 'Horario',
    getDirections: 'Cómo Llegar →',

    days: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
      closed: 'Cerrado',
    },

    ctaTitle: '¿Lista para Reservar?',
    ctaDesc: 'Llámanos o reserva en línea — Claudia está lista para ayudarte a lograr una piel radiante y saludable.',
    ctaCallBtn: '📞 Llamar (818) 577-5421',
    ctaBookBtn: 'Reservar en Línea',

    followLabel: 'Síguenos',
  },

  reschedule: {
    loadingBooking: 'Cargando tu reserva…',
    checking: 'Cargando…',

    errorTitle: 'Este enlace no es válido',
    errorDesc: 'Este enlace de reprogramación no es válido o ya ha sido utilizado.',
    errorContactDesc: 'Por favor contáctanos en',
    backToHome: 'Volver al Inicio',

    successTag: '¡Todo Listo!',
    successTitle: '¡Reprogramado! ✨',
    successDesc: 'Tu sesión ha sido actualizada.',
    updatedAppointment: 'Cita Actualizada',
    confirmationSentTo: 'Se ha enviado un correo de confirmación a',

    rescheduleTag: 'Reprogramar',
    changeTitle: 'Cambiar Tu Cita',
    greeting: (name) => `Hola ${name} — aquí está tu reserva actual:`,
    currentBooking: 'Reserva Actual',

    labelService: 'Servicio',
    labelSession: 'Sesión',
    labelDate: 'Fecha',
    labelTime: 'Hora',
    labelNewDate: 'Nueva Fecha',
    labelNewTime: 'Nueva Hora',

    selectNewDate: 'Seleccionar Nueva Fecha →',
    openHours: 'Abierto Martes – Viernes 9am–6pm · Sábado 9am–5pm',
    backBtn: 'Atrás',

    sessionOf: (n, total) => `Sesión ${n} de ${total}`,

    selectNewDateTitle: 'Selecciona una Nueva Fecha',
    selectNewTimeTitle: 'Selecciona una Nueva Hora',
    noAvailabilityTitle: 'Sin disponibilidad',
    noAvailabilityDesc: 'No hay horarios disponibles en esta fecha. Por favor elige otro día.',
    pickDifferentDate: 'Elegir Otra Fecha',
    checkingAvailability: 'Verificando disponibilidad…',

    confirmRescheduleTag: 'Confirmar Reprogramación',
    confirmRescheduleQuestion: '¿Se ve bien?',
    newAppointment: 'Nueva Cita',
    confirmRescheduleBtn: 'Confirmar Reprogramación →',
    rescheduling: 'Reprogramando…',
    confirmationWillBeSent: (email) => `Se enviará un correo de confirmación a ${email}`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// PORTUGUÊS
// ═══════════════════════════════════════════════════════════════════════════════

const pt: SiteTranslations = {
  homepage: homepageT.pt,

  nav: {
    home: 'Início',
    services: 'Serviços',
    blog: 'Blog',
    about: 'Sobre',
    contact: 'Contato',
    bookNow: 'Agendar',
  },

  services: {
    heroTag: 'Woodland Hills, CA',
    heroTitle: 'Nossos Serviços',
    heroDesc: 'Cada tratamento é personalizado para sua pele única. Os 28 anos de experiência de Claudia garantem que você receba exatamente o que sua pele precisa.',
    heroBookBtn: 'Agendar um Tratamento',

    seriesTag: 'Tecnologia Avançada · Protocolos de 3 Sessões',
    seriesTitle: 'A Série de Transformação',
    seriesDesc: 'Uma sessão é um tratamento. Três sessões é uma transformação. Cada série é uma jornada de três sessões — cada consulta construindo sobre a anterior, indo mais fundo, entregando resultados que realmente duram.',
    seriesSessionsBadge: (n) => `${n} Sessões`,
    seriesWhyCompounds: 'Por Que Se Acumula',
    seriesBookBtn: 'Agendar Esta Série',

    signatureTag: 'Sessão Individual',
    signatureTitle: 'Tratamentos Exclusivos',
    signatureDesc: 'Nosso cardápio principal — cada tratamento uma experiência única projetada para transformar sua pele.',
    signatureBookBtn: 'Agendar Este Tratamento',

    addonsTag: 'Personalize Seu Tratamento',
    addonsTitle: 'Complementos',
    addonsDesc: 'Melhore qualquer facial com um ou mais desses potencializadores específicos.',

    bodyTag: 'Cuidado Corporal Completo',
    bodyTitle: 'Corpo e Massagem',

    waxingTag: 'Depilação',
    waxingTitle: 'Serviços de Depilação',

    ctaTitle: 'Não sabe por onde começar?',
    ctaDesc: 'Agende uma consulta e Claudia irá recomendar pessoalmente o tratamento perfeito para sua pele.',
    ctaBookBtn: 'Agendar uma Consulta',

    pairWith: 'Combine com:',
    enhanceWith: 'Melhore com:',
  },

  booking: {
    onlineBookingTag: 'Agendamento Online',
    bookTitle: 'Agende Seu Tratamento',
    bookSubtitle: 'Escolha um serviço para começar',

    stepService: 'Serviço',
    stepAddOns: 'Extras',
    stepDate: 'Data',
    stepTime: 'Hora',
    stepDetails: 'Detalhes',

    step2Tag: 'Passo 2 de 5',
    step2Title: 'Melhore Seu Tratamento',
    step2Optional: (name) => `Opcional — adicione potencializadores específicos ao seu ${name}`,

    treatmentTotal: 'Total do tratamento:',
    estDuration: 'Duração estimada:',
    skipAddOns: 'Pular Extras →',
    continueWithAddOns: 'Continuar com Extras →',

    step3Tag: 'Passo 3 de 5',
    step3Title: 'Selecione uma Data',
    step3SeriesTitle: (n) => `Escolha uma Data — Sessão ${n}`,
    seriesTag: (n) => `Sessão ${n} de 3`,

    step4Tag: 'Passo 4 de 5',
    step4Title: 'Selecione um Horário',
    step4SeriesTitle: (n) => `Escolha um Horário — Sessão ${n}`,
    checkingAvailability: 'Verificando disponibilidade…',
    noAvailabilityTitle: 'Sem disponibilidade',
    noAvailabilityDesc: 'Não há horários disponíveis nesta data. Por favor escolha outro dia.',
    pickDifferentDate: 'Escolher Outra Data',

    step5Tag: 'Passo 5 de 5',
    step5Title: 'Complete Seu Agendamento',
    bookingSummary: 'Resumo do Agendamento',

    labelService: 'Serviço',
    labelAddOns: 'Extras',
    labelDate: 'Data',
    labelTime: 'Hora',
    labelInvestment: 'Investimento',
    labelSession: (n) => `Sessão ${n}`,
    threeSessionPackage: 'Pacote de 3 sessões',

    labelFullName: 'Nome Completo',
    labelEmail: 'E-mail',
    labelPhone: 'Telefone',
    labelNotes: 'Observações (opcional)',
    placeholderName: 'Maria Silva',
    placeholderEmail: 'maria@exemplo.com',
    placeholderPhone: '(818) 555-0100',
    placeholderNotes: 'Preocupações com a pele, alergias ou pedidos especiais…',

    confirmBook: 'Confirmar e Agendar',
    confirmAllSessions: 'Confirmar as 3 Sessões →',
    confirming: 'Confirmando…',
    paymentNote: 'O pagamento é coletado no momento da sua consulta.',

    allSet: 'Tudo Certo!',
    bookedSingle: 'Você está agendada! ✨',
    bookedSeries: 'Sua série está agendada! ✨',
    confirmationEmailSent: 'Um e-mail de confirmação foi enviado para',
    addToCalendar: '📅 Adicionar ao Google Agenda',
    backToHome: 'Voltar ao Início',
    yourAppointment: 'Seu Agendamento',
    yourSeriesJourney: 'Sua Jornada de 3 Sessões',

    noPressure: 'Sem pressão nas datas 🌿',
    noPressureDesc: 'Escolha algo que funcione agora — você pode reagendar qualquer sessão a qualquer momento usando o link no seu e-mail de confirmação.',
    spacingRecommendation: 'Recomendamos espaçar as sessões 1–2 semanas para melhores resultados.',
    openHours: 'Aberto Terça – Sexta 9h–18h · Sábado 9h–17h',

    continueBtn: 'Continuar →',
    backBtn: 'Voltar',
    policyAgreement: 'Entendo que todas as vendas são finais. Posso reagendar qualquer sessão a qualquer momento, quantas vezes forem necessárias.',
  },

  about: {
    heroTag: 'O Coração da Marca',
    heroTitle: 'Conheça Claudia',
    heroSubtitle: 'Apaixonada Terapeuta Brasilieira de Cuidados com a Pele. Curadora. Fundadora. Uma mulher cuja jornada pessoal de transformação aprofunda cada tratamento que oferece.',

    storyTag: 'Sua História',
    storyTitle: 'Uma Curadora com Amor\nno Coração',

    para1: 'Sua apaixonada Terapeuta Brasilieira de Cuidados com a Pele com mais de 28 anos de experiência, sou dedicada a ajudá-la a alcançar uma pele radiante e uma autoconfiança renovada. Minha jornada começou na Best Face & Body Spa, onde aperfeiçoei minha arte por meio de vários tratamentos, incluindo terapia LED, peelings de glicólico, microdermoabrasão e técnicas mais especializadas.',
    para2: 'Meu amor pelo cuidado da pele me impulsiona a explorar as tecnologias mais recentes, garantindo que eu continue expandindo meu conhecimento para seu benefício. A vida me presenteou com desafios profundos, incluindo um tumor cerebral que mudou meu rosto e causou paralisia facial. Essa jornada aprofundou minha compreensão da cura física e emocional, acendendo meu compromisso de fomentar conexões que curam o coração e a alma.',
    para3: 'Como orgulhosa fundadora da Brasilian SkinSoul, minha missão é clara: curar sua pele enquanto elevo sua autoestima. Acredito que a verdadeira beleza emerge de dentro, e quando sua pele está saudável, sua beleza interior brilha mais. Não há nada que eu preze mais do que usar técnicas avançadas e produtos premium para trazer rejuvenescimento e transformação para sua pele.',
    para4: 'As palavras sinceras de clientes como você — "Você tem um toque mágico" e "Obrigada por curar minha pele" — me inspiram diariamente. Saber que posso impactar positivamente sua vida me motiva a oferecer um serviço excepcional em cada visita. Valorizo as conexões que construímos, e estou comprometida em ouvir suas necessidades únicas como curadora e apoiadora do seu bem-estar geral.',

    quote: "Você não precisa enfrentar desafios de pele sozinha. Na Brasilian SkinSoul, convido você a experimentar o toque suave mas poderoso que pode fazer uma diferença real em sua vida. Vamos embarcar nessa jornada juntas e descobrir a beleza que existe dentro de você!",
    quoteAuthor: '— Claudia Pieri',

    bookWithClaudia: 'Agendar com Claudia',
    viewServices: 'Ver Serviços',

    statsYearsLabel: 'Anos de Experiência',
    statsReviewsLabel: 'Avaliações 5 Estrelas',
    statsClientsLabel: 'Anos de Clientes Fiéis',

    timelineTag: 'A Jornada',
    timelineTitle: '28 Anos de Maestria',

    milestones: [
      { year: '1996', label: 'Carreira iniciada na Best Face & Body Spa' },
      { year: '2000s', label: 'Dominou terapia LED, peelings de glicólico e microdermoabrasão' },
      { year: '2010s', label: 'Abraçou tecnologias de ponta: Therma-Lift, Cold Plasma, Microcorrente' },
      { year: '2020', label: 'Fundou a Brasilian SkinSoul — sua própria prática' },
      { year: 'Hoje', label: 'Mais de 28 anos de experiência, mais de 60 avaliações cinco estrelas, clientes há mais de 20 anos' },
    ],

    ctaTitle1: 'Pronta para Começar',
    ctaTitle2: 'Sua Jornada?',
    ctaDesc: 'Experimente o toque suave mas poderoso que faz uma diferença real.',
    ctaBookBtn: 'Agendar uma Consulta',

    founderTitle: 'Fundadora e Terapeuta Principal de Skincare',
  },

  contact: {
    tag: 'Entre em Contato',
    title: 'Contato',

    locationLabel: 'Localização',
    phoneLabel: 'Telefone',
    hoursLabel: 'Horário',
    getDirections: 'Como Chegar →',

    days: {
      monday: 'Segunda-feira',
      tuesday: 'Terça-feira',
      wednesday: 'Quarta-feira',
      thursday: 'Quinta-feira',
      friday: 'Sexta-feira',
      saturday: 'Sábado',
      sunday: 'Domingo',
      closed: 'Fechado',
    },

    ctaTitle: 'Pronta para Agendar?',
    ctaDesc: 'Ligue para nós ou agende online — Claudia está pronta para ajudá-la a alcançar uma pele radiante e saudável.',
    ctaCallBtn: '📞 Ligar (818) 577-5421',
    ctaBookBtn: 'Agendar Online',

    followLabel: 'Siga-nos',
  },

  reschedule: {
    loadingBooking: 'Carregando seu agendamento…',
    checking: 'Carregando…',

    errorTitle: 'Este link é inválido',
    errorDesc: 'Este link de reagendamento é inválido ou já foi utilizado.',
    errorContactDesc: 'Por favor, entre em contato conosco em',
    backToHome: 'Voltar ao Início',

    successTag: 'Tudo Certo!',
    successTitle: 'Reagendado! ✨',
    successDesc: 'Sua sessão foi atualizada.',
    updatedAppointment: 'Agendamento Atualizado',
    confirmationSentTo: 'Um e-mail de confirmação foi enviado para',

    rescheduleTag: 'Reagendamento',
    changeTitle: 'Alterar Seu Agendamento',
    greeting: (name) => `Olá ${name} — aqui está seu agendamento atual:`,
    currentBooking: 'Agendamento Atual',

    labelService: 'Serviço',
    labelSession: 'Sessão',
    labelDate: 'Data',
    labelTime: 'Hora',
    labelNewDate: 'Nova Data',
    labelNewTime: 'Novo Horário',

    selectNewDate: 'Selecionar Nova Data →',
    openHours: 'Aberto Terça – Sexta 9h–18h · Sábado 9h–17h',
    backBtn: 'Voltar',

    sessionOf: (n, total) => `Sessão ${n} de ${total}`,

    selectNewDateTitle: 'Selecione uma Nova Data',
    selectNewTimeTitle: 'Selecione um Novo Horário',
    noAvailabilityTitle: 'Sem disponibilidade',
    noAvailabilityDesc: 'Sem horários disponíveis nesta data. Por favor escolha outro dia.',
    pickDifferentDate: 'Escolher Outra Data',
    checkingAvailability: 'Verificando disponibilidade…',

    confirmRescheduleTag: 'Confirmar Reagendamento',
    confirmRescheduleQuestion: 'Está correto?',
    newAppointment: 'Novo Agendamento',
    confirmRescheduleBtn: 'Confirmar Reagendamento →',
    rescheduling: 'Reagendando…',
    confirmationWillBeSent: (email) => `Um e-mail de confirmação será enviado para ${email}`,
  },
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const translations: Record<Lang, SiteTranslations> = { en, es, pt };
