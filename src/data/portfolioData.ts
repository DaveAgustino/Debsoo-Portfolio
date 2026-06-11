// ═══════════════════════════════════════════════════
//  debsoo — Portfolio Data Layer
// ═══════════════════════════════════════════════════

// ── Type Definitions ──

export interface Service {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface DiagramCell {
  icon: string;
  title: string;
  sub: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface BarData {
  label: string;
  value: string;
  percentage: number;
  colorClass: 'red' | 'muted' | 'green';
}

export interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  headline: string;
  description: string;
  visualData: BarData[];
}

export interface TechCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Metric {
  id: string;
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
}

export interface FigmaProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  figmaUrl?: string;
}

export interface GraphicsProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'web3' | 'devops';
}

// ── Services ──

export const services: Service[] = [
  {
    id: 'service-1',
    number: '001',
    label: 'Full-Stack Development',
    title: 'Scalable web applications.',
    description: 'End-to-end development with the MERN stack — high-performance frontends, robust APIs, and scalable database architectures.'
  },
  {
    id: 'service-2',
    number: '002',
    label: 'UI/UX Design',
    title: 'Interfaces that resonate.',
    description: 'Research-driven design in Figma — wireframes, prototypes, and design systems that prioritize user behavior and visual excellence.'
  },
  {
    id: 'service-3',
    number: '003',
    label: 'Web3 Integration',
    title: 'Decentralized platforms.',
    description: 'dApps, smart contracts, and NFT platforms — bridging traditional web with blockchain technology on Solana and Ethereum.'
  },
  {
    id: 'service-4',
    number: '004',
    label: 'Brand & Strategy',
    title: 'Identities that last.',
    description: 'Cohesive brand identities and digital strategies — from logo systems to complete visual languages that connect with audiences.'
  }
];

// ── About Diagram ──

export const diagramCells: DiagramCell[] = [
  { icon: '⚛️', title: 'Frontend', sub: 'React · Vue · Next.js' },
  { icon: '🔧', title: 'Backend', sub: 'Node · Express · PHP' },
  { icon: '🗄️', title: 'Database', sub: 'MongoDB · MySQL · Supabase' },
  { icon: '🔗', title: 'Web3', sub: 'Solana · Ethereum · NFTs' },
  { icon: '🎨', title: 'Design', sub: 'Figma · Photoshop · Illustrator' },
  { icon: '🚀', title: 'DevOps', sub: 'Vercel · Nginx · Ubuntu' }
];

// ── Approach ──

export const approachItems: ApproachItem[] = [
  {
    title: 'User-Centric',
    description: 'Every project starts with understanding the user. Research-driven design that prioritizes experience over decoration.'
  },
  {
    title: 'Performance First',
    description: 'Optimized code, fast load times, and responsive layouts. No compromises on speed or reliability.'
  },
  {
    title: 'Clean Architecture',
    description: 'Maintainable, scalable codebases built with modern best practices and clean separation of concerns.'
  },
  {
    title: 'Visual Excellence',
    description: 'Premium design with attention to every pixel. Interfaces that feel polished, professional, and alive.'
  }
];

