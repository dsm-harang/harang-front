import React, { useState } from 'react';
import * as S from '../../style';

const ChattingInput = ({ sendChatting }) => {
  const [input, inputChange] = useState('');
  const sendChattingAndResetInput = input => {
    if (input.length >= 0) {
      sendChatting(input);
      inputChange('');
    }
  };
  const buttonClickHandler = () => {
    sendChattingAndResetInput(input);
  };
  const inputKeyPressHandler = ({ key, target: { value } }) => {
    if (key === 'Enter') {
      sendChattingAndResetInput(value);
    }
  };
  const inputChangeHandler = ({ target: { value } }) => {
    inputChange(value);
  };
  return (
    <S.ChattingInputWrapper>
      <S.ChattingInput
        onChange={inputChangeHandler}
        onKeyPress={inputKeyPressHandler}
        value={input}
      />
      <S.ChattingMessageSendButton onClick={buttonClickHandler} />
    </S.ChattingInputWrapper>
  );
};

export default ChattingInput;
