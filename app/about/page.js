import React from "react";
import BlogBanner from "../components/aboutPage/BlogBanner";
import BlogsDesign from "../components/aboutPage/BlogsDesign";
import BlogsPost from "../components/aboutPage/BlogsPost";
import PageExchangeButtons from "../components/IntroducApplication/PageExchangeButtons";
import IntroduceApplication from "../components/IntroducApplication/IntroduceApplication";

export default function page() {
  return (
    <div className="px-5">
      <BlogBanner />
      <div className="flex gap-5 ">
        <BlogsDesign />
        <BlogsPost />
      </div>

      <PageExchangeButtons />
      <IntroduceApplication />
    </div>
  );
}
