import React, { useState } from 'react';
import Mainheader from './Header/MainHeader';
import Slide from './Slide/Slide';
import MyInfo from './MyInfo/MyInfo';
import PostContainer from './Post/PostContainer';

const MainPage = () => {
  return (
    <>
      <Mainheader />
      <Slide />
      <MyInfo />
      <PostContainer />
    </>
  );
};

export default MainPage;
