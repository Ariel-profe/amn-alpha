"use client";

import { motion } from "framer-motion";

export const DrawLine = () => {
  return (
    <motion.div className="absolute left-3.5 right-0 h-[1px]">
       <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: .8 }}
          transition={{
            duration: 3,
            ease: "easeInOut"
          }}
          strokeWidth={2}
          stroke='#862848'
          d="M 0, 5 L 100, 5"
        />
      </svg>
    </motion.div>
  )
}