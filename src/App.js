import React, { Component } from 'react'

import { Root,Routes } from 'react-static'
import { Link, Router } from './components/Router';

import './app.css';
import pages from "./pages";
import {Helmet} from "react-helmet";

function App() {
  //If we aren't on a valid club page, render the thumbnails page
    return (
      <Root>
        <Helmet>
          <title>MHS Student Activities</title>
          <meta name="description" content="Explore enriching extracurricular options for the Mason City Schools district."/>
          {/* opengraph embeds */}
          <meta content={"MHS Student Activities Homepage"} property="og:title"/>
          <meta content="Explore enriching extracurricular options for the Mason City Schools district." property="og:description"/>
          <meta content="MHS Student Activities" property="og:site_name"/>
          <meta content="/images/logos/logo192.png" property='og:image'/>
        </Helmet>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router id="site-content" className="content">
            <Routes path="*"/>
          </Router>
        </React.Suspense>
        <footer id="footer">
          <div className="container">
            <div>
              <b>MHS Student Activities Coordinator</b>: Lorri Fox Allen &lt;AllenL@masonohioschools.com&gt;
            </div>
            <div>
              <b>Site Maintainer</b>: Luke Trenaman &lt;luke.trenaman30@masonohioschools.com&gt;
            </div>
          </div>
        </footer>
      </Root>
    );
  //If we are on a valid club page, render the club using clubData
  }
export default App;
