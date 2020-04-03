import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as documentList from '../../docs/docs.yml';
import transArray2Map from '../utils/transform';
import { AllMarkdown, MenuItem } from '../model';

const getDocumentMenu = (data: AllMarkdown): MenuItem[] => {
  const mdMap = transArray2Map(data, 'node.fields.slug', 'node.frontmatter.title');

  return documentList.map(document => {
    const { chapter, sections } = document;
    document.chapter = mdMap.get(`docs/${chapter}`);
    if (sections) {
      document.sections = sections.map(section => mdMap.get(`docs/${chapter}/${section}`));
    }
    return document;
  });
};

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
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
  const menuList = getDocumentMenu(edges);
  return (
    <div>
      <ul>
        {menuList.map(menu => (
          <li key={menu.chapter}>
            <p>{menu.chapter}</p>
            {menu.sections && menu.sections.length && (
              <ul>
                {menu.sections.map(section => (
                  <li key={section}>{section}</li>
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
