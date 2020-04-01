declare module '*.yaml' {
  interface DocYAML {
    chapter: string;
    sections: string[];
  }

  const content: DocYAML[];
  export default content;
}
