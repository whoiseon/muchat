import styled from "@emotion/styled";
import {BACKGROUND_BLACK, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1680px;
  overflow: hidden;
  margin: 0 auto;
  padding: 40px 0;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  span {
    font-weight: 600;
    color: ${SEMI_GRAY_COLOR};
  }
`;

export const DeveloperLink = styled.div`
  margin-left: auto;
  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
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
