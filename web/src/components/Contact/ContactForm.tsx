import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { motion } from "framer-motion";
import Link from "next/link";

function ContactForm() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 0.6,
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
        className="relative p-12 rounded-lg shadow-2xl max-w-6xl flex flex-row items-start gap-12 bg-gray-800 bg-opacity-90 text-white z-10 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-1/2">
          <motion.h1 className="text-5xl font-extrabold mb-4 text-blue-400">
            Get in Touch
          </motion.h1>
          <motion.p className="text-lg mb-6 text-gray-300">
            Have questions or want to collaborate? Drop me a message below.
          </motion.p>
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mb-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mb-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 mb-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-gray-300">{status}</p>}
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <motion.h2 className="text-5xl font-bold mb-3 text-blue-400">
            Find me online
          </motion.h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                href: "https://github.com/Git-Nish14",
                img: "/Github.webp",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/nishpatel14",
                img: "/LinkedIn.webp",
                label: "LinkedIn",
              },
              {
                href: "mailto:Nishpatel.cse@gmail.com",
                img: "/Email.webp",
                label: "Email",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className="flex flex-col items-center gap-2 w-full"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-24 h-24 object-contain"
                />
                <span className="text-blue-400 text-xl font-semibold">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactForm;
