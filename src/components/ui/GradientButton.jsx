import { motion } from "framer-motion";

export default function GradientButton({
  children,
  icon: Icon,
  href,
  onClick,
  variant = "solid",
  type = "button",
  className = "",
  download = false,
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-sm sm:text-base transition-all duration-300 overflow-hidden";

  const solid =
    "bg-button-gradient text-white shadow-glow hover:shadow-glow-lg";
  const outline =
    "border border-white/15 text-slate-150 bg-white/[0.03] hover:border-accent/60 hover:bg-white/[0.06]";

  const styles = variant === "outline" ? outline : solid;

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
