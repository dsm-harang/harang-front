import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Mypage, Chatting } from './component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mypage" component={Mypage} />
        <Route path="/chatting" component={Chatting} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
