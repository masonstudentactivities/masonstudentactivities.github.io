// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

import React from "react";
let config = require("./site.config.json");
// Get started at https://react-static.js.org
export default {
  Document: ({
    Html,
    Head,
    Body,
    children
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/logos/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="DLvSSr0jWPcZ8MgVUc0bz_hilIsMYoh83_8drImbBpM"
        />
        <link rel="apple-touch-icon" href="/images/logos/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  siteRoot: "https://masonstudentactivities.github.io",
  getRoutes: async () => {
    //Reference: https://github.com/react-static/react-static/blob/master/docs/config.md#getroutes
    //What we're doing here is telling react-static which components to create as pages, given their path
    //We have a bunch of JSON data in pagesMHS.json and pagesMMS.json, so let's turn them into unique pages using our components
    let pagesObj = [];
    //Runs twice, once for MMS and once for MHS
    const events = require(`./src/eventsMHS.json`);
    config.sites.forEach(function (site) {
      const pages = require(`./src/pages${site.directory.toUpperCase()}.json`);
      //Create a homepage
      pagesObj.push({
        "path": `/${site.directory}`,
        "template": "src/content/homepage/homepage",
        getData: () => ({
          "site":site
        })
      });
      if(site.directory === "mhs"){
        pagesObj = pagesObj.concat(
          events.map((event) => ({
            "path": `/${site.directory}/calendar/${event.name.replaceAll(" ","-").toLowerCase()}`,
            "template": "src/content/calendar/EventPage",
            getData: () => ({
              "site": site,
              "event": event
            }),
          }))
        );
        pagesObj.push({
          "path": `/${site.directory}/calendar`,
          "template": "src/content/calendar/CalendarPage",
          getData: () => ({
            "events":events,
            "site":site
          })
        });
      }
      //Create a preview page
      pagesObj.push({
        "path": `/${site.directory}/preview`,
        "template": "src/content/preview/Preview",
        getData: () => ({
          "site":site
        })
      });
      //Create all pages for this site
      pagesObj = pagesObj.concat(
        pages.map((page) => ({
          "path": `/${site.directory}/${page.name.replaceAll(" ","-").toLowerCase()}`,
          "template": "src/content/club/Page",
          getData: () => ({
            "site": site,
            "page": page
          }),
        }))
      );
    });
    //Add the homepage, and combine it with all of our other pages
    //Now react-static knows where to look to build the site
    return [
      {
        "path": `/`,
        "template": "src/content/root"
      },
      ...pagesObj
    ];
  },
  plugins: [
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
  // Remove this when you start doing any static generation
};
