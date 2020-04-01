import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';

const User = styled.p`
  color: #b02fa6;
`;

const border = css`
  border: 10px solid #000;
  max-width: 300px;
`;

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <User>Created By LiYu</User>
    <p>Welcome to your new Gatsby site.</p>
    <p css={border}>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>2</div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
