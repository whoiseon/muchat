import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  BACKGROUND_COLOR, BACKGROUND_WHITE, BACKGROUND_WHITE_CLICK,
  GRAY_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_HOVER, RED_COLOR,
  SEMI_GRAY_COLOR, WHITE_COLOR
} from "../../styles/common";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
`;

export const ChatTab = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${BACKGROUND_BLACK};
  h1 {
    display: flex;
    min-width: 180px;
    height: 48px;
    font-size: 14px;
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
  & > ul {
    display: flex;
    & > li {
      position: relative;
      width: 180px;
      height: 48px;
      font-weight: 500;
      padding: 6px;
      color: ${GRAY_COLOR};
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
          svg {
            color: ${WHITE_COLOR};
          }
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
        transition: color, background-color 0.14s ease-in;
        &:hover {
          background-color: ${BACKGROUND_COLOR};
          color: ${SEMI_GRAY_COLOR};
        }
      }
    }
  }
`;

export const LoginBtn = styled.div`
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
    background-color: ${BACKGROUND_COLOR};
    border-radius: 6px;
    transition: background-color 0.14s ease-in;
    &:hover {
      background-color: ${BACKGROUND_WHITE};
    }
    &:active {
      background-color: ${BACKGROUND_WHITE_CLICK};
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MyProfile = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: 20px;
  padding: 6px;
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    min-width: 96px;
    background-color: ${BACKGROUND_COLOR};
    padding: 8px 14px;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${BACKGROUND_WHITE};
    }
    &:active {
      background-color: ${BACKGROUND_WHITE_CLICK};
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`;
