/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GB Studio City`,
    siteUrl: `https://gbstudiocity.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //`gatsby-source-filesystem`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Gracie_Barra_Logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-SPD5QJFK1F", // Google Analytics / GA
          "G-58MXF04YVT",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-sass",

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Titillium Web`],
        display: "swap",
      },
    },
  ],
};
