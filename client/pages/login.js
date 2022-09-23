import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Background>
      <LoginForm />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

export default Login;
