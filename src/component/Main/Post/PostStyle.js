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
  position: relative;
  font-family: 'S-CoreDream-3Light';
  color: #566270;
  .title {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: 'S-CoreDream-6Bold';
    width: 250px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
  }
  .content {
    width: 250px;
    text-align: center;
    margin: 0.5rem 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
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
    margin-right: 8rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  .date {
    width: 200px;
    position: absolute;
    bottom: -1rem;
    left: -10rem;
    font-size: 0.5rem;
  }
`;
export const Sides = styled.div`
  width: 6.5rem;
  height: 15rem;
  margin-left: 0.5rem;
  .writer {
    width: 60px;
  }
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
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      overflow: hidden;
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

export const ReportButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 5rem;
  height: 1rem;
  background-color: white;
  color: red;
`;
