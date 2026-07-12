import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi2";
import { FiDownload, FiSend } from "react-icons/fi";
import useTypewriter from "../../hooks/useTypewriter";
import useMousePosition from "../../hooks/useMousePosition";
import { PERSONAL, TYPED_ROLES } from "../../constants";
import GradientButton from "../ui/GradientButton";

function CodePanel({ parallaxX, parallaxY }) {
  const codeLines = [
    { indent: 0, text: "const developer = {" },
    { indent: 1, text: `name: '${PERSONAL.name}',` },
    { indent: 1, text: "stack: ['React', 'Node', 'Express', 'MongoDB']," },
    { indent: 1, text: `focus: 'MERN Stack Internships',` },
    { indent: 1, text: "availableForWork: true," },
    { indent: 0, text: "};" },
  ];

  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      className="gradient-border w-full max-w-md rounded-3xl bg-surface/70 backdrop-blur-xl shadow-glow-lg"
    >
      <div className="flex items-center gap-1.5 px-5 pt-5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono text-xs text-slate-250/50">
          developer.js
        </span>
      </div>
      <div className="px-6 py-6 font-mono text-[13px] sm:text-sm leading-relaxed">
        {codeLines.map((line, i) => (
          <motion.p
            key={line.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
            style={{ paddingLeft: `${line.indent * 1.25}rem` }}
            className="text-slate-200"
          >
            {line.text.split(/(':.*?')|(\[.*?\])|(true)/g).map((part, idx) => {
              if (!part) return null;
              if (part.startsWith("':") || part.startsWith("'")) {
                return (
                  <span key={idx} className="text-accent">
                    {part}
                  </span>
                );
              }
              if (part === "true") {
                return (
                  <span key={idx} className="text-primary-400">
                    {part}
                  </span>
                );
              }
              return <span key={idx}>{part}</span>;
            })}
          </motion.p>
        ))}
        <span className="inline-block w-2 h-4 translate-y-1 bg-accent animate-blink" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypewriter(TYPED_ROLES);
  const { x, y, isActive } = useMousePosition();

  const parallaxX = isActive ? (x - window.innerWidth / 2) / 40 : 0;
  const parallaxY = isActive ? (y - window.innerHeight / 2) / 40 : 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="section !py-0 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="kicker mb-5"
          >
            {PERSONAL.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.08] text-slate-150"
          >
            My name is <span className="text-gradient">{PERSONAL.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-10 sm:h-12 flex items-center font-mono text-lg sm:text-2xl text-slate-250"
          >
            <span className="text-primary-400 mr-2">&gt;</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block w-[2px] h-6 sm:h-7 bg-accent animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-lg text-slate-250/75 text-base sm:text-lg leading-relaxed"
          >
            I design and build full stack web applications end-to-end - from
            database schema to polished, responsive interfaces - using the MERN
            Stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <GradientButton
              href={PERSONAL.resumeUrl}
              icon={FiDownload}
              download
            >
              Download Resume
            </GradientButton>
            <Link to="contact" smooth duration={500} offset={-80}>
              <GradientButton variant="outline" icon={FiSend}>
                Contact Me
              </GradientButton>
            </Link>
          </motion.div>
        </div>

        {/* Code panel column */}
        <div className="flex justify-center lg:justify-end">
          <CodePanel parallaxX={parallaxX} parallaxY={parallaxY} />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-250/50"
      >
        <span className="font-mono text-xs">scroll</span>
        <HiArrowDown />
      </motion.div>
    </section>
  );
}
