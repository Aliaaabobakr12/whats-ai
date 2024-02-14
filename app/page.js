"use client";
import DesktopView from "@/components/DesktopView";
import MobView from "@/components/MobView";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen lg:justify-center py-4 lg:py-10 w-full items-center gap-2">
      <Loading />
      <motion.img
        src="/logo.png"
        alt="whatsapp"
        className="w-20 lg:hidden self-center flex"
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
      />
      <motion.img
        src="/bg.png"
        alt="whatsapp"
        className="fixed min-h-screen w-full -z-10 object-cover inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      />
      <div className="flex items-center justify-center lg:gap-36 lg:flex-row flex-col-reverse">
        <div className="relative w-[75%] lg:w-[27%] ">
          <motion.img
            src="/mobMockUp.png"
            alt="whatsapp"
            className="w-full h-full lg:hidden flex"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "tween",
              delay: 2.4,
            }}
          />
          <motion.img
            src="/lightModeWeb.png"
            alt="whatsapp"
            className="w-full h-full lg:flex hidden"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "tween",
              delay: 2.6,
            }}
          />
          <motion.img
            src="/glasses.png"
            alt="whatsapp"
            className="w-[40%] absolute bottom-0 animate-bounce"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              delay: 2.6,
            }}
          />
          <motion.img
            src="/crazy.png"
            alt="whatsapp"
            className="w-[30%] absolute top-16 right-0 animate-bounce"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              delay: 2.6,
            }}
          />
        </div>
        <DesktopView />
        <MobView />
      </div>

      <motion.div
        className="flex flex-col items-center w-full justify-center gap-1 lg:absolute bottom-4 lg:bottom-10 text-xs lg:text-sm"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "tween",
          delay: 2,
        }}
      >
        <div className="flex items-center gap-2 text-primary">
          <FaTiktok size={22} />
          <FaSquareXTwitter size={25} />
          <FaSnapchatSquare size={25} />
          {/* <FaFacebookSquare size={25} />
          <FaInstagramSquare size={25} /> */}
        </div>
        <p className="text-xs">All rights reserved ©2024</p>
      </motion.div>
    </div>
  );
}
