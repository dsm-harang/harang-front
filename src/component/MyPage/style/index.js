import styled from 'styled-components';
import {
  fullStar,
  emptyStar,
  calenderIcon,
  report,
} from '../../../assets/Mypage';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;

export const MypageUserName = styled.p`
  font-size: 30px;
  font-weight: 100;
`;

export const MypageWrapper = styled.div`
  padding: 22px;
  border: 1px solid #707070;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Profile = styled.div`
  width: 600px;
  height: 170px;
  padding: 22px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const ProfileReport = styled.div`
  > div {
    display: flex;
    align-items: center;
    transform: translateY(10px);
    cursor: pointer;
    p {
      font-size: 11px;
    }
    div {
      background-image: url(${report});
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }
  }
  display: flex;
  align-items: flex-end;
`;

export const MypageDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px 0px;
  box-sizing: border-box;
  justify-content: center;
  background-color: #f1f1f1;
  > div {
    margin: 0 auto;
    display: flex;
    width: 1250px;
  }
`;

export const inputFile = styled.input`
  display: none;
`;

export const MypageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 90px;
`;

export const MypageUser = styled.div`
  display: flex;
`;

export const MypageProfileDataWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 30px;
`;

export const MypageSubmitButton = styled.button`
  height: 40px;
  color: white;
  background-color: #a48fe0;
  font-size: 20px;
  font-weight: 100;
  padding: 5px 20px;
  box-sizing: border-box;
`;

export const MypageButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const MypageContent = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.16);
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MypageContentText = styled.p`
  font-size: 20px;
  margin-right: 30px;
`;

export const Notice = styled.div`
  width: 600px;
  height: 700px;
  padding: 22px;
  padding-bottom: 50px;
  box-sizing: border-box;
  background-color: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MypageNoticeWrapper = styled.div`
  margin-left: 50px;
  position: relative;
`;

export const Storage = styled.div`
  width: 600px;
  height: 500px;
  padding: 22px;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: white;
  > div {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    height: 100%;
  }
  > p {
    font-size: 20px;
    font-weight: 100;
    margin: 5px;
  }
`;

export const MypageStoargeWrapper = styled.div`
  margin-top: 30px;
`;

export const MypageStoargeContent = styled.div`
  font-size: 20px;
`;

export const FullStar = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${fullStar});
  margin-right: 7px;
  background-size: cover;
`;

export const EmptyStar = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${emptyStar});
  margin-right: 7px;
  background-size: cover;
`;

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const StarDiv = styled.div`
  display: inline-block;
`;

export const Comment = styled.div`
  width: 100%;
  min-height: 30em;
  padding: 50px;
  box-sizing: border-box;
  background-color: white;
  margin-top: 50px;
  height: 500px;
  > div {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    height: 100%;
  }
`;

export const CommentNameAndStarWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin: 5px;
  }
`;

export const AnotherPersonComment = styled.div`
  width: 600px;
  height: 700px;
  padding: 22px;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: white;
  margin-left: 50px;
  > div {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    height: 100%;
  }
  > p {
    font-size: 20px;
    font-weight: 100;
    margin: 5px;
  }
`;

export const CommentContent = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const CommentContentUserName = styled.p`
  font-size: 18px;
  margin: 5px;
  display: inline-block;
`;

export const CommentContentText = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f1f1f1;
  padding: 10px;
  box-sizing: border-box;
`;

export const CommentFullStar = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${fullStar});
  margin-right: 7px;
  background-size: cover;
`;

export const CommentEmptyStar = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${emptyStar});
  margin-right: 7px;
  background-size: cover;
`;

export const CalenderButton = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 20px 20px 0px 0px;
  background-color: #a48fe0;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
`;

export const CalenderIconImg = styled.div`
  background-image: url(${calenderIcon});
  width: 50px;
  height: 50px;
  background-size: cover;
  margin: 20px;
`;

export const MypageAddImg = styled.div`
  div {
    width: 10px;
    height: 70px;
    transform: rotate(90deg);
    background-color: white;
    border-radius: 10px;
  }
  width: 10px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
`;

export const MypageAddImgBackground = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  border-radius: 90px;
  &:hover {
    opacity: 0.7;
    background-color: black;
  }
`;

export const MypageUserImg = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;
