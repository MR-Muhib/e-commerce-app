"use client";

import React from "react";

import Image from "next/image";

import Image1 from "../../../public/animationImages/Image-living room.png";
import Image2 from "../../../public/animationImages/Mask Group (1).png";
import Image3 from "../../../public/animationImages/Mask Group.png";

export default function HomeAnimation() {
  return (
    <div>
      <h1 className="container  text-center mx-auto mt-5 md:text-2xl text-xl font-semibold">
        Browse The Range
      </h1>
      <p className="text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className=" grid grid-cols-3 mx-auto ">
        <div className="mx-auto mb-4 ">
          <Image
            src={Image1}
            alt="Living Room"
            width={200}
            height={150}
            layout="intrinsic"
            objectFit="cover"
          />
          <p className="text-center font-bold mt-2">Living Room</p>
        </div>
        <div className="mx-auto mb-4 ">
          <Image
            src={Image2}
            alt="Bedroom"
            width={200}
            height={150}
            layout="intrinsic"
            objectFit="cover"
          />
          <p className="text-center font-bold mt-2">Bedroom</p>
        </div>
        <div className="mx-auto mb-4 ">
          <Image
            src={Image3}
            alt="Kitchen"
            width={200}
            height={150}
            layout="intrinsic"
            objectFit="cover"
          />
          <p className="text-center font-bold mt-2">Kitchen</p>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
