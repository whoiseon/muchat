import styled from "@emotion/styled";
import {
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK, MAIN_COLOR,
  RED_COLOR,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../styles/common";
import {keyframes} from "@emotion/css";

export const CardWrapper = styled.div`
  position: relative;
  background-color: ${BACKGROUND_WHITE};
  border-radius: 6px;
  width: 25%;
  min-height: 152px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.12s ease-in;
  border: 2px solid ${BACKGROUND_COLOR};
  &:hover {
    transform: scale(1.04);
    background-color: ${BACKGROUND_WHITE_CLICK};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${MAIN_COLOR};
  }
  &:not(:last-of-type) {
    margin-right: 20px;
  }
  h1 {
    width: 100%;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 24px;
    height: 46px;
    max-height: 46px;
    margin-bottom: 20px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ChatInfo = styled.div`
  color: ${SEMI_GRAY_COLOR};
  div {
    display: flex;
    align-items: center;
  }
  div:nth-of-type(1) {
    margin-bottom: 10px;
  }
  span {
    display: block;
    margin-left: auto;
    color: ${WHITE_COLOR};
  }
`;

export const CurrentUserBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 6px 16px;
  background-color: ${MAIN_COLOR};
  border-radius: 0 4px 0 6px;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
