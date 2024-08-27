"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { carousel_images } from "@/utils/navigation-links";
import { Subtitle } from "../ui/subtitle";
import { useTranslation } from "react-i18next";

export const Companies = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carousel_images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="marcas" className="lg:py-20">
      <Subtitle subtitle="Estas compañías confían en nosotros" />

        <AnimatePresence custom={currentImageIndex}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {carousel_images.map((image, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity : index === currentImageIndex ? 1 : 0.8,
              scale : index === currentImageIndex ? 1.2 : 1,
              transition: { duration: 0.5 },
            }}
            className="flex items-center justify-center h-40 w-full"
            exit={{ opacity: 0 }}
            custom={index}
            transition={{ opacity: { duration: 0.5 }}}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
                  />
              </motion.div>
          ))}
          </div>
        </AnimatePresence>
    </div>
  );
};
