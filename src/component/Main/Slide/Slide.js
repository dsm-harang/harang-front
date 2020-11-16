import React, { useState, useEffect } from 'react';
import {
  SlideImg,
  Container,
  Image,
  CircleBtn,
  BtnContainer,
} from './SlideStyle';
import img from '../images/image01.png';
const Slide = () => {
  const [curSlide, setCurSlide] = useState(0);
  const images = [img];
  const totalSlide = images.length - 1;

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
          {images.map(e => {
            return <Image src={e}></Image>;
          })}
        </SlideImg>

        <BtnContainer id="buttons">
          {images.map((e, i) => {
            return (
              <CircleBtn
                curSlide={curSlide}
                value={i}
                onClick={setBnt}
              ></CircleBtn>
            );
          })}
        </BtnContainer>
      </Container>
    </div>
  );
};

export default Slide;
