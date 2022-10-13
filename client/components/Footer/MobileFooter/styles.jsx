import styled from "@emotion/styled";
import {BACKGROUND_BLACK, GRAY_COLOR, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../../styles/common";

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  p {
    width: 100%;
    text-align: center;
    color: ${GRAY_COLOR};
  }
`;

export const DeveloperLink = styled.div`
  margin-top: 20px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      width: 36px;
      height: 36px;
      align-items: center;
      justify-content: center;
      padding: 8px 6px 6px;
      background-color: ${BACKGROUND_BLACK};
      border-radius: 30px;
      transform: scale(1);
      transition: all 0.16s ease-in;
      &:not(:last-of-type) {
        margin-right: 14px;
      }
      &:hover {
        transform: scale(1.14);
        svg {
          color: ${WHITE_COLOR};
        }
      }
      svg {
        color: ${SEMI_GRAY_COLOR};
      }
    }
  }
`;
