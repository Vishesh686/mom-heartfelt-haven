import { useMemo } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = ({ count = 18 }: { count?: number }) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        size: 14 + Math.random() * 22,
        opacity: 0.4 + Math.random() * 0.5,
        hue: Math.random() > 0.5 ? "text-rose" : "text-gold",
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className={`absolute heart-rise ${h.hue}`}
          fill="currentColor"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
