import { getRequest } from '../../../../lib/api/api';

import React, { useState } from 'react';
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

const WriteModal = ({ setWritingVisible }) => {
  const reader = new FileReader();

  const [sumnailName, setSumnailName] = useState();
  const [sumnailFile, setSumnailFile] = useState();
  const [sumnail, setSumnail] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [address, setAddress] = useState();
  const [tagItems, setTagItems] = useState([]);
  const [tagInput, setTagInput] = useState();
  const [personnel, setPersonnel] = useState();
  const [ageLimit, setAgeLimit] = useState();

  const InputHashTags = e => {
    if (e.keyCode !== 32) return;
    if (tagItems.length >= 5) {
      setTagInput('');
      return;
    }
    const items = tagInput.split(' ');
    setTagItems(tagItems.concat('#' + items[items.length - 1]));

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

  const readImg = e => {
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function (e) {
      setSumnail(e.target.result);
    };
  };
  const submitPost = e => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('title', title);
    postData.append('tag', tagItems.toString().replace(/,/gi, ''));
    postData.append('meetTime', `${date} ${time}:00`);
    postData.append('content', content);
    postData.append('ageLimit', ageLimit);
    postData.append('address', address);
    postData.append('personnel', personnel);
    postData.append('image', sumnailFile);

    getRequest()
      .post('/post', postData)
      .then(alert('등록이 완료되었습니다'))
      .catch(alert);
    setWritingVisible(false);
  };
  return (
    <div>
      <Global />
      <Overlay
        onClick={e => {
          setWritingVisible(false);
          console.log('a');
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
            readImg(e);
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
          className="date"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <InputLabel
          className="date"
          type="time"
          value={time}
          onChange={e => {
            setTime(e.target.value);
          }}
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
          {tagItems.map((e, i) => (
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
          게시하기
        </PostButton>
      </WriteModalContainer>
    </div>
  );
};
export default WriteModal;
