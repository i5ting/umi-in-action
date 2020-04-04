import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useMatch } from '@reach/router';
import * as docList from '../../docs/docs.yml';
import { getMetaMap, getNearPage } from '../utils/misc';
import { AllMarkdown } from '../model';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const {
    allMarkdownRemark: { edges: metaData },
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
  const metaMap = getMetaMap(metaData);
  const match = useMatch(`/*`);
  const slug = match ? match['*'] : '';
  const nearPage = getNearPage(slug, metaData);

  return (
    <div>
      <ul>
        {docList.map(doc => (
          <li key={doc.chapter}>
            <p className={match && match['*'] === doc.chapter ? 'haha' : ''}>
              <Link to={`/docs/${doc.chapter}`}>{metaMap.get(`docs/${doc.chapter}`)}</Link>
            </p>
            {doc.sections && doc.sections.length && (
              <ul>
                {doc.sections.map(section => (
                  <li key={section}>
                    <Link to={`/docs/${doc.chapter}/${section}`}>
                      {metaMap.get(`docs/${doc.chapter}/${section}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div>{children}</div>
      <nav>
        {nearPage.prev ? (
          <div className="prev-page">
            <span>Previous</span>
            <Link to={nearPage.prev.slug}>
              <h3>{nearPage.prev.title}</h3>
            </Link>
          </div>
        ) : null}
        {nearPage.next ? (
          <div className="next-page">
            <span>Next</span>
            <Link to={nearPage.next.slug}>
              <h3>{nearPage.next.title}</h3>
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
};
