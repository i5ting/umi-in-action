import * as React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../utils/constants';

function Search(): JSX.Element {
  return (
    <form
      css={css`
        position: relative;
        display: flex;
        margin: 0 1em;
      `}
    >
      <input
        css={css`
          padding-left: 1.5em;
          width: 230px;
          outline: none;
          line-height: 3em;
          color: ${colors.text.secondary};
          border: 0.125em solid ${colors.input.border};
          border-radius: 9999px;
          background-color: ${colors.input.border};
          &:focus {
            border-color: ${colors.input.focusBorder};
            box-shadow: 0 0 10px -1px ${colors.input.focusBoxShadow};
            transition: all 0.2s ease-in-out;
          }
          &::-webkit-input-placeholder {
            color: ${colors.text.placeholder};
          }
        `}
        id="algolia-doc-search"
        type="search"
        placeholder="Search docs..."
      />
      <FontAwesomeIcon
        css={css`
          position: absolute;
          width: 1em;
          height: 1em;
          right: 1em;
          top: 50%;
          transform: translateY(-50%);
          color: grey;
        `}
        icon={faSearch}
      />
    </form>
  );
}

export default Search;
