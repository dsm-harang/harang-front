import React, { useState, useEffect } from "react";
import {
  SlideImg,
  Container,
  Image,
  CircleBtn,
  BtnContainer,
} from "./SlideStyle";
import img from "../images/image01.png";
const Slide = () => {
  const totalSlide = 2;
  const [curSlide, setCurSlide] = useState(0);

  function setBnt(e) {
    setCurSlide(parseInt(e.target.value));
  }

  function autoSlide() {
    curSlide < totalSlide ? setCurSlide(curSlide + 1) : setCurSlide(0);
  }

  useEffect(() => {
    var interval = setTimeout(autoSlide, 5000);
    return () => clearTimeout(interval);
  }, [curSlide]);

  return (
    <div>
      <Container>
        <SlideImg num={curSlide}>
          <Image src={img}></Image>
          <Image src={img}></Image>
          <Image src={img}></Image>
        </SlideImg>

        <BtnContainer id="buttons">
          <CircleBtn curSlide={curSlide} value={0} onClick={setBnt}></CircleBtn>
          <CircleBtn curSlide={curSlide} value={1} onClick={setBnt}></CircleBtn>
          <CircleBtn curSlide={curSlide} value={2} onClick={setBnt}></CircleBtn>
        </BtnContainer>
      </Container>
    </div>
  );
};

export default Slide;
