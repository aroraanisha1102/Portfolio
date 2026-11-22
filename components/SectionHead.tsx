import Reveal from "./Reveal";

export default function SectionHead({
  index,
  label,
  title,
  aside,
  dark = false,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  dark?: boolean;
}) {
  const muted = dark ? "text-white/50" : "text-black/50";
  return (
    <Reveal>
      <p className={`eyebrow flex items-center gap-3 ${muted}`}>
        <span className={dark ? "text-lime" : "text-black"}>({index})</span>
        <span className={`h-px w-8 ${dark ? "bg-white/20" : "bg-black/20"}`} />
        {label}
      </p>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="section-title max-w-[16ch]">{title}</h2>
        {aside && (
          <p className={`max-w-[380px] text-[16px] leading-relaxed ${dark ? "text-white/60" : "text-black/60"}`}>
            {aside}
          </p>
        )}
      </div>
    </Reveal>
  );
}
