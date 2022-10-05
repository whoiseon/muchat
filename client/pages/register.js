import Head from "next/head";
import styled from "@emotion/styled";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import RegisterForm from "../components/RegisterForm";
import {useRouter} from "next/router";

const Register = () => {
  const {userSignUpDone, userInfo} = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (userInfo || userSignUpDone) {
      router.push('/login');
    }
  }, [userInfo, userSignUpDone]);

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
