import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../layout";
import Background from "../layout/Background";

const MainPageLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Background>
        <Outlet />
      </Background>
    </React.Fragment>
  );
};

export default MainPageLayout;
