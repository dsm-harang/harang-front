import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 7rem;

  .header {
    width: 75rem;
    height: 1rem;
    margin: auto;
    padding: 1rem 1rem;
    background-color: #566270;
    @font-face {
      font-family: "S-CoreDream-3Light";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    color: #fffff3;
    font-family: "S-CoreDream-3Light";
  }
`;
export const Posts = styled.div`
  margin: 0 11rem;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;
