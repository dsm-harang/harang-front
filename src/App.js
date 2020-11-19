import React from 'react';
import Router from './component/Router';

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
  return <Router />;
}

export default App;
