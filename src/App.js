import React, { Component } from 'react'

import { useRouteData,getRouteInfo, Root,Routes } from 'react-static'
import { Link, Router } from './components/Router';

import './styles/app.css';
import {Helmet} from "react-helmet";
function App() {
  //If we aren't on a valid club page, render the thumbnails page
    return (
      <Root>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*"/>
          </Router>
        </React.Suspense>
      </Root>
    );
  //If we are on a valid club page, render the club using clubData
  }
export default App;
