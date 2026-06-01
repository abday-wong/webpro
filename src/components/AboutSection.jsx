import { memo } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Trophy, ArrowUpRight, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';




const achievements = [
  {
    icon: Trophy,
    rank: 'Featured',
    category: 'Flutter App',
    title: 'YokNabung App Release',
    event: 'Independent Production Release',
    year: '2025',
    description: 'Developed and published YokNabung, a gamified savings tracker with milestone roadmaps, streaks, and a Neo-Brutalist UI design.',
    link: 'https://github.com/abday-wong/yoknabung'
  },
];

const STATS = [
  { value: '1+', label: 'Apps\nPublished' },
  { value: '5K+', label: 'Lines of\nCode' },
  { value: '100%', label: 'Mobile\nFocus' },
];

const CAPABILITIES = [
  'Mobile App Development',
  'Flutter & Dart',
  'UI/UX Design',
  'State Management (Provider)',
  'Local Persistence',
];




const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;
  const handleClick = () => {
    if (achievement.link) {
      window.open(achievement.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Gsap.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.12 + index * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className="group relative cursor-pointer rounded-[8px] overflow-hidden border border-white/10 bg-neutral-900/40 shadow-[0_4px_14px_rgba(255,255,255,0.01)] hover:border-white/20/14 hover:shadow-[0_10px_28px_rgba(255,255,255,0.02)] transition-all duration-300"
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-300/[0.16] blur-3xl opacity-35 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/[0.08] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 border border-white/5 rounded-[8px] pointer-events-none" />

      <div className="relative z-10 p-6 md:p-7">
        {}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {}
            <span className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-white/45 border border-white/10 px-2.5 py-1 rounded-[2px] bg-neutral-800/90 shadow-[0_1px_4px_rgba(255,255,255,0.01)]">
              {achievement.category}
            </span>
            {}
            {achievement.rank && (
              <span className="font-mono text-[8.5px] font-bold uppercase tracking-[0.18em] bg-neutral-900 text-white px-2.5 py-1 rounded-[2px]">
                {achievement.rank}
              </span>
            )}
          </div>
          {}
          <span className="font-mono text-[11px] font-bold text-white/30 tabular-nums">{achievement.year}</span>
        </div>

        {}
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            {}
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-[10px] text-white/22 font-bold tabular-nums select-none border border-white/10 px-1.5 py-0.5 rounded-[2px] leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-[22px] md:text-[26px] tracking-[-0.022em] text-white leading-[0.98]">
                {achievement.title}
              </h3>
            </div>

            {}
            <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/40 ml-8 mb-4">
              {achievement.event}
            </p>

            {}
            {achievement.description && (
              <p className="text-[13px] text-white/58 font-light leading-[1.72] ml-8 max-w-[470px]">
                {achievement.description}
              </p>
            )}
          </div>

          {}
          <div className="shrink-0 w-11 h-11 rounded-full border border-white/10 bg-neutral-800/95 shadow-[0_2px_8px_rgba(255,255,255,0.02)] flex items-center justify-center group-hover:border-white/20/20 transition-all duration-300">
            <Icon size={16} className="text-white/35 group-hover:text-white/55 transition-colors duration-300" />
          </div>
        </div>

        {}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/28">
            Click to view repository
          </span>
          <div className="flex items-center gap-1.5 text-white/38 group-hover:text-white transition-colors duration-300">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] font-bold">Open Link</span>
            <ArrowUpRight size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Gsap.div>
  );
};




