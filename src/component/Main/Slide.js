import React, { useState, useRef, useEffect } from "react";
import img from "./images/image01.png";
import "./style/Slide.css";
import MainHeader from "./MainHeader";
const Slide = () => {
  const totalSlide = 2;
  const [curSlide, setCurSlide] = useState(0);
  const btns = document.getElementsByClassName("btns");
  const slide = useRef(0);

  function nextSlide(num) {
    console.log(num);
    slide.current.style.transform = `translate3d(${num * -100}%, 0px, 0px)`;
    Array.prototype.forEach.call(btns, function (element) {
      element.id = "";
    });
    if (num < 3) {
      btns[num].id = "selected";
    }
  }
  function setBnt(e) {
    nextSlide(e.target.value);
    setCurSlide(parseInt(e.target.value));
  }

  function autoSlide() {
    curSlide < totalSlide ? setCurSlide(curSlide + 1) : setCurSlide(0);
    nextSlide(curSlide);
  }

  useEffect(() => {
    var interval = setTimeout(autoSlide, 2000);
    return () => clearTimeout(interval);
  }, [curSlide]);

  return (
    <div>
      <MainHeader index="0"></MainHeader>
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
