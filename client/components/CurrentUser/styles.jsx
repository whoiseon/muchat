import styled from "@emotion/styled";
import {
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK,
  RED_COLOR,
  SEMI_GRAY_COLOR
} from "../../styles/common";

export const CurrentUserWrapper = styled.div`
  padding: 40px 40px 40px 20px;
  width: 24%;
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px;
  background-color: ${BACKGROUND_WHITE};
  border-radius: 6px;
  margin-bottom: 14px;
  span {
    color: ${RED_COLOR};
    margin-left: 8px;
    font-weight: bold;
  }
`;

export const UserList = styled.div`
  li {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    background-color: ${BACKGROUND_COLOR};
    border-radius: 6px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${BACKGROUND_WHITE};
    }
    &:active {
      background-color: ${BACKGROUND_WHITE_CLICK};
    }
    svg {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      color: ${SEMI_GRAY_COLOR};
    }
  }
`;
