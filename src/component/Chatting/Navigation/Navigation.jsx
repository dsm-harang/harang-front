import React, { useCallback } from 'react';
import * as S from '../style';

const Navigation = ({
  chattingList,
  checkedChattingId,
  checkedChattingIdChange,
  socket,
}) => {
  const setChattingList = useCallback(
    (chattingList, checkedChattingId) => {
      return chattingList.map(chatting => {
        const chattingNavigationContentClickHandler = () => {
          checkedChattingIdChange(chatting.id, socket);
        };
        return (
          <S.ChattingNavigationContent
            isChecked={checkedChattingId === chatting.id}
            onClick={chattingNavigationContentClickHandler}
            key={chatting.id}
          >
            {chatting.name}
          </S.ChattingNavigationContent>
        );
      });
    },
    [socket],
  );
  return (
    <S.ChattingNavigation>
      <S.ChattingHeader>채팅</S.ChattingHeader>
      <S.ChattingNavigationWrapper>
        {setChattingList(chattingList, checkedChattingId)}
      </S.ChattingNavigationWrapper>
    </S.ChattingNavigation>
  );
};

export default Navigation;
