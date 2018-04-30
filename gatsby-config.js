module.exports = {
  pathPrefix: '/tph-site',
  siteMetadata: {
    title: 'The Programmer\'s hangout',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdowncontent`,
        name: 'pages'
      }
    },
    
  ],
}
