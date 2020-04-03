declare module '*.yml' {
  interface DocYAML {
    chapter: string;
    sections?: string[];
  }

  const content: DocYAML[];
  export = content;
}
