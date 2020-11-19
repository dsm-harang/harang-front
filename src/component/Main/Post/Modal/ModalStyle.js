import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const Global = createGlobalStyle`
body{
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
  cursor: default;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

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
  font-size: 1rem;
  .title {
    font-family: 'S-CoreDream-6Bold';
    font-size: 3rem;
    margin: 0;
  }
  i {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  div {
    margin: 1rem 0;
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
  grid-template-rows: 1fr 2fr 2fr 1fr 1fr 1fr 1fr;
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
  .tag,
  button {
    grid-column: span 2;
    padding: 0 3px;
    width: 430px;
    height: 90%;
  }
  .personnel {
    grid-column: span 1;
    grid-row: span 1;
    padding: 0 3px;
    width: 95%;
    height: 90%;
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
  max-width: 100px;
  min-width: 50px;
  height: 15px;
  font-size: 15px;
  margin-right: 10px;
  padding: 2px 2px;

  color: #fffff3;
  background-color: #a48fe0;

  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;

  display: flex;
  align-items: center;

  border-radius: 10px;
  padding: 3px 3px;
  padding-left: 3px;

  cursor: default;
`;

export const ReportContainer = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10em;
  right: 30rem;
  left: 30rem;
  bottom: 20rem;
  background-color: white;
  z-index: 999;
  padding: 2rem 2rem;
`;

export const ReportInputLabel = styled.textarea`
  outline: none;
  border: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  width: 90%;
  height: 80%;
  padding: 1rem;
  resize: none;
  font-family: 'S-CoreDream-3Light';
`;
export const ReportButton = styled.button`
  outline: none;
  border: none;
  font-family: 'S-CoreDream-6Bold';
  background-color: #a48fe0;
  color: #fffff3;
  width: 95%;
  padding: 0.5rem 0rem;
  margin-top: 0.5rem;
`;
