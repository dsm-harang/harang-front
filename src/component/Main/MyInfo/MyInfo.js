import React from "react";
import {
  Container,
  MyProfile,
  UserName,
  Stars,
  CurrentTags,
  Tag,
} from "./MyInfoStyle";
import { Cookies } from "react-cookie";
import dummy from "./dummy/data.json";
const MyInfo = () => {
  const userData = dummy.data;
  const score = 2.5;
  const stars = [];
  const createTag = () => {
    const tags = new Cookies().get("search").split(",");
    tags.pop();
    return tags;
  };
  const tags = new Cookies().get("search") && createTag();
  const fullStars = parseInt(score / 1);
  const halfStars = score % 1 !== 0;
  const emptyStars = 5 - (halfStars + fullStars);

  const createStar = () => {
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="fas fa-star"></i>);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<i className="fas fa-star-half-alt"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i className="far fa-star"></i>);
    }
  };
  createStar();
  return (
    <Container>
      <section>
        <img src={userData.User_image}></img>
        <div>
          <div>
            <MyProfile>
              <UserName>{userData.User_name}님</UserName>
              <p className="mypage">마이페이지</p>
            </MyProfile>
          </div>
          <Stars>
            {stars.map((e) => {
              return e;
            })}
          </Stars>
          <p className="alarm">알림 0</p>
        </div>
        <CurrentTags>
          <p className="tagTitle">최근 검색한 태그</p>
          <div className="tags">
            {tags &&
              tags.map((e) => {
                return <Tag>#{e}</Tag>;
              })}
          </div>
        </CurrentTags>
      </section>
    </Container>
  );
};

export default MyInfo;
