import React from 'react';
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

const MyInfo = ({ myData }) => {
  const history = useHistory();
  const score = 2.5;
  const stars = StarCounter(score);
  const createTag = () => {
    const tags = new Cookies().get('search').split(',');
    tags.pop();
    return tags;
  };
  /*  const [userData, setUserData] = useState();
  const score = 2.5;
  const stars = StarCounter(score);

  useEffect(() => {
    getRequest()
      .get('/myPage')
      .then(res => setUserData(res.data.mypage));
  }, []);*/

  const tags = new Cookies().get('search') && createTag();

  return (
    <Container>
      <section>
        <ProfileImg src={myData.imagepath}></ProfileImg>
        <div>
          <div>
            <MyProfile>
              <UserName>{myData.name}님</UserName>
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
          <p className="alarm">알림 0</p>
        </div>
        <CurrentTags>
          <p className="tagTitle">최근 검색어</p>
          <div className="tags">
            {tags &&
              tags.map(e => {
                return (
                  <Tag
                    value={e}
                    onClick={event =>
                      history.push({
                        pathname: '/search',
                        state: { search: e },
                      })
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
