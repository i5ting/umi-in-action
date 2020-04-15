declare module '*.yml' {
  interface DocYAML {
    title: string;
    link: string;
    items: {
      title: string;
      link: string;
    }[];
  }

  const content: DocYAML[];
  export = content;
}
