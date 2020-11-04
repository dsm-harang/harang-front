import React, { useState } from "react";
import {
  Container,
  SigninContainer,
  InputLabel,
  SigninBtn,
  Background,
} from "./SignInStyle";
import { createGlobalStyle } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

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

  const callApi = (user) => {};

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