import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { ACHIEVEMENTS } from '../../data/education';

export default function Achievements() {
  return (
    <section id="achievements" className="section !pt-0">
      <SectionHeading kicker="" title="Milestones so far" />

      <div className="grid sm:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-button-gradient/20 border border-primary-400/30">
              <FiAward className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-slate-150">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-250/65 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
