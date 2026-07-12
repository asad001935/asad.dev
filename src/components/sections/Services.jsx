import {
  FiLayout,
  FiServer,
  FiLayers,
  FiGrid,
  FiLock,
  FiDatabase,
  FiCpu,
} from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { SERVICES } from '../../data/services';

const ICONS = {
  'responsive-websites': FiLayout,
  'rest-apis': FiServer,
  'full-stack-apps': FiLayers,
  'admin-dashboards': FiGrid,
  'auth-systems': FiLock,
  'mongodb-apps': FiDatabase,
  'react-applications': FiCpu,
};

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading kicker="" title="What I can build for you" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.id];
          return (
            <GlassCard key={service.id} delay={i * 0.08} className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-button-gradient/20 border border-primary-400/30 mb-5">
                <Icon className="text-xl text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-150">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-250/70 leading-relaxed">{service.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
