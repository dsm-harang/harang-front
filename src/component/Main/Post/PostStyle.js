import styled from 'styled-components';

export const Container = styled.div`
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
  width: 19rem;
  height: 15rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'S-CoreDream-3Light';
  color: #566270;
  .title {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: 'S-CoreDream-6Bold';
  }
  .content {
    margin: 0.5rem 0;
  }
  .info {
    width: 15rem;
    i {
      margin-right: 0.5rem;
    }
    div {
      height: 1.5rem;
      width: 15rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      overflow: hidden;
    }
  }
  .tags {
    font-size: 0.8rem;
    display: flex;
    position: relative;
    margin-right: 8rem;
  }
  .date {
    width: 200px;
    margin-top: 5px;
    margin-right: 25rem;
    font-size: 0.5rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      object-fit: cover;
    }
    p {
      font-size: 0.8rem;
      font-family: 'S-CoreDream-3Light';
      margin: 0.1rem;
      color: white;
    }
    .gotoProfile {
      font-size: 0.1rem;
      font-family: 'S-CoreDream-3Light';
      margin-top: 1rem;
      cursor: pointer;
      color: white;
    }
  }
`;

export const Button = styled.button`
  font-family: 'S-CoreDream-6Bold';
  font-size: 10px;
  background-color: ${({ color }) => color};
  width: 6.5rem;
  height: ${({ isMypost }) => (isMypost ? '2rem' : ' 4.5rem')};
  margin-top: 0.5rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  color: white;
`;
export const HashTag = styled.div`
  margin-right: 0.5rem;
  margin-top: 2.5rem;
`;
