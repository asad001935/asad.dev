import { useMemo } from 'react';

/**
 * Ambient backdrop shared by the whole page: a soft animated gradient glow,
 * a faint code-grid texture, and a handful of slow floating orbs/particles.
 * Purely decorative, so it is aria-hidden and ignores pointer events.
 */
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        size: 2 + Math.random() * 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-grid-glow bg-[length:200%_200%] animate-gradient-shift" />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Large floating orbs */}
      <div className="absolute -top-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-primary-500/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-[120px] animate-float-delayed" />
      <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full bg-primary-700/20 blur-[100px] animate-float" />

      {/* Small particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent/60 animate-float"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#03050C_100%)]" />
    </div>
  );
}
