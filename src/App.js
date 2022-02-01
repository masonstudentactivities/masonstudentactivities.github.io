import React, { Component } from 'react'

import { useRouteData,getRouteInfo, Root,Routes } from 'react-static'
import { Link, Router } from './components/Router';

import './app.css';
import {Helmet} from "react-helmet";
function App() {
  //If we aren't on a valid club page, render the thumbnails page
    return (
      <Root>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router id="site-content" className="content">
            <Routes path="*"/>
          </Router>
        </React.Suspense>
        <footer id="footer" className="d-flex align-items-center">
          <div className="container">
            <h5>If you have any questions regarding student activities, email:</h5>
            <h5>
              <b>MHS Student Activities Coordinator</b>: Lorri Fox Allen &lt;AllenL@masonohioschools.com&gt;
            </h5>
          </div>
        </footer>
      </Root>
    );
  //If we are on a valid club page, render the club using clubData
  }
export default App;
