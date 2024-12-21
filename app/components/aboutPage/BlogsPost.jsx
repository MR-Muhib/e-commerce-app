import React from "react";

// react icons
import { CiSearch } from "react-icons/ci";
import RecentPost from "./RecentPost";

export default function BlogsPost() {
  return (
    <div className="w-[30%] h-auto p-5 ">
      <div className="relative my-5">
        <input
          className="absolute top-0 right-0 border border-black rounded-md p-2 w-full"
          type="text"
          name="search"
        />
        <CiSearch className="relative font-bold text-xl left-48 top-2" />
      </div>

      {/* Categories */}
      <div className="py-5">
        <h1 className="font-bold text-xl my-3">Categories</h1>

        <div className="">
          <div className="text-gray-500 flex justify-between p-2">
            <p className="">Crafts</p>
            <span className="">2</span>
          </div>
          <div className="text-gray-500 flex justify-between p-2">
            <p className="">Design</p>
            <span className="">8</span>
          </div>
          <div className="text-gray-500 flex justify-between p-2">
            <p className="">Handmade</p>
            <span className="">7</span>
          </div>
          <div className="text-gray-500 flex justify-between p-2">
            <p className="">Interior</p>
            <span className="">1</span>
          </div>
          <div className="text-gray-500 flex justify-between p-2">
            <p className="">Wood</p>
            <span className="">6</span>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="">
        <RecentPost />
      </div>
    </div>
  );
}
