export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'commercial' | 'both';
  description: string;
  image: string;
  features: string[];
  specs: {
    glassType: string;
    profileThickness: string;
    hardware: string;
    warranty: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'commercial';
  scope: string;
  image: string;
  completionYear: string;
}

export interface ColorFinish {
  id: string;
  name: string;
  code: string;
  hex: string;
  type: 'Powder Coat' | 'Wood Grain' | 'Anodized';
  texture?: string;
  popular?: boolean;
}

export const CLIENT_INFO = {
  businessName: 'Basit Ali Aluminum & Glass Work',
  shortName: 'Basit Ali Aluminium & Glass',
  tagline: 'Professional Aluminum & Glass Services in Lahore',
  phone: '0320-2740066',
  phoneRaw: '+923202740066',
  whatsappUrl: 'https://wa.me/923202740066?text=Hi%20Basit%20Ali%20Aluminum%20%26%20Glass%2C%20I%20would%20like%20to%20request%20a%20free%20measurement%20and%20quotation%20in%20Lahore.',
  email: 'basitalialuminumandglassworks@gmail.com',
  serviceArea: 'All Over Lahore (DHA, Gulberg, Bahria Town, Cantt, Johar Town, Model Town & all areas)',
  workshopAddress: 'Near Main Boulevard, Gulberg III & Workshop Hub, Lahore, Pakistan',
  logoPath: '/assets/aistudio/ChatGPT_Image_Sep_30__2026__03_47_25_PM_f9e8138f.png',
  hours: 'Mon - Sun: 8:00 AM - 9:00 PM (24/7 Available for Emergency Glass Repairs)',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'louvered-roofs',
    title: 'Louvered Roofs',
    subtitle: 'Aluminium-made ceiling panels',
    category: 'both',
    description:
      'Custom-made architectural pergolas with motorized aluminum louvered ceiling panels. Rotate seamlessly with a remote or smartphone to regulate sunlight and airflow, or seal completely for 100% rain protection.',
    image: '/assets/products/louvered-roofs.webp',
    features: [
      'Motorized aluminum rotation 0° to 135°',
      'Integrated internal gutter drainage cascade',
      'Weatherproof EPDM rubber perimeter gaskets',
      'Integrated dimmable ambient LED strip channels',
    ],
    specs: {
      glassType: 'Compatible with tempered side glass systems',
      profileThickness: '2.5mm–3.0mm Heavy Extruded 6063-T5',
      hardware: 'Somfy / Linak linear actuator motor drive',
      warranty: '15 Years structural warranty',
    },
  },
  {
    id: 'fabrics',
    title: 'Fabrics',
    subtitle: 'Pergolas with retractable PVC roof',
    category: 'both',
    description:
      'High-performance pergolas equipped with heavy-duty retractable 3-layer PVC blackout fabric roofs. Designed for luxury patio shade, restaurant rooftops, and garden lounges in Lahore.',
    image: '/assets/products/fabrics.webp',
    features: [
      'UV-resistant waterproof blackout tensile fabric',
      'Motorized belt-driven heavy-duty glide track',
      'Wind resistant against severe storms',
      'Concealed internal column rainwater downspouts',
    ],
    specs: {
      glassType: 'Tensile PVC + sliding glass attachments',
      profileThickness: 'Structural aluminum support beams & posts',
      hardware: 'High-torque remote-controlled motor',
      warranty: '10 Years fabric & structure warranty',
    },
  },
  {
    id: 'glass-roofs',
    title: 'Glass Roofs',
    subtitle: 'Pergola with laminated glass roof',
    category: 'both',
    description:
      'Bespoke conservatory and terrace pergolas engineered with laminated tempered safety glass roofs. Enjoy panoramic daylight and sky views with zero risk of leaks or weather damage.',
    image: '/assets/products/glass-roofs.webp',
    features: [
      '8.76mm to 17.52mm laminated tempered glass',
      'Heat-reflective solar control and tinted options',
      'Heavy-duty structural aluminum load-bearing rafters',
      'Integrated sloped gutter & water management',
    ],
    specs: {
      glassType: '10mm+10mm / 8mm+8mm Laminated Safety Glass',
      profileThickness: 'Reinforced heavy-gauge aluminum transoms',
      hardware: 'Stainless steel 316 architectural brackets',
      warranty: '15 Years structural warranty',
    },
  },
  {
    id: 'side-attachments',
    title: 'Side Attachments',
    subtitle: 'Customizable enclosure options',
    category: 'both',
    description:
      'Complete modular enclosure attachments including motorized zip screens, frameless sliding glass panels, vertical guillotine glass, and automated vertical blinds.',
    image: '/assets/products/side-attachments.webp',
    features: [
      'Multi-track sliding frameless glass panels',
      'Motorized wind & sun drop-down zip screens',
      'Motorized guillotine raising balustrade glass',
      'Concealed tracks and floor flush thresholds',
    ],
    specs: {
      glassType: '10mm / 12mm Toughened Glass & Solar Mesh',
      profileThickness: 'Slimline multi-rail aluminum tracks',
      hardware: 'Stainless steel carriage rollers & latches',
      warranty: '10 Years enclosure warranty',
    },
  },
  {
    id: 'vertical-blinds',
    title: 'Vertical Blinds & Motorization',
    subtitle: 'Architectural shading & smart automated window screens',
    category: 'both',
    description:
      'Motorized and manual vertical blinds, motorized drop-down screens, and perforated solar shading integrated into aluminum window and glass partition frames.',
    image: '/assets/aistudio/image_90ab0637.png',
    features: [
      'Smart remote & mobile app motorization',
      'Blackout, translucent, and solar mesh fabrics',
      'Seamless integration into aluminum profiles',
      'Quiet tubular motor systems',
    ],
    specs: {
      glassType: 'Compatible with all glass configurations',
      profileThickness: 'Ultra-slim headrail aluminum track',
      hardware: 'Somfy / Dooya motorized automation',
      warranty: '3 Years motor & mechanism warranty',
    },
  },
  {
    id: 'mirrors-emergency-repair',
    title: 'Mirrors & Emergency Glass Repair',
    subtitle: 'Beveled mirrors & 24/7 rapid response repairs in Lahore',
    category: 'both',
    description:
      'Expert custom mirror fabrication (LED backlit vanity mirrors, gym wall mirrors) and immediate 24/7 on-call emergency glass replacement for damaged doors, windows, and storefronts.',
    image: '/assets/aistudio/image_6b7c00d0.png',
    features: [
      'Emergency shattered glass containment & same-day replacement',
      'Custom beveled, bronze, and antique mirrors',
      'Commercial storefront emergency boarding & replacement',
      'Window roller, lock, and hinge repairs',
    ],
    specs: {
      glassType: '5mm / 6mm High-Definition Silver Mirror & Tempered Glass',
      profileThickness: 'Custom aluminum framing or frameless',
      hardware: 'Concealed J-bar mounting & safety film backing',
      warranty: 'Satisfaction guarantee & immediate dispatch',
    },
  },
];

