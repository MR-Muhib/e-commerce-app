"use client";
import React, { useState, useEffect } from "react";

// import image from root file
import imageOne from "../../../public/BlogImages/Rectangle 68 (1).png";
import imageTwo from "../../../public/BlogImages/Rectangle 68 (2).png";
import imageThree from "../../../public/BlogImages/Rectangle 68.png";

import Image from "next/image";

// Import react icons
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { FaClipboard } from "react-icons/fa6";

export default function BlogsDesign() {
  const [toggle, setToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState(""); // State to hold the current time

  // Update the time only on the client side
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString()); // Set the time once the component mounts
  }, []);

  return (
    <div className="w-[60%] p-5">
      <div className="">
        <Image className="" src={imageOne || "image is null"} alt="image one" />

        <div className="flex gap-5 text-center text-sm p-2 text-gray-500 items-center mt-5">
          <div className="flex gap-2">
            <CiUser />
            <p className="">Admin</p>
          </div>
          <div className="flex gap-2">
            <CiCalendarDate />
            <p className="">{currentTime}</p> {/* Use client-side time */}
          </div>
          <div className="flex gap-2">
            <FaClipboard />
            <p className="">Wood</p>
          </div>
        </div>

        <h1 className="text-xl font-bold my-2">
          Going all-in with millennial design
        </h1>
        <p className="text-justify text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>

        <button className="my-5" onClick={() => setToggle((prev) => !prev)}>
          Read more
        </button>

        {toggle && (
          <div className="my-5">
            <div className="">
              <Image
                className=""
                src={imageTwo || "image is null"}
                alt="image Two"
              />

              <div className="flex gap-5 text-center text-sm p-2 text-gray-500 items-center mt-5">
                <div className="flex gap-2">
                  <CiUser />
                  <p className="">Admin</p>
                </div>
                <div className="flex gap-2">
                  <CiCalendarDate />
                  <p className="">{currentTime}</p> {/* Use client-side time */}
                </div>
                <div className="flex gap-2">
                  <FaClipboard />
                  <p className="">Wood</p>
                </div>
              </div>

              <h1 className="text-xl font-bold my-2">
                Going all-in with millennial design
              </h1>
              <p className="text-justify text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>

            <div className="my-5">
              <Image
                className=""
                src={imageThree || "image is null"}
                alt="image Three"
              />

              <div className="flex gap-5 text-center text-sm p-2 text-gray-500 items-center mt-5">
                <div className="flex gap-2">
                  <CiUser />
                  <p className="">Admin</p>
                </div>
                <div className="flex gap-2">
                  <CiCalendarDate />
                  <p className="">{currentTime}</p> {/* Use client-side time */}
                </div>
                <div className="flex gap-2">
                  <FaClipboard />
                  <p className="">Wood</p>
                </div>
              </div>

              <h1 className="text-xl font-bold my-2">
                Going all-in with millennial design
              </h1>
              <p className="text-justify text-gray-500 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
