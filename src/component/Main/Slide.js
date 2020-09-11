import React, { useState, useRef } from "react";
import img from "./images/image01.png";
import "./style/Slide.css";
import MainHeader from "./MainHeader";
const Slide = () => {
  const totalSlide = 2;
  const [curSlide, setCurSlide] = useState(1);
  const btns = document.getElementsByClassName("btns");
  const slide = useRef(0);
  const nextSlide = (num) => {
    slide.current.style.transform = `translate3d(${num * -100}%, 0px, 0px)`;
  };

  const setBnt = (e) => {
    Array.prototype.forEach.call(btns, function (element) {
      element.id = "";
    });
    e.target.id = "selected";
    nextSlide(e.target.value);
  };

  return (
    <div>
      <MainHeader></MainHeader>
      <div id="container">
        <div id="slide" ref={slide}>
          <img src={img}></img>
          <img src={img}></img>
          <img src={img}></img>
        </div>

        <div id="buttons">
          <button
            className="btns"
            id="selected"
            value={0}
            onClick={setBnt}
          ></button>
          <button className="btns" id="" value={1} onClick={setBnt}></button>
          <button className="btns" id="" value={2} onClick={setBnt}></button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
