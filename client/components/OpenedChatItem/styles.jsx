import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  GRAY_COLOR,
  SEMI_GRAY_COLOR,
  WHITE_COLOR,
} from "../../styles/common";

export const ListWrapper = styled.li`
  position: relative;
  width: 180px;
  height: 48px;
  font-weight: 500;
  padding: 6px;
  color: ${GRAY_COLOR};
  transition: color, background-color 0.14s ease-in;
  &:hover {
    a {
      background-color: ${BACKGROUND_COLOR};
      color: ${SEMI_GRAY_COLOR};
    }
  }
  button {
    width: 18px;
    height: 18px;
    top: 15px;
    right: 16px;
    position: absolute;
    border-radius: 4px;
    padding: 2px;
    background-color: ${BACKGROUND_BLACK};
    svg {
      width: 14px;
      height: 14px;
      color: ${SEMI_GRAY_COLOR};
    }
    &:hover {
      background-color: ${BACKGROUND_WHITE};
    }
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    border-radius: 6px;
    padding: 9px 14px 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
