"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const COLORS = ["from-violet-400", "from-fuchsia-400", "from-pink-400", "from-blue-400", "from-emerald-400"];

export function FloatingBubbles({ count = 30 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bubbles: Bubble[] = [];
    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      bubbles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 3,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach((b) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size);
        const isDark = document.documentElement.classList.contains("dark");
        const opacity = isDark ? b.opacity * 0.6 : b.opacity;

        gradient.addColorStop(0, `rgba(168, 85, 247, ${opacity})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();

        b.y -= b.speed;
        b.x += Math.sin(b.y * 0.01) * 0.3;

        if (b.y < -b.size) {
          b.y = height + b.size;
          b.x = Math.random() * width;
        }
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
