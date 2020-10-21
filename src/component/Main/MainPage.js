import React, { useState } from "react";
import { CookiesProvider } from "react-cookie";
import Mainheader from "./Header/MainHeader";
import Slide from "./Slide/Slide";
import MyInfo from "./MyInfo/MyInfo";
const MainPage = () => {
  return (
    <CookiesProvider>
      <Mainheader />
      <Slide />
      <MyInfo />
    </CookiesProvider>
  );
};

export default MainPage;
