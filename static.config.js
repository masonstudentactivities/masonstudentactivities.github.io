// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

import React from 'react'
// Get started at https://react-static.js.org
export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <title>React App</title>
      </Head>
    <Body>{children}</Body>
  </Html>
  ),
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
        template: 'src/templatesIsAReservedWord/index'
      },
      ...pagesObj
    ]
  },
  plugins:[
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),]
  // Remove this when you start doing any static generation
}
