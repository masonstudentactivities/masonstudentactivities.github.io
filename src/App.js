import React from 'react'

import { Root,Routes } from 'react-static'
import { Router } from './components/Router';

import './styles/app.css';
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
