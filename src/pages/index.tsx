import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageFooter from '../components/page-footer';
import { colors } from '../utils/constants';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Link
      css={css`
        display: block;
        margin: 2em auto;
        width: 10em;
        text-decoration: none;
        color: ${colors.ui.hover};
      `}
      to="/docs"
    >
      Get Started
    </Link>
    <PageFooter />
  </Layout>
);

export default IndexPage;
