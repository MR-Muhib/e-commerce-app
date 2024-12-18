import Image from "next/image";
import React from "react";
import contactBanner from "@/public/shopbanner.png";
import logo from "@/public/Meubel House_logos-05.png";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ContactBanner() {
  return (
    <div className="relative w-full h-[200px] box-border mb-2">
      <Image className="absolute" src={contactBanner} alt="shop banner" />

      <div className="relative  top-10">
        <Image className="w-8 h-8 p-1 mx-auto" src={logo} alt="Logo" />
        <h1 className="text-center  font-semibold text-xl">Contact</h1>
        <div className="flex text-center items-center justify-center p-1 ">
          <Link href="/">Home</Link>
          <span className="justify-center text-center">
            <RiArrowRightSLine />
          </span>
          <p className="">Contact</p>
        </div>
      </div>
    </div>
  );
}
