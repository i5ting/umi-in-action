import { css } from '@emotion/core';
import { colors } from '../constants';

export const animatedUnderline = css`
  &::after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 2px;
    height: 2px;
    transition: transform 250ms ease;
    transform: scaleX(0);
    background-color: ${colors.link.hoverBorder};
  }
  &.active::after,
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const bStyles = css``;
