import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Mypage,
  Chatting,
  ErrorPage,
  MainPage,
  SearchPage,
  SignIn,
  SignUp,
} from '../';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mypage" component={Mypage} />
        <Route path="/chatting" component={Chatting} />
        <Route path="/main" component={MainPage} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/login" component={SignIn} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
