"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface Props {
  beforeImg: string;
  afterImg: string;
}

export default function BeforeAfterSlider({ beforeImg, afterImg }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.min(Math.max(((clientX - left) / width) * 100, 3), 97));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dragging.current) update(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [update]);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-2xl aspect-[4/5] cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
    >
      {/* After image — base layer */}
      <img
        src={afterImg}
        alt="After treatment"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        draggable={false}
      />

      {/* Before image — clipped on the right side */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={beforeImg}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-lg z-10 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        {/* Drag handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center ring-1 ring-cream-dark/20">
          <svg
            viewBox="0 0 22 14"
            width="18"
            fill="none"
            stroke="#2B403C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 1L1 7L6 13M16 1L21 7L16 13" />
          </svg>
        </div>
      </div>

      {/* Before label */}
      <span className="absolute top-3 left-3 z-20 text-[9px] font-body font-bold tracking-[0.2em] uppercase bg-black/55 text-white px-2.5 py-1 rounded-full pointer-events-none backdrop-blur-sm">
        Before
      </span>

      {/* After label */}
      <span className="absolute top-3 right-3 z-20 text-[9px] font-body font-bold tracking-[0.2em] uppercase bg-terracotta text-white px-2.5 py-1 rounded-full pointer-events-none">
        After
      </span>

      {/* Drag hint — fades after first interaction */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="text-[9px] font-body font-medium text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full tracking-wide whitespace-nowrap">
          Drag to compare
        </span>
      </div>
    </div>
  );
}
