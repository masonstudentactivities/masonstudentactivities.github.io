import React, { Component } from 'react'

import { Root,Routes } from 'react-static'
//
import { Link, Router } from './components/Router';

import './app.css';
import logo from './logo.png';
import pages from "./pages";

class App extends React.Component {
    render() {
      //If we aren't on a valid club page, render the thumbnails page
        return (
          <Root>
            <div>
              Why is nothing loading?
            </div>
            <div className="content">
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Routes path="*"/>
                </Router>
              </React.Suspense>
            </div>
          </Root>
        );
      //If we are on a valid club page, render the club using clubData
    }
  }
export default App;
