import * as React from 'react';
import documentList from '../../docs/docs.yaml';

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <ul>
        {documentList.map(document => (
          <li key={document.chapter}>
            <p>{document.chapter}</p>
            {document.sections && document.sections.length && (
              <ul>
                {document.sections.map(section => (
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
