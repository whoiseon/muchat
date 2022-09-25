import styled from "@emotion/styled";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Background>
      <RegisterForm />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

export default Register;
