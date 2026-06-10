import { useEffect, useState } from "react";
import { Gsap } from "../utils/gsapAnimate";

const words = ["INITIALIZING", "LOADING ASSETS", "COMPILING", "READY"];

const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [tick, setTick] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                
                const diff = Math.random() * 8;
                return Math.min(prev + diff, 100);
            });
        }, 120); 

        
        const tickTimer = setInterval(() => setTick(t => t + 1), 60);

        return () => {
            clearInterval(timer);
            clearInterval(tickTimer);
        };
    }, []);

    useEffect(() => {
        
        if (index === words.length - 1) return;

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 550); 

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        
        if (progress === 100) {
            
            const timeout = setTimeout(() => {
                setIsExiting(true);
                setTimeout(onComplete, 800);
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#000000] text-white flex flex-col justify-between p-6 md:p-10 overflow-hidden transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
            style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
        >
            {/* Ambient Halftone Pattern */}
            <div className="absolute inset-0 z-0 p5-halftone-bg opacity-30 pointer-events-none" />

            {/* Persona 5 Diagonal Stripe Slashes */}
            <div className="absolute top-1/4 -left-10 w-[120vw] h-12 p5-slash-stripe rotate-[-6deg] z-0 opacity-80" />
            <div className="absolute top-[60%] -right-10 w-[120vw] h-6 bg-white rotate-[4deg] z-0 opacity-60" />
            <div className="absolute bottom-1/4 -left-10 w-[120vw] h-16 p5-slash-stripe rotate-[-3deg] z-0 opacity-90" />

            {/* Header info */}
            <div className="relative z-10 flex justify-between items-start uppercase font-mono text-xs md:text-sm tracking-widest">
                <span className="p5-title-block text-xs font-black">PHANTOM THIEF SYSTEM</span>
                <span className="text-white/60 bg-black/60 px-2 py-0.5 border border-white/20 font-bold">©2026 ATLUS_INSP</span>
            </div>

            {/* Center Loading Card */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full my-auto">
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-3">
                    {"ABDAY HAFIDZ".split("").map((char, i) => (
                        <div
                            key={i}
                            className={`px-3 py-1.5 text-xl md:text-5xl font-black rounded-sm border-2 border-white select-none transition-all duration-300 ${
                                char === " " 
                                ? "bg-transparent border-transparent w-4 md:w-8" 
                                : i % 2 === 0 
                                ? "bg-[#e60012] text-white p5-shadow-black rotate-[3deg] scale-105" 
                                : "bg-black text-white p5-shadow-red rotate-[-4deg]"
                            }`}
                        >
                            {char}
                        </div>
                    ))}
                </div>

                {/* Progress bar in P5 block style */}
                <div className="w-full max-w-md bg-neutral-900 border-2 border-white/20 p-1 mt-6 relative p5-skew-x">
                    <div 
                        className="h-4 bg-[#e60012] transition-all duration-200" 
                        style={{ width: `${progress}%` }} 
                    />
                    <div className="absolute -top-6 right-2 bg-black border border-white text-white font-mono text-xs font-bold px-2 py-0.5 p5-skew-x">
                        PROGRESS: {Math.round(progress)}%
                    </div>
                </div>
            </div>

            {/* Footer and P5 Loading Mascot/Star */}
            <div className="relative z-10 flex justify-between items-end w-full">
                <div className="flex flex-col gap-1 font-mono text-xs md:text-sm tracking-wider text-left">
                    <div className="text-white/40">SYSTEM STATUS:</div>
                    <div className="font-black text-[#e60012] bg-white px-2 py-0.5 inline-block p5-skew-x border border-black">
                        {progress === 100 ? 'STEAL YOUR HEART' : 'PREPARING CALLING CARD...'}
                    </div>
                </div>

                {/* Persona 5 Royal Loading Indicator: spinning stars and sliding loading text */}
                <div className="flex items-center gap-3">
                    <span className="font-display font-black text-lg md:text-2xl tracking-tighter uppercase skew-x-[-12deg] bg-white text-black border-2 border-[#e60012] px-3 py-1 shadow-[3px_3px_0px_#000]">
                        LOADING
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#e60012] border-2 border-white rounded-full p5-star-animated p5-shadow-black">
                        <span className="text-white text-xl md:text-2xl font-black select-none">★</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
