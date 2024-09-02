import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const techStack = [
  {
    name: " ",
    img: "/images/python.png",
  },
  {
    name: " ",
    img: "/images/azure.png",
  },
  {
    name: " ",
    img: "/images/Django.png",
  },
  {
    name: " ",
    img: "/images/DjangoREST.png",
  },
  {
    name: " ",
    img: "/images/Flask.png",
  },
  {
    name: " ",
    img: "/images/Git.png",
  },
  {
    name: " ",
    img: "/images/Github.png",
  },
  {
    name: " ",
    img: "/images/Keras.png",
  },
  {
    name: " ",
    img: "/images/MongoDB.png",
  },
  {
    name: " ",
    img: "/images/Numpy.png",
  },
  {
    name: " ",
    img: "/images/OpenCV.png",
  },
  {
    name: " ",
    img: "/images/Pandas.png",
  },
  {
    name: " ",
    img: "/images/Scikit-Learn.png",
  },
  {
    name: " ",
    img: "/images/TensorFlow.png",
  },
  {
    name: " ",
    img: "/images/SQLite.png",
  },
  // Add more logos as needed
];

const TechStackCard = ({ img, name }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // Transparent frosted glass effect
        "bg-white/30 backdrop-blur-md",
        "dark:bg-black/30 dark:border-gray-700 dark:shadow-lg",
      )}
    >
      <div className="flex items-center justify-center h-full">
        <img 
          className="h-16 w-16 object-contain" // Set a fixed size for the icons
          alt={name} 
          src={img} 
        />
      </div>
      <figcaption className="mt-2 text-center text-sm font-medium dark:text-white">
        {name}
      </figcaption>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-transparent md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {techStack.map((tech) => (
          <TechStackCard key={tech.name} {...tech} />
        ))}
      </Marquee>
    </div>
  );
}
