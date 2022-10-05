import {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import {useRouter} from "next/router";
import {FormWrapper, Header, LoginInput, LoginWrapper} from "./styles";
import {ErrorMessage} from "../../styles/common";
import useInput from "../../hooks/useInput";
import {userLogin} from "../../slices/userSlice";

const LoginForm = () => {
  const {
    userSignUpDone,
    userLoginError,
    userLoginDone,
    userLoginToken,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const emailRef = useRef();
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');

  const onSubmitLogin = useCallback((e) => {
    e.preventDefault();
    dispatch(userLogin({
      email,
      password,
    }));
  }, [email, password, userLoginError]);

  useEffect(() => {
    emailRef.current.focus();
  }, [emailRef, router]);

  return (
    <FormWrapper onSubmit={onSubmitLogin}>
      <Header>
        <Link href="/">
          <img src="/image/logo/gray_logo.svg" alt="Logo" />
        </Link>
        {
          userSignUpDone
            ? <h1>가입을 축하합니다 🎉</h1>
            : <h1>로그인</h1>
        }
      </Header>
      <LoginWrapper>
        <LoginInput>
          <p>이메일</p>
          <input type="text" ref={emailRef} value={email} onChange={onChangeEmail} />
        </LoginInput>
        <LoginInput>
          <p>비밀번호</p>
          <input type="password" value={password} onChange={onChangePassword} />
        </LoginInput>
        {userLoginError && <ErrorMessage>{userLoginError}</ErrorMessage>}
        <button type="submit">
          로그인
        </button>
      </LoginWrapper>
      <span>
        아직 회원이 아니신가요?
        <Link href="/register">
          회원가입
        </Link>
      </span>
    </FormWrapper>
  );
};

export default LoginForm;
