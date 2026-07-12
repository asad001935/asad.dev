import { FiBookOpen } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { EDUCATION } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="section !pb-12">
      <SectionHeading kicker="" title="Academic background" />

      <GlassCard className="p-8 flex flex-col sm:flex-row gap-6 sm:items-center max-w-3xl">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-button-gradient/20 border border-primary-400/30">
          <FiBookOpen className="text-2xl text-accent" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-xl text-slate-150">{EDUCATION.degree}</h3>
          <p className="mt-1 text-sm text-slate-250/70">
            {EDUCATION.institution} <span className="mx-1.5 text-slate-250/30">•</span> {EDUCATION.graduation}
          </p>
          <p className="mt-3 text-sm text-slate-250/60 leading-relaxed">{EDUCATION.description}</p>
        </div>
      </GlassCard>
    </section>
  );
}
