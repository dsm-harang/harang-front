import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainRouter from './MainRouter';
import AdminRouter from './AdminRouter';
import { ErrorPage } from '../';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/404" component={ErrorPage} />
      <Route path="/admin" component={AdminRouter} />
      <Route path="/" component={MainRouter} />
    </Switch>
  </BrowserRouter>
);

export default Router;
