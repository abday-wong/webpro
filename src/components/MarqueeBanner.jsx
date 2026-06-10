import { memo } from 'react';

const skills = [
  'Full-Stack Development',
  'Mobile Applications',
  'Web Engineering',
  'Frontend Development',
  'Backend Architecture',
  'Database Management',
  'Software Engineering',
];

const MarqueeBanner = memo(function MarqueeBanner() {
  return (
    <div className="relative z-20 sm:-rotate-[2.2deg] sm:scale-[1.03] cursor-default select-none my-6">
      <div className="bg-black shadow-[0_0_40px_rgba(230, 0, 18,0.15)] border-y-4 border-white">

        {/* ── Top Row (Left Scroll) ── */}
        <div className="py-4 md:py-6 overflow-hidden relative group border-b-2 border-white">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-14 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-left 28s linear infinite' }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-14 text-lg sm:text-2xl md:text-4xl font-black uppercase items-center">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-14">
                    <span
                      className="text-[#e60012] hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(230, 0, 18,0.8)]"
                    >
                      {skill}
                    </span>
                    <span className="text-[#e60012] text-xl p5-star-animated">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Mask Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Bottom Row (Right Scroll) ── */}
        <div className="py-3 md:py-5 bg-[#e60012] overflow-hidden relative group border-t-2 border-black">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-12 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-right 32s linear infinite' }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-12 text-base sm:text-lg md:text-2xl font-black uppercase items-center">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-12">
                    <span className="text-black hover:text-white transition-colors duration-300 font-extrabold">{skill}</span>
                    <span className="text-black text-lg">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Mask Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#e60012] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#e60012] to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </div>
  );
});

export default MarqueeBanner;
