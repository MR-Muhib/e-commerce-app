import React from "react";

const GetData = ({ product }) => {
  return (
    // <div className="flex w-[50%]"></div>
    <div className="flex w-[50%] p-5">
      <div className="pr-10 pt-2">
        <h1 className="text-xl font-bold uppercase">{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.rate}</p>
        <p className="text-xl text-yellow-500 ">* * * *</p>
        <p className="text-gray-500">{product.description}</p>
        <button>Add to cart</button>
        <button>Buy now</button>
        <button>View details</button>
        <hr />
        <p>Related products:</p>
        {/* Display related products */}
        {/* ... */}
        <hr />
        <p>Reviews:</p>
        {/* Display reviews */}
        {/* ... */}
        <hr />
        <p>Write a review:</p>
        {/* Display review form */}
        {/* ... */}
        <hr />
        <p>Product details:</p>
        {/* Display product details */}
        {/* ... */}
        <hr />
        <p>Product recommendations:</p>
        {/* Display product recommendations */}
        {/*... */}
        <hr />
      </div>
    </div>
  );
};

export default GetData;
