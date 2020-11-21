import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Mypage, Chatting } from './component';
import SignUp from './component/SignUp/SignUp';
import MainPage from './component/Main/MainPage';
import SignIn from './component/Signin/Signin';
import SearchPage from './component/Main/SearchPage';
import { createGlobalStyle } from 'styled-components';

const FontSetting = createGlobalStyle`
body{
   @font-face {
    font-family: "S-CoreDream-3Light";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream-6Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
}`;

function App() {
  return (
    <BrowserRouter>
      <FontSetting />
      <Switch>
        <Route path="/mypage" component={Mypage} />
        <Route path="/chatting" component={Chatting} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={MainPage} />
        <Route path="/login" component={SignIn} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
