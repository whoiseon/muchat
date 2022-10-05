import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {
  BACKGROUND_BLACK,
  BACKGROUND_BLACK_HOVER, BACKGROUND_COLOR,
  BACKGROUND_EXTRA_BLACK,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../styles/common";

const ModalAnimation = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: 9999;
  width: 260px;
  top: 48px;
  left: -154px;
  animation: ${ModalAnimation} 0.16s ease-in;
`;

export const ModalWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: ${BACKGROUND_EXTRA_BLACK};
  color: ${SEMI_GRAY_COLOR};
  z-index: 99;
  padding-bottom: 10px;
  & > li:nth-of-type(1) {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${BACKGROUND_BLACK};
    & > img {
      width: 28px;
      height: 28px;
      margin-right: 16px;
    }
    & > div {
      p:nth-of-type(1) {
        color: ${WHITE_COLOR};
        font-size: 16px;
        margin-bottom: 4px;
      }
    }
  }
  & > li {
    display: flex;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    transition: all 0.16s ease-in;
    &:hover {
      background-color: ${BACKGROUND_BLACK};
      span {
        color: ${WHITE_COLOR};
      }
    }
    &:active {
      background-color: ${BACKGROUND_COLOR};
      span {
        color: ${WHITE_COLOR};
      }
    }
  }
`;
