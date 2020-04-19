import { css } from '@emotion/core';
import prismStyles from './prism-styles';

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }

  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    visibility: hidden;
  }

  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg,
  h1 .anchor:focus svg,
  h2 .anchor:focus svg,
  h3 .anchor:focus svg,
  h4 .anchor:focus svg,
  h5 .anchor:focus svg,
  h6 .anchor:focus svg {
    visibility: visible;
  }

  ${prismStyles}
`;

export default globalStyles;
