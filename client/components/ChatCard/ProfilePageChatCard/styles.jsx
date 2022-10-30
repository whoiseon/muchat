import styled from "@emotion/styled";
import {
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK,
  GRAY_COLOR,
  MAIN_COLOR, SEMI_GRAY_COLOR
} from "../../../styles/common";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
  background-color: ${BACKGROUND_WHITE};
  border-radius: 6px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.12s ease-in;
  border: 2px solid ${BACKGROUND_COLOR};
  &:hover {
    transform: scale(1.02);
    background-color: ${BACKGROUND_WHITE_CLICK};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${MAIN_COLOR};
  }
  h1 {
    font-size: 14px;
    
  }
`;

export const GenreWrapper = styled.div`
  span {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    background-color: ${GRAY_COLOR};
    font-size: 12px;
    font-weight: bold;
    margin-right: 20px;
  }
`;

export const CurrentUserBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: ${SEMI_GRAY_COLOR};
  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
