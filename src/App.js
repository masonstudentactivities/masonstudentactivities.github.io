import React, { Component } from 'react'

import { useRouteData,getRouteInfo, Root,Routes } from 'react-static'
import { Link, Router } from './components/Router';

import './app.css';
import pages from "./pages";
import {Helmet} from "react-helmet";
import Meta from "./components/Meta"

function App() {
  //If we aren't on a valid club page, render the thumbnails page
    return (
      <Root>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Meta/>
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
