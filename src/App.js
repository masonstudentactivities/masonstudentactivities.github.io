//To convert this into buildsite.js, use the babel transpiler found below:
//https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.7&externalPlugins=&assumptions=%7B%7D

//Get the JSON contained within our git repo
import React from 'react';
import pages from './pages';
import { Link } from "react-router-dom";

let cards = [];

for(let i = 0;i<pages.length;i++){
    cards.push(
      <Link to={"/"+pages[i].name} className="thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" key={i}>
        <img src={"/thumbnails/" +pages[i].name + "." + pages[i].fileExtension}/>
        <h2>{pages[i].name}</h2>
      </Link>
    )
}

class App extends React.Component {
    render() {
      //If we aren't on a valid club page, render the thumbnails page
        return (
          <div className="container">
            <div className="row">
              {cards}
            </div>
          </div>
        );
      //If we are on a valid club page, render the club using clubData
    }
  }
export default App;