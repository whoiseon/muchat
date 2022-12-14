import styled from "@emotion/styled";

export const BACKGROUND_COLOR = '#2B2B36';
export const BACKGROUND_EXTRA_BLACK = '#1A1C22';
export const BACKGROUND_BLACK = '#20212A';
export const BACKGROUND_BLACK_HOVER = '#24262F';
export const BACKGROUND_WHITE = '#353541';
export const BACKGROUND_WHITE_CLICK = '#424250';

export const BORDER_DEFAULT = '#393946';

export const WHITE_COLOR = '#F5F5F5';
export const MAIN_COLOR = '#5D61ED';
export const MAIN_COLOR_HOVER = '#7275ED';
export const RED_COLOR = '#E25D5D';
export const GRAY_COLOR = '#4B4B5C';
export const SEMI_GRAY_COLOR = '#66667C';

export const ErrorMessage = styled.div`
  color: ${RED_COLOR};
  margin-bottom: 20px;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 1680px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 1680px) {
    width: 1440px;
  }
  @media (max-width: 1440px) {
    width: 1280px;
  }
`;