export const COLOR_FINISHES: ColorFinish[] = [
  // Page 1: Exact matches to Pergomatic image_04c1ef9d.png
  { id: '1', name: 'Olive Desert Sage', code: '#1', hex: '#8A8955', type: 'Powder Coat' },
  { id: '2', name: 'Deep Moss Forest Green', code: '#2', hex: '#354E3D', type: 'Powder Coat' },
  { id: '3', name: 'Matte Architectural Black', code: '#3', hex: '#151513', type: 'Powder Coat', popular: true },
  { id: '4', name: 'Nordic Mist Slate Blue', code: '#4', hex: '#81A0B8', type: 'Powder Coat' },
  { id: '5', name: 'Anthracite Steel Grey', code: '#5', hex: '#63727D', type: 'Powder Coat' },
  { id: '6', name: 'Terracotta Rust Bronze', code: '#6', hex: '#9B6E44', type: 'Powder Coat' },
  { id: '7', name: 'Natural Royal Walnut', code: '#7', hex: '#4D260D', type: 'Wood Grain', popular: true },
  { id: '8', name: 'Golden Teak Wood Finish', code: '#8', hex: '#BB8946', type: 'Wood Grain' },
  { id: '9', name: 'Warm Desert Sand Tan', code: '#9', hex: '#A48255', type: 'Powder Coat' },
  // Page 2 & subsequent finishes
  { id: '10', name: 'Brushed Silver Anodized', code: '#10', hex: '#94A3B8', type: 'Anodized' },
  { id: '11', name: 'Champagne Gold Metallic', code: '#11', hex: '#C5A880', type: 'Anodized' },
  { id: '12', name: 'Charcoal Graphite', code: '#12', hex: '#2E3440', type: 'Powder Coat' },
  { id: '13', name: 'Midnight Navy Blue', code: '#13', hex: '#1E293B', type: 'Powder Coat' },
  { id: '14', name: 'Warm Oak Texture', code: '#14', hex: '#6B3E1F', type: 'Wood Grain', popular: true },
  { id: '15', name: 'Pure Architectural White', code: '#15', hex: '#F8FAFC', type: 'Powder Coat' },
  { id: '16', name: 'Deep Bronze Anodized', code: '#16', hex: '#3B3128', type: 'Anodized' },
  { id: '17', name: 'Basalt Slate Grey', code: '#17', hex: '#4B5563', type: 'Powder Coat' },
  { id: '18', name: 'Forest Deep Pine', code: '#18', hex: '#1F3A2B', type: 'Powder Coat' },
  { id: '19', name: 'Golden Bronze Metallic', code: '#19', hex: '#8C6D46', type: 'Anodized' },
  { id: '20', name: 'Smoky Ash Wood Grain', code: '#20', hex: '#524741', type: 'Wood Grain' },
  { id: '21', name: 'Platinum Quartz Silver', code: '#21', hex: '#CBD5E1', type: 'Anodized' },
  { id: '22', name: 'Espresso Dark Walnut', code: '#22', hex: '#2E1C14', type: 'Wood Grain' },
  { id: '23', name: 'Khaki Beige Finish', code: '#23', hex: '#8A8256', type: 'Powder Coat' },
  { id: '24', name: 'Jet Satin Black', code: '#24', hex: '#0A0A0A', type: 'Powder Coat' },
];

