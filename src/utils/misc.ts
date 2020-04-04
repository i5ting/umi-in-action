import transArray2Map from './transform';

export const getMdMap = transArray2Map('node.fields.slug', 'node.frontmatter.title');

export const getMdUrl = (slug: string): string => {
  const prefix = 'https://github.com/ykfe/umi-in-action/edit/master/';

  if (slug === 'docs/overview') {
    return `${prefix}docs/README.md`;
  }

  const depth = slug.split('/').length;

  if (depth === 2) {
    return `${prefix}${slug}/README.md`;
  }
  return `${prefix}${slug}.md`;
};
