"use client";
import React from "react";
import Herosection from "@/components/Home1/Herosection";
import Aboutsection from "@/components/Home1/Aboutsection";
import SkillSection from "@/components/Home1/Skillsection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans">
      <Herosection />
      <Aboutsection />
      <SkillSection />
    </div>
  );
};

export default HomePage;
