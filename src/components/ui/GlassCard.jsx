import { motion } from 'framer-motion';

/**
 * Base glassmorphism card used across Skills, Projects, Services, etc.
 * `hover` enables the lift + glow interaction; `as` lets callers swap the tag.
 */
export default function GlassCard({ children, className = '', hover = true, delay = 0, as: Tag = motion.div, ...props }) {
  return (
    <Tag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -6 } : undefined}
      className={`glass rounded-3xl shadow-card ${hover ? 'glass-hover hover:shadow-glow' : ''} ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-card-sheen opacity-60" />
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  );
}
