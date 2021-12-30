// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

import path from 'path'

// Get started at https://react-static.js.org
export default {
  siteRoot: "https://masonstudentactivities.github.io",
  getRoutes: async () => {
    const pages = require("./src/pages.json");
    let pagesObj = pages.map(page => ({
        path: `/${page.name}`,
        template: 'src/Page',
        getData: () => ({
          "data":page
        })
    }))
    console.log(pagesObj);
    return [
      {
        path: '/',
        template: 'src/templates/index'
      },
      ...pagesObj
    ]
  },
  plugins:[
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),]
  // Remove this when you start doing any static generation
}
