import useScrollProgress from '../../hooks/useScrollProgress';

/**
 * Thin fixed bar pinned under the navbar that fills as the user scrolls.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[70] bg-transparent">
      <div
        className="h-full bg-button-gradient shadow-glow transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
