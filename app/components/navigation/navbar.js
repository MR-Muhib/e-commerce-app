"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/Meubel House_Logos-05.png";

// React Icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import Searchbar from "./searchbar";

export default function Navbar() {
  return (
    <div className=" flex w-full sticky top-0 z-20 bg-white shadow-sm justify-between px-5">
      {/* logo sections */}
      <div className="flex items-center">
        <Image className="p-2" src={logo} alt="Logo" />
        <h1 className="font-bold text-lg">Furniro</h1>
      </div>

      {/* Nav sections */}
      <nav className="p-3">
        <ul className="flex gap-5">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-gray-700">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <Link href="/login">
          <button className="p-2">
            <CiUser className="text-xl" />
          </button>
        </Link>

        {/* import Searchbar component */}
        <Searchbar />

        <Link href="/favorites">
          <button className="p-2">
            <CiHeart className="text-xl" />
          </button>
        </Link>

        <Link href="/cart">
          <button className="p-2">
            <CiShoppingCart className="text-xl" />
            {/* <span className="text-xs text-gray-500">2</span> */}
          </button>
        </Link>
      </div>
    </div>
  );
}
