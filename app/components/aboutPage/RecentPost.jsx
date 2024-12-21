"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// Import recent post image

import imageOne from "../../../public/recentPostImage/1.png";
import imageTwo from "../../../public/recentPostImage/2.png";
import imageThree from "../../../public/recentPostImage/3.png";
import imageFour from "../../../public/recentPostImage/4.png";
import imageFive from "../../../public/recentPostImage/5.png";

const RecentPost = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div>
      <h1 className="font-bold text-xl my-3">Recent Posts</h1>

      <div className="flex gap-4 py-3">
        <Image src={imageOne} alt="Recent Post image one" />
        <div className="">
          <p className="font-semibold text-xm">Going all-in with millennial design</p>
          <span className="text-gray-500">{currentDate}</span>
        </div>
      </div>

      <div className="flex gap-4 py-3">
        <Image src={imageTwo} alt="Recent Post image Two" />
        <div className="">
          <p className="font-semibold text-xm">Exploring new ways of decorating</p>
          <span className="text-gray-500">{currentDate}</span>
        </div>
      </div>

      <div className="flex gap-4 py-3">
        <Image src={imageThree} alt="Recent Post image Three" />
        <div className="">
          <p className="font-semibold text-xm">
            Handmade pieces that took time to make
          </p>
          <span className="text-gray-500">{currentDate}</span>
        </div>
      </div>

      <div className="flex gap-4 py-3">
        <Image src={imageFour} alt="Recent Post image Four" />
        <div className="">
          <p className="font-semibold text-xm">Modern home in Milan</p>
          <span className="text-gray-500">{currentDate}</span>
        </div>
      </div>

      <div className="flex gap-4 py-3">
        <Image src={imageFive} alt="Recent Post image Five" />
        <div className="">
          <p className="font-semibold text-xm">Colorful office redesign</p>
          <span className="text-gray-500">{currentDate}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
