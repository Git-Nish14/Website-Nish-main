"use client";

import Link from "next/link";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Footer = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // Load the slim version for better performance
  }, []);

  return (
    <footer className="relative flex justify-between items-center p-6 uppercase text-sm bg-black text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: false,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 relative z-10">
        {/* Left Side - Copyright */}
        <p className="text-sm mb-4 md:mb-0 font-serif">
          © {new Date().getFullYear()} Nish Patel. All Rights Reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex space-x-6">
          <Link
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            NPM
          </Link>
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            React
          </Link>
          <Link
            href="https://www.sanity.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            Sanity
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
