import React from "react";
import Header from "./../../components/Header";
import MappedPage from "./../../content/club/MappedPage";

import {useRouteData} from "react-static";
import {Helmet} from "react-helmet";
import JSONCrush from "../../functions/JSONCrush";
import Meta from "./../../components/Meta";

function Preview() {
  //Web previews are different for MHS and MMS, so use route data to find the site you're on.
  const {site} = useRouteData();
  let approved, proposed;
  let approvedElement, proposedElement;
  let clubName = "";
  //This page uses URL arguments, so react static shouldn't be building this page. By checking if window exists, react static ignores this render.
  if (typeof window !== "undefined") {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let urlData = url.searchParams.get("data");
    //We compressed the URL params in the spreadsheet, here we uncompress them.
    let decompress = JSONCrush.uncrush(urlData);
    let data = JSON.parse(decompress);
    approved = data.approved;
    if (approved !== undefined) {
      //This is a hack that let's you use Google Drive URLs as image CDNs
      //Reference: https://brendan-ryan.com/wordpress/how-to-use-google-drive-as-a-cdn/
      approved.thumbURL = approved.thumbURL.replace("open?", "uc?");
      approvedElement = (
        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
          {/* TODO: update this to reference the thumbnail component */}
          <div className="container bg-success text-dark">
            <h3>Approved thumbnail</h3>
            <p>This thumbnail is currently on the website</p>
          </div>
          <div className="container">
            <div class="row">
              <span
                className={
                  "mx-auto thumbnail col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4"
                }>
                <img src={approved.thumbURL} />
                <h2>{approved.name}</h2>
              </span>
            </div>
          </div>
          <div className="container bg-success text-dark">
            <h3>Approved webpage</h3>
            <p>This club page is currently on the website</p>
          </div>
          {/*Create a page with the preview data. This is a primary use case of MappedPage */}
          <MappedPage directory={site.directory} data={approved} />;
        </div>
      );
    }
    //Same render process as approved data
    proposed = data.proposed;
    if (proposed !== undefined) {
      proposed.thumbURL = proposed.thumbURL.replace("open?", "uc?");
      proposedElement = (
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="container bg-warning text-dark">
            <h3>Proposed thumbnail</h3>
            <p>"Approve" this club, to put it on the website</p>
          </div>
          <div className="container">
            <div className="row">
              <span
                className="mx-auto thumbnail col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                <img src={proposed.thumbURL} />
                <h2>{proposed.name}</h2>
              </span>
            </div>
          </div>
          <div className="container bg-warning text-dark">
            <h3>Proposed webpage</h3>
            <p>"Approve" this club, to put it on the website</p>
          </div>
          <MappedPage directory={site.directory} data={proposed} />;
        </div>
      );
    }
    //We know that the club will either be approved or proposed, so just grab the name from either one of these.
    if (approved) {
      clubName = approved.name;
    }
    if (proposed) {
      clubName = proposed.name;
    }
  } else {
    return (
      <div>You don't have Javascript enabled! Previews will not work.</div>
    );
  }

  return (
    <>
      <Header />
      <Meta />
      <Helmet
        style={[
          {
            cssText: `
            .text-dark{
                padding:12px;
                color:#111 !important;
            }
            .bg-success{
                background:#23c278 !important;
            }
            .col-12{
                margin:0px;
                padding:0px;
            }
            .row{
                --bs-gutter-x:0rem;
            }
        `,
          },
        ]}>
        <title>Web Preview - {clubName}</title>
      </Helmet>
      <div className="row">
        {proposedElement}
        {approvedElement}
      </div>
    </>
  );
}
export default Preview;
