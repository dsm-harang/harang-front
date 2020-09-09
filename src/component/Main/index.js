import React from "react";
import "./style/index.css";
const MainPage = () => {
  return (
    <header>
      <div id="title">
        <p id="title-text">HARANG</p> <input></input>{" "}
        <i className="fas fa-search"></i>
      </div>

      <nav>
        <div id="meeting">전체모임</div>
        <div id="market">중고장터</div>
        <div id="mypage">마이페이지</div>
      </nav>
    </header>
  );
};
export default MainPage;
