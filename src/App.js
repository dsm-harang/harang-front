import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Mypage } from './component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mypage" component={Mypage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
