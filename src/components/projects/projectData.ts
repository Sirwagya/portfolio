export interface ProjectTheme {
  bg: string;
  tabBg: string;
  textColor: string;
  metaColor: string;
  tagBg: string;
  tagColor: string;
  frameBg: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  date: string;
  category: string;
  tagline: string;
  repoUrl: string;
  tags: string[];
  theme: ProjectTheme;
}

export const ALL_PROJECTS: ProjectData[] = [
  {
    id: 'nexora-ai',
    number: '01',
    title: 'Nexora AI',
    date: 'OCT 24, 2024',
    category: 'AI SYSTEMS / COMPUTER VISION',
    tagline: 'Helping construction teams catch structural mistakes before they become expensive.',
    repoUrl: 'https://github.com/urvashislash/nexora-ai',
    tags: ['COMPUTER VISION', 'SITE INTEL'],
    theme: {
      bg: '#2563eb', // Royal Blue
      tabBg: '#2563eb',
      textColor: '#ffffff',
      metaColor: '#bfdbfe',
      tagBg: '#141416',
      tagColor: '#ffffff',
      frameBg: '#fef08a', // Lemon yellow frame
    }
  },
  {
    id: 'onceuponme',
    number: '02',
    title: 'OnceUponMe',
    date: 'JAN 12, 2025',
    category: 'AI PIPELINES / MEDIA ENGINEERING',
    tagline: 'Transforming real human memories into studio-grade 35mm cinematic story reels.',
    repoUrl: 'https://github.com/Sirwagya/OnceUponMe-Video-Engine',
    tags: ['60FPS VIDEO', 'ELEVENLABS'],
    theme: {
      bg: '#141416', // Solid Ink Obsidian Black
      tabBg: '#1e1e24',
      textColor: '#ffffff',
      metaColor: '#a1a1aa',
      tagBg: '#ffffff',
      tagColor: '#141416',
      frameBg: '#fef08a',
    }
  },
  {
    id: 'campus-connect',
    number: '03',
    title: 'Campus Connect',
    date: 'AUG 04, 2025',
    category: 'FULL STACK / CAMPUS OS',
    tagline: 'Bringing campus life into one unified room with real-time peer coordination.',
    repoUrl: 'https://github.com/Sirwagya/campus-connect',
    tags: ['REAL-TIME', 'WEBSOCKETS'],
    theme: {
      bg: '#facc15', // Golden Ochre Yellow
      tabBg: '#facc15',
      textColor: '#141416',
      metaColor: '#713f12',
      tagBg: '#141416',
      tagColor: '#ffffff',
      frameBg: '#fef08a',
    }
  },
  {
    id: 'crave-check',
    number: '04',
    title: 'Crave Check',
    date: 'MAR 16, 2026',
    category: 'AI / PERFORMANCE / PERSONALIZATION',
    tagline: 'Helping people actually understand what is inside the food they eat every day.',
    repoUrl: 'https://github.com/Sirwagya/Crave-Check',
    tags: ['CLIMATE', 'DATA DESIGN'],
    theme: {
      bg: '#ff2d78', // Vibrant Pink / Magenta (Exact reference match)
      tabBg: '#ff2d78',
      textColor: '#141416',
      metaColor: '#4c0519',
      tagBg: '#141416',
      tagColor: '#ffffff',
      frameBg: '#fef08a',
    }
  }
];
