import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DocumentWrapper from '../components/document-wrapper';

const Document = ({
  data,
}: {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}): JSX.Element => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <DocumentWrapper>
        <h1>{post.frontmatter.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </DocumentWrapper>
    </Layout>
  );
};

export default Document;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
