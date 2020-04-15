interface TOC {
  url: string;
  title: string;
  items?: TOC[];
}

interface Mdx {
  frontmatter: {
    title: string;
    author: string;
  };
  fields: {
    slug: string;
  };
  body: string;
  tableOfContents: {
    items?: TOC[];
  };
}

export interface DocPage {
  data: {
    mdx: Mdx;
  };
  pageContext: {
    slug: string;
    prev: {
      title: string;
      link: string;
    };
    next: {
      title: string;
      link: string;
    };
  };
}
