export interface Markdown {
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
  };
  htmlAst: {
    type: string;
  };
}

export type AllMarkdown = {
  node: Markdown;
}[];

export interface MenuItem {
  chapter: string;
  sections?: string[];
}
