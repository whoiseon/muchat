import styled from "@emotion/styled";
import {
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  SEMI_GRAY_COLOR,
  WHITE_COLOR
} from "../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  height: 100%;
  margin-right: 40px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 21px 0;
  background-color: ${BACKGROUND_WHITE};
  border-radius: 6px;
  margin-bottom: 14px;
`;

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ul {
    width: 100%;
    li {
      display: flex;
      align-items: center;
      div:nth-of-type(1) {
        max-width: 180px;
        min-width: 180px;
        display: flex;
        align-items: center;
        padding: 12px 16px;
        border-radius: 6px;
        background-color: ${BACKGROUND_COLOR};
        img {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
      div:nth-of-type(2) {
        padding: 12px 16px;
      }
    }
  }
`;

export const ChatSendForm = styled.div`

`;

export const ChatTools = styled.div`
  margin-bottom: 14px;
`;

export const SendWrapper = styled.div`
  display: flex;
  width: 100%;
  textarea {
    width: 100%;
    resize: none;
    background-color: ${BACKGROUND_WHITE};
    border: none;
    border-radius: 6px;
    padding: 16px;
    color: ${WHITE_COLOR};
    margin-right: 20px;
    &::placeholder {
      color: ${SEMI_GRAY_COLOR};
    }
  }
  button {
    min-width: 140px;
    padding: 16px 0;
    background-color: ${MAIN_COLOR};
    color: ${WHITE_COLOR};
    font-weight: bold;
    border-radius: 6px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
  }
`;
