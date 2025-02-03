import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
}

export default function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const createDots = () => {
      const newDots = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setDots(newDots);
    };

    createDots();
    window.addEventListener("resize", createDots);
    return () => window.removeEventListener("resize", createDots);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          initial={{ x: dot.x, y: dot.y, opacity: 0 }}
          animate={{
            x: [dot.x - 50, dot.x + 50, dot.x],
            y: [dot.y - 50, dot.y + 50, dot.y],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
