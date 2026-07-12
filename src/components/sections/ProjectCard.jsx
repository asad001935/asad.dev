import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";
import GlassCard from "../ui/GlassCard";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <GlassCard delay={delay} className="flex flex-col overflow-hidden">
      {/* Image placeholder */}
      <div className="relative h-44 sm:h-48 w-full bg-surface-alt border-b border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-glow opacity-70" />
        {/* PLACEHOLDER: replace with <img src={project.image} loading="lazy" /> */}
        <span className="relative font-mono text-xs text-slate-250/40">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-slate-250/40">Image not available</span>
          )}
        </span>
        <span className="absolute top-3 left-3 rounded-full bg-void/70 border border-white/10 px-3 py-1 font-mono text-[11px] text-accent">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display font-semibold text-lg text-slate-150">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-250/70 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-col gap-1.5">
          {project.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs text-slate-250/60"
            >
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-250/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-150 hover:text-accent transition-colors"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-150 hover:text-accent transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.caseStudy}
            className="flex items-center gap-1.5 text-sm text-slate-150 hover:text-accent transition-colors"
          >
            <FiFileText /> Case Study
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
