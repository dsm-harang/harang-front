import React, { useState } from "react";
import {
  Container,
  SignUpBox,
  Title,
  WriteLabel,
  Name,
  InputSet,
  Button,
} from "./SignUpStyle";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
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
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNum, setAuthNum] = useState("");

  const callAuthNum = (e) => {
    e.preventDefault();
  };
  const submitSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      id: id,
      password: password,
      name: name,
      phone_number: phoneNumber,
    };
    await axios.post("./user", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <form>
      <Container>
        <FontSetting />
        <Title>SIGN UP</Title>
        <SignUpBox>
          <InputSet>
            <Name>이름</Name>
            <WriteLabel
              value={name}
              onChange={(e) => {
                e.target.value = e.target.value.replace(" ", "");
                return setName(e.target.value);
              }}
            />
          </InputSet>
          <InputSet>
            <Name>아이디</Name>
            <WriteLabel
              value={id}
              onChange={(e) => {
                e.target.value = e.target.value.replace(" ", "");
                return setId(e.target.value);
              }}
            />
          </InputSet>
          <InputSet>
            <Name>비밀번호</Name>
            <WriteLabel
              value={password}
              onChange={(e) => {
                e.target.value = e.target.value.replace(" ", "");
                return setPassword(e.target.value);
              }}
            />
          </InputSet>
          <InputSet>
            <Name>휴대전화 번호</Name>
            <WriteLabel
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button width="10rem" height="3rem" onClick={callAuthNum}>
              인증번호 전송
            </Button>
          </InputSet>
          <InputSet>
            <Name>인증번호</Name>
            <WriteLabel
              type="number"
              value={authNum}
              onChange={(e) => setAuthNum(e.target.value)}
            />
          </InputSet>
          <InputSet>
            개인정보 수집 및 이용에 동의합니다
            <input type="checkbox"></input>
          </InputSet>
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
