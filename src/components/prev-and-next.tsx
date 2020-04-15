import * as React from 'react';
import { Link } from 'gatsby';
import { SiblingPage } from '../model';

const PrevAndNext = ({ prev, next }: { prev: SiblingPage; next: SiblingPage }): JSX.Element => {
  return (
    <nav>
      {prev && (
        <div className="prev-page">
          <span>Previous</span>
          <Link to={prev.link}>
            <h3>{prev.title}</h3>
          </Link>
        </div>
      )}
      {next && (
        <div className="next-page">
          <span>Next</span>
          <Link to={next.link}>
            <h3>{next.title}</h3>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PrevAndNext;
