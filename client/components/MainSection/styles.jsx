import styled from "@emotion/styled";
import {SEMI_GRAY_COLOR} from "../../styles/common";

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Header = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: ${SEMI_GRAY_COLOR};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
