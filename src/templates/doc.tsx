import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import DocWrapper from '../components/doc-wrapper';
import * as MarkdownComponents from '../utils/styles/markdown-styles';
import { getMdUrl } from '../utils/misc';
import { DocPage } from '../model';

const Doc = ({ data, pageContext }: DocPage): JSX.Element => {
  const { body, frontmatter, tableOfContents } = data.mdx;
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
          <h1>{frontmatter.title}</h1>
          <MDXProvider components={MarkdownComponents}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </article>
        <nav>
          <ul>
            {tableOfContents.items &&
              tableOfContents.items.map((item: any) => (
                <li key={item.url}>
                  <a href={`#${item.url}`}>{item.title}</a>
                  {item.items && (
                    <ul>
                      {item.items.map((childItem: any) => {
                        return (
                          <li key={childItem.url}>
                            <a href={`#${childItem.url}`}>{childItem.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
      </DocWrapper>
    </Layout>
  );
};

export default Doc;

export const mdx = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        author
      }
      tableOfContents
    }
  }
`;
