import { motion } from 'framer-motion';

/**
 * Animated proficiency bar. Fills to `level` percent the first time
 * it scrolls into view, then stays filled.
 */
export default function ProgressBar({ label, level, delay = 0 }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm sm:text-base text-slate-150 font-medium">{label}</span>
        <span className="font-mono text-xs text-accent/80">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-button-gradient shadow-glow"
        />
      </div>
    </div>
  );
}
