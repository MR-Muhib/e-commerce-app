
import HomeBanner from "./components/homePage/HomeBanner";
import HomeAnimation from "./components/homePage/HomeAnimation";
import HomeProducts from "./components/homePage/HomeProducts";

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto">
      <HomeBanner />
      <HomeAnimation />
      <HomeProducts />
    </div>
  );
}
