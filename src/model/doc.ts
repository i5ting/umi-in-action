export interface TOC {
  url: string;
  title: string;
  items?: TOC[];
}

interface Mdx {
  frontmatter: {
    title: string;
    author: string;
    tableOfContentsDepth: number;
  };
  fields: {
    slug: string;
  };
  body: string;
  tableOfContents: {
    items?: TOC[];
  };
}

export interface SiblingPage {
  title: string;
  link: string;
}

export interface DocPage {
  data: {
    mdx: Mdx;
  };
  location: Location;
  pageContext: {
    slug: string;
    prev: SiblingPage;
    next: SiblingPage;
  };
}
