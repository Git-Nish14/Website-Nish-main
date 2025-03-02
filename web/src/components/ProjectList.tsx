"use client";
import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/Blog/ParticlesBackground";

export default function ProjectList({ projects }: { projects: any[] }) {
  return (
    <div className="relative p-12 rounded-lg shadow-2xl max-w-6xl flex flex-col items-center gap-12 bg-gray-800 bg-opacity-90 text-white z-10 backdrop-blur-lg">
      {/* Particles Effect */}
      <ParticlesBackground />

      <h1 className="text-5xl font-extrabold mb-6 text-blue-400">
        My Projects
      </h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <motion.li
            key={project._id}
            className="border p-6 rounded-lg shadow-md bg-gray-900 bg-opacity-75 transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-blue-300">
              {project.title}
            </h2>
            <p className="text-gray-400">{project.description}</p>
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.image?.alt || "Project image"}
                className="w-full h-48 object-cover mt-4 rounded-md shadow-lg"
              />
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300 shadow-md"
            >
              View Project
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