// ── Process Steps ──

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    stepNumber: 'Step 01',
    title: 'Research & Discovery',
    headline: 'Understanding the problem space.',
    description: 'Every project begins with deep research — understanding the target audience, competitive landscape, and technical requirements. I map user journeys, define success metrics, and outline the architecture before writing a single line of code.',
    visualData: [
      { label: 'Research', value: 'User interviews', percentage: 90, colorClass: 'red' },
      { label: 'Analysis', value: 'Competitive audit', percentage: 75, colorClass: 'muted' },
      { label: 'Planning', value: 'Architecture map', percentage: 85, colorClass: 'green' }
    ]
  },
  {
    id: 2,
    stepNumber: 'Step 02',
    title: 'Design & Prototype',
    headline: 'Designing interfaces that connect.',
    description: 'With a clear strategy, I move into visual design — wireframes, component libraries, and interactive prototypes in Figma. Each screen is iterated until it achieves the right balance of beauty, usability, and brand alignment.',
    visualData: [
      { label: 'Wireframes', value: 'Low → High fidelity', percentage: 95, colorClass: 'red' },
      { label: 'Prototypes', value: 'Interactive Figma', percentage: 88, colorClass: 'green' },
      { label: 'Systems', value: 'Design tokens', percentage: 80, colorClass: 'muted' }
    ]
  },
  {
    id: 3,
    stepNumber: 'Step 03',
    title: 'Build & Deploy',
    headline: 'Engineering and shipping production code.',
    description: 'Clean, performant code using the MERN stack and modern tooling. CI/CD pipelines, comprehensive testing, and deployment to production. Every release is optimized for speed, accessibility, and scalability.',
    visualData: [
      { label: 'Frontend', value: 'React · Next.js', percentage: 95, colorClass: 'red' },
      { label: 'Backend', value: 'Node · Express', percentage: 90, colorClass: 'green' },
      { label: 'Deploy', value: 'Vercel · VPS', percentage: 85, colorClass: 'muted' }
    ]
  }
];

// ── Tech Stack ──

