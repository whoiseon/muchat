import styled from "@emotion/styled";
import {SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const Wrapper = styled.div`
  padding: 40px;
  overflow-y: scroll;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  h1 {
    font-size: 20px;
    padding-bottom: 3px;
  }
  button {
    color: ${WHITE_COLOR};
    padding: 14px 20px;
  }
  span {
    margin-left: 14px;
    color: ${SEMI_GRAY_COLOR};
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;
