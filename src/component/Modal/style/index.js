import styled, { keyframes } from 'styled-components';
import { checkbox_able, checkbox_disable } from '../../../assets/Modal';
import { fullStar, emptyStar } from '../../../assets/Mypage';

const modalFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(-20px);
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
`;

export const Modal = styled.div`
  background-color: white;
`;

export const RequestModal = styled(Modal)`
  width: 600px;
  height: 700px;
  padding: 40px;
  box-sizing: border-box;
  & > div {
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    height: 500px;
    overflow-y: scroll;
  }
  & > div::-webkit-scrollbar {
    display: none;
  }
`;

export const RequestModalApproveButton = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 90px;
  background-color: #a48fe0;
  color: white;
  font-size: 30px;
  font-weight: 100;
`;

export const ReviewModal = styled(Modal)`
  width: 600px;
  height: 700px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  animation-direction: normal;
  animation-duration: 0.3s;
  animation-name: ${modalFade};
  animation-fill-mode: forwards;
`;

export const ReviewButton = styled.div`
  width: 110px;
  height: 40px;
  background-color: #a48fe0;
  color: white;
  font-weight: 100;
  font-size: 18px;
  margin-left: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #707070;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  & > label {
    margin-left: 70px;
  }
  & > label > input[type='checkbox'] {
    display: none;
  }
  & > label > div {
    width: 35px;
    height: 35px;
    background-image: url(${checkbox_disable});
  }

  & > label > input:checked + div {
    background-image: url(${checkbox_able});
  }
`;

export const BoardContentText = styled.p`
  font-size: 20px;
  margin: 0px 30px;
`;

export const BoardUserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 1px solid #606060;
`;

export const BoardButton = styled.div`
  width: auto;
  height: 40px;
  background-color: #a48fe0;
  color: white;
  border: none;
  padding: 0px 20px;
`;

export const FullStar = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${fullStar});
  margin-left: 7px;
`;

export const EmptyStar = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${emptyStar});
  margin-left: 7px;
`;

export const RequestStarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReportModal = styled.div`
  width: 500px;
  height: 350px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
`;

export const ReportModalTextArea = styled.textarea`
  width: 100%;
  height: 250px;
  background-color: #f1f1f1;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
`;

export const ReportModalButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #a48fe0;
  color: white;
  border: none;
  outline: none;
  margin-top: 6px;
`;

export const ModalDelete = styled.div`
  width: 2px;
  height: 15px;
  background-color: white;
  transform: rotate(135deg);
  > div {
    content: '';
    width: 2px;
    height: 15px;
    background-color: white;
    transform: rotate(90deg);
  }
`;

export const ModalDeleteWrapper = styled.div`
  animation-direction: normal;
  animation-duration: 0.3s;
  animation-name: ${modalFade};
  animation-fill-mode: forwards;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const ReviewModalContent = styled.div`
  position: absolute;
  display: ${props => (props.isAble ? 'block' : 'none')};
  width: 500px;
  height: 400px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  z-index: 10;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0px 1px 2px 0px #aaaaaa;
  > div.wrapper {
    display: flex;
    > div {
      padding: 10px;
      box-sizing: border-box;
    }
  }
`;

export const ReviewModalContentTextArea = styled.textarea`
  width: 100%;
  height: 230px;
  margin: 10px 0px;
  background-color: #f1f1f1;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
`;

export const ReviewModalContentImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 1px solid #f0f0f0;
`;

export const ReviewModalContentName = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;

export const ReviewModalButton = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  border: 0px;
  margin: 10px 0px;
  background-color: #a48fe0;
`;
