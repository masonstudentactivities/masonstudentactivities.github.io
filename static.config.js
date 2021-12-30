// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

import path from 'path'

// Get started at https://react-static.js.org
export default {
  getRoutes: async () => {
    const pages = require("./src/pages.json");
    return [
      {
        path: '/',
        getData: () => ({
          "data":pages
        }),
        children: pages.map(page => ({
          path: `/${page.name}`,
          template: 'src/Page',
          getData: () => ({
            "data":page
          }),
        })),
      },
    ]
  },
  plugins:[
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/templates'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),]
  // Remove this when you start doing any static generation
}
