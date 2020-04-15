import * as React from 'react';
import { Link } from 'gatsby';
import { useMatch } from '@reach/router';
import * as docList from '../../docs/docs.yaml';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  const match = useMatch(`/*`);
  const slug = match ? match['*'] : '';

  return (
    <div>
      <ul>
        {docList.map(chapter => (
          <li key={chapter.title}>
            <p className={slug === chapter.link ? 'haha' : ''}>
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
    </div>
  );
};
