import React from 'react';
import * as S from '../../style';

const ReportModal = ({ requestFunction, data, onDelete }) => {
  const [reportText, reportTextChange] = useState('');
  const textAreaChangeHandler = useCallback(e => {
    reportTextChange(e.target.value);
  }, []);
  const sendReportButtonClickHandler = useCallback(async () => {
    try {
      const newFormData = new FormData();
      newFormData.append('content', reportText);
      await requestFunction(data, newFormData);
      onDelete();
      alert('신고 되었습니다.');
    } catch (error) {
      if (!error) alert('인터넷 연결을 확인해 주세요.');
      if (error.response.data.status === 409) {
        alert('이미 신고한 회원입니다.');
        onDelete();
      } else {
        alert('일시적인 에러가 발생하였습니다. 다시 시도해 주세요.');
        onDelete();
      }
    }
  }, [data, reportText]);
  return (
    <S.ReportModal>
      <S.ReportModalTextArea />
      <S.ReportModalButton>신고하기</S.ReportModalButton>
    </S.ReportModal>
  );
};

export default ReportModal;
