import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import DocWrapper from '../components/doc-wrapper';
import PrevAndNext from '../components/prev-and-next';
import TableOfContents from '../components/table-of-contents';
import * as MarkdownComponents from '../utils/styles/markdown-styles';
import getMdUrl from '../utils/misc';
import { DocPage } from '../model';

const Doc = ({ data, location, pageContext }: DocPage): JSX.Element => {
  const { body, frontmatter, tableOfContents } = data.mdx;
  const { slug, prev, next } = pageContext;
  return (
    <Layout>
      <SEO title="Docs" />
      <DocWrapper>
        <article>
          <a href={getMdUrl(slug)}>
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
        <TableOfContents
          items={tableOfContents.items}
          location={location}
          depth={frontmatter.tableOfContentsDepth}
        />
        <PrevAndNext prev={prev} next={next} />
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
        tableOfContentsDepth
      }
      tableOfContents
    }
  }
`;
