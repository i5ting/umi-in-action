const fs = require('fs');

const yaml = require(`js-yaml`);
const docLinksData = yaml.load(fs.readFileSync(`./docs/docs.yaml`));

function flattenList(itemList) {
  return itemList.reduce((reducer, { items, ...rest }) => {
    reducer.push(rest);
    if (items) reducer.push(...flattenList(items));
    return reducer;
  }, []);
}

const flattenedDocs = flattenList(docLinksData);

function getSibling(index, list, direction) {
  if (direction === `next`) {
    const next = index === list.length - 1 ? null : list[index + 1];
    if (next && !next.link) {
      return getSibling(index + 1, list, `next`);
    }
    return next;
  }

  if (direction === `prev`) {
    const prev = index === 0 ? null : list[index - 1];
    if (prev && !prev.link) {
      return getSibling(index - 1, list, `prev`);
    }
    return prev;
  }

  return null;
}

function findDoc(doc) {
  if (!doc.link) return false;
  return doc.link === this.link || doc.link === this.link.slice(0, this.link.length - 1);
}

function getPrevAndNext(slug) {
  const docIndex = flattenedDocs.findIndex(findDoc, {
    link: slug,
  });

  const prevAndNext = {};

  if (docIndex > -1) {
    prevAndNext.prev = getSibling(docIndex, flattenedDocs, `prev`);
    prevAndNext.next = getSibling(docIndex, flattenedDocs, `next`);
  }

  return prevAndNext;
}

module.exports = { getPrevAndNext };
