"use client";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen items-center lg:justify-center lg:gap-36 ">
      <Loading />
      <motion.img
        src="/bg.png"
        alt="whatsapp"
        className="absolute inset-0 h-full w-full -z-10 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 1.5,
        }}
      />
      <div className="relative ">
        <motion.img
          src="/mobileee.png"
          alt="whatsapp"
          className="w-[100px] absolute lg:hidden right-0"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 2,
          }}
        />
        <motion.img
          src="/emojies-01.png"
          alt="whatsapp"
          className="w-[250px] lg:flex hidden absolute z-50 animate-bounce"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 3,
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
            delay: 2,
          }}
        />
      </div>
      <div className="flex flex-col px-4 gap-2">
        <div className="overflow-hidden h-full w-fit relative">
          <motion.div
            className="w-full h-full bg-primary absolute"
            initial={{ x: -1000 }}
            animate={{ x: 1000 }}
            transition={{
              duration: 1.5,
              type: "tween",
              delay: 1.2,
            }}
          ></motion.div>
          <motion.p
            className="font-bold lg:text-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1.8,
            }}
          >
            Introducing
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
              delay: 1.2,
            }}
          ></motion.div>
          <motion.p
            className="font-bold lg:text-[100px] text-primary underline leading-none text-4xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1.8,
            }}
          >
            WhatsApp
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
              delay: 1.2,
            }}
          ></motion.div>
          <motion.p
            className="font-bold lg:text-[100px] underline leading-none mt-4 text-4xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1.8,
            }}
          >
            AI Assistant
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
              delay: 1.2,
            }}
          ></motion.div>
          <motion.p
            className="text-[#898989] lg:text-lg my-4 w-56 lg:w-full"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1.8,
            }}
          >
            Generate any Sticker, Image, or even chat with it.
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
              delay: 1.2,
            }}
          ></motion.div>
          <motion.button
            className="bg-primary font-semibold italic py-2 lg:px-20 px-10 w-fit text-white rounded-full shadow-md hover:bg-primary/85"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1.8,
            }}
          >
            Start now for free!
          </motion.button>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center absolute bottom-14 w-full justify-center"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "tween",
          delay: 2,
        }}
      >
        <p>Logo</p>
        <p className="text-xs">All rights reserved ©2024</p>
      </motion.div>
    </div>
  );
}
