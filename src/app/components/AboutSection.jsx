"use client";
import React, { useTransition, useState } from "react";
import { BentoDemo } from "./BentoGrid";
import { ScrollBasedVelocityDemo } from "./ScrollVelo"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AboutMeDemo } from "./LinkPreview";

const words = `I am a skilled software developer with a strong background in Python, Machine Learning, and Deep Learning. With extensive experience in building intelligent systems, I leverage frameworks like Django to create robust and scalable web applications. My expertise spans from developing complex algorithms to implementing end-to-end solutions, making me adept at solving real-world problems through innovative technology.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <ScrollBasedVelocityDemo className="mb-5" />
      <BentoDemo className="mb-5"/>
      <AboutMeDemo />
    </section>
  );
};

export default AboutSection;
