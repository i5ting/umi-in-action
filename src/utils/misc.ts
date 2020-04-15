import * as docList from '../../docs/docs.yml';
import { NearPage } from '../model';

export const getMdUrl = (slug: string): string => {
  const prefix = 'https://github.com/ykfe/umi-in-action/edit/master/';

  if (slug === 'docs') {
    return `${prefix}docs/README.md`;
  }

  const depth = slug.split('/').length;

  if (depth === 2) {
    return `${prefix}${slug}/README.md`;
  }
  return `${prefix}${slug}.md`;
};

const getPrevPage = (index: number, paths: string[], docMap: Record<string, string>): NearPage => {
  if (index === 0) return null;
  const slug = paths[index - 1];
  return {
    slug,
    title: docMap[slug],
  };
};

const getNextPage = (index: number, paths: string[], docMap: Record<string, string>): NearPage => {
  if (index + 1 === paths.length) return null;
  const slug = paths[index + 1];
  return {
    slug,
    title: docMap[slug],
  };
};

export const getNearPage = (
  slug: string
): {
  prev: NearPage;
  next: NearPage;
} => {
  const docMap: Record<string, string> = {};

  docList.forEach(chapter => {
    const { title, link, items } = chapter;
    docMap[link] = title;

    if (!items) return;

    items.forEach(section => {
      const { title: sectionTitle, link: sectionLink } = section;
      docMap[sectionLink] = sectionTitle;
    });
  });

  const paths = Object.keys(docMap);
  const index = paths.findIndex(path => path === `/${slug}`);

  return {
    prev: getPrevPage(index, paths, docMap),
    next: getNextPage(index, paths, docMap),
  };
};
