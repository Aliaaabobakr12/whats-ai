"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center lg:gap-36 lg:flex-row flex-col-reverse">
      <motion.img
        src="/bg.png"
        alt="whatsapp"
        className="absolute inset-0 h-full w-full -z-10 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      />

      {/* <motion.img
        src="/emojies-01.png"
        alt="whatsapp"
        className="w-[250px] lg:flex hidden absolute z-50 animate-bounce"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.1,
          type: "tween",
          delay: 3,
        }}
      /> */}

      <motion.img
        src="/mobileee1.png"
        alt="whatsapp"
        className="w-[200px]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "tween",
          delay: 2,
        }}
      />

      <div className="flex flex-col px-4 gap-2 items-center lg:items-start">
        <div className="overflow-hidden h-full w-fit relative hidden lg:flex">
          <motion.div
            className="w-full h-full bg-primary absolute"
            initial={{ x: -1000 }}
            animate={{ x: 1000 }}
            transition={{
              duration: 1.5,
              type: "tween",
              delay: 0.1,
            }}
          ></motion.div>
          <motion.p
            className="font-bold lg:text-xl pointer-events-none leading-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
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
              delay: 0.1,
            }}
          ></motion.div>
          <motion.p
            className="font-bold lg:text-[100px] text-primary lg:leading-tight leading-none text-5xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
            }}
          >
            WhatsApp
          </motion.p>
          <motion.div
            className="w-full h-2 absolute bg-primary bottom-[17%] hidden lg:flex"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
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
              delay: 0.1,
            }}
          ></motion.div>
          <motion.p
            className="font-bold lg:text-[100px] lg:leading-tight text-5xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
            }}
          >
            AI Assistant
          </motion.p>
          <motion.div
            className="w-full h-2 absolute bg-black bottom-[17%] lg:flex hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
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
              delay: 0.1,
            }}
          ></motion.div>
          <motion.p
            className="text-[#898989] lg:text-lg lg:w-full text-center h-36 lg:h-fit lg:mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
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
              delay: 0.1,
            }}
          ></motion.div>
          <motion.button
            className="bg-primary font-semibold italic py-2 lg:px-20 px-10 w-fit text-white rounded-full shadow-md hover:bg-primary/85 pointer-events-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 1,
            }}
          >
            Start now for free!
          </motion.button>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center absolute bottom-[5%] w-full justify-center"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "tween",
          delay: 2,
        }}
      >
        <img src="/logo.png" alt="whatsapp" className="w-14" />
        <p className="text-[10px]">All rights reserved ©2024</p>
      </motion.div>
    </div>
  );
}
