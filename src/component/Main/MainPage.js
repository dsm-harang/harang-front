import React, { useState } from 'react';
import Mainheader from './Header/MainHeader';
import Slide from './Slide/Slide';
import MyInfo from './MyInfo/MyInfo';
import PostContainer from './Post/PostContainer';
import { getRequest } from '../../lib/api/api';
const MainPage = () => {
  const myData = getRequest().get('/mypage');
  return (
    <>
      <Mainheader />
      <Slide />
      <MyInfo myData={myData} />
      <PostContainer myData={myData} />
    </>
  );
};

export default MainPage;
