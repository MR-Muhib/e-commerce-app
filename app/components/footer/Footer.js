import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-white py-10 mx-auto">
      <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-3 ">
        {/* Branding Section */}
        <div className="px-12">
          <h1 className="text-2xl text-black font-bold mb-8">Funiro.</h1>
          <p className="text-gray-600 mt-2">
            400 University Drive Suite 200 Coral Gables,
          </p>
        </div>

        {/* Links Section */}
        <div className="px-12">
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-8">Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="px-12">
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-8">Help</h2>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600 hover:text-gray-800">
              Payment Options
            </li>
            <li className="text-gray-600 hover:text-gray-800">Returns</li>
            <li className="text-gray-600 hover:text-gray-800">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="px-12">
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-8">
            Newsletter
          </h2>

          <div className="mt-4 flex">
            <input
              type="text"
              name="title"
              placeholder="Enter your email"
              className=" border-b-2 mr-2 outline-none  bg-transparent border-black w-auto"
            />
            <button className=" border-b-2  border-black mt-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 px-12">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
