import { FiCheckCircle, FiLoader, FiBookOpen } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { CERTIFICATIONS } from '../../data/education';

const STATUS_MAP = {
  completed: { label: 'Completed', icon: FiCheckCircle, color: 'text-emerald-400' },
  'in-progress': { label: 'In Progress', icon: FiLoader, color: 'text-accent' },
  learning: { label: 'Learning', icon: FiBookOpen, color: 'text-primary-400' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section !pt-0 !pb-12">
      <SectionHeading kicker="" title="Certifications & courses" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((cert, i) => {
          const status = STATUS_MAP[cert.status];
          const Icon = status.icon;
          return (
            <GlassCard key={cert.id} delay={i * 0.06} className="p-6" hover={false}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-semibold text-slate-150">{cert.title}</h3>
                <Icon className={`shrink-0 text-lg ${status.color}`} />
              </div>
              <p className="mt-2 text-xs text-slate-250/50">{cert.issuer}</p>
              <span className={`mt-3 inline-block font-mono text-[11px] ${status.color}`}>{status.label}</span>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
