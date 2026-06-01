import { PROJECT_META } from '../data/projectMeta';
import { SECTION_REGISTRY } from '../data/sectionRegistry';
















const MIN_SCORE_THRESHOLD = 1;
const HIGH_CONFIDENCE_SCORE = 2.5;

const NAVIGATION_TRIGGERS = [
  'buka', 'open', 'lihat', 'show', 'go to', 'ke ', 'scroll', 'arahkan',
  'pindah', 'take me', 'jump to', 'navigate', 'tunjukin', 'tampilkan',
  'mau ke', 'ingin ke', 'ke bagian', 'ke section',
];





const OFF_TOPIC_PATTERNS = [
  
  /\b(buatin?|buat(?:kan)?|write|code|tulis(?:kan)?)\s+(script|kode|code|program|function|fungsi|class|api)\b/i,
  /\b(debug|fix|solve|selesaikan|perbaiki)\s+(bug|error|code|kode)\b/i,
  
  /\b(hitung|calculate|berapa\s+\d|what\s+is\s+\d|\d\s*[+\-*/]\s*\d)/i,
  
  /\b(siapa\s+presiden|who\s+is\s+the\s+president|capital\s+of|ibu\s*kota)\b/i,
  /\b(apa\s+itu|what\s+is)\s+(?!abday|wong|hafidz|portofolio|portfolio|project|projek)/i,
  
  /\b(cuaca|weather|berita|news|gosip)\b/i,
  
  /\b(translate|terjemahkan|artikan)\b/i,
  
  /\b(cerita|story|puisi|poem|lagu|song|essay)\b/i,
  
  /\b(game|movie|film|musik|music|resep|recipe|masak|cook)\b/i,
];




const ON_TOPIC_OVERRIDES = [
  /abday|wong|hafidz/i,
  /portofolio|portfolio/i,
  /project|projek|proyek/i,
  ...PROJECT_META.flatMap(p => [
    new RegExp(escapeRegex(p.slug), 'i'),
    new RegExp(escapeRegex(p.title), 'i'),
  ]),
];





const PROJECT_ALIASES = PROJECT_META.map(p => ({
  slug: p.slug,
  title: p.title,
  id: p.id,
  category: p.category,
  searchTerms: [
    p.slug.toLowerCase(),
    p.title.toLowerCase(),
    ...p.title.toLowerCase().split(/[\s-]+/).filter(w => w.length > 2),
  ],
}));

const PROJECT_REFERENCE_TRIGGERS = [
  'project', 'projek', 'proyek', 'detail', 'tentang', 'about', 'case study',
  'show', 'lihat', 'buka', 'open', 'jelaskan', 'explain', 'ceritain',
];



function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}






function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function hasNavigationTrigger(normalizedMsg) {
  return NAVIGATION_TRIGGERS.some(trigger => normalizedMsg.includes(trigger));
}

function wordCount(text) {
  if (!text) return 0;
  return text.split(' ').filter(Boolean).length;
}

function tokenize(text) {
  return normalize(text)
    .split(' ')
    .filter(token => token.length > 2);
}

function scoreProjectMention(normalizedMsg, project) {
  let score = 0;

  if (normalizedMsg.includes(project.slug)) score += 5;
  if (normalizedMsg.includes(project.title.toLowerCase())) score += 4;

  for (const term of project.searchTerms) {
    if (term.length < 3) continue;
    if (normalizedMsg.includes(term)) score += 1;
  }

  const msgTokens = tokenize(normalizedMsg);
  const projectTokens = tokenize(project.title).concat(tokenize(project.slug));
  const overlap = msgTokens.filter(token => projectTokens.includes(token)).length;
  score += overlap * 1.5;

  return score;
}














function scoreSynonyms(normalizedMsg, synonyms) {
  let score = 0;
  for (const synonym of synonyms) {
    if (normalizedMsg.includes(synonym)) {
      const wordCount = synonym.split(' ').length;
      
      score += 1 + (wordCount - 1) * 0.5;
    }
  }
  return score;
}







