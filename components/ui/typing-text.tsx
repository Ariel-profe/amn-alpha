"use client";

import { cn } from "@/lib/utils";
import { useAnimate, stagger, motion } from "framer-motion";
import { useEffect } from "react";

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-amn-darker dark:text-slate-300 opacity-0 leading-relaxed text-justify"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
 
  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-5 lg:mt-10">
        <div className="text-amn-darker dark:text-slate-300 text-xl lg:text-4xl leading-loose tracking-wide text-justify">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export function TypingText({words}:{words:string}) {
  return <TextGenerateEffect words={words} />;
}
