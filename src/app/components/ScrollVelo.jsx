import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative overflow-hidden">
      <VelocityScroll
        text="Python | Django | Flask | SQLite | MongoDB"
        default_velocity={4}
        className="container font-display text-center text-4xl font-bold tracking-[-0.02em] text-custom-orange drop-shadow-sm dark:text-custom-orange md:text-7xl md:leading-[5rem] fade-effect"
      />
      <style jsx>{`
        .fade-effect {
          mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1) 20%,
            rgba(255, 255, 255, 1) 80%,
            rgba(255, 255, 255, 0)
          );
        }
      `}</style>
    </div>
  );
}
