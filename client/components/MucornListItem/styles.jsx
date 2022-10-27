import styled from "@emotion/styled";
import {BACKGROUND_WHITE, BACKGROUND_WHITE_CLICK, MAIN_COLOR} from "../../styles/common";

export const Background = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  background-color: ${BACKGROUND_WHITE};
  border: 1.4px solid ${BACKGROUND_WHITE};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.12s ease-in;
  &:hover {
    background-color: ${BACKGROUND_WHITE_CLICK};
    transform: scale(1.06);
    border: 1.4px solid ${MAIN_COLOR};
  }
  &:active {
    background-color: ${BACKGROUND_WHITE_CLICK};
  }
  img {
    width: 42px;
    height: 42px;
  }
`;
