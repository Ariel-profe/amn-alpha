import { useState } from "react";
import { motion, MotionStyle, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

export const FoldableMap = () => {
    const xDrag = useMotionValue(0);
    const [isFolded, setIsFolded] = useState(true);
    const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
    const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
    const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
    const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);
  
    useMotionValueEvent(xDrag, "change", (currentX) => {
      if (currentX > 260) {
        setIsFolded(false);
      } else {
        setIsFolded(true);
      }
    });
  
    return (
      <div className="overflow-x-clip mt-10 lg:mt-0">
        <h3 className="text-center">Despliega el mapa</h3>
        <motion.div
          animate={isFolded ? "folded" : "open"}
          variants={{
            open: { scale: 1 },
            folded: { scale: 0.9 },
          }}
          initial="folded"
          className="relative flex flex-col items-center"
        >
          <motion.div
            variants={{ open: { rotate: 0 }, hovering: { rotate: 0 } }}
            whileHover="hovering"
            initial={{ rotate: 3 }}
            className="grid aspect-video max-h-[80vh] w-full min-w-[600px] p-8"
          >
            <div className="grid grid-cols-3 [grid-area:1/1]">
              <motion.div
                style={{ x: xLeftSection, skewY: "-1deg" }}
                className="map-image origin-bottom-right border-r border-[rgba(255,255,255,.1)] shadow-2xl"
              />
              <motion.div
                style={
                  {
                    scaleX: centerScale,
                    "--brightness": centerBrightness,
                  } as MotionStyle
                }
                className="map-image brightness-[--brightness]"
              />
              <motion.div
                style={{ x: xRightSection, skewY: "1deg" }}
                className="map-image origin-bottom-left border-l border-[rgba(255,255,255,.1)] shadow-2xl"
              />
            </div>
            <motion.div
              drag="x"
              _dragX={xDrag}
              dragConstraints={{ left: 0, right: 300 }}
              dragTransition={{
                modifyTarget: (target) => {
                  return target > 150 ? 300 : 0;
                },
                timeConstant: 45,
              }}
              className="relative z-10 cursor-grab [grid-area:1/1] active:cursor-grabbing"
            />
          </motion.div>
          <motion.div
            variants={{
              folded: {
                opacity: 0,
                scale: 0.9,
                y: 30,
              },
              open: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
            className="flex w-full justify-center font-semibold lg:text-2xl"
          >
            <p className="flex items-center gap-1 text-amn-semidark font-thin">
              <span className="animate-pulse"><IoLocationOutline /></span>
              Mendoza - Argentina
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  };