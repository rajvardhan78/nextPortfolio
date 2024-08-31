"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

// Circle component
const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

// Icons
const Icons = {
  python: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-14h2v5h-2V6zm0 7h2v5h-2v-5z"
        fill="#306998"
      />
    </svg>
  ),
  numpy: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10h-2v2h2v-2zm0-2v-2H8v2h2v2H8v2h2v2H8v2h2v2h4v-2h2v-2h-2v-2h2v-2h-2zm-8-2v2H2v2h4v2H2v2h4v2H2v2h4v2h4v-2H6v-2h4v-2H6v-2h4V8H6V6h4V4h4v2h4v2h-4v2h4v2h-4v2h4v2h-4v2h-4v2h4v2h4v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h-4v2H8V8h2V6h4v2h2v2h-2v2h2z"
        fill="#4F8CFF"
      />
    </svg>
  ),
  pandas: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2-2h8v2H8V6zm-4 2h2v8H4V8zm16 0h2v8h-2V8zm-8 0h4v2h-4V8zm-2 8h8v2H6v-2zm0 4h8v2H6v-2z"
        fill="#3D8F40"
      />
    </svg>
  ),
  tensorflow: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3l9 9-9 9-9-9 9-9zm0 2.265L6.265 12 12 17.735 17.735 12 12 5.265z"
        fill="#FF6F00"
      />
    </svg>
  ),
  brain: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-14h2v5h-2V6zm0 7h2v5h-2v-5z"
        fill="#B71C1C"
      />
    </svg>
  ),
};

// AnimatedBeamDemo component
export function AnimatedBeamDemo() {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
  
    return (
      <div
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.python />
            </Circle>
            <Circle ref={div2Ref}>
              <Icons.numpy />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div5Ref}>
              <Icons.brain />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.pandas />
            </Circle>
          </div>
        </div>
  
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div5Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div5Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div2Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
      </div>
    );
}
