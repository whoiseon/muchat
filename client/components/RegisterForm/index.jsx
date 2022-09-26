import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {FormWrapper, Header, LoginInput, LoginWrapper} from "../LoginForm/styles";
import useInput from "../../hooks/useInput";
import {AgreementWrapper, CheckBox} from "../LoginForm/styles";

const RegisterForm = () => {
  const InputRef = useRef();

  const [agreeCheckBox, setAgreeCheckBox] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput('');

  const checkHandler = useCallback(() => {
    setAgreeCheckBox((prev) => !prev);
  }, []);

  const onClickAgreementTrue = useCallback(() => {
    setAgreement(true);
  }, []);

  const onSubmitRegister = useCallback((e) => {
    e.preventDefault();
  }, []);

  const loadAgreementText = useCallback((url) => {
    let content = '';
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    if (xmlhttp.status === 200) {
      content = xmlhttp.responseText;
    }

    return content;
  }, []);

  useEffect(() => {
    InputRef.current?.focus();
  }, []);

  return (
    <FormWrapper onSubmit={onSubmitRegister}>
      {
        !agreement
          ? (
            <>
              <Header>
                <Link href="/">
                  <img src="/image/logo/gray_logo.svg" alt="Logo" />
                </Link>
                <h1>약관동의</h1>
                <AgreementWrapper>
                  <p>이용약관 동의 <i>(필수)</i></p>
                  <textarea
                    value={loadAgreementText("/agreementText/serviceAgree.txt")}
                    readOnly
                  />
                  <p>개인정보 수집 및 이용 동의 <i>(필수)</i></p>
                  <textarea
                    value={loadAgreementText("/agreementText/personalInfoText.txt")}
                    readOnly
                  />
                  <CheckBox>
                    <input
                      type="checkbox"
                      id="agreeCheckBox"
                      checked={agreeCheckBox}
                      onChange={checkHandler}
                    />
                    <label htmlFor="agreeCheckBox">회원가입 약관에 모두 동의합니다</label>
                  </CheckBox>
                  <button
                    type="button"
                    disabled={!agreeCheckBox}
                    onClick={onClickAgreementTrue}
                  >
                    다음
                  </button>
                </AgreementWrapper>
              </Header>
            </>
          )
          : (
            <>
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
                  회원가입
                </button>
              </LoginWrapper>
              <span>
                이미 회원이신가요?
                <Link href="/login">
                  로그인
                </Link>
              </span>
            </>
          )
      }
    </FormWrapper>
  );
};

export default RegisterForm;
