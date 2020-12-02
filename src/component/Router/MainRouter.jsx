import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Mypage,
  Chatting,
  ErrorPage,
  MainPage,
  SignIn,
  SignUp,
  SaerchPage,
} from '../';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/mypage/:id" component={Mypage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/chatting" component={Chatting} />
      <Route path="/main" component={MainPage} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/search/:keyword?" component={SaerchPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default MainRouter;
