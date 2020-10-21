import React, { useState } from "react";
import {
  Container,
  SigninContainer,
  InputLabel,
  SigninBtn,
  Background,
} from "./SigninStyle";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const callApi = (user) => {
    const url = "/auth";
    const config = {
      method: "POST",
      header: {
        "Context-type": "application/json",
      },
    };
    axios.post(url, user, config).then();
  };

  const onSignin = (e) => {
    e.preventDefault();
    const user = {
      id: id,
      password: password,
    };
    callApi(user);
  };
  return (
    <Container>
      <GlobalStyle />
      <SigninContainer>
        <div className="SignIn">SIGN IN</div>
        <InputLabel
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputLabel
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SigninBtn type="submit" onClick={onSignin}>
          로그인
        </SigninBtn>
      </SigninContainer>
      <Background></Background>
    </Container>
  );
};

export default Login;
