'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FloatingDockDemo } from './Dock';  // Correct import for same folder

const HyperText = dynamic(() => import('@/components/magicui/hyper-text'), { ssr: false });
const FlipWords = dynamic(() => import('@/components/ui/flip-words').then(mod => mod.FlipWords), { ssr: false });

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const words = ["Developer", "Designer", "Creator"];
  const colors = ["#fff", "#fff", "#fff"];

  const duration = 2000;

  if (!isClient) {
    return null;
  }

  return (
    <section className="flex flex-col justify-center items-center min-h-screen p-10" style={{ marginTop: "-200px" }}>
      <div className="">
      <h1 className="text text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white dark:text-white">
        Hi👋 I'm
      </h1>
      <HyperText
        className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white dark:text-white"
        text="Rajvardhan"
      />
      <div className="flex justify-center items-center mb-5">
        <FlipWords
          words={words}
          duration={duration}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
          style={{ color: colors.join(', ') }}  // Joining colors for CSS custom properties
          colors={colors}
        />
      </div>
      </div>
      <FloatingDockDemo className="my-3"/> {/* Fixed position at the top */}
    </section>
  );
};

export default HeroSection;
