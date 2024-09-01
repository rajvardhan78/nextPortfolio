import { cn } from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";

const text = "This is a sample string that will be running in the marquee.";

const ReviewCard = ({ text }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer text-white overflow-hidden rounded-xl border p-4",
        // light styles
        "border-white-950/[.1] bg-white-950/[.01] hover:bg-white-950/[.05]",
        // dark styles
        "dark:border-white-50/[.1] dark:bg-white-50/[.10] dark:hover:bg-white-50/[.15]",
      )}
    >
      <blockquote className="text-sm">{text}</blockquote>
    </figure>
  );
};

export function Marquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        <ReviewCard text={text} />
      </Marquee>
    </div>
  );
}
