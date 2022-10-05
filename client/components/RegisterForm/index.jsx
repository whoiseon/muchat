import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {FormWrapper, Header, LoginInput, LoginWrapper, SignUpAfter} from "../LoginForm/styles";
import useInput from "../../hooks/useInput";
import {AgreementWrapper, CheckBox} from "../LoginForm/styles";
import {userSignUp} from "../../slices/userSlice";
import {ErrorMessage} from "../../styles/common";

const emailCheck = (email) => {
  const reg = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i;
  return reg.test(email);
};

const RegisterForm = () => {
  const { userSignUpError, userSignUpDone } = useSelector((state) => state.user);

  const router = useRouter();

  const nicknameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const dispatch = useDispatch();

  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput('');

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitRegister = useCallback((e) => {
    e.preventDefault();
    if (nickname === '') {
      nicknameInput.current?.focus();
      return setErrorMessage('닉네임을 입력해주세요.');
    }
    if (email === '') {
      emailInput.current?.focus();
      return setErrorMessage('이메일을 입력해주세요.');
    }
    if (!emailCheck(email)) {
      emailInput.current?.focus();
      setEmail('');
      return setErrorMessage('이메일을 형식에 맞게 입력해주세요.');
    }
    if (password === '') {
      return setErrorMessage('비밀번호를 입력해주세요.');
    }
    if (password !== passwordCheck) {
      return setErrorMessage('비밀번호가 같지 않습니다.');
    }

    dispatch(userSignUp({
      nickname,
      email,
      password,
    }));
  }, [
    nickname, email, password,
    passwordCheck, nicknameInput,
  ]);

  useEffect(() => {
    nicknameInput.current?.focus();
  }, [nicknameInput, router]);

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
          <p>
            닉네임
            {
              errorMessage?.includes('닉네임')
                ? <i> { errorMessage } </i>
                : <span>닉네임은 최대 8글자 입니다.</span>
            }
          </p>
          <input type="text" ref={nicknameInput} value={nickname} onChange={onChangeNickname} maxLength={8} />
        </LoginInput>
        <LoginInput>
          <p>
            이메일
            <i>
              {
                errorMessage?.includes('이메일') && errorMessage
              }
            </i>
          </p>
          <input type="text" ref={emailInput} value={email} onChange={onChangeEmail} />
        </LoginInput>
        <LoginInput>
          <p>
            비밀번호
            <i>
              {
                errorMessage?.includes('비밀번호') && errorMessage
              }
            </i>
          </p>
          <input type="password" ref={passwordInput} value={password} onChange={onChangePassword} />
        </LoginInput>
        <LoginInput>
          <p>비밀번호 확인</p>
          <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
        </LoginInput>
        {userSignUpError && <ErrorMessage>{ userSignUpError }</ErrorMessage>}
        <button type="submit">
          회원가입
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
