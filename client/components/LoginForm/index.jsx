import Image from "next/image";
import {useCallback, useEffect, useRef} from "react";
import {FormWrapper, Header, LoginInput, LoginWrapper} from "./styles";
import {ErrorMessage} from "../../styles/common";

const LoginForm = () => {
  const emailRef = useRef();

  const onSubmitLogin = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <FormWrapper onSubmit={onSubmitLogin}>
      <Header>
        <img src="/image/logo/gray_logo.svg" alt="Logo" />
        <h1>로그인</h1>
      </Header>
      <LoginWrapper>
        <LoginInput>
          <p>이메일</p>
          <input type="text" ref={emailRef} />
        </LoginInput>
        <LoginInput>
          <p>비밀번호</p>
          <input type="password" />
        </LoginInput>
        {/*<ErrorMessage>123</ErrorMessage>*/}
        <button type="submit">
          로그인
        </button>
      </LoginWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
