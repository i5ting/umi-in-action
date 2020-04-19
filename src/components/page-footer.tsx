import * as React from 'react';
import { css } from '@emotion/core';
import { animatedUnderline } from '../utils/styles/animate-styles';
import { colors } from '../utils/constants';

const PageFooter = (): JSX.Element => {
  return (
    <footer
      css={css`
        padding: 3em;
        text-align: center;
        color: ${colors.text.secondary};
        font-size: 14px;
      `}
    >
      Powered By{' '}
      <a
        css={css`
          display: inline-block;
          color: ${colors.text.secondary};
          text-decoration: none;
          ${animatedUnderline}
          &:hover {
            color: ${colors.link.hoverBorder};
          }
        `}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/suanmei/gatsby-theme-tulip"
      >
        gatsby-theme-tulip
      </a>{' '}
      ©2020 - {new Date().getFullYear()}. Documentation licensed under GNU.
    </footer>
  );
};

export default PageFooter;
