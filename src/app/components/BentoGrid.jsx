
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedBeamDemo } from "./AnimBeam";
import { CardStackDemo } from "./CardStack";
import { MarqueeDemoVertical } from "./Marquee";
import { GlobeDemo } from "./Globe";

const features = [
  {
    name: " ",
    description: " ",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
       <MarqueeDemoVertical/>
    ),
  },
  {
    name: " ",
    description: " ",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <CardStackDemo className="absolute inset-0 z-0  flex items-center justify-center"/>
    ),
  },
  {
    name: " ",
    description: " ",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
        <AnimatedBeamDemo className="absolute right-2 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"/>
    ),
  },
  {
    
    name: " ",
    description: " ",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <GlobeDemo
        className="absolute inset-0 z-0 h-24 w-24 items-center justify-center" // Adjusted size
      />
    ),
  }  
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} colorIndex={idx}/>
      ))}
    </BentoGrid>
  );
}
