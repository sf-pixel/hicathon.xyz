module.exports = {
  pathPrefix: "/hicathon",
  siteMetadata: {
    title: `hicathon`,
    description: `A simple landing page for hicathon 2021.`,
    author: `@homeworkpunks`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `hicathon 2021`,
        short_name: `hicathon`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Code Pro`,
            variants: [`400`, `400i`, `700`]
          },
          {
            family: `Courier Prime`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    
    `gatsby-plugin-gatsby-cloud`,




    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
