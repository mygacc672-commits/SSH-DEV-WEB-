import { useEffect, useState } from "react";
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [data-hover]")) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-screen transition-transform duration-100"
        style={{
          width: isHovering ? 60 : 24,
          height: isHovering ? 60 : 24,
          background: "radial-gradient(circle, rgba(167,139,250,0.8) 0%, rgba(124,58,237,0.4) 50%, transparent 70%)",
          transform: `translate(${pos.x - (isHovering ? 30 : 12)}px, ${pos.y - (isHovering ? 30 : 12)}px)`,
          transition: "width 0.3s, height 0.3s",
        }}
      />
      {/* Trailing glow */}
      <div
        className="fixed pointer-events-none z-49 rounded-full"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />
    </>
  );
}
