"use client";

import { useEffect, useRef } from "react";

interface Seed {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export function FloatingChiaSeeds({ count = 25 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const seeds: Seed[] = [];
    let animationId: number;

    for (let i = 0; i < count; i++) {
      seeds.push({
        id: i,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }

    const animate = () => {
      seeds.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;

        if (s.x < 0) s.x = container.offsetWidth;
        if (s.x > container.offsetWidth) s.x = 0;
        if (s.y < 0) s.y = container.offsetHeight;
        if (s.y > container.offsetHeight) s.y = 0;
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationId);
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="chia-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <ellipse cx="10" cy="12" rx="3" ry="5" fill="currentColor" className="text-primary/20" transform="rotate(30 10 12)" />
            <ellipse cx="30" cy="8" rx="2.5" ry="4.5" fill="currentColor" className="text-primary/10" transform="rotate(-20 30 8)" />
            <ellipse cx="20" cy="30" rx="3" ry="5.5" fill="currentColor" className="text-primary/15" transform="rotate(45 20 30)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chia-pattern)" />
      </svg>
    </div>
  );
}
