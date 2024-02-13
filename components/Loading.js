import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="flex h-full items-center justify-center absolute bg-white z-40 w-full"
      initial={{ x: 0 }}
      animate={{ x: -2000, opacity: 30 }}
      transition={{
        duration: 1,
        type: "tween",
        delay: 1,
      }}
    >
      <div className="loader z-50">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.div>
  );
}
