"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herosection from "@/components/Home1/Herosection";
import Aboutsection from "@/components/Home1/Aboutsection";
import SkillSection from "@/components/Home1/Skillsection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans">
      <Navbar />
      <Herosection />
      <Aboutsection />
      <SkillSection />
      <Footer />
    </div>
  );
};

export default HomePage;
