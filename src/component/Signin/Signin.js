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
import CircularProgress from "@material-ui/core/CircularProgress";
import { colors } from "@material-ui/core";
const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const callApi = async (user) => {
    alert(JSON.stringify(user));
    const url = "/auth";
    const config = {
      method: "POST",
      "context-Type": "application/json",
    };
    axios.post(url, user, config).then((respone) => {});
  };

  const onSignin = (e) => {
    e.preventDefault();

    if (id.length <= 0 || password.length <= 0) {
      alert("아이디 혹은 비밀번호를 입력해주세요");
      return;
    }
    setIsLoading(true);
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
        <>
          {isLoading ? (
            <CircularProgress
              style={{
                margin: "auto",
                width: "5rem",
                height: "5rem",
                color: "#A48FE0",
              }}
            />
          ) : (
            <>
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
            </>
          )}
        </>
      </SigninContainer>
      <Background></Background>
    </Container>
  );
};

export default Login;
