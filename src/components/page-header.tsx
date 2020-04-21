import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../utils/constants';
import Search from './search';

const Header = ({ siteTitle }: { siteTitle: string }): JSX.Element => {
  const { avatar } = useStaticQuery(graphql`
    query Avatar {
      avatar: file(name: { eq: "avatar" }) {
        childImageSharp {
          resolutions(width: 40, height: 40) {
            ...GatsbyImageSharpResolutions_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <header
      css={css`
        position: fixed;
        z-index: 2;
        display: flex;
        padding: 1em 3em;
        width: 100%;
        height: 5em;
        line-height: 3em;
        background-color: ${colors.white};
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.08);
      `}
    >
      <Link
        to="/"
        css={css`
          margin-right: 2.5em;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: ${colors.text.header};
        `}
      >
        <Image resolutions={avatar.childImageSharp.resolutions} alt="logo" />
        <span
          css={css`
            margin-left: 0.5em;
            font-size: 1.5em;
            font-weight: 500;
          `}
        >
          {siteTitle}
        </span>
      </Link>
      <Search />
      <div
        css={css`
          display: flex;
          flex-grow: 1;
          justify-content: flex-end;
        `}
      >
        <a
          css={css`
            padding: 0 0.5em;
          `}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ykfe/umi-in-action"
        >
          <FontAwesomeIcon
            css={css`
              color: grey;
              &:hover {
                color: ${colors.ui.hover};
              }
            `}
            icon={faGithub}
            size="lg"
            title="Github"
          />
        </a>
        <button
          css={css`
            padding-left: 1em;
            padding-right: 0;
            outline: none;
            border: none;
            cursor: pointer;
          `}
          type="button"
        >
          <FontAwesomeIcon
            css={css`
              color: grey;
              &:hover {
                color: ${colors.ui.hover};
              }
            `}
            icon={faSun}
            size="lg"
            title="Light Mode"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
