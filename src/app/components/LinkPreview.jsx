"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Icon } from "@/components/ui/evervault-card";

export function AboutMeDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-3xl mx-auto p-6 relative backdrop-blur-lg bg-black/40">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
        <p className="text-white text-xl md:text-3xl mx-auto mb-10">
          I am a skilled software developer with a strong background in{" "}
          <LinkPreview
            url="https://www.python.org"
            className="font-bold text-[#ffa333]">
            Python
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://www.coursera.org/courses?query=machine%20learning"
            className="font-bold text-[#3bb0de]">
            Machine Learning
          </LinkPreview>
          , and{" "}
          <LinkPreview
            url="https://www.deeplearning.ai/"
            className="font-bold text-[#cc66ff]">
            Deep Learning
          </LinkPreview>
          . With extensive experience in building intelligent systems, I
          leverage frameworks like{" "}
          <LinkPreview
            url="https://www.djangoproject.com/"
            className="font-bold text-[#ff6699]">
            Django
          </LinkPreview>{" "}
          to create robust and scalable web applications. My expertise spans
          from developing complex algorithms to implementing end-to-end
          solutions, making me adept at solving real-world problems through
          innovative technology.
        </p>
      </div>
    </div>
  );
}
