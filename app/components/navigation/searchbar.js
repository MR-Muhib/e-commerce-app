"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Searchbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <>
      <div className="flex items-center space-x-2">
        {searchVisible && (
          <input
            type="text"
            placeholder="Search"
            className="border-2 px-2 py-1 rounded"
          />
        )}
        <button
          className="p-2"
          onClick={() => setSearchVisible(!searchVisible)}
        >
          <CiSearch />
        </button>
      </div>
    </>
  );
}
