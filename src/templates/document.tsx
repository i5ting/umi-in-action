import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DocumentWrapper from '../components/document-wrapper';
import { getMdMap, getMdUrl } from '../utils/misc';
import { DocumentPage } from '../model';

const Document = ({ data, pageContext }: DocumentPage): JSX.Element => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <DocumentWrapper>
        <a href={getMdUrl(pageContext.slug)}>
          <span role="img" aria-label="pencil">
            ✏️
          </span>
          Edit this page
        </a>
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
        author
      }
      timeToRead
      htmlAst
    }
  }
`;
