import * as React from 'react';
import { Link } from 'gatsby';
import { TOC } from '../model';

function isUnderDepthLimit(depth: number, maxDepth: number): boolean {
  if (maxDepth === null) {
    return true;
  }
  return depth < maxDepth;
}

function createItems(
  items: TOC[],
  location: Location,
  depth: number,
  maxDepth: number
): JSX.Element[] {
  return items.map((item, index) => {
    return (
      <li key={location.pathname + (item.url || `${depth}-${index}`)}>
        <Link to={location.pathname + item.url}>{item.title}</Link>
        {item.items && isUnderDepthLimit(depth, maxDepth) && (
          <ul>{createItems(item.items, location, depth + 1, maxDepth)}</ul>
        )}
      </li>
    );
  });
}

function TableOfContents({
  items,
  location,
  depth,
}: {
  items: TOC[] | undefined;
  location: Location;
  depth: number;
}): JSX.Element | null {
  return items ? (
    <nav>
      <h4>TABLE OF CONTENTS</h4>
      <ul>{createItems(items, location, 1, depth)}</ul>
    </nav>
  ) : null;
}

export default TableOfContents;
