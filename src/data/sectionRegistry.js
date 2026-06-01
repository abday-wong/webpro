



















export const SECTION_REGISTRY = [
  {
    id: 'scroll_to_hero',
    label: 'Home / Landing',
    elementId: null, 
    synonyms: [
      'home', 'atas', 'awal', 'landing', 'top',
      'ke atas', 'scroll atas', 'halaman utama', 'beranda',
      'paling atas', 'back to top', 'go up',
    ],
  },
  {
    id: 'scroll_to_about',
    label: 'About / Who Am I',
    elementId: 'about-section',
    synonyms: [
      'about', 'tentang', 'profil', 'profile', 'bio', 'biography',
      'siapa', 'who', 'diri', 'perkenalan', 'introduce', 'yourself',
      'who am i', 'who is', 'ceritakan tentang', 'kamu siapa',
      'background', 'latar belakang',
    ],
  },
  {
    id: 'scroll_to_projects',
    label: 'Past Explorations / Projects',
    elementId: 'project-section',
    synonyms: [
      'project', 'projek', 'proyek', 'portfolio', 'karya',
      'exploration', 'past exploration', 'logs',
      'list project', 'daftar project', 'semua project', 'all project',
      'show project', 'lihat project', 'apa aja project',
    ],
  },
  {
    id: 'scroll_to_experience',
    label: 'Experience Log / Career Journey',
    elementId: 'experience-section',
    synonyms: [
      'experience', 'pengalaman', 'karir', 'career', 'kerja', 'work',
      'organisasi', 'riwayat', 'work history', 'pekerjaan',
      'magang', 'internship', 'experience log', 'career journey',
      'riwayat kerja', 'riwayat karir', 'professional',
    ],
  },
  {
    id: 'scroll_to_tech',
    label: 'Tech Stack / Technologies',
    elementId: 'tech-stack-section',
    synonyms: [
      'tech stack', 'teknologi', 'technology', 'tools',
      'framework', 'bahasa pemrograman', 'programming language',
      'pakai apa', 'pake apa', 'tech', 'stack',
      'tech yang dipakai', 'tech yang dipake',
      'skill teknis', 'technical skill',
    ],
  },
  {
    id: 'scroll_to_capabilities',
    label: 'Technical Capabilities / What I Can Do',
    elementId: 'capabilities-section',
    synonyms: [
      'capabilities', 'kemampuan', 'keahlian', 'bisa apa',
      'bidang', 'expertise', 'specialization', 'spesialisasi',
      'apa yang dikuasai', 'mampu apa', 'what can you do',
      'skill', 'ability', 'able',
    ],
  },
  {
    id: 'scroll_to_github',
    label: 'GitHub Stats / Coding Stats',
    elementId: 'github-stats-section',
    synonyms: [
      'github', 'kontribusi', 'contribution', 'commit',
      'repository', 'repo', 'github stats', 'git stats',
      'coding stats', 'open source',
    ],
  },
  {
    id: 'scroll_to_contact',
    label: 'Contact / Footer',
    elementId: 'contact-section',
    synonyms: [
      'kontak', 'contact', 'hubungi', 'email', 'hire',
      'reach out', 'linkedin', 'footer',
      'how to contact', 'cara hubungi', 'cara kontak',
      'sosial media', 'social media', 'connect',
      'rekrut', 'recruit', 'hire me',
    ],
  },
];









export const ACTION_TO_ELEMENT = Object.fromEntries(
  SECTION_REGISTRY
    .filter(s => s.elementId !== null)
    .map(s => [s.id, s.elementId])
);





export function getSectionLabels() {
  return SECTION_REGISTRY
    .map(s => `- ${s.label}`)
    .join('\n');
}
