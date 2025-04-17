import React from "react";
import Nav from "../components/Nav";
import FeatureContainer from "../components/Home/FeatureContainer";
import DemoContainer from "../components/Home/DemoContainer";
import Testimonials from "../components/Home/Testimonials";
import ShopNow from "../components/Home/ShopNow";
import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";
import MainContainer from "../components/Home/MainContainer";
import MainContainerProduct from "../components/Product/MainContainerProduct";

type GpsTrackerProduct = {
  type: "dog" | "cat";
};
function GpsTrackerProduct({ type }: GpsTrackerProduct) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 0,
      }}
    >
      <Nav />
      <MainContainerProduct />
      <FeatureContainer />

      <DemoContainer />

      <Testimonials />
      <ShopNow />
      <Faq />
      <Footer />
    </div>
  );
}

export default GpsTrackerProduct;
