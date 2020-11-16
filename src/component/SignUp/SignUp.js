import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  SignUpBox,
  Title,
  WriteLabel,
  Name,
  Button,
  ProfileImage,
} from './SignUpStyle';
import { createGlobalStyle } from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { getRequest } from '../../lib/api/api';
import { USER_URL } from '../../lib/api/ServerUrl';

const FontSetting = createGlobalStyle`
body{
   @font-face {
    font-family: "S-CoreDream-3Light";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream-6Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
}`;

const SignUp = () => {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [passwordConfrim, setPasswordConfrim] = useState();
  const [age, setAge] = useState();
  const [agree, setAgree] = useState(false);
  const [file, setFile] = useState();
  const [fileResult, setFileResult] = useState();
  const [phoneNum, setPhoneNum] = useState();

  const history = useHistory();
  const uploadImage = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
    reader.onload = e => {
      setFileResult(e.target.result);
    };
  };

  const submitSignUp = e => {
    e.preventDefault();
    if (name.length < 2 || id.length < 3 || password.length < 6 || !age) {
      alert('잘못된 정보 입력입니다');
      return;
    }
    if (password !== passwordConfrim) {
      alert('비밀번호를 다시 확인해 주세요');
      return;
    }
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    const userData = new FormData();
    userData.append('userId', id);
    userData.append('password', password);
    userData.append('name', name);
    userData.append('age', age);
    userData.append('image', file);
    userData.append('phoneNumber', phoneNum);
    userData.append('intro', '');

    getRequest()
      .post(USER_URL, userData)
      .then(history.push({ pathname: '/login' }))
      .catch();
  };
  return (
    <form>
      <Container>
        <FontSetting />
        <Title>SIGN UP</Title>
        <SignUpBox>
          <ProfileImage profile={fileResult} />
          <input type="file" files={file} onChange={uploadImage} />
          <InputSet
            type="text"
            name="이름"
            value={name}
            onChange={setName}
            id="name"
            info="2글자 이상 작성해 주세요"
          />
          <InputSet
            type="number"
            name="나이"
            value={age}
            onChange={setAge}
            id="age"
          />
          <InputSet
            type="text"
            name="아이디"
            value={id}
            onChange={setId}
            id="id"
            info="3글자 이상 작성해 주세요"
          />
          <InputSet
            type="password"
            name="비밀번호"
            value={password}
            onChange={setPassword}
            id="password"
            info="6글자 이상 작성해 주세요"
          />
          <InputSet
            type="password"
            name="비밀번호 확인"
            value={passwordConfrim}
            onChange={setPasswordConfrim}
          />
          <InputSet
            type="tel"
            name="휴대전화 번호"
            value={phoneNum}
            onChange={setPhoneNum}
          />

          <span onClick={e => setAgree(!agree)} style={{ cursor: 'pointer' }}>
            개인정보 수집 및 이용에 동의합니다
            <input
              style={{ margin: '1rem 1rem' }}
              type="checkbox"
              checked={agree}
              onClick={e => setAgree(e.target.checked)}
            ></input>
          </span>
          <Button
            type="submit"
            width="20rem"
            height="3rem"
            onClick={submitSignUp}
          >
            SIGN UP
          </Button>
        </SignUpBox>
      </Container>
    </form>
  );
};
export default SignUp;

const InputSet = ({ name, value, type, onChange, id, info }) => {
  return (
    <div style={{ width: '20rem' }}>
      <Name>{name}</Name>
      <WriteLabel
        type={type}
        value={value}
        onChange={e => {
          e.target.value = e.target.value.replace(' ', '');
          onChange(e.target.value);
        }}
        data-tip
        data-for={id}
      />
      {info && (
        <ReactTooltip id={id} type="info">
          {info}
        </ReactTooltip>
      )}
    </div>
  );
};
