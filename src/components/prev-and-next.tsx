import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { SiblingPage } from '../model';

const Sibling = styled.div`
  width: 45%;
`;

const Prev = styled(Sibling)`
  text-align: left;
`;

const Next = styled(Sibling)`
  text-align: right;
`;

const PrevAndNext = ({ prev, next }: { prev: SiblingPage; next: SiblingPage }): JSX.Element => {
  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
      `}
    >
      <Prev>
        {prev && (
          <Link to={prev.link}>
            <span>Previous</span>
            <h3>{prev.title}</h3>
          </Link>
        )}
      </Prev>
      <Next>
        {next && (
          <Link to={next.link}>
            <span>Next</span>
            <h3>{next.title}</h3>
          </Link>
        )}
      </Next>
    </nav>
  );
};

export default PrevAndNext;
