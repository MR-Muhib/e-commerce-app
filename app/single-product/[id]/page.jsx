import HeaderBtn from "../../components/dynamic-home-products/headerBtn";
import getAllProducts from "../../lib/getAllProducts";
import GetData from "../getData";

import GetImages from "../getImages";

export default async function SingleProduct({ params }) {
  const { id } = params;

  // Fetch all products
  const allProducts = await getAllProducts();

  // Find the product by ID
  const product = allProducts.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="px-5">
        <h1 className="text-3xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="px-5">
      {/* HeaderBtn without product info */}
      <HeaderBtn />

      {/* Pass the full product object to GetImages */}
      <div className="flex justify-between gap-2">
        <GetImages product={product} />

        <GetData product={product} />
      </div>
    </div>
  );
}