export const RESIDENTIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'res-1',
    title: 'Luxury Louvered Patio Pergola & Outdoor Lounge',
    location: 'DHA Phase 6, Lahore',
    category: 'residential',
    scope: 'Motorized louvered ceiling panels with perimeter gutter drainage & dimmable LED channels',
    image: '/assets/projects/residential-1.jpg',
    completionYear: '2026',
  },
  {
    id: 'res-2',
    title: 'Glass Roof Conservatory & Sunroom',
    location: 'Bahria Town, Lahore',
    category: 'residential',
    scope: 'Laminated tempered glass roof with white powder-coated architectural aluminum structure',
    image: '/assets/projects/residential-2.jpg',
    completionYear: '2026',
  },
  {
    id: 'res-3',
    title: 'Wood-Finish Ceiling Panel Pergola',
    location: 'Model Town, Lahore',
    category: 'residential',
    scope: 'Architectural wood-grain insulated ceiling pergola with ambient outdoor lighting',
    image: '/assets/projects/residential-3.jpg',
    completionYear: '2025',
  },
  {
    id: 'res-4',
    title: 'Modern Villa Sliding Glass & Balcony Railings',
    location: 'DHA Phase 5, Lahore',
    category: 'residential',
    scope: '14ft Slimline Thermal Aluminum Patio Doors + 12mm Frameless Glass Balconies',
    image: '/assets/images/hero_aluminum_glass_villa_1793190402071.jpg',
    completionYear: '2026',
  },
  {
    id: 'res-5',
    title: 'Luxury Master Bathroom Shower Cubicles',
    location: 'Gulberg III, Lahore',
    category: 'residential',
    scope: 'Custom Tempered Frameless Glass Enclosures with Matte Black Fittings',
    image: '/assets/images/luxury_shower_cabin_1793190403779.jpg',
    completionYear: '2026',
  },
  {
    id: 'res-6',
    title: 'Easyslide Multi-Track Patio Glass System',
    location: 'Lake City, Lahore',
    category: 'residential',
    scope: 'Ultra-smooth flush threshold sliding glass panels for year-round garden connection',
    image: '/assets/enclosures/easyslide.jpg',
    completionYear: '2025',
  },
];

