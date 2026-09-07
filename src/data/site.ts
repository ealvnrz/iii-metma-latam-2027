export interface PersonPortrait {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
  scale?: number;
  origin?: string;
}

export interface PersonAffiliation {
  institution: string;
  country: string;
  website?: string;
}

export interface Person {
  id: string;
  name: string;
  affiliations: PersonAffiliation[];
  role?: string;
  bio?: string;
  portrait?: PersonPortrait;
  website?: string;
}

export interface ProgrammeSession {
  time: string;
  title: string;
  type: 'keynote' | 'invited' | 'contributed' | 'break' | 'other';
  speakers?: string[];
  location?: string;
}

export interface ProgrammeDay {
  date: string;
  label: string;
  sessions: ProgrammeSession[];
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface Institution {
  id: string;
  name: string;
  website: string;
  logo: {
    src: string;
    width: number;
    height: number;
  };
}

const institutions = {
  uc: {
    id: 'uc',
    name: 'Pontificia Universidad Católica de Chile',
    website: 'https://www.uc.cl/',
    logo: { src: '/assets/institutions/uc-chile.svg', width: 609, height: 235 },
  },
  ubb: {
    id: 'ubb',
    name: 'Universidad del Bío-Bío',
    website: 'https://www.ubiobio.cl/',
    logo: { src: '/assets/institutions/ubb.png', width: 1248, height: 823 },
  },
  anid: {
    id: 'anid',
    name: 'Agencia Nacional de Investigación y Desarrollo (ANID)',
    website: 'https://anid.gob.cl/',
    logo: { src: '/assets/institutions/anid-minciencia.svg', width: 471, height: 253 },
  },
} satisfies Record<string, Institution>;

export interface VisitorInformationSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  status: 'Current guidance' | 'Details forthcoming';
  links: ExternalLink[];
}

