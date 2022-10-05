import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK, BACKGROUND_BLACK_HOVER,
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK,
  SEMI_GRAY_COLOR
} from "../../styles/common";

export const ProfileWrapper = styled.div`
  position: relative;
  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    background-color: ${BACKGROUND_COLOR};
    border-radius: 6px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${BACKGROUND_WHITE};
    }
    &:active {
      background-color: ${BACKGROUND_WHITE_CLICK};
    }
    svg {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      color: ${SEMI_GRAY_COLOR};
    }
  }
`;
