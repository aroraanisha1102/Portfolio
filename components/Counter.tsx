"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
};

function format(n: number, compact?: boolean) {
  const rounded = Math.round(n);
  if (compact && rounded >= 1000) {
    return `${Math.round(rounded / 1000)},000`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return rounded.toLocaleString("en-US");
}

export default function Counter({ value, prefix = "", suffix = "", compact }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {format(display, compact)}
      {suffix}
    </span>
  );
}
