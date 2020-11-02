import React, { useState } from "react";
import { CookiesProvider } from "react-cookie";
import Mainheader from "./Header/MainHeader";
import Slide from "./Slide/Slide";
import MyInfo from "./MyInfo/MyInfo";
import PostContainer from "./Post/PostContainer";
import { createGlobalStyle } from "styled-components";
const FontSetting = createGlobalStyle`
body{
   @font-face {
    font-family: "S-CoreDream-3Light";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream-6Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
}`;
const MainPage = () => {
  return (
    <CookiesProvider>
      <FontSetting />
      <Mainheader />
      <Slide />
      <MyInfo />
      <PostContainer />
    </CookiesProvider>
  );
};

export default MainPage;
