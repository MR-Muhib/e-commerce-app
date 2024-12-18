import React from "react";

// react Icons
import { FaShareAlt } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export default function AddToCard() {
  return (
    <div className="flex items-center justify-center w-full bg-[#646463] ">
      <div className="text-center ">
        <button className="px-8 py-2 bg-white  text-[#c6a356]">
          Add to Cart
        </button>
        <div className="flex gap-2 text-sm mt-4 justify-center">
          <div className="flex items-center gap-1 text-white font-semibold">
            <FaShareAlt />
            <p className="text-white">Share</p>
          </div>
          <div className="flex items-center gap-1 text-white font-semibold">
            <MdCompareArrows />
            <p className="text-white">Compare</p>
          </div>
          <div className="flex items-center gap-1 text-white font-semibold">
            <CiHeart />
            <p className="text-white">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}
