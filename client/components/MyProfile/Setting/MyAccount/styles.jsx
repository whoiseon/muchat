import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  BACKGROUND_WHITE,
  BORDER_DEFAULT,
  GRAY_COLOR,
  MAIN_COLOR, MAIN_COLOR_HOVER, RED_COLOR,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../../../styles/common";

export const MySettingWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 40px;
    &:not(:last-of-type) {
      padding-bottom: 40px;
      border-bottom: 1px solid ${BORDER_DEFAULT};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  span {
    margin-left: auto;
    color: ${RED_COLOR};
  }
  h1 {
    font-size: 18px;
    font-weight: 500;
    color: ${SEMI_GRAY_COLOR};
  }
`;

export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    
  }
  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: ${BACKGROUND_WHITE};
    border-radius: 6px;
    margin-right: 20px;
    img {
      width: 32px;
      height: 32px;
    }
  }
  div:nth-of-type(2) {
    p {
      font-size: 14px;
      color: ${SEMI_GRAY_COLOR};
    }
    p:nth-of-type(1) {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 6px;
      color: ${WHITE_COLOR};
    }
  }
  div:nth-of-type(3) {
    margin-left: auto;
    a {
      padding: 12px 26px;
      background-color: ${MAIN_COLOR};
      border-radius: 6px;
      transition: background-color 0.16s ease-in;
      &:hover {
        background-color: ${MAIN_COLOR_HOVER};
      }
    }
  }
`;

export const ChangeNickname = styled.div`
  display: flex;
  p {
    font-size: 16px;
  }
  div {
    margin-left: auto;
    a {
      padding: 12px 26px;
      background-color: ${GRAY_COLOR};
      border-radius: 6px;
      transition: background-color 0.16s ease-in;
      &:hover {
        background-color: ${SEMI_GRAY_COLOR};
      }
    }
  }
`;

export const ChangePassword = styled.div`
  display: flex;
  div {
    a {
      padding: 12px 26px;
      background-color: ${MAIN_COLOR};
      border-radius: 6px;
      transition: background-color 0.16s ease-in;
      &:hover {
        background-color: ${MAIN_COLOR_HOVER};
      }
    }
  }
`;


// MUCORN

export const MucornList = styled.ul`
  display: flex;
`;
