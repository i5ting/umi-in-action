const path = require('path');

const getMdSlug = filesss => {
  const { name, relativeDirectory, sourceInstanceName } = filesss;
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
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const slug = getMdSlug(fileNode);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/document.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
