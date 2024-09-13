"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
 return (
  <section className="w-full px-8 py-12 xl:mb-32 xl:h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
   <div className="w-full xl:w-2/3">
    <span className="block mb-4 text-md md:text-4xl text-amn-dark font-medium">
      Impulsamos tu éxito digital
    </span>
    <h1 className="text-2xl md:text-7xl font-semibold text-slate-700 dark:text-slate-50">
     AMN <br /> CONSULTORA INFORMÁTICA
    </h1>
    <p className="text-base md:text-3xl text-slate-700 dark:text-slate-400 my-4 md:my-6">
     Tenemos las herramientas para que tu negocio crezca sin límites
    </p>
   </div>
   <ShuffleGrid />
  </section>
 );
};

const shuffle = (array:{id:number; src:string}[]) => {
 let currentIndex = array.length,
  randomIndex;

 while (currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex],
   array[currentIndex],
  ];
 }

 return array;
};

const squareData:{id:number; src:string}[] = [
 {
  id: 1,
  src:"/images/about/company/case.jpg",
 },
 {
  id: 2,
  src:"/images/about/company/cups.jpeg",
 },
 {
  id: 3,
  src:"/images/about/company/headphones.webp",
 },
 {
  id: 4,
  src:"/images/about/company/keyboard.webp",
 },
 {
  id: 5,
  src:"/images/about/company/micro.jpg",
 },
 {
  id: 6,
  src:"/images/about/company/mouse.jpg",
 },
 {
  id: 7,
  src:"/images/about/company/pad.png",
 },
 {
  id: 8,
  src:"/images/homepage/7.jpg",
 },
 {
  id: 9,
  src:"/images/homepage/7.jpg",
 },
 {
  id: 10,
  src:"/images/homepage/2.avif",
 },
 {
  id: 11,
  src:"/images/homepage/1.webp",
 },
 {
  id: 12,
  src:"/images/homepage/2.avif",
 },
 {
  id: 13,
  src:"/images/homepage/3.jpg",
 },
 {
  id: 14,
  src:"/images/homepage/4.webp",
 },
 {
  id: 15,
  src:"/images/homepage/5.jpg",
 },
 {
  id: 16,
  src:"/images/homepage/6.jpg",
 },
];

const generateSquares = () => {
 return shuffle(squareData).map((sq) => (
  <motion.div
   key={sq.id}
   layout
   transition={{ duration: 1.5, type: "spring" }}
   className="w-full h-full"
   style={{
    backgroundImage: `url(${sq.src})`,
    backgroundSize: "cover",
    backgroundColor: "white",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   }}
  ></motion.div>
 ));
};

const ShuffleGrid = () => {
 const timeoutRef = useRef<any>(null);
 const [squares, setSquares] = useState(generateSquares());

 useEffect(() => {
  shuffleSquares();

  return () => clearTimeout(timeoutRef.current);
 }, []);

 const shuffleSquares = () => {
  setSquares(generateSquares());

  timeoutRef.current = setTimeout(shuffleSquares, 5000);
 };

 return (
  <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
   {squares.map((sq) => sq)}
  </div>
 );
};

export default ShuffleHero;