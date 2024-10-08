"use cleint";
import React from "react";
import { motion } from "framer-motion";

export default function DesktopView() {
  return (
    <div className="lg:flex flex-col px-4 gap-2 hidden">
      <div className="flex items-center gap-4 overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-xl pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          Introducing
        </motion.p>
        <motion.img
          src="/logo-1.png"
          alt="whatsapp"
          className="w-10 lg:self-start self-center flex"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        />
      </div>

      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-large text-primary leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          WhatsApp
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-primary bottom-[18%]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        ></motion.div>
      </div>

      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-large leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          AI Assistant
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-black bottom-[18%]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        ></motion.div>
      </div>
      <div className="overflow-hidden  w-fit relative flex h-full">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="text-[#898989] text-lg w-full h-fit mb-4 text-mid"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          Generate your own unique stickers and images, start chatting now!
        </motion.p>
      </div>
      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.button
          className="bg-primary font-semibold italic py-2 px-20 w-fit text-white rounded-full shadow-md hover:bg-primary/85 pointer-events-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          Start now for free!
        </motion.button>
      </div>
    </div>
  );
}
