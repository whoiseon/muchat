import styled from "@emotion/styled";
import {
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK,
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  RED_COLOR,
  WHITE_COLOR
} from "../../../styles/common";

export const Content = styled.div`
  text-align: center;
  p {
    margin-bottom: 40px;
    i {
      font-style: normal;
      font-weight: bold;
      color: ${RED_COLOR};
    }
  }
  p:nth-of-type(1) {
    margin-bottom: 10px;
  }
  & > div {
    text-align: right;
    button {
      padding: 12px 26px;
      background-color: ${MAIN_COLOR};
      border-radius: 6px;
      color: ${WHITE_COLOR};
      transition: background-color 0.16s ease-in;
      &:hover {
        background-color: ${MAIN_COLOR_HOVER};
      }
      &:nth-of-type(1) {
        background-color: ${BACKGROUND_WHITE};
        &:hover {
          background-color: ${BACKGROUND_WHITE_CLICK};
        }
        margin-right: 14px;
      }
    }
  }
`;
