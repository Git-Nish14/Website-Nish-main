import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

function Herosection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allows re-animation if scrolled back into view
    threshold: 0.3, // Triggers animation when 30% of the section is visible
    rootMargin: "-50px 0px", // Triggers slightly before fully in view
  });

  return (
    <div ref={ref} className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main.webp"
          alt="Web Development"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative flex flex-col items-start px-12 py-24 md:flex-row md:items-center md:justify-between  bg-opacity-70"
      >
        <div className="md:w-1/2">
          <h1 className="text-[10vw] md:text-[6vw] font-extrabold leading-none uppercase">
            Web Developer
          </h1>
          <p className="text-lg md:text-2xl mt-4 max-w-lg font-bold">
            Crafting dynamic and user-centric websites through modern web
            technologies and innovative design.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default Herosection;
