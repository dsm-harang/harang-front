import styled from 'styled-components';
import {
  AdminDefaultList,
  AdminDefaultListHeader,
  AdminReportTitle,
} from '../../AdminReport/style';

export const AdminUserDetail = styled.div`
  width: calc(100% - 230px);
  min-width: 940px;
  min-height: 100vh;
  margin-left: 230px;
  background-color: #f1f1f1;
`;

export const AdminUserDetailBody = styled.div`
  width: 100%;
  padding: 60px;
  padding-top: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
  > div {
    width: 100%;
    min-width: 900px;
  }
`;

export const AdminUserInfo = styled.div`
  width: 100%;
  height: 230px;
  padding: 25px 40px;
  max-width: 1300px;
  box-sizing: border-box;
  display: flex;
  background-color: white;
  margin-bottom: 30px;
  justify-content: center;
`;

export const AdminUserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

export const AdminUserName = styled.div`
  font-size: 30px;
`;

export const AdminUserId = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const AdminUserStar = styled.div`
  font-size: 35px;
  font-weight: 500;
`;

export const AdminUserReportCount = styled.div`
  font-size: 35px;
`;

export const AdminUserInfoContentDiv = styled.div`
  margin: 30px 50px;
  text-align: center;
  width: 145px;
  flex-shrink: 0;
`;

export const AdminUserControlButton = styled.button`
  margin: 0px;
  border: 0px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  width: 140px;
  height: 60px;
  background-color: white;
  margin: 5px;
`;

export const AdminUserControlWaringButton = styled(AdminUserControlButton)`
  color: red;
`;

export const AdminUserInfoHeader = styled.h1`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const AdminUserReportHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  color: #566270;
`;

export const AdminReportList = styled(AdminDefaultList)`
  width: 100%;
  max-width: 1300px;
`;
export const AdminReportListHeader = styled(AdminDefaultListHeader)``;

export const AdminDetailTitle = styled(AdminReportTitle)`
  padding: 60px 0px;
  padding-bottom: 30px;
  max-width: 1300px;
  width: 100%;
`;

export const AdminReportListContent = styled.div`
  width: 100%;
  min-height: 130px;
  background-color: #f1f1f1;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px 0px;
  > .name {
    font-size: 20px;
  }
  > .report {
    font-size: 16px;
  }
`;

export const AdminReportListContentDiv = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

export const AdminReportListContentName = styled.div`
  font-size: 22px;
`;
