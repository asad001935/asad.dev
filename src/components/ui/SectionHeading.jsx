import { motion } from 'framer-motion';

/**
 * Consistent heading block used at the top of every section:
 * a small monospace kicker, a large display title, and an optional subtitle.
 */
export default function SectionHeading({ kicker, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 mb-14 md:mb-20 max-w-2xl ${alignment}`}
    >
      {kicker && <span className="kicker">// {kicker}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-150 leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-slate-250/80 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
