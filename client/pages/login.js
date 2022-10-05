import Head from "next/head";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const Login = () => {
  const {userInfo, userLoginDone} = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (userInfo || userLoginDone) {
      router.push('/');
    }
  }, [userInfo, userLoginDone]);

  return (
    <>
      <Head>
        <title>Muchat - 로그인</title>
      </Head>
      <Background>
        <LoginForm />
      </Background>
    </>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

export default Login;
