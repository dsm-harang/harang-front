import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  font-family: 'S-CoreDream-3Light';
  margin-top: 5rem;
  display: flex;
  justify-content: center;

  section {
    border: 1px solid black;
    box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.3);
    width: 65rem;
    height: 10rem;
    display: flex;
    align-items: center;
  }
  .mypage {
    color: #8699af;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
  .fas,
  .far {
    font-size: 1rem;
    margin: 0 0.3rem;
  }

  .alarm {
    margin: 0.3rem 1rem;
    font-size: 0.8rem;
  }
`;
export const ProfileImg = styled.img`
  margin-left: 20px;
  border-radius: 100%;
  background-color: gray;
  width: 6em;
  height: 6em;
`;
export const MyProfile = styled.div`
  display: flex;
  align-items: center;
  .mypage {
    text-decoration: none;
    margin-bottom: 0.2rem;
    margin-top: 0;
  }
`;

export const UserName = styled.p`
  font-size: 1.3rem;
  margin-left: 1rem;
  padding-right: 0.5rem;
  background-color: white;
  border-right: 1px solid #c7c7c7;
`;
export const Stars = styled.div`
  display: flex;
  margin-left: 1rem;
  top: -10rem;
`;

export const CurrentTags = styled.div`
  width: 40rem;
  height: 8rem;
  margin-left: 3rem;
  border-left: 1px solid #cccfd4;
  .tagTitle {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .tags {
    display: flex;
    margin-left: 1rem;
    width: 100%;
    flex-wrap: wrap;
  }
`;
export const Tag = styled.div`
  color: #a48fe0;
  border: 0.3px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 3px 8px;
  margin: 5px 5px;
`;
