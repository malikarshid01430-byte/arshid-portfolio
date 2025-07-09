
import React, { useState, useEffect, useRef } from "react";

interface TypedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const currentTextRef = useRef(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWaiting) return;

      const currentText = texts[textIndex];
      currentTextRef.current = currentText;

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, delayBetween);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetween, isWaiting]);

  return (
    <span className="font-medium text-primary">
      {displayText}
      <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-blink"></span>
    </span>
  );
};

export default TypedText;
