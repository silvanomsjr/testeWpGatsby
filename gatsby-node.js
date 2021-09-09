// gatsby-node.js

exports.createPages = async ({ graphql, actions }) => {
    const {
      data: { allWpPage }
    } = await graphql(`
      query {
        allWpPage {
          nodes {
            id
            uri
          }
        }
      }
    `);
  
    allWpPage.nodes.map((page) => {
      const { id, uri } = page;
  
      return actions.createPage({
        path: `blog${uri}`,
        component: require.resolve('./src/modules/blog/index.js'),
        context: {
          id: id
        }
      });
    });
  };