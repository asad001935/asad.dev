import { useEffect, useState } from 'react';

/**
 * Cycles through an array of strings with a typing + deleting animation.
 * Returns the current substring to render, plus whether the caret should blink.
 */
export default function useTypewriter(words = [], { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1600 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  useEffect(() => {
    if (!words.length) return undefined;
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseTime);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 300);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
