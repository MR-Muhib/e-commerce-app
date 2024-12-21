import getAllProducts from "../../lib/getAllProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function HomeProducts() {
  const products = await getAllProducts();

  return (
    <div className="p-5 my-5 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
        Our Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className=" border-gray-200 hover:shadow-md bg-[#f4f5f7]"
            >
              <Link href={`/single-product/${product.id}`}>
                <Image
                  src="data:image/jpeg;base64,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"
                  alt={product.name || "No Image Available"}
                  width={200}
                  height={150}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-400">{product.description}</p>
                  <span className="text-gray-600">{product.rate}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
