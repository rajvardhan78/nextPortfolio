"use client";
import React from "react";

const DocumentIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 3h6v4h-6z" />
    <path d="M10 14h4v5h-4z" />
    <path d="M4 6h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
  </svg>
);

export function AnimatedModalDemo() {
  return (
    <div className="py-40 flex items-center justify-center">
      <a
        href="YOUR_GOOGLE_DRIVE_CV_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white flex items-center justify-center px-4 py-2 rounded-md group relative overflow-hidden"
      >
        <span className="transition-transform duration-500 group-hover:translate-x-10">
          Read my CV
        </span>
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform -translate-x-10 group-hover:translate-x-0">
          <DocumentIcon className="text-white h-6 w-6" />
        </div>
      </a>
    </div>
  );
}
