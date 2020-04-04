import * as docList from '../../docs/docs.yml';
import { AllMarkdown, NearPage, HtmlAst, PageMenu } from '../model';
import transArray2Map from './transform';

export const getMetaMap = transArray2Map('node.fields.slug', 'node.frontmatter.title');

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

export const getMenuInPage = ({ children: nodes }: HtmlAst): PageMenu => {
  const menu: PageMenu = [];

  nodes.forEach(node => {
    if (node.tagName === 'h2') {
      const textNode =
        node.children.length > 0 && node.children.find(child => child.type === 'text');

      menu.push({
        title: textNode ? textNode.value : '',
        anchor: node.properties.id,
        children: [],
      });
    }

    if (node.tagName === 'h3') {
      if (menu.length === 0) return;

      const textNode =
        node.children.length > 0 && node.children.find(child => child.type === 'text');

      menu[menu.length - 1].children.push({
        title: textNode ? textNode.value : '',
        anchor: node.properties.id,
      });
    }
  });

  return menu;
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
