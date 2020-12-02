import styled from 'styled-components';

export const AdminNavigation = styled.div`
  height: 100vh;
  width: 230px;
  background-color: #566270;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  z-index: 100;
`;

export const AdminNavigationTitle = styled.h1`
  width: 100%;
  font-size: 40px;
  color: white;
  margin-bottom: 80px;
`;

export const AdminNavigationContent = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  background-color: #566270;
  font-size: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  color: white;
  cursor: pointer;
`;

export const AdminNavigationSelectedContent = styled(AdminNavigationContent)`
  background-color: #a48fe0;
`;

export const AdminNavigationFooterButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  align-self: flex-end;
`;
