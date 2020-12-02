import React, { useState } from 'react';
import {
  Overlay,
  Global,
  ReportContainer,
  ReportInputLabel,
  ReportButton,
} from './ModalStyle';
import { getRequest } from '../../../../lib/api/api';
const ReportModal = ({ setReportVisible, postId }) => {
  const [reason, setReason] = useState();

  const onReportSubmit = e => {
    e.preventDefault();
    const content = new FormData();
    content.append('content', reason); /*= {
      content: reason,
    };*/
    getRequest()
      .post(`/user/report/${postId}`, content)
      .then(alert('신고가 접수되었습니다'))
      .catch(alert)
      .then(setReportVisible(false));
  };

  return (
    <div>
      <Overlay onClick={e => setReportVisible(false)} />
      <Global />
      <ReportContainer>
        <ReportInputLabel
          placeholder="신고사유"
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
        <ReportButton type="submit" onClick={onReportSubmit}>
          제출하기
        </ReportButton>
      </ReportContainer>
    </div>
  );
};

export default ReportModal;
