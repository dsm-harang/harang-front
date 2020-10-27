import React, { useState } from "react";
import { CookiesProvider } from "react-cookie";
import Mainheader from "./Header/MainHeader";
import Slide from "./Slide/Slide";
import MyInfo from "./MyInfo/MyInfo";
import PostContainer from "./Post/PostContainer";
const MainPage = () => {
  return (
    <CookiesProvider>
      <Mainheader />
      <Slide />
      <MyInfo />
      <PostContainer />
    </CookiesProvider>
  );
};

export default MainPage;
