import React from 'react';
import * as S from '../../style';

const ChattingLog = ({ isMine, text, user }) => {
  return (
    <S.ChattingLog isMine={isMine}>
      <p>{user}</p>
      <div>{text}</div>
    </S.ChattingLog>
  );
};

export default ChattingLog;
