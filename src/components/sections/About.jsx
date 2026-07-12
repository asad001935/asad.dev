import { motion } from 'framer-motion';
import { FiCode, FiTarget, FiTrendingUp } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { PERSONAL } from '../../constants';

const CARDS = [
  {
    icon: FiCode,
    title: 'Technologies',
    text: 'React, Node.js, Express, MongoDB, and the surrounding tooling that keeps a full stack app maintainable.',
  },
  {
    icon: FiTrendingUp,
    title: 'Years of Learning',
    text: 'Multiple years of consistent, project-driven learning — favoring real builds over tutorials alone.',
  },
  {
    icon: FiTarget,
    title: 'Career Goal',
    text: 'Seeking a MERN Stack internship or junior full stack role to grow inside a real engineering team.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading kicker="" title="The developer behind the code" />

      <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-12 items-start">
        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="gradient-border relative mx-auto w-full max-w-sm rounded-4xl overflow-hidden shadow-glow-lg"
        >
          <div className="aspect-[4/5] w-full bg-surface-alt flex items-center justify-center">
            <img src="./../../../public/PFP.jpeg"/>
            {/* PLACEHOLDER: replace with <img src="/your-photo.jpg" /> */}
            {/* <div className="flex flex-col items-center gap-3 text-slate-250/40">
              <div className="h-24 w-24 rounded-full border-2 border-dashed border-white/15 flex items-center justify-center font-display text-3xl">
                MA
              </div>
              <span className="font-mono text-xs">profile photo placeholder</span>
            </div> */}
          </div>
        </motion.div>

        <div>
          <p className="text-lg sm:text-xl text-slate-150 leading-relaxed font-medium">
            I'm {PERSONAL.name}, a {PERSONAL.role} from {PERSONAL.location}, focused on building
            complete web applications rather than isolated screens.
          </p>
          <p className="mt-5 text-slate-250/75 leading-relaxed">
            My journey started with the fundamentals of HTML, CSS, and JavaScript, then moved
            into React on the frontend and Node.js, Express, and MongoDB on the backend. Since
            then, I've built full stack projects that go beyond CRUD - role-based dashboards,
            authentication systems, and APIs designed to hold up under real usage.
          </p>
          <p className="mt-5 text-slate-250/75 leading-relaxed">
            I care about writing code that's readable six months later, structuring projects so
            teammates can jump in quickly, and shipping features that actually solve the problem
            in front of me. Right now, I'm deepening my backend architecture knowledge and
            learning cloud computing with AWS to round out what I can ship end-to-end.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {CARDS.map((card, i) => (
              <GlassCard key={card.title} delay={i * 0.1} className="p-6">
                <card.icon className="text-2xl text-accent mb-3" />
                <h3 className="font-display font-semibold text-slate-150 mb-1.5">{card.title}</h3>
                <p className="text-sm text-slate-250/70 leading-relaxed">{card.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
