import React, { useState } from "react";
import {
  Container,
  SignUpBox,
  Title,
  WriteLabel,
  Name,
  Button,
} from "./SignUpStyle";
import { createGlobalStyle } from "styled-components";
import ReactTooltip from "react-tooltip";
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
  const [phoneNumber, setPhoneNumber] = useState();
  const [authNum, setAuthNum] = useState();
  const [agree, setAgree] = useState(false);
  const callAuthNum = (e) => {
    e.preventDefault();
  };
  const submitSignUp = async (e) => {
    e.preventDefault();
    if (
      name.length < 2 ||
      id.length < 3 ||
      password.length < 6 ||
      !phoneNumber ||
      !authNum
    ) {
      alert("잘못된 정보 입력입니다");
      return;
    }
    if (!agree) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }
    const userData = {
      id: id,
      password: password,
      name: name,
      phone_number: phoneNumber,
    };
  };
  return (
    <form>
      <Container>
        <FontSetting />
        <Title>SIGN UP</Title>
        <SignUpBox>
          <InputSet
            type="text"
            name="이름"
            value={name}
            onChange={setName}
            id="name"
            info="2글자 이상 작성해 주세요"
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
            type="tel"
            name="전화번호"
            value={phoneNumber}
            onChange={setPhoneNumber}
            id="tel"
          />
          <Button width="10rem" height="3rem" onClick={callAuthNum}>
            인증번호 전송
          </Button>
          <InputSet
            type="text"
            name="인증번호"
            value={authNum}
            onChange={setAuthNum}
            id="auth"
          />

          <span>
            개인정보 수집 및 이용에 동의합니다
            <input
              type="checkbox"
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
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
    <div style={{ width: "20rem" }}>
      <Name>{name}</Name>
      <WriteLabel
        type={type}
        value={value}
        onChange={(e) => {
          e.target.value = e.target.value.replace(" ", "");
          return onChange(e.target.value);
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
