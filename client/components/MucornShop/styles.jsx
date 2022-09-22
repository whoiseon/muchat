import styled from "@emotion/styled";
import {BACKGROUND_BLACK, GRAY_COLOR, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const ShopWrapper = styled.div`
  padding: 40px 20px 40px 40px;
  overflow-y: scroll;
  width: 80%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    padding-bottom: 3px;
  }
  button {
    color: ${WHITE_COLOR};
    padding: 12px 16px;
  }
  span {
    margin-left: 14px;
    color: ${SEMI_GRAY_COLOR};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: ${SEMI_GRAY_COLOR};
  p {
    margin-top: 100px;
  }
`;
