import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

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
      <h1>{post.frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
