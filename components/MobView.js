"use cleint";
import React from "react";
import { motion } from "framer-motion";

export default function MobView() {
  return (
    <div className="flex flex-col px-4 gap-2 items-center lg:hidden">
      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-primary leading-none text-5xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          WhatsApp
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-primary bottom-[17%] hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-5xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          AI Assistant
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-black bottom-[17%]  hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        ></motion.div>
      </div>
      <div className="overflow-hidden w-fit relative flex h-full">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.p
          className="text-[#898989] text-center mb-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          Generate your own unique stickers and images, start chatting now!
        </motion.p>
      </div>
      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.button
          className="bg-primary font-semibold italic py-2 px-8 w-fit text-white rounded-full shadow-md hover:bg-primary/85 pointer-events-auto mb-8 mt-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          Start now for free!
        </motion.button>
      </div>
    </div>
  );
}
