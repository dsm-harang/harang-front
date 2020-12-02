import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const navigationContentList = [
  {
    id: 'report',
    title: '신고 접수',
    url: '/admin',
  },
];

const AdminNavigation = ({ selectedContentId }) => {
  const history = useHistory();
  const setNavigationContent = useCallback(
    selectedContentId => {
      return navigationContentList.map(content => {
        if (content.id === selectedContentId) {
          return (
            <S.AdminNavigationSelectedContent
              onClick={() => history.push(content.url)}
              key={content.url}
            >
              {content.title}
            </S.AdminNavigationSelectedContent>
          );
        }
        return (
          <S.AdminNavigationContent
            onClick={() => history.push(content.url)}
            key={content.url}
          >
            {content.title}
          </S.AdminNavigationContent>
        );
      });
    },
    [navigationContentList],
  );
  return (
    <S.AdminNavigation>
      <div>
        <S.AdminNavigationTitle>HARANG ADMIN</S.AdminNavigationTitle>
        {setNavigationContent(selectedContentId)}
      </div>
      <S.AdminNavigationFooterButton>로그아웃</S.AdminNavigationFooterButton>
    </S.AdminNavigation>
  );
};

export default AdminNavigation;
