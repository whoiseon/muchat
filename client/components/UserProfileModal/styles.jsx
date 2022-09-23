import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {
  BACKGROUND_BLACK,
  BACKGROUND_BLACK_HOVER,
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
  width: 100%;
  top: 48px;
  left: 0;
  animation: ${ModalAnimation} 0.16s ease-in;
`;

export const ModalWrapper = styled.ul`
  padding: 16px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${BACKGROUND_EXTRA_BLACK};
  color: ${SEMI_GRAY_COLOR};
  z-index: 99;
  transition: all 0.16s ease-in;
  &:hover {
    background-color: ${BACKGROUND_BLACK};
    color: ${WHITE_COLOR};
  }
`;
