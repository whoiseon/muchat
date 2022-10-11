import styled from "@emotion/styled";
import {SEMI_GRAY_COLOR} from "../../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  width: 100%;
  opacity: 0.5;
  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    color: ${SEMI_GRAY_COLOR};
  }
  h1 {
    color: ${SEMI_GRAY_COLOR};
    font-size: 16px;
  }
`;
