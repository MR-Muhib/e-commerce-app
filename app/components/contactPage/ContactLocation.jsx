import React from "react";

// React Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

export default function ContactLocation() {
  return (
    <div>
      <div className="flex gap-2 mb-8">
        <IoLocationSharp className="text-md" />

        <div className="">
          <h1 className="font-semibold text-md">Address</h1>
          <p className=""></p>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        <FaPhoneAlt className="text-md" />
        <div className="">
          <h1 className="font-semibold text-md">Phone</h1>
          <p className="">
            Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        <MdWatchLater className="text-md" />

        <div className="">
          <h1 className="font-semibold text-md">Working Time</h1>
          <p className="">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
}
