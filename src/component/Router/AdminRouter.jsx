import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminNavigation from '../Default/AdminNavigation';
import { AdminPost, AdminUserSearch, AdminUserDetail, ErrorPage } from '../';

const AdminRouter = () => {
  const [selectedContentId, selectedContentIdChange] = useState('user');
  return (
    <>
      <BrowserRouter>
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
            selectedContentIdChange={selectedContentIdChange}
          />
        </Switch>
        <Route path="*" component={ErrorPage} />
      </BrowserRouter>
    </>
  );
};

export default AdminRouter;
