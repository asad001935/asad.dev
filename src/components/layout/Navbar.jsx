import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { NAV_LINKS, PERSONAL } from '../../constants';
import GradientButton from '../ui/GradientButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-void/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link to="hero" smooth duration={500} spy onSetActive={setActive} className="cursor-pointer group">
          <span className="font-display font-bold text-lg sm:text-xl text-slate-150">
            asad<span className="text-gradient">.dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                onSetActive={setActive}
                className={`relative cursor-pointer px-4 py-2 rounded-full transition-colors duration-300 ${
                  active === link.to ? 'text-accent' : 'text-slate-250/70 hover:text-slate-150'
                }`}
              >
                {active === link.to && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <GradientButton href={PERSONAL.resumeUrl} variant="outline" className="!px-5 !py-2.5 !text-sm">
            Resume
          </GradientButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-2xl text-slate-150"
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-void/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col gap-1 px-6 py-6 font-mono text-base">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-slate-250/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <GradientButton href={PERSONAL.resumeUrl} className="w-full justify-center">
                  Download Resume
                </GradientButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
