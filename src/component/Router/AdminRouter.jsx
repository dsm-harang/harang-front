import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminNavigation from '../Default/AdminNavigation';
import { AdminPost, AdminUserDetail } from '../';
import { WithCheckAdmin } from '../HOC';

const AdminRouter = () => {
  const [selectedContentId, selectedContentIdChange] = useState('user');
  return (
    <>
      <AdminNavigation selectedContentId={selectedContentId} />
      <Switch>
        <Route
          path="/admin/user/:userId"
          render={() => (
            <AdminUserDetail
              selectedContentIdChange={selectedContentIdChange}
            />
          )}
        />
        <Route
          exact
          path="/admin"
          render={() => (
            <AdminPost selectedContentIdChange={selectedContentIdChange} />
          )}
        />
      </Switch>
    </>
  );
};

export default WithCheckAdmin()(AdminRouter);
