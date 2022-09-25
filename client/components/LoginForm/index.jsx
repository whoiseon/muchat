import Image from "next/image";
import {useCallback, useEffect, useRef} from "react";
import {FormWrapper, Header, LoginInput, LoginWrapper} from "./styles";
import {ErrorMessage} from "../../styles/common";
import Link from "next/link";
import useInput from "../../hooks/useInput";

const LoginForm = () => {
  const emailRef = useRef();
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');

  const onSubmitLogin = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <FormWrapper onSubmit={onSubmitLogin}>
      <Header>
        <Link href="/">
          <img src="/image/logo/gray_logo.svg" alt="Logo" />
        </Link>
        <h1>로그인</h1>
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
        {/*<ErrorMessage>123</ErrorMessage>*/}
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
