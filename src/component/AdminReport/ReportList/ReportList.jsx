import React from 'react';

const ReportList = ({
  reportList,
  deleteContent,
  Component,
  compRef,
  deletePostInDatabase,
}) => {
  return (
    <Component
      reportList={reportList}
      deleteContent={deleteContent}
      ref={compRef}
      deletePostInDatabase={deletePostInDatabase}
    />
  );
};

export default ReportList;
