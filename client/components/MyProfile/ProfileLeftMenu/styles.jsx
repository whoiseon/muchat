import styled from "@emotion/styled";
import {BACKGROUND_BLACK, BACKGROUND_BLACK_HOVER, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../../styles/common";

export const MenuWrapper = styled.div`
  width: 20%;
  background-color: ${BACKGROUND_BLACK};
  border-radius: 6px;
  padding: 10px 10px 40px;
  margin-right: 40px;
  ul {
    width: 100%;
    li {
      margin-bottom: 4px;
      a {
        display: inline-block;
        width: 100%;
        padding: 16px 20px;
        border-radius: 6px;
        transition: all 0.16s ease-in;
        color: ${SEMI_GRAY_COLOR};
        &:hover {
          background-color: ${BACKGROUND_BLACK_HOVER};
          color: ${WHITE_COLOR};
        }
      }
    }
  }
`;
