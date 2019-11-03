module.exports = {
  siteMetadata: {
    title: `Umi in action`,
    siteUrl: `https://umi.notodo.cn`,
    description: `UmiJs 实战`,
    author: `authored by 拾邑@suanmei, 罄天@liangklfangl, 十忆@zhangyuang; reviewed by 狼叔@i5ting`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Umi in action`,
        short_name: `Umi in action`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/umi-in-action-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}