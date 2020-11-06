import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const Global = createGlobalStyle`
body{
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
  height:100%; min-height:100%; overflow:hidden !important; touch-action:none;
}`;
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
  font-family: 'S-CoreDream-3Light';
`;
export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  .title {
    font-family: 'S-CoreDream-6Bold';
    font-size: 3rem;
    margin: 0;
  }
`;
export const Contents = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  height: 100%;
`;

export const WriteModalContainer = styled.form`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  top: 5rem;
  right: 20rem;
  left: 20rem;
  bottom: 5rem;
  background-color: white;
  z-index: 999;
  padding: 2rem 2rem;

  align-items: end;
  justify-items: left;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  input,
  textarea {
    width: 650px;
    font-family: 'S-CoreDream-3Light';
  }
  .sumnail {
    margin: 0;
    background-image: url(${props => props.sumnail});
    background-size: cover;

    width: 100%;
    height: 100%;

    grid-column: span 1;
    grid-row: span 3;

    cursor: pointer;
  }
  .title {
    font-family: 'S-CoreDream-6Bold';
    grid-column: span 3;
    height: 100%;
    padding: 0 5px;
    font-size: 1rem;
  }
  .content {
    grid-column: span 3;
    grid-row: span 2;
    height: 95%;
    padding: 5px 5px;
    resize: none;
  }

  .map,
  .time,
  .Personnel,
  .tag,
  button {
    grid-column: span 2;
    padding: 0 3px;
    width: 430px;
    height: 60%;
  }
  .map,
  button {
    height: 100%;
  }
  button {
    width: 436px;
  }
`;
export const PostButton = styled.button`
  font-family: 'S-CoreDream-6Bold';
  background-color: #a48fe0;
  color: #fffff3;
`;
export const Sumnail = styled.img`
  background-color: gray;
  width: 18rem;
  height: 20rem;
  margin-right: 3rem;
  object-fit: cover;
`;

export const InputLabel = styled.input`
  outline: none;
  border: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  width: 80%;
`;
export const ContentBox = styled.textarea`
  outline: none;
  border: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  width: 80%;
`;
export const TagContainer = styled.ul`
  grid-column: span 2;
  display: flex;
  align-items: center;
  width: 430px;
  height: 60%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  input {
    width: 100%;
    height: 100%;
    padding: 0 3px;
  }
`;
export const TagItem = styled.div`
  max-width: 70px;
  height: 15px;
  font-size: 15px;
  margin-right: 10px;
  padding: 1px 2px;

  color: #fffff3;
  background-color: #a48fe0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
