import styled from "@emotion/styled";
import {BACKGROUND_WHITE, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  p {
    font-size: 18px;
    font-weight: bold;
    color: ${SEMI_GRAY_COLOR};
  }
`;

export const SubMenu = styled.div`
  margin-left: auto;
  button {
    color: ${SEMI_GRAY_COLOR};
    padding: 8px 14px;
    font-size: 14px;
    border-radius: 6px;
    transition: all 0.16s ease-in;
    &:hover {
      background-color: ${BACKGROUND_WHITE};
      color: ${WHITE_COLOR};
      font-weight: bold;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ul {
    width: 100%;
    display: flex;
  }
`;
