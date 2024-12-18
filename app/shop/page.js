import React from "react";
import ShopBanner from "../components/shopPage/ShopBanner";
import ShopProducts from "../components/shopPage/ShopProducts";
import PageExchangeButtons from "../components/shopPage/PageExchangeButtons";
import IntroduceApplication from "../components/IntroducApplication/IntroduceApplication";

export default function page() {
  return (
    <div className="container max-w-6xl">
      <ShopBanner />
      <ShopProducts />
      <PageExchangeButtons />
      <IntroduceApplication />
    </div>
  );
}
