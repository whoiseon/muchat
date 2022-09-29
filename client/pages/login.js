import Head from "next/head";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";

const Login = () => {
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
