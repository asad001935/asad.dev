import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ProgressBar from '../ui/ProgressBar';
import { SKILL_GROUPS } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        kicker=""
        title="What I build with"
        subtitle="A stack chosen to ship real, full stack products - not just static pages."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, gi) => (
          <GlassCard key={group.id} delay={gi * 0.12} className="p-7 flex flex-col gap-6">
            <div>
              <h3 className="font-display font-semibold text-xl text-slate-150">{group.title}</h3>
              <p className="mt-1 text-sm text-slate-250/60">{group.description}</p>
            </div>
            <div className="flex flex-col gap-4">
              {group.skills.map((skill, si) => (
                <ProgressBar key={skill.name} label={skill.name} level={skill.level} delay={si * 0.08} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