export const COMMERCIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'com-1',
    title: 'Hospitality Outdoor Dining Pergola System',
    location: 'MM Alam Road, Gulberg, Lahore',
    category: 'commercial',
    scope: 'Motorized dual-motor louvered roof with weather automation for outdoor restaurant dining',
    image: '/assets/projects/commercial-1.jpg',
    completionYear: '2026',
  },
  {
    id: 'com-2',
    title: 'Luxury Waterfront Glass Terrace Enclosure',
    location: 'Defence Raya Golf & Country Club, Lahore',
    category: 'commercial',
    scope: 'All-weather sliding glass systems with integrated retractable blackout screens',
    image: '/assets/projects/commercial-2.jpg',
    completionYear: '2026',
  },
  {
    id: 'com-3',
    title: 'Commercial Rooftop Pergola Lounge',
    location: 'Mall Road Commercial Complex, Lahore',
    category: 'commercial',
    scope: 'Heavy-duty commercial architectural aluminum pergola with integrated LED arrays',
    image: '/assets/projects/commercial-3.jpg',
    completionYear: '2025',
  },
  {
    id: 'com-4',
    title: 'Luxury Retail Fashion Storefront',
    location: 'Y-Block Commercial, DHA Lahore',
    category: 'commercial',
    scope: 'Double-Height Spider Glazing Facade & Custom Aluminum Entrance Portals',
    image: '/assets/images/commercial_shopfront_facade_1793190403888.jpg',
    completionYear: '2026',
  },
  {
    id: 'com-5',
    title: 'Corporate Executive Boardroom & Partitions',
    location: 'Main Boulevard, Gulberg III, Lahore',
    category: 'commercial',
    scope: 'Acoustic Frameless Glass Partitions with Dorma Hardware & Automatic Floor Springs',
    image: '/assets/images/office_glass_partition_1793190403211.jpg',
    completionYear: '2026',
  },
  {
    id: 'com-6',
    title: 'Motorized Guillotine Glass Balustrade',
    location: 'Johar Town Commercial Center, Lahore',
    category: 'commercial',
    scope: 'Raising motorized glass balustrade barrier for rooftop cafe and banquet terrace',
    image: '/assets/enclosures/guillotine.jpg',
    completionYear: '2025',
  },
];

