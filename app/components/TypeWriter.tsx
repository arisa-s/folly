"use client";

import { useEffect, useState, useRef } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  startTyping?: boolean;
}

export default function TypeWriter({
  text,
  delay = 50,
  className = "",
  startTyping = false,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentIndex, delay, text, startTyping]);

  // Reset when text changes or when typing should restart
  useEffect(() => {
    if (!startTyping) {
      setDisplayedText("");
      setCurrentIndex(0);
    }
  }, [startTyping, text]);

  return (
    <span className={className}>
      {displayedText}
      {startTyping && currentIndex < text.length && (
        <span className="opacity-50">|</span>
      )}
    </span>
  );
}
