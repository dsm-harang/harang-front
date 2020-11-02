import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 998;
`;

export const PostModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 5rem;
  right: 20rem;
  left: 20rem;
  bottom: 5rem;
  background-color: white;
  z-index: 999;
  padding: 2rem 2rem;
  font-family: "S-CoreDream-3Light";
`;
export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  .sumnail {
    background-color: gray;
    width: 18rem;
    height: 20rem;
    margin-right: 3rem;
    object-fit: cover;
  }
  .title {
    font-family: "S-CoreDream-6Bold";
    font-size: 3rem;
    margin: 0;
  }
`;
export const Contents = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  height: 100%;
`;
