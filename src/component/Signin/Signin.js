import React, { useState } from 'react';
import {
  Container,
  SigninContainer,
  InputLabel,
  SigninBtn,
  Background,
} from './SigninStyle';
import { createGlobalStyle } from 'styled-components';
import { getRequest } from '../../lib/api/api';
import { useHistory, Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const SignIn = () => {
  const history = useHistory();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const callApi = user => {
    getRequest()
      .post('/auth/user', user)
      .then(res => {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        history.push({ pathname: '/main' });
      })
      .catch(
        err =>
          err.response.status === 404 && alert('존재하지 않는 아이디 입니다'),
      );
  };

  const onSignin = e => {
    e.preventDefault();

    if (id.length <= 0 || password.length <= 0) {
      alert('아이디 혹은 비밀번호를 입력해주세요');
      return;
    }

    const userData = {
      userId: id,
      password: password,
    };

    callApi(userData);
  };
  return (
    <Container className="con">
      <GlobalStyle />
      <SigninContainer>
        <>
          <div className="SignIn">SIGN IN</div>
          <InputLabel
            type="text"
            placeholder="아이디"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <InputLabel
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <SigninBtn type="submit" onClick={onSignin}>
            로그인
          </SigninBtn>
          <Link to="/signup" className="signup">
            회원가입 하기
          </Link>
        </>
      </SigninContainer>
      <Background />
    </Container>
  );
};

export default SignIn;
