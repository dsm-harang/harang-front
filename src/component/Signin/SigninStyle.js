import styled, { keyframes } from 'styled-components';
import bg from './images/background.png';

const clickedBtn = keyframes`
 0%, 100%, 20%, 53%, 80% {
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transform: translate3d(0, 0, 0)
  }
  40%,
  43% {
    transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
    transform: translate3d(0, -30px, 0)
  }
  70% {
    transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
    transform: translate3d(0, -15px, 0)
  }
  90% {
    transform: translate3d(0, -4px, 0)
  }


`;

const fadeInLeft = keyframes` {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0)
  }
  100% {
    opacity: 1;
    transform: none
  }
}`;

export const Container = styled.div`
  display: flex;
  background-image: url(${bg});
  background-size: cover;
`;

export const SigninContainer = styled.form`
  opacity: 0;
  animation: ${fadeInLeft} 1s 0.1s 1 running forwards;
  width: 50rem;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .SignIn {
    margin-top: 10rem;
    margin-bottom: 5rem;
    font-family: 'S-CoreDream-6Bold';
    font-size: 45px;
    color: #566270;
  }
  .signup {
    cursor: pointer;
    width: 320px;
    text-align: left;
  }
`;

export const InputLabel = styled.input`
  margin-bottom: 2rem;
  width: 20rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  border-bottom: 1px solid;

  font-size: 20px;
  font-family: 'S-CoreDream-3Light';

  padding: 3px 5px;

  &:active {
    border: 1 solid black;
  }
`;

export const SigninBtn = styled.button`
  width: 21rem;
  height: 3rem;
  font-family: 'S-CoreDream-3Light';
  background-color: #a48fe0;
  color: #fffff3;
  border: none;
  &:focus {
    animation: ${clickedBtn} 1s 0.1s 1 running normal;
  }
`;
export const Background = styled.div`
  width: 100%;
  height: 100vh;
`;
