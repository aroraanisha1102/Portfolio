const words = ["strategy", "operations", "chief of staff", "ai products", "gtm", "revenue systems"];

export default function Marquee() {
  const sequence = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-line-dark bg-coal py-5" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {sequence.map((w, i) => (
              <span
                key={`${half}-${i}`}
                className="display flex items-center whitespace-nowrap text-4xl font-bold lowercase tracking-tight text-bone sm:text-5xl"
              >
                {w}
                <span className="mx-6 inline-block h-2 w-2 rounded-full bg-amber" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
