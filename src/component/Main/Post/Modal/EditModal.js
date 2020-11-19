import { getRequest } from '../../../../lib/api/api';
import React, { useState, useEffect } from 'react';
import {
  Overlay,
  WriteModalContainer,
  InputLabel,
  ContentBox,
  PostButton,
  Global,
  TagContainer,
  TagItem,
} from './ModalStyle';
import Map from '../../../Map/Map';

const EditeModal = ({ setEditVisible, postId }) => {
  const reader = new FileReader();
  const [postData, setPostData] = useState({
    title: 'TITLE',
    content: 'content',
    meetTime: '2022-01-1',
    address: '대덕소프트웨어 마이스터 고등학교',
    personnel: 3,
    tag: '#aa#ee#rr#rr',
  });

  // useEffect(() => {
  //   getRequest()
  //     .get(`/post/${postId}`)
  //     .then(res => setPostData(res.data));
  // }, []);

  const [sumnailName, setSumnailName] = useState();
  const [sumnailFile, setSumnailFile] = useState(postData.image);
  const [sumnail, setSumnail] = useState();
  const [title, setTitle] = useState(postData.title);
  const [content, setContent] = useState(postData.content);
  const [date, SetDate] = useState(postData.meetTime);
  const [address, setAddress] = useState(postData.address);
  const [tagItems, setTagItems] = useState();
  const [tagInput, setTagInput] = useState();
  const [personnel, setPersonnel] = useState(postData.personnel);
  const [ageLimit, setAgeLimit] = useState(postData.ageLimit);

  useEffect(() => {
    const tmp = postData.tag.split('#');
    tmp.shift();

    setTagItems(
      tmp.map((e, i) => {
        return '#' + e;
      }),
    );
  }, []);

  const InputHashTags = e => {
    if (e.keyCode !== 32) return;
    var blank_pattern = /^\s+|\s+$/g;
    if (
      tagItems.length >= 5 ||
      e.target.value.replace(blank_pattern, '') == ''
    ) {
      setTagInput('');
      return;
    }
    const items = tagInput.split(' ');
    setTagItems(tagItems.concat('#' + items[items.length - 1]));
    console.log(tagItems);
    setTagInput('');
  };

  const removeTags = e => {
    const index = e.target.id;
    setTagItems(
      tagItems.filter((e, i) => {
        if (i != index) return e;
      }),
    );
  };
  const readImg = file => {
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      setSumnail(file);
    };
  };
  const submitPost = e => {
    e.preventdefault();

    const postData = {
      title: title,
      content: content,
      tag: tagItems.toString(),
      meetTime: date,
      address: address,
      age_limit: ageLimit,
      personnel: personnel,
    };

    getRequest.post(`/post/${postId}` / postData);
  };
  return (
    <div>
      <Global />
      <Overlay
        onClick={e => {
          setEditVisible(false);
        }}
      />
      <WriteModalContainer sumnail={sumnail} bg="#A48FE0">
        <InputLabel
          className="sumnail"
          type="file"
          files={sumnailFile}
          value={sumnailName}
          onChange={e => {
            setSumnailName(e.target.value);
            setSumnailFile(e.target.files[0]);
            readImg(e.target.files[0]);
          }}
        />
        <InputLabel
          className="title"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <ContentBox
          className="content"
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Map searchText={address} clickCallback={e => setAddress(e)} />

        <InputLabel
          className="time"
          type="date"
          placeholder="시간"
          value={date}
          onChange={e => SetDate(e.target.value)}
        />
        <InputLabel
          className="personnel"
          placeholder="인원"
          type="number"
          value={personnel}
          onChange={e => setPersonnel(e.target.value)}
        />
        <InputLabel
          className="personnel"
          placeholder="나이제한 ex)20->20세 이상"
          type="number"
          value={ageLimit}
          onChange={e => setAgeLimit(e.target.value)}
        />
        <TagContainer className="tag">
          {tagItems &&
            tagItems.map((e, i) => (
              <TagItem key={i} id={i} onClick={removeTags}>
                {e}
              </TagItem>
            ))}
          <input
            placeholder="태그"
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyDown={InputHashTags}
          ></input>
        </TagContainer>
        <InputLabel
          className="map"
          type="text"
          placeholder="주소"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <PostButton className="button" type="submit" onClick={submitPost}>
          수정하기
        </PostButton>
      </WriteModalContainer>
    </div>
  );
};
export default EditeModal;
