import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const colors = ['#ffe8cc', '#d3edf8', '#eeccff', '#cce5ff']; // Add an additional soft soothing color
const txtColors = ['#fff', '#fff', '#fff', '#fff'];
// const txtColors = ['#ff8c00', '#22a5dd', '#aa00ff', '#007bff'];

const BentoGrid = ({
  children,
  className
}) => {
  return (
    <div
      className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon, // This can be null or undefined
  description,
  href,
  cta,
  colorIndex
}) => {
  const accentColor = colors[colorIndex % colors.length]; // Use colorIndex to pick a color
  const textColor = txtColors[colorIndex % txtColors.length]; // Use colorIndex to pick a text color

  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // Common styles
        "bg-white backdrop-blur-sm bg-opacity-30", // Frosted glass effect
        "border border-gray-200",
        "shadow-md",
        // dark styles
        "dark:bg-black dark:bg-opacity-30 dark:border-gray-700 dark:shadow-lg",
        className
      )}
      style={{ background: `linear-gradient(145deg, ${accentColor} 0%, rgba(255, 255, 255, 0) 80%)` }}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {Icon && (
          <Icon
            className="h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
            style={{ color: textColor }} // Set icon color
          />
        )}
        <h3 className="text-xl font-semibold" style={{ color: textColor }}>
          {name}
        </h3>
        <p className="max-w-lg" style={{ color: textColor }}>
          {description}
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
      />
    </div>
  );
};


export { BentoCard, BentoGrid };
