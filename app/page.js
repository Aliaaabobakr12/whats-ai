"use client";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex h-screen items-center lg:justify-center lg:gap-36 ">
      <Loading />
      <motion.img
        src="/bg.png"
        alt="whatsapp"
        className="absolute inset-0 h-full w-full -z-10 opacity-5 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 1.5,
        }}
      />
      <motion.img
        src="/mobileee.png"
        alt="whatsapp"
        className="w-[125px] absolute lg:hidden right-0"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 4.2,
        }}
      />
      <motion.img
        src="https://cdn3d.iconscout.com/3d/free/thumb/free-wut-4085889-3379598.png?f=webp"
        alt="whatsapp"
        className="w-[100px] lg:flex hidden absolute left-48 animate-bounce"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 4.6,
        }}
      />

      <motion.img
        src="/mobileee1.png"
        alt="whatsapp"
        className="w-[250px] lg:flex hidden"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 4.6,
        }}
      />
      <div className="flex flex-col px-4">
        <motion.p
          className="font-bold lg:text-xl mb-2"
          initial={{ x: 1, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 1.7,
          }}
        >
          Introducing
        </motion.p>
        <motion.p
          className="font-bold lg:text-[100px] text-primary underline leading-none text-4xl"
          initial={{ x: 1, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 2.4,
          }}
        >
          WhatsApp
        </motion.p>
        <motion.p
          className="font-bold lg:text-[100px] underline leading-none mt-4 text-4xl"
          initial={{ x: 1, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 3.1,
          }}
        >
          AI Assistant
        </motion.p>
        <motion.p
          className="text-[#898989] lg:text-lg my-6 w-56 lg:w-full"
          initial={{ x: 1, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 3.8,
          }}
        >
          Generate any Sticker, Image, or even chat with it.
        </motion.p>
        <motion.button
          className="bg-primary font-semibold italic py-2 lg:px-20 px-10 w-fit text-white rounded-full shadow-md hover:bg-primary/85 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 4.2,
          }}
        >
          Start now for free!
        </motion.button>
      </div>
      <motion.div
        className="flex flex-col items-center absolute bottom-14 w-full justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 5,
        }}
      >
        <p>Logo</p>
        <p className="text-xs">All rights reserved ©2024</p>
      </motion.div>
    </div>
  );
}
