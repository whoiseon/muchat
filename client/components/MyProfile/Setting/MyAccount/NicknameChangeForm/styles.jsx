import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  GRAY_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../../../../styles/common";

export const FormWrapper = styled.div`
  text-align: left;
  button {
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    background-color: ${MAIN_COLOR};
    border-radius: 6px;
    transition: background-color 0.16s ease-in;
    color: ${WHITE_COLOR};
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
`;

export const UpdateInput = styled.div`
  margin-bottom: 20px;
  p {
    color: ${SEMI_GRAY_COLOR};
    margin-bottom: 14px;
  }
  input {
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    border: none;
    background-color: ${BACKGROUND_BLACK};;
    color: ${WHITE_COLOR};
  }
`;
