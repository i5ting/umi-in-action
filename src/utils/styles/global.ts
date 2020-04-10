import { css } from '@emotion/core';
import prismStyles from './prism-styles';

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }

  ${prismStyles}
`;

export default globalStyles;
