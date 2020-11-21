import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SigninContainer = styled.form`
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
  margin-bottom: 3rem;
  width: 20rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  border: none;
  border-bottom: 3px solid;

  font-size: 20px;
  font-family: 'S-CoreDream-3Light';

  padding: 3px 5px;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const SigninBtn = styled.button`
  width: 21rem;
  height: 3rem;
  font-family: 'S-CoreDream-3Light';
  background-color: #a48fe0;
  color: #fffff3;

  outline: none;
  border: none;
`;
export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #566270;
`;
