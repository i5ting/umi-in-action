import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageFooter from '../components/page-footer';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <PageFooter />
  </Layout>
);

export default IndexPage;