export const CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Tariq Mehmood',
    role: 'Villa Owner',
    area: 'DHA Phase 5, Lahore',
    rating: 5,
    date: '2 weeks ago',
    text: 'Basit Ali and his team did an outstanding job installing our 14-foot sliding aluminum patio doors and glass railings. Their on-site measurement was exact to the millimeter, and the quality of the powder-coated finish is immaculate.',
  },
  {
    id: 'rev-2',
    name: 'Sarah Khan',
    role: 'Interior Architect',
    area: 'Gulberg III, Lahore',
    rating: 5,
    date: '1 month ago',
    text: 'We regularly partner with Basit Ali Aluminum & Glass for our corporate office fit-outs. Their acoustic frameless glass partitions look incredibly sleek, and their hardware never sags. Highly recommended for commercial projects.',
  },
  {
    id: 'rev-3',
    name: 'Usman Rafique',
    role: 'Homeowner',
    area: 'Bahria Town, Lahore',
    rating: 5,
    date: '2 months ago',
    text: 'Called them for three custom shower cabins. Delivered ahead of time, fitted with precision, and zero water leakage around the seals. Best rates in Lahore without compromising on glass safety.',
  },
  {
    id: 'rev-4',
    name: 'Fawad Sheikh',
    role: 'Retail Store Manager',
    area: 'MM Alam Road, Lahore',
    rating: 5,
    date: '3 weeks ago',
    text: 'We had a shattered glass door emergency on Sunday night. Basit Ali’s emergency team arrived within 45 minutes, secured the site, and replaced the tempered glass the very next morning. Truly reliable 24/7 service.',
  },
];

export const LAHORE_AREAS = [
  'DHA Lahore (Phases 1 - 9)',
  'Gulberg (I, II, III, Main Blvd)',
  'Bahria Town & Bahria Orchard',
  'Lahore Cantt & Cavalry Ground',
  'Johar Town & PIA Society',
  'Model Town & Garden Town',
  'Wapda Town & Valencia',
  'Lake City & Raiwind Road',
  'Faisal Town & Township',
  'Allama Iqbal Town & Samanabad',
  'Shadman & Jail Road',
  'Askari 1 to 11',
];

export const FAQS = [
  {
    question: 'Can your aluminum windows and glass withstand Lahore summer heat and monsoon rains?',
    answer:
      'Yes, absolutely. We fabricate using architectural 6063-T5 aluminum profiles combined with double-glazed low-E or reflective glass filled with dry air/argon gas. Our triple-fin EPDM rubber gaskets and concealed drainage weep holes ensure 100% leak-proof performance even during heavy Lahore monsoon downpours.',
  },
  {
    question: 'How does your Free On-Site Measurement and Quotation service work?',
    answer:
      'Simply call or WhatsApp us at 0320-2740066 with your location in Lahore. Our senior technician will visit your site with aluminum section samples, glass swatches, and laser measuring equipment. We measure every opening, discuss your design preferences, and provide a clear, itemized quotation within a few hours—with zero obligation.',
  },
  {
    question: 'What is the difference between regular glass and tempered safety glass?',
    answer:
      'Tempered glass is thermally treated to be 4 to 5 times stronger than standard float glass. In the rare event of severe impact, tempered glass shatters into tiny, blunt granular pebbles rather than jagged, dangerous shards, making it essential for shower cabins, doors, shop fronts, and balcony railings.',
  },
  {
    question: 'Do you provide 24/7 Emergency Glass Replacement & Repair in Lahore?',
    answer:
      'Yes. Accidents, burglaries, or storms can damage storefronts or patio glass at any time. Our mobile emergency repair crew is on-call 24 hours a day, 7 days a week across Lahore to safely remove broken glass, secure the perimeter, and prepare expedited replacement panels.',
  },
  {
    question: 'Can I customize the color and finish of the aluminum frames?',
    answer:
      'We offer over 24 custom architectural colors, including ultra-matte architectural black, charcoal grey, champagne gold, natural wood-grain heat-transfer textures, and anodized silver. All powder coatings carry a 10 to 15-year warranty against peeling, sun fading, and chipping.',
  },
  {
    question: 'What is your typical turnaround time for residential and commercial orders?',
    answer:
      'Standard residential aluminum windows and glass partitions are typically fabricated and installed within 4 to 7 working days following measurement confirmation. Custom shower cabins usually take 3 to 5 days, while large-scale commercial curtain walls are scheduled to meet your contractor milestones.',
  },
];
