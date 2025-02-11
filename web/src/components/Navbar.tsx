"use client";

import { useCallback } from "react";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Navbar() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // Load lightweight particles
  }, []);

  return (
    <header className="relative flex justify-between items-center p-6 uppercase text-sm bg-black text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles-navbar"
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
              value: 0.5,
              random: false,
            },
            size: {
              value: 2,
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
              distance: 120,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Navbar Content */}
      <div className="container mx-auto flex justify-between items-center px-4 relative z-10">
        <Link
          href="/"
          className="font-bold tracking-widest text-white font-serif"
        >
          Nishpatel®
        </Link>
        <nav className="space-x-6">
          <Link
            href="/about"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            Blogs
          </Link>
          <Link
            href="/myprojects"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-2xl"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
