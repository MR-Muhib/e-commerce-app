import React from "react";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="relative w-full h-[350px]">
      <Image
        className="absolute w-full h-[350px] px-4"
        src="/home-page-banner.png"
        alt="Home Page Banner"
        layout="fill"
        objectFit="cover"
      />

      <div className="relative flex items-center md:w-[350px] md:h-[200px] w-[250px] h-auto  md:top-1/4 md:left-2/4 top-1/3 left-1/3 ">
        <div className="right-side  bg-[#fff3e3] rounded-md p-5">
          <div>
            <p className="text-sm text-gray-500">New Arrival</p>
            <h1 className="lg:text-3xl sm:text-xl font-bold text-[#b88e2f]">
              Discover Our New Collection
            </h1>

            <p className="mb-2 mt-2 text-gray-700 text-sm">
              Lore of the new collection will be available in the following
              formats and will be.
            </p>

            <button className="bg-[#b88e2f] hover:bg-[#ddaf42] text-white font-bold py-2 px-4 uppercase text-sm mt-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
