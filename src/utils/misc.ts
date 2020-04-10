import * as docList from '../../docs/docs.yml';
import { AllMarkdown, NearPage } from '../model';
import transArray2Map from './transform';

export const getMetaMap = transArray2Map('fields.slug', 'frontmatter.title');

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
  slug: string,
  metaData: AllMarkdown
): {
  prev: NearPage;
  next: NearPage;
} => {
  const metaMap = getMetaMap(metaData);
  const docMap: Record<string, string> = {};
  const prefix = 'docs';

  docList.forEach(doc => {
    const { chapter, sections } = doc;
    const chapterPath = `${prefix}/${chapter}`;
    docMap[chapterPath] = metaMap.get(chapterPath);

    if (!sections) return;

    sections.forEach(section => {
      const sectionPath = `${prefix}/${chapter}/${section}`;
      docMap[sectionPath] = metaMap.get(sectionPath);
    });
  });

  const paths = Object.keys(docMap);
  const index = paths.findIndex(path => path === slug);

  return {
    prev: getPrevPage(index, paths, docMap),
    next: getNextPage(index, paths, docMap),
  };
};
