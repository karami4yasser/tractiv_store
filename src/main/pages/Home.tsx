import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

import MainContainer from "../components/Home/MainContainer";
import FeatureContainer from "../components/Home/FeatureContainer";
import NewProduct from "../components/Home/NewProduct";
import DemoContainer from "../components/Home/DemoContainer";
import BuyNowOptions from "../components/Home/BuyNowOptions";
import Testimonials from "../components/Home/Testimonials";
import ShopNow from "../components/Home/ShopNow";
import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";
function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <MainContainer />
      <FeatureContainer />
      <NewProduct />
      <DemoContainer />
      <BuyNowOptions />
      <Testimonials />
      <ShopNow />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
