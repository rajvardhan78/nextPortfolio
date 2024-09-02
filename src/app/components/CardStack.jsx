"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";


export function CardStackDemo() {
  return (
    <div className="h-full w-full flex mt-9 items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: <img src="/images/Udemy.png" alt=" " className="h-10" />, // Udemy logo
    content: (
      <p className="text-4x1">
        I completed <Highlight>The Complete Python Developer</Highlight> course.
        It was an <Highlight>amazing learning experience</Highlight> that deepened
        my understanding of Python.
      </p>
    ),
  },
  {
    id: 1,
    name: <img src="/images/Google.png" alt=" " className="h-10" />, // Google logo
    content: (
      <p className="text-4x1">
        The <Highlight>Google Professional UX Design</Highlight> certification
        on Coursera taught me <Highlight>essential UX principles</Highlight> and
        techniques to create intuitive user experiences.
      </p>
    ),
  },
  {
    id: 2,
    name: <img src="/images/Udemy.png" alt=" " className="h-10" />, // Udemy logo
    content: (
      <p className="text-4x1">
        Currently, I'm enrolled in{" "}
        <Highlight>
          Machine Learning, AI, NLP, Deep Learning A-Z
        </Highlight>
        , a comprehensive course on Udemy that covers{" "}
        <Highlight>advanced AI topics</Highlight>.
      </p>
    ),
  },
];
