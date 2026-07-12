import { motion } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';

/**
 * A soft blue glow that follows the cursor on desktop, giving depth
 * to hovered cards and empty space alike. No-ops on touch devices.
 */
export default function CursorGlow() {
  const { x, y, isActive } = useMousePosition();

  if (!isActive) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
      animate={{ x: x - 200, y: y - 200 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-primary-500/[0.08] blur-[80px]" />
    </motion.div>
  );
}
