import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import globalStyles from '../utils/styles/global';
import PageHeader from './page-header';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyles} />
      <PageHeader siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          padding-top: 5.5em;
        `}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
