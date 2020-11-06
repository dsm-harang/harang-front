import React, { useState } from 'react';
import {
  Overlay,
  WriteModalContainer,
  InputLabel,
  ContentBox,
  PostButton,
  Global,
} from './ModalStyle';

const EditModal = ({ setEditVisible }) => {
  const [sumnailName, setSumnailName] = useState();
  const [sumnailFile, setSumnailFile] = useState();
  const [sumnail, setSumnail] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, SetDate] = useState();

  const dateLimit = e => {
    const today = new Date();
    console.log(today);
    console.log(e.target.value);
    SetDate(e.target.value);
  };
  const editSubmit = () => {};
  return (
    <div>
      <Global />
      <Overlay onClick={e => setEditVisible(false)} />
      <WriteModalContainer sumnail={sumnail} bg="#A48FE0">
        <InputLabel
          className="sumnail"
          type="file"
          files={sumnailFile}
          value={sumnailName}
          onChange={e => {
            setSumnailName(e.target.value);
            setSumnailFile(e.target.files[0]);
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
        <InputLabel className="map" placeholder="title" />
        <InputLabel
          className="time"
          type="date"
          placeholder="시간"
          value={date}
          onChange={dateLimit}
        />
        <InputLabel className="Personnel" placeholder="인원" />
        <InputLabel className="tag" placeholder="태그" />
        <PostButton className="button" type="submit">
          수정하기
        </PostButton>
      </WriteModalContainer>
    </div>
  );
};
export default EditModal;
