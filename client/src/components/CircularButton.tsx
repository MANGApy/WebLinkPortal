import { motion } from "framer-motion";
import { useState } from "react";

interface CircularButtonProps {
  label: string;
  info: string;
  link: string;
  index: number;
  total: number;
}

export default function CircularButton({
  label,
  info,
  link,
  index,
  total,
}: CircularButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const angle = (index * (360 / total) * Math.PI) / 180;
  const radius = 250; // Distance from center

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.2 }}
      >
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-24 h-24 bg-transparent border-2 border-white text-white font-bold rounded-full relative z-10 hover:border-red-500 transition-colors"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: isHovered
              ? "0 0 20px rgba(255, 0, 0, 0.5)"
              : "0 0 0px rgba(255, 0, 0, 0)",
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 0.3,
            },
          }}
        >
          {label}
        </motion.a>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-2 bg-black/80 border border-gray-700 rounded text-gray-300 text-sm"
          >
            {info}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}