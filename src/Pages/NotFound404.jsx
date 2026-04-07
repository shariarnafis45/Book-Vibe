import { useState, useEffect, useRef } from "react";

const GlitchText = ({ text, className }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 400);
    };
    const id = setInterval(trigger, 3000 + Math.random() * 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {glitching && (
        <>
          <span
            className="absolute inset-0 text-cyan-400 z-20"
            style={{ clipPath: "inset(20% 0 60% 0)", transform: "translateX(-4px)", mixBlendMode: "screen" }}
            aria-hidden
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-red-500 z-20"
            style={{ clipPath: "inset(60% 0 10% 0)", transform: "translateX(4px)", mixBlendMode: "screen" }}
            aria-hidden
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

const FloatingParticle = ({ style }) => (
  <div
    className="absolute rounded-full opacity-20 animate-pulse"
    style={style}
  />
);

const GridLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div
      className="absolute inset-0 opacity-10"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0f0a1e 100%)",
      }}
    />
  </div>
);

export default function NotFound404() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    style: {
      width: `${4 + (i % 5) * 6}px`,
      height: `${4 + (i % 5) * 6}px`,
      left: `${(i * 17 + 5) % 95}%`,
      top: `${(i * 23 + 10) % 90}%`,
      background: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#38bdf8" : "#f472b6",
      animationDelay: `${i * 0.4}s`,
      animationDuration: `${2 + (i % 4)}s`,
    },
  }));

  const parallaxX = (mousePos.x - 0.5) * 30;
  const parallaxY = (mousePos.y - 0.5) * 20;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden select-none"
      style={{
        background: "linear-gradient(135deg, #0f0a1e 0%, #1a0e2e 40%, #0d1b2a 100%)",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scanline {
          0% { top: -8%; }
          100% { top: 108%; }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 12px #a78bfa55, inset 0 0 12px #a78bfa11; }
          50% { box-shadow: 0 0 28px #a78bfaaa, inset 0 0 20px #a78bfa22; }
        }
        .anim-fade-up-1 { animation: fadeUp 0.7s ease both; animation-delay: 0.1s; }
        .anim-fade-up-2 { animation: fadeUp 0.7s ease both; animation-delay: 0.3s; }
        .anim-fade-up-3 { animation: fadeUp 0.7s ease both; animation-delay: 0.5s; }
        .anim-fade-up-4 { animation: fadeUp 0.7s ease both; animation-delay: 0.7s; }
        .anim-fade-up-5 { animation: fadeUp 0.7s ease both; animation-delay: 0.9s; }
        .scanline-anim { animation: scanline 5s linear infinite; }
        .btn-glow { animation: borderGlow 2.5s ease-in-out infinite; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .mono { font-family: 'Space Mono', monospace; }
      `}</style>

      <GridLines />

      {/* Floating particles */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} style={p.style} />
      ))}

      {/* Scanline effect */}
      <div
        className="scanline-anim absolute left-0 w-full pointer-events-none z-10"
        style={{
          height: "8%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(167,139,250,0.04) 50%, transparent 100%)",
        }}
      />

      {/* Ambient glow orbs — parallax */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: `translate(calc(-50% + ${parallaxX * 1.5}px), calc(-50% + ${parallaxY * 1.5}px))`,
          transition: "transform 0.15s ease-out",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)",
          left: "20%",
          top: "30%",
          transform: `translate(${parallaxX * -1}px, ${parallaxY * -0.8}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Main Card */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-8 py-12 max-w-2xl w-full mx-4"
        style={{
          background: "rgba(15,10,30,0.6)",
          border: "1px solid rgba(167,139,250,0.2)",
          backdropFilter: "blur(20px)",
          borderRadius: "2px",
        }}
      >
        {/* Corner decorations */}
        {[
          "top-0 left-0 border-t-2 border-l-2",
          "top-0 right-0 border-t-2 border-r-2",
          "bottom-0 left-0 border-b-2 border-l-2",
          "bottom-0 right-0 border-b-2 border-r-2",
        ].map((cls, i) => (
          <div
            key={i}
            className={`absolute ${cls} border-violet-400 w-5 h-5 opacity-60`}
          />
        ))}

        {/* Status badge */}
        <div className={`mono anim-fade-up-1 mb-6 flex items-center gap-2 text-xs tracking-widest uppercase`}>
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400">Error — Page not found</span>
        </div>

        {/* Giant 404 */}
        <div
          className={`bebas anim-fade-up-2 leading-none mb-2`}
          style={{
            fontSize: "clamp(120px, 22vw, 200px)",
            background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 40px rgba(167,139,250,0.4))",
            transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.2}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <GlitchText text="404" />
        </div>

        {/* Divider */}
        <div className={`anim-fade-up-3 flex items-center gap-4 w-full max-w-sm mb-6`}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-500 opacity-40" />
          <span className="mono text-violet-400 text-xs tracking-widest">VOID</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-500 opacity-40" />
        </div>

        {/* Headline */}
        <h1
          className={`bebas anim-fade-up-3 text-white mb-3 tracking-wide`}
          style={{ fontSize: "clamp(22px, 4vw, 36px)", letterSpacing: "0.08em" }}
        >
          Lost in the void
        </h1>

        {/* Description */}
        <p className={`mono anim-fade-up-4 text-slate-400 text-sm leading-relaxed mb-8 max-w-md`}>
          The page you're looking for has drifted into oblivion — or never existed.
          Double-check the URL, or navigate back to safety.
        </p>

        {/* Terminal-style path */}
        <div
          className={`mono anim-fade-up-4 w-full max-w-sm mb-8 px-4 py-3 text-xs text-left`}
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(167,139,250,0.15)",
            borderRadius: "2px",
          }}
        >
          <span className="text-violet-400">~ $</span>{" "}
          <span className="text-slate-300">curl </span>
          <span className="text-sky-400">
            {typeof window !== "undefined" ? window.location.href : "https://yoursite.com/???"}
          </span>
          <br />
          <span className="text-red-400">{">"} 404 Not Found</span>
        </div>

        {/* CTA Buttons */}
        <div className={`anim-fade-up-5 flex flex-wrap gap-4 justify-center`}>
          <button
            onClick={() => (window.location.href = "/")}
            className="btn-glow mono relative overflow-hidden px-8 py-3 text-sm font-bold tracking-widest uppercase text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              border: "1px solid rgba(167,139,250,0.5)",
              borderRadius: "2px",
              letterSpacing: "0.15em",
            }}
          >
            <span className="relative z-10">↩ Go Home</span>
            <span
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #6366f1)" }}
            />
          </button>


        </div>

        {/* Footer note */}
        <p className={`mono anim-fade-up-5 mt-8 text-xs text-slate-600 tracking-widest`}>
          ERROR_CODE :: 404 &nbsp;|&nbsp; HTTP/1.1
        </p>
      </div>
    </div>
  );
}