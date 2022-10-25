import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK,
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK, GRAY_COLOR, MAIN_COLOR,
  RED_COLOR,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../styles/common";

export const CardWrapper = styled.div`
  position: relative;
  background-color: ${BACKGROUND_WHITE};
  border-radius: 6px;
  width: 25%;
  max-width: 300px;
  min-height: 152px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.12s ease-in;
  border: 2px solid ${BACKGROUND_COLOR};
  margin-bottom: 20px;
  &:not(:nth-of-type(5n)) {
    margin-right: 20px;
  }
  @media (max-width: 1680px) {
    min-width: 320px;
    &:not(:nth-of-type(4n)) {
      margin-right: 20px;
    }
  }
  @media (max-width: 1440px) {
    min-width: 380px;
    &:not(:nth-of-type(4n)) {
      margin-right: 20px;
    }
  }
  &:hover {
    transform: scale(1.04);
    background-color: ${BACKGROUND_WHITE_CLICK};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${MAIN_COLOR};
  }
  h1 {
    width: 100%;
    max-width: 200px;
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
    display: flex;
    align-items: center;
    & > div {
      margin-left: auto;
    }
  }
  div:nth-of-type(2) {
    margin-top: 10px;
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

export const SupportersMark = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: -14px;
  left: -14px;
  div {
    background-color: ${RED_COLOR};
    border-radius: 4px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const GenreWrapper = styled.div`
  span {
    display: inline-block;
    margin-bottom: 14px;
    padding: 4px 10px;
    border-radius: 6px;
    background-color: ${GRAY_COLOR};
    font-size: 12px;
    font-weight: bold;
    margin-right: 8px;
  }
`;
