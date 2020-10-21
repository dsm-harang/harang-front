import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  overflow: hidden;
`;
export const SlideImg = styled.div`
  transform: ${(props) => ` translateX( ${-100 * props.num}% )`};
  transition-property: transform;
  transition-duration: 0.5s;
  position: relative;
  display: flex;
`;
export const Image = styled.img`
  width: 100%;
`;
export const CircleBtn = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  border: none;
  margin: 0 3px;
  padding: 0 2px;
  background-color: ${(prop) =>
    prop.curSlide === prop.value ? "#a48fe0" : "#ECECEC"};
`;
export const BtnContainer = styled.div`
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 30px;
`;
