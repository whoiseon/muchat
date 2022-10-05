import styled from "@emotion/styled";
import {BACKGROUND_WHITE, BACKGROUND_WHITE_CLICK, RED_COLOR, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const CardWrapper = styled.li`
  display: flex;
  align-items: center;
  width: 50%;
  max-width: 790px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${BACKGROUND_WHITE};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  @media (max-width: 1680px) {
    max-width: 670px;
  }
  @media (max-width: 1440px) {
    max-width: 590px;
  }
  &:hover {
    transform: scale(1.01);
    background-color: ${BACKGROUND_WHITE_CLICK};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    div {
      color: ${RED_COLOR};
    }
  }
  &:nth-of-type(2n-1) {
    margin-right: 20px;
  }
  h1 {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    margin-right: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ChatInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: ${SEMI_GRAY_COLOR};
  span {
    font-size: 14px;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 6px;
  }
`;