const AboutSection = memo(function AboutSection() {
  return (
    <section id="about-section" className="py-20 md:py-28 w-full relative bg-[#030303] overflow-hidden">

      {}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-1/4 w-[520px] h-[520px] bg-cyan-300/[0.07] rounded-full blur-[110px]" />
        <div className="absolute -left-24 bottom-0 w-[380px] h-[380px] bg-neutral-900/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">

        {}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-cyan-500 shrink-0" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-white/40">
            01 — About
          </span>
          <div className="flex-1 h-px bg-neutral-900/[0.07]" />
        </Gsap.div>

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] gap-14 lg:gap-20 xl:gap-28 items-start">

          {

}
          <Gsap.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            {}
            <div className="relative">
              <div className="absolute -top-2.5 -left-2.5 w-full h-full border border-cyan-400/25 rounded-[4px] pointer-events-none" />

              <div className="relative aspect-[4/5] w-full rounded-[4px] overflow-hidden border border-white/10 bg-neutral-900/[0.04] group">
                {}
                <div className="absolute inset-0 bg-neutral-900/[0.12] group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply pointer-events-none" />

                <picture>
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img
                    src="/profile.webp"
                    alt={PORTFOLIO_DATA.profile.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top grayscale-[25%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </picture>

                {}
                <div className="absolute bottom-0 left-0 right-0 px-5 pt-10 pb-4 bg-gradient-to-t from-black/65 via-black/30 to-transparent z-20">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50 mb-0.5">Name</p>
                  <p className="text-white font-bold text-[15px] tracking-wide leading-snug">{PORTFOLIO_DATA.profile.name}</p>
                </div>

                {}
                <span className="absolute top-3.5 left-3.5 w-5 h-px bg-neutral-900/65 z-20" />
                <span className="absolute top-3.5 left-3.5 w-px h-5 bg-neutral-900/65 z-20" />
                <span className="absolute bottom-3.5 right-3.5 w-5 h-px bg-neutral-900/65 z-20" />
                <span className="absolute bottom-3.5 right-3.5 w-px h-5 bg-neutral-900/65 z-20" />
              </div>
            </div>

            {}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="bg-neutral-900 border border-white/10 rounded-[3px] py-3.5 px-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 mb-1.5">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] rounded-full bg-cyan-500 shrink-0" />
                  <span className="text-[13px] font-bold text-white">Available</span>
                </div>
              </div>
              <div className="bg-neutral-900 border border-white/10 rounded-[3px] py-3.5 px-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 mb-1.5">Location</p>
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-white/38 shrink-0" />
                  <span className="text-[13px] font-bold text-white">{PORTFOLIO_DATA.profile.location}</span>
                </div>
              </div>
            </div>

            {}
            <div className="mt-2.5 grid grid-cols-3 gap-2.5">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-neutral-900 border border-white/10 rounded-[3px] py-4 px-3 text-center">
                  <p className="font-black text-[22px] text-white leading-none tabular-nums">{stat.value}</p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-white/40 mt-1.5 leading-tight whitespace-pre-line">{stat.label}</p>
                </div>
              ))}
            </div>
          </Gsap.div>

          {

}
          <div className="flex flex-col">

            {}
            <Gsap.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-10"
            >
              {}
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/30 mb-5">
                Based in {PORTFOLIO_DATA.profile.location} — Open to Work
              </p>

              {}
              <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.08] text-white">
                <span className="block text-[44px] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  Flutter Developer
                </span>

                <span className="block text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[34px] font-medium tracking-[-0.01em] text-white/55 mt-2">
                  & Computer Science Student
                </span>
              </h2>
            </Gsap.div>

            {}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="flex items-center gap-3 mb-8 md:mb-9"
            >
              <span className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.2em] text-white/35">
                Mobile Apps · Neo-Brutalist UI/UX · Dart Expert
              </span>
            </Gsap.div>

            {}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14, duration: 0.75, ease: 'easeOut' }}
              className="space-y-4 text-[15px] md:text-[15.5px] font-light text-white/60 leading-[1.88] max-w-[580px]"
            >
              <p>
                {PORTFOLIO_DATA.profile.bio}
              </p>
            </Gsap.div>

            {}
            <div className="mt-10 md:mt-12 mb-10 md:mb-12 h-px bg-neutral-900/[0.07] max-w-[580px]" />

            {}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.75 }}
            >
              <p className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">
                Core Focus & Supporting Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((cap, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.12em] font-bold text-white/75 border border-white/10 px-3.5 py-[9px] rounded-[3px] hover:border-white/20 hover:text-white hover:bg-neutral-900 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </Gsap.div>

            {}
            {achievements.length > 0 && (
              <Gsap.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22, duration: 0.75 }}
                className="mt-14 md:mt-16"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-[5px] h-[5px] rounded-full bg-cyan-500 shrink-0" />
                  <p className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Notable Achievements
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-r from-black/[0.1] to-transparent" />
                  <span className="font-mono text-[9px] font-bold border border-white/10 bg-neutral-900 px-2.5 py-1 rounded-[2px] text-white/35 tabular-nums">
                    {achievements.length} Project{achievements.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {achievements.map((achievement, index) => (
                    <AchievementCard
                      key={index}
                      achievement={achievement}
                      index={index}
                    />
                  ))}
                </div>
              </Gsap.div>
            )}

          </div>
        </div>
      </div>

    </section>
  );
});

export default AboutSection;
