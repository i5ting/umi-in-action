export interface MarkdownRemark {
  frontmatter: {
    title: string;
    author: string;
  };
  fields: {
    slug: string;
  };
  html: string;
  htmlAst: {
    type: string;
  };
}

export type AllMarkdown = {
  node: MarkdownRemark;
}[];

export interface DocumentPage {
  data: {
    markdownRemark: MarkdownRemark;
  };
  pageContext: {
    slug: string;
  };
}

export interface MenuItem {
  chapter: string;
  sections?: string[];
}
