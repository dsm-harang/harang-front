import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Mypage, Chatting, ErrorPage } from '../';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mypage" component={Mypage} />
        <Route path="/chatting" component={Chatting} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
