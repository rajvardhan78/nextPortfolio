import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative overflow-hidden mb-5">
      <VelocityScroll
        text="Unveiling My Tech Odyssey!"
        default_velocity={4}
        style={{ marginTop: "-200px" }}
        className="font-display text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[-0.02em] text-white drop-shadow-sm dark:text-white fade-effect"
      />
    </div>
  );
}
