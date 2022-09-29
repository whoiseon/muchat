import Head from "next/head";
import styled from "@emotion/styled";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <Head>
        <title>Muchat - 회원가입</title>
      </Head>
      <Background>
        <RegisterForm />
      </Background>
    </>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

export default Register;
