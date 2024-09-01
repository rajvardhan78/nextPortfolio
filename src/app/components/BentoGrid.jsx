import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedBeamDemo } from "./AnimBeam";


const features = [
  {
    Icon: FileTextIcon,
    name: "Tech Stack",
    description: "The techs that I work with.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
       <></>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
    <></>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Developed cool integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
        <AnimatedBeamDemo className="absolute right-2 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"/>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Certificactions",
    description: "I am trained by the best.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
    <></>
    ),
  },
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
