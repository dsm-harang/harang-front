import React, { useState } from "react";
import "./style/MainHeader.css";
const MainHeader = () => {
  return (
    <header>
      <div id="title">
        <a href="#" id="title-text">
          HARANG
        </a>{" "}
        <input></input> <i className="fas fa-search"></i>
      </div>

      <nav>
        <a id="meeting">전체모임</a>
        <a id="market">중고장터</a>
        <a id="mypage">마이페이지</a>
      </nav>
    </header>
  );
};
export default MainHeader;
