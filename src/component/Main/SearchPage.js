import React, { useState, useEffect } from 'react';
import { Header } from './SearchPageStyle';
import Mainheader from './Header/MainHeader';
import { getRequest } from '../../lib/api/api';
import { Posts } from './Post/PostContainerStyle';
import Post from './Post/Post';

import WriteModal from './Post/Modal/WriteModal';
import ReportModal from './Post/Modal/ReportModal';

const SearchPage = ({ location }) => {
  const [postList, setPostList] = useState([]);
  const [writingVisible, setWritingVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [postId, setPostId] = useState();

  console.log(location);
  const tag = location.search.replace('?', '');

  useEffect(() => {
    getRequest()
      .get(`/search/tag`)
      .then(res => setPostList(res.data));
  }, []);

  return (
    <>
      {reportVisible && <ReportModal setReportVisible={setReportVisible} />}
      {writingVisible && (
        <WriteModal setWritingVisible={setWritingVisible} postId={postId} />
      )}
      <Mainheader />
      <Header>'{tag}' 의 검색 결과</Header>
      <Posts>
        {Array.prototype.map.call(postList, (e, i) => {
          const tags = e.tag.split('#');
          tags.shift();
          return (
            <Post
              setReportVisible={setReportVisible}
              setPostId={setPostId}
              key={i}
              data={e}
              isMyPost={e.isMine}
              tag={tags}
            />
          );
        })}
      </Posts>
    </>
  );
};

export default SearchPage;
