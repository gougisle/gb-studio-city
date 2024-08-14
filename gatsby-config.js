/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GB Studio City`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-58MXF04YVT",
        includeInDevelopment: false,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Titillium Web`,
          // `source sans \pro:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
