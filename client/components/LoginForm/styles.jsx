import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  RED_COLOR,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../styles/common";

export const FormWrapper = styled.div`
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
  &:last-of-type {
    margin-bottom: 40px;
  }
  p {
    display: flex;
    color: ${SEMI_GRAY_COLOR};
    margin-bottom: 10px;
    i {
      color: ${RED_COLOR};
      font-style: normal;
      margin-left: auto;
    }
    span {
      margin-left: auto;
      opacity: 0.5;
    }
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

// Agreement

export const AgreementWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  p {
    color: ${WHITE_COLOR};
    margin-bottom: 14px;
    i {
      font-style: normal;
      color: ${RED_COLOR};
    }
  }
  textarea {
    width: 100%;
    height: 180px;
    padding: 16px;
    background-color: ${BACKGROUND_BLACK};
    color: ${SEMI_GRAY_COLOR};
    border: none;
    border-radius: 6px;
    resize: none;
    margin-bottom: 20px;
  }
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
    &:disabled {
      background-color: ${SEMI_GRAY_COLOR};
      cursor: unset;
    }
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  input {
    margin-right: 8px;
  }
`;
