import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DocWrapper from '../components/doc-wrapper';
import { getMdUrl, getMenuInPage } from '../utils/misc';
import { DocPage } from '../model';

const Doc = ({ data, pageContext }: DocPage): JSX.Element => {
  const post = data.markdownRemark;
  const pageMenu = getMenuInPage(post.htmlAst);
  return (
    <Layout>
      <DocWrapper>
        <article>
          <a href={getMdUrl(pageContext.slug)}>
            <span role="img" aria-label="pencil">
              ✏️
            </span>
            Edit this page
          </a>
          <h1>{post.frontmatter.title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <nav>
          <ul>
            {pageMenu.map(h2 => (
              <li key={h2.title}>
                <a href={`#${h2.anchor}`}>{h2.title}</a>
                <ul>
                  {h2.children.map(h3 => (
                    <li key={h3.title}>
                      <a href={`#${h3.anchor}`}>{h3.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
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
      htmlAst
    }
  }
`;