export const site = {
  conference: 'III METMA LATAM 2027',
  title: 'Latin American Conference on Spatio-Temporal Modelling',
  date: '1–3 September 2027',
  startDate: '2027-09-01',
  endDateExclusive: '2027-09-04',
  timeZone: 'America/Santiago',
  location: 'Santiago, Chile',
  venue: {
    name: 'Faculty of Mathematics',
    institution: 'Pontificia Universidad Católica de Chile',
    campus: 'San Joaquín Campus',
    address: 'Av. Vicuña Mackenna 4860, Macul, Santiago, Chile',
    mapEmbedUrl: 'https://www.google.com/maps?q=Facultad%20de%20Matem%C3%A1ticas%20UC%2C%20Av.%20Vicu%C3%B1a%20Mackenna%204860%2C%20Macul%2C%20Santiago%2C%20Chile&output=embed',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Facultad%20de%20Matem%C3%A1ticas%20UC%20Av.%20Vicu%C3%B1a%20Mackenna%204860%20Macul%20Santiago%20Chile',
  },
  programme: {
    stats: [
      { value: '4', label: 'Keynote Speakers' },
      { value: '10', label: 'Invited Speakers' },
    ],
    days: [] as ProgrammeDay[],
  },
  speakers: {
    keynoteCount: 4,
    invitedCount: 10,
    keynote: [
      {
        id: 'elias-krainski',
        name: 'Elias Krainski',
        affiliations: [{
          institution: 'King Abdullah University of Science and Technology (KAUST)',
          country: 'Saudi Arabia',
          website: 'https://cemse.kaust.edu.sa/profiles/elias-teixeira-krainski',
        }],
        portrait: {
          src: '/assets/people/speakers/elias-krainski.webp',
          alt: 'Portrait of Elias Krainski',
          width: 1280,
          height: 720,
          scale: 1.7,
          origin: '50% 22%',
        },
      },
      {
        id: 'victor-de-oliveira',
        name: 'Victor De Oliveira',
        affiliations: [{
          institution: 'The University of Texas at San Antonio',
          country: 'United States',
          website: 'https://caicc.utsa.edu/faculty/profiles/de-oliveira-victor.html',
        }],
        portrait: {
          src: '/assets/people/speakers/victor-de-oliveira.png',
          alt: 'Portrait of Victor De Oliveira',
          width: 399,
          height: 500,
          position: 'center top',
        },
      },
      {
        id: 'moreno-bevilacqua',
        name: 'Moreno Bevilacqua',
        affiliations: [
          {
            institution: 'Universidad Adolfo Ibáñez (UAI)',
            country: 'Chile',
            website: 'https://www.uai.cl/profesores/ingenieria-y-ciencias/moreno-bevilacqua',
          },
          {
            institution: 'Ca’ Foscari University of Venice',
            country: 'Italy',
            website: 'https://www.unive.it/data/people/25678903',
          },
        ],
        portrait: {
          src: '/assets/people/speakers/moreno-bevilacqua.jpg',
          alt: 'Portrait of Moreno Bevilacqua',
          width: 220,
          height: 220,
          position: 'center top',
        },
      },
    ] as Person[],
    invited: [] as Person[],
  },
  committees: {
    organizing: [] as Person[],
    scientific: [] as Person[],
  },
  visitorInformation: {
    verifiedOn: '18 August 2026',
    sections: [
      {
        id: 'airport',
        eyebrow: 'Arriving in Santiago',
        title: 'From Santiago Airport',
        description: 'Santiago is served by Arturo Merino Benítez International Airport (SCL). On arrival, use the authorized ground-transport counters inside the terminal. Conference-specific transfer recommendations will be confirmed closer to the meeting.',
        status: 'Current guidance',
        links: [
          { label: 'Official airport transport', url: 'https://www.nuevopudahuel.cl/fromairport?language=en' },
        ],
      },
      {
        id: 'public-transport',
        eyebrow: 'Public transport',
        title: 'Metro to San Joaquín',
        description: 'San Joaquín Campus is directly opposite San Joaquín station on Metro Line 5. The Faculty of Mathematics recommends using the pedestrian footbridge when crossing from the station to the campus.',
        status: 'Current guidance',
        links: [
          { label: 'Faculty directions', url: 'https://www.mat.uc.cl/llegar-al-campus.html?lang=en' },
          { label: 'UC campus information', url: 'https://infraestructura.uc.cl/administracion-y-servicios/administracion-campus/campus-san-joaquin' },
        ],
      },
      {
        id: 'campus-access',
        eyebrow: 'On campus',
        title: 'Finding the Faculty',
        description: 'The pedestrian entrance is at Av. Vicuña Mackenna 4860. The conference building, room locations and on-site check-in instructions will be published after the venue plan is finalized.',
        status: 'Details forthcoming',
        links: [
          { label: 'San Joaquín Campus map', url: 'https://asuntosestudiantiles.uc.cl/documentos/mapa-campus-san-joaquin/' },
        ],
      },
      {
        id: 'accessibility',
        eyebrow: 'Accessibility',
        title: 'Planning an accessible visit',
        description: 'Step-free routes, room access, reserved seating and the conference assistance contact will be documented once the final rooms are confirmed. Santiago Airport currently offers a complimentary mobility-assistance service that can be requested before travel.',
        status: 'Details forthcoming',
        links: [
          { label: 'Airport mobility assistance', url: 'https://www.nuevopudahuel.cl/mobility-assistance?language=en' },
        ],
      },
      {
        id: 'accommodation',
        eyebrow: 'Where to stay',
        title: 'Accommodation areas',
        description: 'Providencia and central Santiago provide broad accommodation options and public-transport connections. A curated hotel shortlist, any negotiated rates and booking deadlines will be published after agreements are confirmed.',
        status: 'Details forthcoming',
        links: [
          { label: 'Providencia visitor overview', url: 'https://chile.travel/en/blog/neighborhoods-of-santiago-walking-the-capitals-best-spots/' },
          { label: 'Official Santiago accommodation directory', url: 'https://www.santiagoturismo.cl/en/accommodation/' },
        ],
      },
    ] as VisitorInformationSection[],
  },
  futurePages: {
    callForPapers: {
      status: 'Details in preparation',
      items: [
        'Conference scope and contribution types',
        'Submission format and author requirements',
        'Key submission and notification dates',
        'Review process and presentation guidance',
      ],
    },
    registration: {
      status: 'Registration is not open',
      items: [
        'Registration categories and fees',
        'Payment methods and confirmation process',
        'Cancellation and substitution policy',
        'Accessibility and dietary request process',
      ],
    },
  },
  organizers: [institutions.uc],
  sponsors: [institutions.uc, institutions.ubb, institutions.anid],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Programme', href: '/programme' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Committees', href: '/committees' },
    { label: 'Venue', href: '/venue' },
  ],
};
