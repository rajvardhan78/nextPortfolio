import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative overflow-hidden mb-5">
      <VelocityScroll
        text="Unveiling My Tech Odyssey!"
        default_velocity={4}
        style={{ marginTop: "-200px"}}
        className="font-display text-center text-6xl font-normal tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-6xl md:leading-[4rem] fade-effect"
      />
    </div>
  );
}
