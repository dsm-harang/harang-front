import React from 'react';
import * as S from '../../style';

const ChattingInput = ({ sendChatting }) => {
  return (
    <S.ChattingInputWrapper>
      <S.ChattingInput />
      <S.ChattingMessageSendButton />
    </S.ChattingInputWrapper>
  );
};

export default ChattingInput;
