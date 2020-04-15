import * as React from 'react';
import { Link } from 'gatsby';
import { useMatch } from '@reach/router';
import * as docList from '../../docs/docs.yml';
import { getNearPage } from '../utils/misc';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const match = useMatch(`/*`);
  const slug = match ? match['*'] : '';
  const nearPage = getNearPage(slug);

  return (
    <div>
      <ul>
        {docList.map(chapter => (
          <li key={chapter.title}>
            <p className={match && match['*'] === chapter.link ? 'haha' : ''}>
              <Link to={chapter.link}>{chapter.title}</Link>
            </p>
            {chapter.items && chapter.items.length && (
              <ul>
                {chapter.items.map(section => (
                  <li key={section.link}>
                    <Link to={section.link}>{section.title}</Link>
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
