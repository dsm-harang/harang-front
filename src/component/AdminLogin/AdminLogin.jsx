import React, { useCallback, useState } from 'react';
import { adminLogin } from '../../lib/api/Admin';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const AdminLogin = () => {
  const history = useHistory();
  const [id, idChange] = useState('');
  const [password, passwordChange] = useState('');
  const idInputChangeHandler = useCallback(
    e => {
      idChange(e.target.value);
    },
    [idChange],
  );
  const passwordInputChangeHandler = useCallback(
    e => {
      passwordChange(e.target.value);
    },
    [passwordChange],
  );
  const login = useCallback(async () => {
    const body = {
      userId: id,
      password,
    };
    try {
      const { data } = await adminLogin(body);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      history.push('/admin');
    } catch (error) {
      if (!error) {
        alert('인터넷을 확인해 주세요.');
      }
      if (error.response.data.status === 400) {
        alert('id와 비밀번호를 확인해 주세요.');
      } else {
        alert('없는 계정 입니다.');
      }
    }
  }, [id, password]);
  return (
    <S.AdminLogin>
      <S.AdminInputDiv>
        <S.AdminInputDivTitle>ADMIN LOGIN</S.AdminInputDivTitle>
        <S.AdminInput
          placeholder="id"
          onChange={idInputChangeHandler}
          value={id}
        />
        <S.AdminInput
          placeholder="password"
          type="password"
          onChange={passwordInputChangeHandler}
          value={password}
        />
        <S.AdminLoginButton onClick={login}>로그인</S.AdminLoginButton>
      </S.AdminInputDiv>
    </S.AdminLogin>
  );
};

export default AdminLogin;
