import styled, { css } from 'styled-components';
import { sendMessage } from '../../../assets/Chatting';
import {
  fullStar,
  emptyStar,
  fiveEmptyStar,
  fiveFullStar,
} from '../../../assets/Mypage';

export const Chatting = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ChattingNavigation = styled.div`
  width: 20%;
  min-width: 300px;
  height: 100%;
  border-right: 1px solid #606060;
`;

export const ChattingNavigationWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: scroll;
`;

export const ChattingMain = styled.div`
  width: 80%;
  min-width: 1200px;
  height: 100%;
  > div.wrapper {
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
  }
`;

export const ChattingHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #a48fe0;
  color: white;
  font-size: 35px;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
`;

export const ChattingNavigationContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: scroll;
`;

export const ChattingNavigationContent = styled.div`
  width: calc(100% - 40px);
  height: 60px;
  background-color: white;
  transition: all 0.3s;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0px 1px 2px 0px #aaaaaa;
  cursor: pointer;
  &:hover {
    background-color: #a48fe0;
    color: white;
  }
  ${props =>
    props.isChecked &&
    css`
      background-color: #a48fe0;
      color: white;
    `};
`;

export const ChattingLogWrapper = styled.div`
  width: 70%;
  height: 100%;
  > div:first-child {
    overflow-y: scroll;
    height: calc(100% - 80px);
  }
`;

export const ChattingInputWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChattingInput = styled.input`
  width: 800px;
  height: 40px;
  background-color: #f1f1f1;
  outline: none;
  border: none;
  border-radius: 50px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const ChattingLogList = styled.div`
  width: 70%;
  min-width: 800px;
`;

export const ChattingLog = styled.div`
  width: 100%;
  border-radius: 100px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
  > p {
    width: 100%;
    margin-right: 10px;
  }
  > div {
    min-height: 30px;
    align-items: center;
    padding: 5px;
    display: flex;
    border-radius: 100px;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    padding: 10px 20px;
    box-sizing: border-box;
    max-width: 300px;
  }
  ${props =>
    props.isMine
      ? css`
          color: white;
          justify-content: flex-end;
          > div {
            margin-right: 10px;
            background-color: #a48fe0;
          }
          > p {
            margin-right: 10px;
            text-align: right;
            color: white;
          }
        `
      : css`
          justify-content: flex-start;
          color: black;
          > div {
            margin-left: 10px;
            background-color: #f1f1f1;
          }
          > p {
            margin-left: 10px;
            text-align: left;
          }
        `};
`;

export const ChattingMessageSendButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${sendMessage});
  background-size: cover;
  margin-left: 20px;
`;

export const ChattingJoinMember = styled.div`
  min-width: 400px;
  height: 100%;
  width: 30%;
  border-left: 1px solid #606060;
  padding: 20px;
  box-sizing: border-box;
`;

export const ChattingJoinMemberContent = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 2px #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  > p {
    font-size: 20px;
    margin-right: 30px;
  }
  > img {
    margin-right: 10px;
  }
`;

export const ChattingJoinMemberImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ChattingStarDiv = styled.div`
  display: inline-block;
`;

export const ChattingFullStar = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${fullStar});
  margin-right: 7px;
  background-size: cover;
`;

export const ChattingEmptyStar = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${emptyStar});
  margin-right: 7px;
  background-size: cover;
`;
