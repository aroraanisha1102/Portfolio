"use client";

import Reveal from "./Reveal";

const education = [
  { school: "New York University", detail: "MS, IT Project Management — with Distinction", place: "New York, USA" },
  { school: "NMIMS, Mumbai", detail: "MBA, Technology Management", place: "Mumbai, India" },
  { school: "NMIMS, Mumbai", detail: "BS, Computer Engineering", place: "Mumbai, India" },
];

const certs = ["PMP — Project Management Professional", "Google Project Management"];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-ink-soft/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">About</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
                An operator who thrives in ambiguity
              </h2>
              <div className="mt-6 space-y-4 text-fog">
                <p>
                  I started in enterprise sales in India, learned how revenue actually moves, then
                  moved to the US to build the systems behind it — first across a university, then in
                  the startup trenches of New York, and now leading strategy and operations at a
                  venture-backed AI startup.
                </p>
                <p>
                  My edge is going from unstructured problem to scalable system: designing the
                  operating model, running the experiments, and shipping the AI-enabled workflows that
                  turn insight into measurable growth. I keep things lean, evidence-led, and shipped.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-fog">Education</h3>
                <ul className="mt-4 space-y-4">
                  {education.map((e) => (
                    <li key={e.detail} className="border-l-2 border-line pl-4">
                      <div className="font-medium text-cloud">{e.detail}</div>
                      <div className="text-sm text-fog">
                        {e.school} · {e.place}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-fog">
                  Certifications
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certs.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-line bg-panel/50 px-3 py-1.5 text-sm text-mist"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
