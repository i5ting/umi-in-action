import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useMatch } from '@reach/router';
import PageFooter from './page-footer';
import { colors } from '../utils/constants';
import * as docList from '../../docs/docs.yaml';

const MenuItem = styled.li`
  list-style: none;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text.primary};
`;

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const match = useMatch(`/*`);
  const slug = match ? match['*'] : '';

  return (
    <>
      <section
        css={css`
          padding-left: 2.5em;
          position: fixed;
          width: 18rem;
          height: calc(100vh - 5em);
          bottom: 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        `}
      >
        <div
          css={css`
            padding-top: 2em;
            background-color: #fbfbfb;
          `}
        >
          <ul
            css={css`
              margin: 0 0 0 2em;
            `}
          >
            {docList.map(chapter => (
              <MenuItem key={chapter.title}>
                <p className={slug === chapter.link ? 'haha' : ''}>
                  <MenuLink to={chapter.link}>{chapter.title}</MenuLink>
                </p>
                {chapter.items && chapter.items.length && (
                  <ul>
                    {chapter.items.map(section => (
                      <MenuItem key={section.link}>
                        <MenuLink to={section.link}>{section.title}</MenuLink>
                      </MenuItem>
                    ))}
                  </ul>
                )}
              </MenuItem>
            ))}
          </ul>
        </div>
      </section>
      <div
        css={css`
          padding-left: 18em;
        `}
      >
        <main
          css={css`
            display: flex;
            align-items: flex-start;
            margin: 0 auto;
            padding: 3em;
            max-width: 70em;
          `}
        >
          {children}
        </main>
        <PageFooter />
      </div>
    </>
  );
};
