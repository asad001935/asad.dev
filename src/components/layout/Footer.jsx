import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { NAV_LINKS, PERSONAL } from '../../constants';

const socialIcons = [
  { id: 'github', icon: FiGithub, href: PERSONAL.github },
  { id: 'linkedin', icon: FiLinkedin, href: PERSONAL.linkedin },
  { id: 'email', icon: FiMail, href: `mailto:${PERSONAL.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-abyss">
      <div className="section !py-14 grid gap-10 md:grid-cols-3">
        <div>
          <span className="font-display font-bold text-xl text-slate-150">
            asad<span className="text-gradient">.dev</span>
          </span>
          <p className="mt-3 text-sm text-slate-250/60 max-w-xs leading-relaxed">
            Full Stack MERN Developer building fast, secure, and scalable web applications from {PERSONAL.location}.
          </p>
        </div>

        <div className="flex flex-col gap-2 font-mono text-sm">
          <span className="kicker mb-2">navigate</span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer text-slate-250/70 hover:text-accent transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <span className="kicker">connect</span>
          <div className="flex gap-3">
            {socialIcons.map(({ id, icon: Icon, href }) => (
              <a
                key={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={id}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-150 transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-glow-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-250/50 font-mono">
        © {year} {PERSONAL.name}. Built with React, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
