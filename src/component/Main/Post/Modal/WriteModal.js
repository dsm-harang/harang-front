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
  const [date, SetDate] = useState();
  const [address, setAddress] = useState();
  const [tagItems, setTagItems] = useState([]);
  const [tagInput, setTagInput] = useState();

  const InputHashTags = e => {
    if (e.keyCode !== 32) return;
    if (tagItems.length >= 5) {
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
        console.log(index + ',' + i);
        if (i != index) return e;
      }),
    );
  };
  const dateLimit = e => {
    const today = new Date();
    console.log(today);
    console.log(e.target.value);
    SetDate(e.target.value);
  };
  const readImg = e => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      setSumnail(e.target.result);
    };
  };
  const submitPost = () => {};
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
          className="time"
          type="date"
          placeholder="시간"
          value={date}
          onChange={dateLimit}
        />
        <InputLabel className="Personnel" placeholder="인원" type="number" />
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
        <PostButton className="button" type="submit">
          게시하기
        </PostButton>
      </WriteModalContainer>
    </div>
  );
};
export default WriteModal;
