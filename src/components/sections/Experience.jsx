import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { EXPERIENCE } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        kicker=""
        title="Where I am in the journey"
        subtitle="Not years of employment yet - but a consistent, documented path of building and learning."
      />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-500 via-accent/60 to-transparent" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="relative"
            >
              <span
                className={`absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full border-2 ${
                  item.status === 'current'
                    ? 'bg-accent border-accent shadow-glow-accent animate-pulse-glow'
                    : 'bg-primary-500 border-primary-400'
                }`}
              />
              <span className="kicker">{item.period}</span>
              <h3 className="mt-1 font-display font-semibold text-lg sm:text-xl text-slate-150">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-slate-250/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
