import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const timelineData = [
  {
    year: "9th Grade",
    title: "Inspiration Strikes",
    description:
      "Seeing my uncle as a software developer, I dreamed of becoming one myself.",
  },
  {
    year: "After 12th Grade",
    title: "First Steps",
    description:
      "Dedicated my studies towards Computer Science at Silver Oak University (India), learning programming fundamentals and problem-solving.",
  },
  {
    year: "Internship 1",
    title: "Intern at InsureHQ",
    description:
      "Building interactive and dynamic user interfaces with React. Experienced in state management, component-based architecture, and integrating APIs for seamless frontend experiences.",
  },
  {
    year: "Internship 2",
    title: "Intern at Codage Habitation",
    description:
      "Developing scalable and responsive web applications with React and Node.js. Experienced in frontend UI/UX, backend APIs, database management, and full-stack integrations for seamless performance.",
  },
  {
    year: "Present & Future",
    title: "Pursuing Masters",
    description:
      "Now preparing to further enhance my knowledge and expertise through a Master's program in Computer Science at University Of Virginia (USA).",
  },
];

const AboutData = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
          },
        }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        className="relative p-10 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row items-center gap-8 bg-black bg-opacity-80 text-white z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/Nish.webp"
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-white object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="text-left">
          <motion.h1 className="text-4xl font-bold mb-2">
            Hello, I'm <span className="text-gray-400">Nish Patel</span>
          </motion.h1>
          <motion.h2 className="text-xl text-gray-300 mb-4">
            Full-Stack Web Developer
          </motion.h2>
          <motion.p className="text-lg leading-relaxed">
            Passionate about web development since childhood, I have grown into
            a professional full-stack developer, specializing in React, Next.js,
            and Node.js. With experience deploying full-stack applications for
            various clients, I strive to build efficient and scalable digital
            solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          My Journey
        </h2>
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 border-l-4 border-gray-500 ml-6 bg-black bg-opacity-70 rounded-md shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-20px] top-6 w-4 h-4 bg-gray-500 rounded-full"></span>
              <h3 className="text-xl font-semibold text-gray-300">
                {item.year}
              </h3>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-gray-400 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Link href="/contact">
        <motion.button
          className="mt-6 px-6 py-2 text-lg font-bold border-2 text-white border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.button>
      </Link>
    </div>
  );
};

export default AboutData;
