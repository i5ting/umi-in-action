import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DocWrapper from '../components/doc-wrapper';
import { getMdUrl } from '../utils/misc';
import { DocPage } from '../model';

const Doc = ({ data, pageContext }: DocPage): JSX.Element => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <DocWrapper>
        <a href={getMdUrl(pageContext.slug)}>
          <span role="img" aria-label="pencil">
            ✏️
          </span>
          Edit this page
        </a>
        <h1>{post.frontmatter.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </DocWrapper>
    </Layout>
  );
};

export default Doc;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
      timeToRead
      htmlAst
    }
  }
`;
