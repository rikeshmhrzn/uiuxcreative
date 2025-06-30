// components/HoverLabel.tsx
"use client";
import React, { useState } from "react";

interface HoverLabelProps {
  children: React.ReactNode;
  label?: string;
}

const HoverLabel: React.FC<HoverLabelProps> = ({
  children,
  label = "Visit Site",
}) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  const handleMouseLeave = () => {
    setPosition(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {children}
      {position && (
        <div
          className="fixed z-50 text-sm bg-[#FFCF24]  text-black px-3 py-1 rounded pointer-events-none"
          style={{
            top: position.y,
            left: position.x,
            transition: "top 0.05s, left 0.05s",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default HoverLabel;
