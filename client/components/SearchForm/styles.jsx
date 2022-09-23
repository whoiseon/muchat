import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {BACKGROUND_BLACK, SEMI_GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const SearchFormWrapper = styled.form`
  padding: 40px 20px 40px 40px;
  width: 76%;
  overflow-y: scroll;
`;

const SearchBarAnimation = keyframes`
  0% {
    width: 24%;
  }
  100% {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  animation: ${SearchBarAnimation} 0.4s ease-in;
  input {
    width: 100%;
    background-color: ${BACKGROUND_BLACK};
    color: ${WHITE_COLOR};
    border-radius: 6px;
    padding: 20px 20px 20px 60px;
    border: none;
    &::placeholder {
      color: ${SEMI_GRAY_COLOR};
    }
  }
  svg {
    position: absolute;
    color: ${SEMI_GRAY_COLOR};
    width: 18px;
    height: 18px;
    top: 18px;
    left: 20px;
  }
`;
