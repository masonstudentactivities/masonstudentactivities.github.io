import React, { Component } from 'react'

import { Root,Routes } from 'react-static'
//
import { Link, Router } from './components/Router';

import './app.css';
import logo from './logo.png';
import pages from "./pages";
import {Helmet} from "react-helmet";

function App() {
  //If we aren't on a valid club page, render the thumbnails page
    return (
      <Root>
        <Helmet>
          <title>You are at the homepage!!!</title>
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
