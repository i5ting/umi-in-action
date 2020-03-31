import * as React from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Document = ({
  data,
}: {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
}): JSX.Element => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
    </Layout>
  );
};

// Document.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.shape({
//         title: PropTypes.string,
//       }),
//     }),
//   }).isRequired,
// };

export default Document;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
