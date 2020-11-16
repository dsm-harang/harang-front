import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 7rem;

  .header {
    width: 75rem;
    height: 1rem;
    margin: auto;
    padding: 1rem 1rem;
    background-color: #566270;
    color: #fffff3;
    font-family: 'S-CoreDream-3Light';
  }
`;
export const Posts = styled.div`
  margin: 0 11rem;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

export const WriteButton = styled.button`
  width: 6rem;
  height: 6rem;

  position: fixed;
  right: 4rem;
  bottom: 4rem;

  background-color: #a48fe0;
  border-radius: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'S-CoreDream-3Light';
  font-size: 1.3rem;
  color: #fffff3;

  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.4);
`;
