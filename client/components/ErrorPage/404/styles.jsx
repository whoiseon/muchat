import styled from "@emotion/styled";
import {MAIN_COLOR, MAIN_COLOR_HOVER, RED_COLOR, WHITE_COLOR} from "../../../styles/common";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 200px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  img {
    margin-bottom: 40px;
    width: 80px;
    height: 40px;
  }
  h1 {
    color: ${RED_COLOR};
    margin-bottom: 10px;
  }
  a {
    display: flex;
    justify-content: center;
    width: 200px;
    padding: 18px;
    background-color: ${MAIN_COLOR};
    color: ${WHITE_COLOR};
    border-radius: 6px;
    margin-top: 40px;
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${MAIN_COLOR_HOVER};
    }
  }
`;
