import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Match } from '@reach/router';
import * as documentList from '../../docs/docs.yml';
import transArray2Map from '../utils/transform';
import { AllMarkdown } from '../model';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: { allMarkdownRemark: { edges: AllMarkdown } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const mdMap = transArray2Map(edges, 'node.fields.slug', 'node.frontmatter.title');
  return (
    <div>
      <ul>
        {documentList.map(menu => (
          <Match path="/docs/*" key={menu.chapter}>
            {(): JSX.Element => {
              return (
                <li key={menu.chapter}>
                  <p>
                    <Link to={`/docs/${menu.chapter}`}>{mdMap.get(`docs/${menu.chapter}`)}</Link>
                  </p>
                  {menu.sections && menu.sections.length && (
                    <ul>
                      {menu.sections.map(section => (
                        <li key={section}>
                          <Link to={`/docs/${menu.chapter}/${section}`}>
                            {mdMap.get(`docs/${menu.chapter}/${section}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }}
          </Match>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};
