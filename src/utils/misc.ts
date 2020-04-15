export default function getMdUrl(slug: string): string {
  const prefix = 'https://github.com/ykfe/umi-in-action/blob/master';

  if (slug === 'docs') {
    return `${prefix}docs/README.md`;
  }

  const depth = slug.split('/').length;

  if (depth === 2) {
    return `${prefix}${slug}/README.md`;
  }
  return `${prefix}${slug}.md`;
}
