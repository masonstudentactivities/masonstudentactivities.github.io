import React from 'react'

import { Link } from './../components/Router';
import pages from "./../pages";
import Header from "./../components/Header";

export default function() {
  let cards = [];

  for(let i = 0;i<pages.length;i++){
      cards.push(
        <Link to={"/"+pages[i].name} className="thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" key={i}>
          <img src={"/thumbnails/" +pages[i].name + "." + pages[i].fileExtension}/>
          <h2>{pages[i].name}</h2>
        </Link>
      )
  }
  return (
    <>
    <Header isIndex="true"/>
    <div id="thumbnail-container">
      <div className="container">
        <div className="row">
          {cards}
        </div>
      </div>
    </div>
    </>
    )
}