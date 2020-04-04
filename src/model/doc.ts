export interface MarkdownRemark {
  frontmatter: {
    title: string;
    author: string;
  };
  fields: {
    slug: string;
  };
  html: string;
  htmlAst: HtmlAst;
}

export type AllMarkdown = {
  node: MarkdownRemark;
}[];

export interface DocPage {
  data: {
    markdownRemark: MarkdownRemark;
  };
  pageContext: {
    slug: string;
  };
}

export type NearPage = {
  title: string;
  slug: string;
} | null;

export interface HtmlAst {
  children: {
    tagName?: string;
    properties: Record<string, string>;
    children: {
      type: string;
      value: string;
    }[];
  }[];
}

export type PageMenu = {
  title: string;
  anchor: string;
  children: {
    title: string;
    anchor: string;
  }[];
}[];
