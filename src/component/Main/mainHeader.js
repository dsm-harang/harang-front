import React, { useState } from "react";
import "./style/MainHeader.css";
const MainHeader = (props) => {
  const ids = ["meeting", "market", "mypage"];
  const curPage = document.getElementById(ids[parseInt(props.index)]);

  function setMain() {
    if (curPage) {
      curPage.className = "selected";
    }
  }
  setMain();

  return (
    <header>
      <div id="title">
        <a href="#" id="title-text">
          HARANG
        </a>{" "}
        <div id="searchBox">
          <input></input> <i className="fas fa-search"></i>
        </div>
      </div>

      <nav>
        <a id="meeting" className="">
          전체모임
        </a>
        <a id="market" className="">
          중고장터
        </a>
        <a id="mypage" className="">
          마이페이지
        </a>
      </nav>
    </header>
  );
};
export default MainHeader;
