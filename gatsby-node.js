const path = require('path');

const getMdSlug = ({ name, relativeDirectory, sourceInstanceName }) => {
  if (name === 'README') {
    if (relativeDirectory === '') {
      return `${sourceInstanceName}/overview`;
    }
    return `${sourceInstanceName}/${relativeDirectory}`;
  }
  return `${sourceInstanceName}/${relativeDirectory}/${name}`;
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent);
    const slug = getMdSlug(fileNode);

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/doc.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
