import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
{
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0)
  }
  100% {
    opacity: 1;
    transform: none
  }
}`;

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

export const Container = styled.div`
  opacity: 0;
  animation: ${fadeInDown} 1.5s 0.1s 1 running forwards;

  margin-top: 1rem;
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin: 1rem 0;
  color: #a48fe0;
  font-family: 'S-CoreDream-6Bold';
  font-size: 3rem;
`;
export const SignUpBox = styled.div`
  width: 30rem;
  padding: 1rem 0;
  padding-bottom: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
  color: #566270;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.div`
  width: 100%;
  font-size: 1.3rem;
  margin-top: 1rem;
  font-family: 'S-CoreDream-3Light';
`;
export const WriteLabel = styled.input`
  box-sizing: border-box;
  padding: 1rem 1rem;
  border: none;
  outline: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 3rem;
  font-family: 'S-CoreDream-3Light';
`;

export const Button = styled.button`
  font-family: 'S-CoreDream-3Light';
  margin: 1rem 0;
  background-color: #a48fe0;
  color: #fffff3;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  padding: 0 0.5rem;
  font-size: 1rem;

  &:focus {
    animation: ${clickedBtn} 1s 0.1s 1 running normal;
  }
`;

export const ProfileImage = styled.input`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  outline: none;
  border: none;
  background-color: gray;
  margin: 2rem;

  background-image: url(${props => props.profile});
  background-size: contain;
`;
