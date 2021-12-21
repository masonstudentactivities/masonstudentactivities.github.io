//To convert this into buildsite.js, use the babel transpiler found below:
//https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.7&externalPlugins=&assumptions=%7B%7D

//Get the JSON contained within our git repo
var request = new XMLHttpRequest();
request.open('GET', '/pages.json');
request.send();
request.onload = function(){
    let response = JSON.parse(request.responseText);
    console.log(response);
    let cards = [];

    //Turn our current drive link into one that displays image previews
    function transformURL(url){
      let id = url.split("https://drive.google.com/open?id=")[1];
      return "https://drive.google.com/uc?export=view&id=" + id;
    }
    //Are we on a subpage? Check by using URL variables
    //Subpages woudld look like: masonstudentactivities.github.io?chess
    //argName would look like: chess
    let argName = decodeURI(location.search.split("?")[1]);
    //We extracted argName, but is it a valid club?
    let subPage = false;
    let clubData = {};
    for(let i = 0;i< response.length;i++){
      if(response[i].name === argName){
        subPage = true;
        clubData = response[i];
      }
    }
    //If URL variables don't show a valid club, build an array of thumbnail cards
    if(!subPage){
      for(let i = 0;i<response.length;i++){
          cards.push(
            <a className="thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" key={i} href={"?" + response[i].name}>
              <img src={transformURL(response[i].thumbURL)}/>
              <h2>{response[i].name}</h2>
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
                <img src={"https://masonstudentactivities.github.io/thumbnails/" +clubData.name + clubData.fileExtension} />
              </div>
            );
          }
        }
      }
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
      );
};