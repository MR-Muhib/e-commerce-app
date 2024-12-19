import Image from "next/image";
import React from "react";

// Import all vectors
import vector1 from "../../../public/vector/Vector1.png";
import vector2 from "../../../public/vector/Group 2.png";
import vector3 from "../../../public/vector/Vector 3.png";
import vector4 from "../../../public/vector/Vector 4.png";

export default function IntroduceApplication() {
  return (
    <div className="p-5 bg-[#faf3ea] w-full grid grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-5">
      <div className="flex items-center gap-2 px-2">
        <Image className="w-12 h-12" src={vector1} alt={vector1} />

        <div className="">
          <h1 className="font-semibold text-md">High Quality</h1>
          <p className="text-gray text-sm">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2">
        <Image className="w-12 h-12" src={vector2} alt={vector2} />

        <div className="">
          <h1 className="font-semibold text-md">Warranty Protection</h1>
          <p className="text-gray text-sm">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2">
        <Image className="w-12 h-12" src={vector3} alt={vector3} />

        <div className="">
          <h1 className="font-semibold text-md">Free Shipping</h1>
          <p className="text-gray text-sm">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2">
        <Image className="w-12 h-12" src={vector4} alt={vector4} />

        <div className="">
          <h1 className="font-semibold text-md">24 / 7 Support</h1>
          <p className="text-gray text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
