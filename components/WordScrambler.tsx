import React, { useState, useEffect, useRef, useCallback } from "react";

// --- Helper Functions from the article ---
const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const randomChar = (): string => DEFAULT_CHARS[Math.floor(Math.random() * DEFAULT_CHARS.length)];
const randomString = (length: number): string => Array.from({ length }, randomChar).join("");

// Props for ScrambledText
interface ScrambledTextProps {
  text: string;
  onScrambleEnd?: (duration: number) => void;
}

/**
 * ScrambledText Component
 * Renders a single word and animates it with a scramble effect on mount.
 */
const ScrambledText: React.FC<ScrambledTextProps> = ({ text, onScrambleEnd }) => {
  // The final, unscrambled text is stored in a ref for accessibility
  const finalWordRef = useRef<string>(text);
  // The text currently being displayed on screen
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    finalWordRef.current = text;
    let animationFrameId: number;
    const stagger = 50; // ms per character reveal
    const duration = text.length * stagger + 500; // Total animation time proportional to word length
    let startTime: number | undefined;

    const scramble = () => {
      const el = {
        innerText: displayText,
        getAttribute: (_?: string) => finalWordRef.current,
        length: finalWordRef.current.length,
      };

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;

        // Calculate how many characters should be revealed
        const revealCount = Math.floor(timeElapsed / stagger);
        const revealedPart = el.getAttribute("aria-label").slice(0, revealCount);

        // Calculate how many characters should still be scrambled
        const scrambleLength = el.length - revealCount;
        const scrambledPart = randomString(scrambleLength);

        setDisplayText(revealedPart + scrambledPart);

        if (timeElapsed < duration) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Ensure the final text is perfect
          setDisplayText(finalWordRef.current);
          if (onScrambleEnd) onScrambleEnd(duration);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    scramble();

    // Cleanup function to cancel the animation frame if the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, onScrambleEnd]); // Re-run the effect if the text prop changes

  return (
    <div className="scrambled-text-container" aria-label={finalWordRef.current}>
      <span className="sr-only">{finalWordRef.current}</span>
      <span aria-hidden="true">{displayText}</span>
    </div>
  );
};

// Props for WordScrambler
interface WordScramblerProps {
  words: string[];
  theme: string;
  isHeadlineText?: boolean;
}

/**
 * WordScrambler Component
 * Takes a list of words and displays them one by one with a scramble effect.
 */
export const WordScrambler: React.FC<WordScramblerProps> = ({ words, theme, isHeadlineText }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrambleDurationRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Callback to receive scramble duration from ScrambledText
  const handleScrambleEnd = useCallback(
    (scrambleDuration: number) => {
      scrambleDurationRef.current = scrambleDuration;
      // Add a small pause after scramble ends before showing next word
      const pause = 300;
      timerRef.current = setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
      }, scrambleDuration + pause);
    },
    [words.length],
  );

  useEffect(() => {
    // Cleanup timer on unmount or when currentIndex changes
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  return (
    <div
      className={`mt-4 ${
        isHeadlineText ? "text-3xl md:text-6xl font-bold tracking-tighter" : "text-sm md:text-lg tracking-tight"
      }`}
      style={{ color: theme === "light" ? "#4D4D4D" : "#9ed7ea" }}
    >
      <ScrambledText key={currentIndex} text={words[currentIndex]} onScrambleEnd={handleScrambleEnd} />
    </div>
  );
};
