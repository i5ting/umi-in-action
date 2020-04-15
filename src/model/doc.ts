interface TOC {
  url: string;
  title: string;
  items?: TOC[];
}

export interface Mdx {
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
  };
}

export type NearPage = {
  title: string;
  slug: string;
} | null;

export type PageMenu = {
  title: string;
  anchor: string;
  children: {
    title: string;
    anchor: string;
  }[];
}[];
