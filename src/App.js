import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Mypage, Chatting } from './component';
import SignUp from './component/SignUp/SignUp';
import MainPage from './component/Main/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mypage" component={Mypage} />
        <Route path="/chatting" component={Chatting} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
