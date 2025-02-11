import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Aboutsection() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers when scrolled into view
        className="px-12 py-16 bg-white text-gray-800"
      >
        <h2 className="text-4xl font-bold text-center underline">
          <Link href="/about">About Me</Link>
        </h2>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-center">
          I specialize in Next.js, React, Node.js, TypeScript, GraphQL, and
          MongoDB. With a strong background in full-stack web development, I
          build high-performance applications that enhance user experience and
          business efficiency.
        </p>
      </motion.section>
    </div>
  );
}

export default Aboutsection;
