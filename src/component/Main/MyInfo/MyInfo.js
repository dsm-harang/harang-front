import React, { useEffect, useState } from 'react';
import {
  Container,
  MyProfile,
  UserName,
  Stars,
  CurrentTags,
  Tag,
  ProfileImg,
} from './MyInfoStyle';
import { Cookies } from 'react-cookie';
import StarCounter from '../StarCounter';
import { useHistory, Link } from 'react-router-dom';
import { getRequest, SERVER_URL } from '../../../lib/api/api';
const MyInfo = () => {
  const history = useHistory();
  const score = 2.5;
  const stars = StarCounter(score);

  const createTag = () => {
    const tags = new Cookies().get('search').split(',');
    tags.pop();
    return tags;
  };
  const [userData, setUserData] = useState({
    id: '-1',
    name: 'undefined',
    intro: 'undefined',
    imagName: 'undefined',
  });

  useEffect(() => {
    getRequest()
      .get('/mypage')
      .then(res => {
        setUserData(res.data);
      });
  }, []);

  const tags = new Cookies().get('search') && createTag();

  return (
    <Container>
      <section>
        <ProfileImg
          src={`${SERVER_URL}image/${userData.imagName}`}
        ></ProfileImg>
        <div>
          <div>
            <MyProfile>
              <UserName>{userData.name}님</UserName>
              <Link to="/mypage" className="mypage">
                마이페이지
              </Link>
            </MyProfile>
          </div>
          <Stars>
            {stars.map(e => {
              return e;
            })}
          </Stars>
        </div>
        <CurrentTags>
          <p className="tagTitle">최근 검색어</p>
          <div className="tags">
            {tags &&
              tags.map(e => {
                return (
                  <Tag
                    value={e}
                    onClick={() =>
                      history.push({ pathname: `/search`, search: e })
                    }
                  >
                    {e}
                  </Tag>
                );
              })}
          </div>
        </CurrentTags>
      </section>
    </Container>
  );
};

export default MyInfo;
