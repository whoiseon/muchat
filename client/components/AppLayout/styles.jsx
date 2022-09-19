import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  BACKGROUND_COLOR,
  GRAY_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  SEMI_GRAY_COLOR
} from "../../styles/common";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ChatTab = styled.div`
  display: flex;
  width: 100%;
  background-color: ${BACKGROUND_BLACK};
  h1 {
    width: 180px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    padding: 6px;
    color: ${GRAY_COLOR};
    a {
      display: flex;
      width: 100%;
      height: 100%;
      color: inherit;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      transition: background-color, color 0.14s ease-in;
      &:hover {
        background-color: ${BACKGROUND_COLOR};
        color: ${SEMI_GRAY_COLOR};
      }
    }
  }
  ul {
    display: flex;
    li {
      width: 180px;
      height: 48px;
      font-weight: 500;
      padding: 6px;
      color: ${GRAY_COLOR};
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
        transition: color, background-color 0.14s ease-in;
        &:hover {
          background-color: ${BACKGROUND_COLOR};
          color: ${SEMI_GRAY_COLOR};
        }
      }
    }
  }
  div {
    margin-left: auto;
    margin-right: 14px;
    height: 48px;
    padding: 6px;
    a {
      display: flex;
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      padding: 9px 30px 8px;
      background-color: ${MAIN_COLOR};
      border-radius: 6px;
      transition: background-color 0.14s ease-in;
      &:hover {
        background-color: ${MAIN_COLOR_HOVER};
      }
      &:active {
        background-color: #4E52DD;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 40px;
`;
