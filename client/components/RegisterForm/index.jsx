import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {FormWrapper, Header, LoginInput, LoginWrapper} from "../LoginForm/styles";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const InputRef = useRef();
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput('');

  const onSubmitRegister = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <FormWrapper onSubmit={onSubmitRegister}>
      <Header>
        <Link href="/">
          <img src="/image/logo/gray_logo.svg" alt="Logo" />
        </Link>
        <h1>회원가입</h1>
      </Header>
      <LoginWrapper>
        <LoginInput>
          <p>닉네임</p>
          <input type="text" ref={InputRef} value={nickname} onChange={onChangeNickname} />
        </LoginInput>
        <LoginInput>
          <p>이메일</p>
          <input type="text" value={email} onChange={onChangeEmail} />
        </LoginInput>
        <LoginInput>
          <p>비밀번호</p>
          <input type="password" value={password} onChange={onChangePassword} />
        </LoginInput>
        <LoginInput>
          <p>비밀번호 확인</p>
          <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
        </LoginInput>
        {/*<ErrorMessage>123</ErrorMessage>*/}
        <button type="submit">
          로그인
        </button>
      </LoginWrapper>
      <span>
        이미 회원이신가요?
        <Link href="/login">
          로그인
        </Link>
      </span>
    </FormWrapper>
  );
};

export default RegisterForm;