export const techCategories: TechCategory[] = [
  {
    id: 'tech-1',
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with modern frameworks and pixel-perfect attention to detail.',
    tags: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    id: 'tech-2',
    number: '02',
    title: 'Backend & Database',
    description: 'Engineering robust server architectures, RESTful APIs, and scalable database solutions for complex applications.',
    tags: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PHP', 'Supabase']
  },
  {
    id: 'tech-3',
    number: '03',
    title: 'Web3 & Blockchain',
    description: 'Developing decentralized applications, smart contracts, and NFT platforms bridging web2 and web3.',
    tags: ['Web3.js', 'Solana', 'Ethereum', 'Smart Contracts', 'NFTs']
  },
  {
    id: 'tech-4',
    number: '04',
    title: 'UI/UX Design',
    description: 'Crafting user-centered designs with comprehensive research, wireframing, prototyping, and design system creation.',
    tags: ['Figma', 'Sketch', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    id: 'tech-5',
    number: '05',
    title: 'Graphic Design & Art',
    description: 'Creating brand identities, digital illustrations, game assets, and NFT artwork with premium visual quality.',
    tags: ['Photoshop', 'Illustrator', 'Logo Design', 'Brand Identity', 'NFT Art']
  },
  {
    id: 'tech-6',
    number: '06',
    title: 'DevOps & Tooling',
    description: 'Deploying and maintaining applications with modern CI/CD pipelines, server management, and team workflows.',
    tags: ['GitHub', 'Vercel', 'Nginx', 'Ubuntu', 'Postman', 'Jira']
  }
];

// ── Metrics ──

export const metrics: Metric[] = [
  { id: 'metric-projects', value: 10, prefix: '', suffix: '+', label: 'Projects\nDelivered' },
  { id: 'metric-clients', value: 8, prefix: '', suffix: '+', label: 'Happy\nClients' },
  { id: 'metric-tech', value: 15, prefix: '', suffix: '+', label: 'Technologies\nMastered' },
  { id: 'metric-experience', value: 3, prefix: '', suffix: '+', label: 'Years of\nExperience' }
];

// ── Portfolio Projects ──

export const projects: Project[] = [
  {
    id: 'project-donbbang',
    title: 'Donbbang',
    category: 'Web3 Platform',
    description: 'A modern, high-performance Korean-themed Web3 decentralized application interface.',
    tags: ['React', 'Web3.js', 'Solana'],
    imageUrl: '/images/donbbang.png',
    liveUrl: 'https://donbbang-livid.vercel.app/'
  },
  {
    id: 'project-ikigai',
    title: 'Ikigai',
    category: 'Service Platform',
    description: 'An elegant, minimalist lifestyle and purpose coaching digital portal featuring clean layouts.',
    tags: ['React', 'CSS', 'Vite'],
    imageUrl: '/images/ikigai.png',
    liveUrl: 'https://ikigai-service.vercel.app/'
  },
  {
    id: 'project-precheesos',
    title: 'Precheesos',
    category: 'Meme Coin Website',
    description: 'A whimsical and interactive landing page design featuring custom tokenomics charts and assets for a cheese-themed community coin.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: '/images/precheesos.png',
    liveUrl: 'https://v0-memecoin-website-alpha.vercel.app/'
  },
  {
    id: 'project-angry-burds',
    title: 'Angry Burds',
    category: 'Web3 Gaming UI',
    description: 'A gaming platform dashboard and showcase interface themed around custom neon bird characters.',
    tags: ['React', 'Web3', 'Tailwind'],
    imageUrl: '/images/angry_burds.png',
    liveUrl: 'https://amgry-burds.vercel.app/'
  },
  {
    id: 'project-kumo',
    title: 'Kumo',
    category: 'Solana Web3 App',
    description: 'A cloud storage and decentralized service application dashboard built on Solana with glowing layout panels.',
    tags: ['React', 'Solana', 'Web3.js'],
    imageUrl: '/images/kumo.png',
    liveUrl: 'https://kumo-sol.vercel.app/'
  },
  {
    id: 'project-obelisk',
    title: 'Obelisk',
    category: 'Web3 Protocol',
    description: 'A minimalist dashboard interface and landing page for an investment and DAO protocol utilizing runic symbolism.',
    tags: ['React', 'Next.js', 'Web3.js'],
    imageUrl: '/images/obelisk.png',
    liveUrl: 'https://www.obelisk.guru/'
  },
  {
    id: 'project-casino-of-bonk',
    title: 'Casino of Bonk',
    category: 'Web3 Gaming',
    description: 'A decentralized betting and casino gaming dashboard utilizing Bonk tokenomics, slots, and interactive tables.',
    tags: ['Solana', 'Web3.js', 'Gaming UI'],
    imageUrl: '/images/casino_of_bonk.png',
    liveUrl: 'https://casino-of-bonk-web.vercel.app/'
  },
  {
    id: 'project-zink',
    title: 'Zink Project',
    category: 'Developer Platform',
    description: 'A dark-themed code management and developer tool platform dashboard with neon syntax highlights.',
    tags: ['Developer Tools', 'React', 'TypeScript'],
    imageUrl: '/images/zink.png',
    liveUrl: 'https://zink-code.vercel.app/'
  },
  {
    id: 'project-cognify-ai',
    title: 'Cognify AI',
    category: 'AI Platform',
    description: 'A futuristic digital cognitive intelligence platform landing page featuring glowing network interfaces.',
    tags: ['AI Integration', 'React', 'Framer Motion'],
    imageUrl: '/images/cognify_ai.png',
    liveUrl: 'https://cognify-ai-pink.vercel.app/'
  },
  {
    id: 'project-aibotics',
    title: 'AI Botics',
    category: 'Robotics & Automation',
    description: 'A modern automation service portal featuring robotics interface aesthetics and clean grid analytics widgets.',
    tags: ['AI Agents', 'React', 'CSS Grid'],
    imageUrl: '/images/aibotics.png',
    liveUrl: 'https://aibotics-omega.vercel.app/'
  },
  {
    id: 'project-affinity',
    title: 'Affinity',
    category: 'Web3 Platform',
    description: 'A decentralized network portal featuring secure wallet integration, token governance stats, and dashboard panels.',
    tags: ['React', 'Web3.js', 'Ethereum'],
    imageUrl: '/images/affinity.png',
    liveUrl: 'https://affinity-web3.vercel.app/'
  },
  {
    id: 'project-pumpseeker',
    title: 'PumpSeeker',
    category: 'DeFi Analytics',
    description: 'A real-time token launching waitlist and telemetry analytics platform for high-frequency trading dashboards.',
    tags: ['React', 'Web3.js', 'Solana'],
    imageUrl: '/images/pumpseeker.png',
    liveUrl: 'https://v2pumpseeker-waitlist.vercel.app/'
  },
  {
    id: 'project-keyno',
    title: 'Keyno',
    category: 'Security Portal',
    description: 'A clean cryptographic keys management and access security metrics dashboard.',
    tags: ['Security', 'React', 'TypeScript'],
    imageUrl: '/images/keyno.png',
    liveUrl: 'https://keyno-web.vercel.app/'
  },
  {
    id: 'project-securo-x',
    title: 'Securo X',
    category: 'Web3 Security',
    description: 'A highly secure Web3 wallet and custodian service portal incorporating circuitry shield visual metaphors.',
    tags: ['Cybersecurity', 'Web3', 'Wallet UI'],
    imageUrl: '/images/securo_x.png',
    liveUrl: 'https://securo-x.vercel.app/'
  }
];

// ── Figma Projects ──

export const figmaProjects: FigmaProject[] = [
  {
    id: 'figma-5r-outdoor',
    title: '5R Outdoor',
    category: 'UI/UX Design',
    description: 'An immersive out-of-home (OOH) advertising company website design. Built with premium dark layouts, strategic interactive billboard showcase sliders, and bold typography.',
    tags: ['OOH Advertising', 'Billboard', 'Brand Strategy', 'Interactive UI'],
    imageUrl: '/images/5r_outdoor.png',
    figmaUrl: 'https://www.figma.com/design/eseIPgHIUtlOxBx0FHWnxT/5R-OUTDOOR?node-id=0-1&t=YXFaxyjRErVNcy9X-1'
  },
  {
    id: 'figma-byd-car',
    title: 'BYD Car Dealership',
    category: 'UI/UX Design',
    description: 'A premium EV & Hybrid dealer portal design (Vision Auto) featuring high-fidelity electric vehicle showcases, clean modern dashboard statistics, and green accents.',
    tags: ['EV Dealership', 'Automotive UI', 'Modern Showcase', 'Clean Dashboard'],
    imageUrl: '/images/byd_car.png',
    figmaUrl: 'https://www.figma.com/design/vsarv63NZlucW1tzwYMFdB/BYD-CAR-DEALERSHIP?node-id=0-1&t=MYs6Xuni1k0dEen2-1'
  },
  {
    id: 'figma-company-web',
    title: 'Compant Web',
    category: 'UI/UX Design',
    description: 'RLWEB Corporation landing page design for engineered systems and digital transformation, focusing on ultimate operational efficiency, clean service categories, and digital tools.',
    tags: ['Digital Transformation', 'Engineered Systems', 'Corporate Web', 'Automation'],
    imageUrl: '/images/company_web.png',
    figmaUrl: 'https://www.figma.com/design/5YfsKh33zIaFFD6Je0HsMC/Untitled?node-id=0-1&t=YS3Azk6kINW1VKo7-1'
  }
];

// ── Graphics Projects ──

export const graphicsProjects: GraphicsProject[] = [
  {
    id: 'graphics-nft-character',
    title: 'Cyberpunk NFT Art',
    category: 'Digital Illustration',
    description: 'Custom-designed cyberpunk character NFT featuring detailed mechanical skullcaps, cybernetic eye components, and glowing brain interface accents.',
    tags: ['Digital Art', 'NFT Illustration', 'Cyberpunk', 'Character Design'],
    imageUrl: '/images/nft_character.png'
  },
  {
    id: 'graphics-byme-nft',
    title: 'BYME NFT Collection',
    category: 'NFT Art & Collectibles',
    description: 'Official character asset designs and digital releases for the BYME NFT collection, showcasing pop-culture avatars in customized suits.',
    tags: ['Meme Avatars', 'NFT Release', 'Illustrations', 'Collectibles'],
    imageUrl: '/images/byme_nft.jpg'
  },
  {
    id: 'graphics-atx-nft',
    title: 'ATX-NFT Singapore Event',
    category: 'Web3 Event Branding',
    description: 'Promotional passes, virtual VIP cards, and cybernetic-themed branding designs for the ATX-SG Singapore Web3 event, integrating AI and cybersecurity visual motifs.',
    tags: ['Event Branding', 'VIP Cards', 'Web3 Singapore', 'Cybernetic Design'],
    imageUrl: '/images/atx_nft.png'
  },
  {
    id: 'graphics-purse-branding',
    title: 'Purse Wallet Branding',
    category: 'Brand Identity',
    description: 'Comprehensive branding system, logos, style guides, and wallet app UI design prototypes for the Purse platform using vibrant green gradient layers.',
    tags: ['Brand Identity', 'Wallet Design', 'Mobile UI Style', 'Logo System'],
    imageUrl: '/images/purse_branding.png'
  }
];

// ── FAQ ──

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in the MERN stack (MongoDB, Express, React, Node.js) for full-stack development, along with Vue.js, Next.js, TypeScript, and Tailwind CSS. For design, I use Figma, Adobe Photoshop, and Illustrator. I also have experience with Web3 technologies including Solana and Ethereum.'
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'What types of projects do you work on?',
    answer: 'I work on a wide range of projects — from enterprise platforms and business management systems to Web3 dApps, e-commerce stores, and brand identity design. I\'m most passionate about projects that require both strong engineering and premium visual design.'
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Are you available for freelance work?',
    answer: 'Yes! I\'m open to freelance projects, contract work, and full-time opportunities. I work with clients globally and can adapt to different time zones. Message me on Telegram to discuss your project.'
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'What\'s your design process like?',
    answer: 'My design process follows three phases: Research & Discovery (understanding users and business goals), Design & Prototype (wireframes → high-fidelity mockups in Figma), and Build & Deploy (clean code implementation with iterative feedback). Every step is collaborative and transparent.'
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Do you offer ongoing support after launch?',
    answer: 'Absolutely. I provide post-launch support including bug fixes, feature enhancements, performance optimization, and server maintenance. I believe in building long-term relationships with clients rather than one-off projects.'
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'Can you handle both design and development?',
    answer: 'Yes — that\'s my core strength. I bridge the gap between design and development, ensuring pixel-perfect implementation of UI designs without the typical handoff friction. From Figma wireframes to deployed production code, I handle the entire pipeline.'
  }
];

// ── Skills ──

export const skills: SkillItem[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'Vue.js', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'HTML/CSS', level: 98, category: 'frontend' },
  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Express', level: 88, category: 'backend' },
  { name: 'MongoDB', level: 85, category: 'backend' },
  { name: 'MySQL', level: 75, category: 'backend' },
  { name: 'Supabase', level: 78, category: 'backend' },
  { name: 'PHP', level: 70, category: 'backend' },
  // Design
  { name: 'Figma', level: 95, category: 'design' },
  { name: 'Photoshop', level: 88, category: 'design' },
  { name: 'Illustrator', level: 85, category: 'design' },
  { name: 'UI/UX Design', level: 92, category: 'design' },
  // Web3
  { name: 'Solana', level: 80, category: 'web3' },
  { name: 'Ethereum', level: 75, category: 'web3' },
  { name: 'Web3.js', level: 82, category: 'web3' },
  { name: 'Smart Contracts', level: 70, category: 'web3' },
  // DevOps
  { name: 'Git/GitHub', level: 92, category: 'devops' },
  { name: 'Vercel', level: 90, category: 'devops' },
  { name: 'Nginx', level: 75, category: 'devops' },
  { name: 'Docker', level: 68, category: 'devops' },
];
