import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="flex h-screen items-center justify-center absolute bg-black z-40 w-full"
      initial={{ y: 0 }}
      animate={{ y: -1000 }}
      transition={{
        duration: 1,
        type: "tween",
      }}
    ></motion.div>
  );
}
