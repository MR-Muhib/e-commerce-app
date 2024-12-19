import Image from "next/image";
import React from "react";
import shopBanner from "../../../public/shopbanner.png";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ShopBanner() {
  return (
    <div className="relative w-full h-[200px] box-border mb-2">
      <Image className="absolute px-4" src={shopBanner} alt="shop banner" />
      <div className="relative  top-10">
        <h1 className="text-center  font-semibold text-xl">Shop</h1>
        <div className="flex text-center items-center justify-center p-2 ">
          <Link href="/">Home</Link>
          <span className="justify-center text-center">
            <RiArrowRightSLine />
          </span>
          <p className="">Shop</p>
        </div>
      </div>
    </div>
  );
}
