import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useMatch } from '@reach/router';
import * as documentList from '../../docs/docs.yml';
import { getMdMap } from '../utils/misc';
import { AllMarkdown } from '../model';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const {
    allMarkdownRemark: { edges: mdMetaData },
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
  const mdMap = getMdMap(mdMetaData);
  const match = useMatch(`/*`);

  return (
    <div>
      <ul>
        {documentList.map(menu => (
          <li key={menu.chapter}>
            <p className={match && match['*'] === menu.chapter ? 'haha' : ''}>
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
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};
