import React from "react";
import { motion } from "framer-motion";

function SkillSection() {
  const skills = [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "MongoDB",
    "Sanity",
    "Strapi",
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="px-12 py-16 bg-gray-200 text-gray-800"
      >
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-4 bg-gray-200 rounded-lg shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default SkillSection;
