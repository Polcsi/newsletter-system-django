import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../layout";
import Background from "../layout/Background";
import Footer from "../layout/Footer";

const MainPageLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Background>
        <Outlet />
      </Background>
      <Footer />
    </React.Fragment>
  );
};

export default MainPageLayout;
