/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Électricien professionnel dans le Pas-de-Calais`,
    description: `Services d'électricité à Lens, Liévin, Arras, Béthune. Installation, rénovation et dépannage.`,
    author: `Votre Nom`,
    siteUrl: `https://www.votresite.fr`,
    image: `/images/electricien-logo.png`,
    social: {
      twitter: `@votrecompte`,
    },
    organization: {
      name: "Votre Nom d'Entreprise",
      url: "https://www.votresite.fr",
      logo: "https://www.votresite.fr/images/logo.png",
      address: {
        street: "Votre Adresse",
        city: "Lens",
        region: "Pas-de-Calais",
        postalCode: "62300",
        country: "FR"
      },
      geo: {
        latitude: "50.4307",
        longitude: "2.8319"
      },
      telephone: "votre_numéro_de_téléphone",
      areaServed: ["Lens", "Liévin", "Arras", "Béthune", "Pas-de-Calais"]
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
