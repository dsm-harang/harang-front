import React, { useState, useEffect } from 'react';
import { Header } from './SearchPageStyle';
import Mainheader from './Header/MainHeader';
import { getRequest } from '../../lib/api/api';
import { Posts } from './Post/PostContainerStyle';
import Post from './Post/Post';

import PostModal from './Post/Modal/PostModal';
import EditModal from './Post/Modal/EditModal';
import WriteModal from './Post/Modal/WriteModal';
import ReportModal from './Post/Modal/ReportModal';

const SearchPage = props => {
  const [postList, setPostList] = useState();
  const [postVisible, setPostVisible] = useState(false);
  const [writingVisible, setWritingVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [postId, setPostId] = useState();
  const tag = props.location.state.search;
  // useEffect(() => {
  //   getRequest()
  //     .post('/post/tag', tag)
  //     .then(res => setPostList(res.data));
  // }, []);
  return (
    <>
      {reportVisible && <ReportModal setReportVisible={setReportVisible} />}
      {writingVisible && (
        <WriteModal setWritingVisible={setWritingVisible} postId={postId} />
      )}
      {editVisible && (
        <EditModal setEditVisible={setEditVisible} postId={postId} />
      )}
      {postVisible && (
        <PostModal setPostVisible={setPostVisible} postId={postId} />
      )}
      <Mainheader />
      <Header>{tag}의 검색 결과</Header>
      <Posts>
        <Post />
      </Posts>
    </>
  );
};

export default SearchPage;