function matchProjectIntent(normalizedMsg) {
  const hasOpenTrigger = hasNavigationTrigger(normalizedMsg);
  const hasProjectContext = PROJECT_REFERENCE_TRIGGERS.some(t => normalizedMsg.includes(t));

  let best = null;
  let secondBest = null;

  for (const project of PROJECT_ALIASES) {
    const score = scoreProjectMention(normalizedMsg, project);
    if (!best || score > best.score) {
      secondBest = best;
      best = { slug: project.slug, score };
    } else if (!secondBest || score > secondBest.score) {
      secondBest = { slug: project.slug, score };
    }
  }

  if (!best || best.score < 3) return null;

  const margin = best.score - (secondBest?.score || 0);
  const isClear = margin >= 1.25;

  if ((hasOpenTrigger || hasProjectContext) && isClear) {
    return { slug: best.slug };
  }

  return null;
}








function matchSectionIntent(normalizedMsg) {
  let bestAction = null;
  let bestScore = 0;
  let secondBestScore = 0;

  for (const section of SECTION_REGISTRY) {
    const score = scoreSynonyms(normalizedMsg, section.synonyms);
    if (score > bestScore) {
      secondBestScore = bestScore;
      bestScore = score;
      bestAction = section.id;
    } else if (score > secondBestScore) {
      secondBestScore = score;
    }
  }

  if (bestScore < MIN_SCORE_THRESHOLD) return null;

  const msgWordCount = wordCount(normalizedMsg);
  const triggeredByNavVerb = hasNavigationTrigger(normalizedMsg);
  const hasClearWinner = bestScore - secondBestScore >= 0.75;
  const shortQuery = msgWordCount <= 6;

  if (triggeredByNavVerb) return bestAction;
  if (bestScore >= HIGH_CONFIDENCE_SCORE && hasClearWinner) return bestAction;
  if (shortQuery && bestScore >= 1.5 && hasClearWinner) return bestAction;

  return null;
}











export function detectOffTopic(userMessage, lang = 'id') {
  const msg = normalize(userMessage);

  
  const isOverridden = ON_TOPIC_OVERRIDES.some(pattern => pattern.test(msg));
  if (isOverridden) return null;

  const isOffTopic = OFF_TOPIC_PATTERNS.some(pattern => pattern.test(msg));
  if (!isOffTopic) return null;

  return lang === 'en'
    ? "Hey, that's outside my portfolio scope! Feel free to ask about my projects, skills, or experience."
    : "Wah, itu di luar konteks portofolio saya. Tanya aja soal project, skill, atau pengalaman saya!";
}








export function detectLanguage(userMessage) {
  const indonesianMarkers = [
    'apa', 'siapa', 'dimana', 'bagaimana', 'gimana', 'kapan',
    'bisa', 'buka', 'lihat', 'tolong', 'kasih', 'tahu',
    'ceritakan', 'jelaskan', 'tentang', 'nya', 'aku', 'kamu',
    'dia', 'saya', 'kalau', 'yang', 'dan', 'atau', 'ini', 'itu',
    'mau', 'ingin', 'dong', 'deh', 'sih', 'aja', 'gak', 'nggak',
  ];

  const words = normalize(userMessage).split(' ');
  const idCount = words.filter(w => indonesianMarkers.includes(w)).length;

  return idCount >= 1 ? 'id' : 'en';
}













export function resolveAction(userMessage) {
  const msg = normalize(userMessage);

  
  const projectMatch = matchProjectIntent(msg);
  if (projectMatch) {
    return {
      action: 'open_project',
      params: { project_name: projectMatch.slug },
    };
  }

  
  const sectionAction = matchSectionIntent(msg);
  if (sectionAction) {
    return { action: sectionAction, params: null };
  }

  
  return { action: null, params: null };
}
