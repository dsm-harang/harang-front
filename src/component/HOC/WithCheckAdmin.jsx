import React, { useCallback, useEffect } from 'react';
import { getAdminReportPostList } from '../../lib/api/Admin';
import { useHistory } from 'react-router-dom';

const WithCheckAdmin = () => Component => {
  const HOC = () => {
    const history = useHistory();
    const errorHandler = ({ response: { data } }) => {
      if (data.status === 404 || data.status === 401) {
        history.push('/admin/login');
      }
    };
    getAdminReportPostList().catch(error => {
      errorHandler(error);
    });
    return <Component />;
  };
  return HOC;
};

export default WithCheckAdmin;
