import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface DialogueBoxProps {
  text: string;
  speakerName?: string;
}

const DialogueBox = ({ text, speakerName }: DialogueBoxProps) => {
  const [displayText, setDisplayText] = useState("");
  const characterCount = useMotionValue(0);
  const roundedCount = useTransform(characterCount, (value) => Math.round(value));

  useEffect(() => {
    const controls = animate(characterCount, text.length, {
      duration: Math.max(text.length * 0.035, 0.6),
      ease: "linear",
    });

    const unsubscribe = roundedCount.on("change", (latest) => {
      setDisplayText(text.slice(0, latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [characterCount, roundedCount, text]);

  return (
    <div className="w-full max-w-3xl space-y-3 rounded-xl border-4 border-suikoden-border bg-gradient-to-b from-suikoden-blue/95 to-suikoden-blue/70 p-5 text-slate-100 shadow-lg">
      {speakerName ? (
        <div className="text-xs font-press-start uppercase tracking-wide text-suikoden-border">
          {speakerName}
        </div>
      ) : null}
      <motion.p aria-live="polite" className="text-xl leading-relaxed">
        {displayText}
      </motion.p>
    </div>
  );
};

export default DialogueBox;