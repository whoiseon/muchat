import styled from "@emotion/styled";
import {MAIN_COLOR, MAIN_COLOR_HOVER, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const Background = styled.div`
  width: 14%;
  height: 100%;
  margin-right: 40px;
  overflow: hidden;
`;

export const Membership = styled.div`
  margin-bottom: 40px;
  button {
    width: 100%;
    padding: 21px 0;
    background-color: ${MAIN_COLOR};
    color: ${WHITE_COLOR};
    border-radius: 6px;
    margin-bottom: 20px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
  }
`;

export const InfoWrapper = styled.div`
  height: 100%;
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  & > div {
    height: 100%;
  }
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${SEMI_GRAY_COLOR};
  span {
    margin-left: auto;
    color: ${WHITE_COLOR};
  }
`;

export const Description = styled.div`
  margin-top: 30px;
  height: 100%;
  overflow-y: scroll;
  p {
    line-height: 24px;
    height: 100%;
  }
`;
