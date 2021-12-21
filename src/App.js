//To convert this into buildsite.js, use the babel transpiler found below:
//https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.7&externalPlugins=&assumptions=%7B%7D

//Get the JSON contained within our git repo
import React from 'react';
import ReactDOM from 'react-dom';
import pages from './pages';
let cards = [];

//Turn our current drive link into one that displays image previews
function transformURL(url){
  let id = url.split("https://drive.google.com/open?id=")[1];
  return "https://drive.google.com/uc?export=view&id=" + id;
}
//Are we on a subpage? Check by using URL variables
//Subpages woudld look like: masonstudentactivities.github.io?chess
//argName would look like: chess
let argName = decodeURI(window.location.search.split("?")[1]);
//We extracted argName, but is it a valid club?
let subPage = false;
let clubData = {};
for(let i = 0;i< pages.length;i++){
  if(pages[i].name === argName){
    subPage = true;
    clubData = pages[i];
  }
}
//If URL variables don't show a valid club, build an array of thumbnail cards
if(!subPage){
  for(let i = 0;i<pages.length;i++){
      cards.push(
        <a className="thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" key={i} href={"?" + pages[i].name}>
          <img src={"/thumbnails/" +pages[i].name + "." + pages[i].fileExtension}/>
          <h2>{pages[i].name}</h2>
        </a>
      )
  }
}

console.log(cards);
class App extends React.Component {
    render() {
      //If we aren't on a valid club page, render the thumbnails page
      if(!subPage){
        return (
          <div className="container">
            <div className="row">
              {cards}
            </div>
          </div>
        );
      }
      //If we are on a valid club page, render the club using clubData
      if(subPage){
        return(
          <div className="container">
            <h2>{clubData.name}</h2>
            <img src={"/thumbnails/" +clubData.name + "." + clubData.fileExtension} />
          </div>
        );
      }
    }
  }
export default App;