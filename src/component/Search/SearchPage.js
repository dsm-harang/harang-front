import React, { useState, useEffect } from 'react';
import { Header } from './SearchPageStyle';
import Mainheader from '../Main/Header/MainHeader';
import { getRequest, getUrl } from '../../lib/api/api';
import { Posts } from '../Main/Post/PostContainerStyle';
import Post from '../Main/Post/Post';

import WriteModal from '../Main/Post/Modal/WriteModal';
import ReportModal from '../Main/Post/Modal/ReportModal';

const SearchPage = ({ location }) => {
  const [postList, setPostList] = useState([]);
  const [writingVisible, setWritingVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [postId, setPostId] = useState();
  const [tag, setTag] = useState(location.search.replace('?', ''));

  useEffect(() => {
    const searchUrl = getUrl('/search/tag', location.search.replace('?', ''));
    setTag(location.search.replace('?', ''));
    console.log(searchUrl);
    getRequest()
      .get(searchUrl)
      .then(res => setPostList(res.data))
      .catch(
        err => err.response.status === 404 && alert('검색 결과가 없습니다'),
      );
  }, [location]);

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
              isMyPost={e.mine}
              tag={tags}
            />
          );
        })}
      </Posts>
    </>
  );
};

export default SearchPage;
