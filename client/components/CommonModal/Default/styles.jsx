import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK,
  MAIN_COLOR, MAIN_COLOR_HOVER, SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../../styles/common";

const ModalBackgroundAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${ModalBackgroundAnimation} 0.16s ease-in;
`;

const ModalAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalWrapper = styled.div`
  width: 500px;
  background-color: ${BACKGROUND_COLOR};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  padding: 30px;
  animation: ${ModalAnimation} 0.16s ease-in;
  a {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 18px 0;
    background-color: ${MAIN_COLOR};
    border-radius: 6px;
    color: ${WHITE_COLOR};
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 18px;
    color: ${SEMI_GRAY_COLOR};
  }
  button {
    margin-left: auto;
    color: ${WHITE_COLOR};
    border-radius: 6px;
    padding: 8px;
    background-color: ${BACKGROUND_COLOR};
    transition: all 0.16s ease-in;
    &:hover {
      background-color: ${BACKGROUND_WHITE};
    }
    &:active {
      background-color: ${BACKGROUND_WHITE_CLICK};
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const Content = styled.div`
  font-size: 14px;
`;
