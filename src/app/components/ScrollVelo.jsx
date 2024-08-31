import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative overflow-hidden">
      <VelocityScroll
        text="RAJVARDHAN SHINDE"
        default_velocity={4}
        style={{ marginTop: "-200px" }}
        className="font-display text-center text-4xl font-normal tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] fade-effect"
      />
    </div>
  );
}
