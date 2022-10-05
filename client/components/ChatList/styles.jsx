import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  GRAY_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../styles/common";

export const ChatListWrapper = styled.div`
  padding: 40px;
  overflow-y: scroll;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 40px;
  button {
    margin-left: auto;
    width: 180px;
    font-size: 16px;
    color: ${WHITE_COLOR};
    background-color: ${MAIN_COLOR};
    border-radius: 6px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 24%;
  margin-right: 20px;
  input {
    width: 100%;
    background-color: ${BACKGROUND_BLACK};
    color: ${WHITE_COLOR};
    border-radius: 6px;
    padding: 20px 20px 20px 60px;
    border: none;
    &::placeholder {
      color: ${SEMI_GRAY_COLOR};
    }
  }
  svg {
    position: absolute;
    color: ${SEMI_GRAY_COLOR};
    width: 18px;
    height: 18px;
    top: 18px;
    left: 20px;
  }
`;

export const TopMenu = styled.div`
  a {
    font-size: 16px;
    display: inline-block;
    padding: 20px;
    color: ${SEMI_GRAY_COLOR};
    transition: color 0.16s ease-in;
    &:hover {
      color: ${WHITE_COLOR};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;
