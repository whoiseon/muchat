import styled from "@emotion/styled";

import {
  BACKGROUND_COLOR,
  BACKGROUND_WHITE,
  BACKGROUND_WHITE_CLICK,
  RED_COLOR,
  SEMI_GRAY_COLOR
} from "../../styles/common";

export const Background = styled.div`
  width: 14%;
  height: 100%;
  overflow-y: scroll;
`;

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

`;
