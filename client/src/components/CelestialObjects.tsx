import { motion } from "framer-motion";

export default function CelestialObjects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Sun */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white"
        animate={{
          y: [0, 10, 0],
          filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moon */}
      <motion.div
        className="absolute top-8 right-8 w-16 h-16"
        animate={{
          y: [0, 10, 0],
          filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Saturn-like planet */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateX: [0, 15, 0, -15, 0],
          rotateY: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Planet body */}
        <div className="w-32 h-32 rounded-full bg-red-500/75" />
        
        {/* Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 border-4 border-red-500/50 rounded-full -rotate-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-14 border-4 border-red-500/30 rounded-full -rotate-15" />
      </motion.div>
    </div>
  );
}
