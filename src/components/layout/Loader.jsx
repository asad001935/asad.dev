import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Brief branded loading screen shown on first paint, mimicking a
 * terminal boot sequence — a small nod to the developer subject matter.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  const lines = ['npm install portfolio', 'compiling components...', 'ready ✓'];

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, lines.length));
    }, 380);

    const hideTimer = setTimeout(() => setVisible(false), 1500);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
        >
          <div className="w-72 sm:w-96 rounded-2xl border border-white/10 bg-surface/80 p-6 font-mono text-sm shadow-glow">
            <div className="flex gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            {lines.slice(0, lineIndex).map((line, idx) => (
              <p key={line} className={idx === lines.length - 1 ? 'text-accent' : 'text-slate-250/80'}>
                <span className="text-primary-400">$</span> {line}
              </p>
            ))}
            <span className="inline-block w-2 h-4 bg-accent align-middle animate-blink" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
