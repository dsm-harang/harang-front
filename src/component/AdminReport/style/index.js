import styled from 'styled-components';

export const AdminReport = styled.div`
  width: calc(100% - 230px);
  min-width: 940px;
  min-height: 100vh;
  margin-left: 230px;
  background-color: #f1f1f1;
`;

export const AdminReportBody = styled.div`
  width: 100%;
  padding: 60px;
  padding-top: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  > div {
    width: 100%;
    min-width: 800px;
    max-width: 1200px;
    overflow-x: hidden;
  }
`;

export const AdminReportListWrapper = styled.div`
  width: 200%;
  height: 100%;
  display: flex;
`;

export const AdminReportHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  box-sizing: border-box;
  > div {
    max-width: 1200px;
    padding: 0 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AdminReportTitle = styled.h1`
  font-size: 50px;
  color: #566270;
  font-weight: 400;
`;

export const AdminDefaultList = styled.div`
  width: 100%;
  min-width: 800px;
  height: 70vh;
  min-height: 700px;
  background-color: white;
  overflow: hidden;
`;

export const AdminDefaultListHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 30px;
  font-weight: 200;
  background-color: white;
  box-sizing: border-box;
`;

export const AdminDefaultListContentDiv = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  color: #566270;
  overflow-y: scroll;
`;

export const AdminDefaultListContent = styled.div`
  width: 100%;
  height: 71.5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 20px;
  font-weight: 100;
`;

export const AdminPostListContent = styled(AdminDefaultListContent)`
  width: 100%;
  height: 71.5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 20px;
  font-weight: 100;
  > .id {
    padding: 0px 10px;
    box-sizing: border-box;
    width: 10%;
  }
  > .title {
    width: 30%;
  }
  > .writer {
    width: 15%;
  }
  > .date {
    width: 45%;
    display: flex;
    align-items: center;
    > p {
      margin-right: 40px;
    }
  }
`;

export const AdminUserReportListContent = styled(AdminPostListContent)`
  > .name {
    width: 20%;
  }
  > .targetUserId {
    width: 20%;
  }
  > .date {
    width: 20%;
    display: block;
  }
  > .reason {
    width: 30%;
    display: flex;
    align-items: center;
  }
`;

export const AdminUserReportListHeaderContent = styled(
  AdminUserReportListContent,
)`
  width: 100%;
  height: 50px;
`;

export const AdminPostReportListHeaderContent = styled(AdminPostListContent)`
  width: 100%;
  height: 50px;
`;

export const AdminReportReportListHeaderContent = styled(AdminPostListContent)`
  width: 100%;
  height: 50px;
`;

export const AdminReportReportListButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: white;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  color: black;
  margin-left: 20px;
`;

export const AdminReportReportWaringListButton = styled(
  AdminReportReportListButton,
)`
  color: red;
`;

export const AdminReportListMoveButton = styled.div`
  width: 24px;
  height: 40px;
  transform: ${props => (props.page === 1 ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: all 0.75s;
  > div.top {
    width: 2px;
    height: 20px;
    background-color: black;
    transform: translate(10px, 3px) rotate(315deg);
  }
  > div.bottom {
    width: 2px;
    height: 20px;
    background-color: black;
    transform: translate(10px, -4px) rotate(45deg);
  }
`;
