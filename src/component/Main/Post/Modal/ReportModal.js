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
    e.preventdefault();
    const content = new FormData();
    content.append('content', reason);
    getRequest().post(`/post/report/${postId}`, content);
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
