"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export const BrandingVideo = ({src}:{src:string}) => {

    const videoRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: videoRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <div className="lg:pt-10">
        <motion.video 
            ref={videoRef}
            className="rounded-xl" 
            autoPlay 
            muted 
            loop
            style={{scale}}
        >
            <source src={src} type="video/mp4" />
        </motion.video>
    </div>
  )
}
