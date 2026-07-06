import { Star, Sparkle, ArrowDoodle, Squiggle, Plant, Lightbulb, Rocket } from "./Doodles";

// Faint, decorative doodles scattered in the page margins. Purely cosmetic.
// Hidden on small screens (no margin room) and never interactive.
const items = [
  { C: ArrowDoodle, top: "44vh", side: "left-[2%]", cls: "h-12 w-9 text-coral", rot: "-rotate-12" },
  { C: Plant, top: "72vh", side: "right-[2.5%]", cls: "h-12 w-9 text-teal", rot: "rotate-6" },
  { C: Star, top: "104vh", side: "left-[3%]", cls: "h-8 w-8 text-amber", rot: "rotate-6" },
  { C: Lightbulb, top: "138vh", side: "right-[2%]", cls: "h-11 w-9 text-berry", rot: "-rotate-6" },
  { C: Sparkle, top: "172vh", side: "left-[2.5%]", cls: "h-8 w-8 text-indigo", rot: "rotate-12" },
  { C: Rocket, top: "205vh", side: "right-[3%]", cls: "h-12 w-9 text-coral", rot: "rotate-12" },
  { C: Squiggle, top: "236vh", side: "left-[2%]", cls: "h-5 w-24 text-teal", rot: "-rotate-6" },
  { C: Star, top: "268vh", side: "right-[2.5%]", cls: "h-7 w-7 text-amber", rot: "-rotate-12" },
  { C: Plant, top: "300vh", side: "left-[3%]", cls: "h-11 w-9 text-teal", rot: "-rotate-6" },
  { C: Sparkle, top: "332vh", side: "right-[2%]", cls: "h-7 w-7 text-coral", rot: "rotate-6" },
  { C: ArrowDoodle, top: "366vh", side: "left-[2.5%]", cls: "h-11 w-8 text-indigo", rot: "rotate-6" },
  { C: Lightbulb, top: "398vh", side: "right-[3%]", cls: "h-10 w-8 text-amber", rot: "rotate-12" },
];

export default function BackgroundDoodles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
      {items.map((it, i) => {
        const Icon = it.C;
        return (
          <Icon
            key={i}
            className={`absolute opacity-[0.14] ${it.side} ${it.cls} ${it.rot}`}
            style={{ top: it.top }}
          />
        );
      })}
    </div>
  );
}
