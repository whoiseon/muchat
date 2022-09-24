import styled from "@emotion/styled";
import {BACKGROUND_BLACK, MAIN_COLOR, MAIN_COLOR_HOVER, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  span {
    text-align: center;
    a {
      margin-left: 6px;
      color: ${MAIN_COLOR};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 40px;
    width: 80px;
    height: 40px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.16s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  }
  h1 {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export const LoginWrapper = styled.div`
  button {
    width: 100%;
    padding: 18px;
    background-color: ${MAIN_COLOR};
    color: ${WHITE_COLOR};
    border-radius: 6px;
    margin-bottom: 20px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
  }
`;

export const LoginInput = styled.div`
  margin-bottom: 20px;
  &:nth-of-type(2) {
    margin-bottom: 40px;
  }
  p {
    color: ${SEMI_GRAY_COLOR};
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 18px;
    background-color: ${BACKGROUND_BLACK};
    border: none;
    border-radius: 6px;
    color: ${WHITE_COLOR};
  }
`;
