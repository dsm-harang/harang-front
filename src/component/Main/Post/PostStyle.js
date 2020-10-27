import styled from "styled-components";

export const Container = styled.div`
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
  margin: 1rem 1rem;
  display: flex;
`;
export const Sumnail = styled.img`
  width: 10rem;
  height: 15rem;
  border-radius: 1rem;
  object-fit: cover;
`;
export const Contents = styled.div`
  cursor: default;
  width: 20rem;
  height: 15rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "S-CoreDream-3Light";
  color: #566270;
  .title {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: "S-CoreDream-6Bold";
  }
  .content {
    margin: 0.5rem 0;
  }
  .info {
    width: 15rem;
    i {
      margin-right: 0.5rem;
    }
  }
  .tags {
    font-size: 0.8rem;
    display: flex;
    position: relative;
    margin-top: 2rem;
  }
`;
export const Sides = styled.div`
  width: 6.5rem;
  height: 15rem;
  margin-left: 0.5rem;
  .profile {
    background-color: #566270;
    width: 6.5rem;
    height: 10rem;
    border-radius: 1rem;
  }
  button {
    background-color: #a48fe0;
    width: 6.5rem;
    height: 4.5rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    border: none;
    outline: none;
  }
`;
export const HashTag = styled.div`
  margin-right: 0.5rem;
`;
