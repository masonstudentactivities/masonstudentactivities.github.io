import React from 'react'
import { Link } from './../../components/Router';
import pages from "./../../pages";
import Header from "./../../components/Header";
import BootstrapDropdown from './BootstrapDropdown';
import Icon from "./../../components/Icon";


const filterData = {
  "Category":["Any","Honors Societies (Non-Competitive)","Sports","Gaming","Technology","Academic","Involvement","Arts","Other"],
  "Mobility Level":["Any","Low","Medium","High"],
  "Noise Level":["Any","Low","Medium","High"]
}

class index extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    Object.keys(filterData).forEach((key) => {
      this.state[key] = filterData[key][0] //Default selected values to 0th element in filterData array
    })
  }
  componentDidMount(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
  filtersUpdate(dropdownName,value){
    let newState = this.state;
    newState[dropdownName] = value;
    this.setState(newState);
  }
  render(){
    let filters = Object.keys(filterData).map((property) => {
      return <BootstrapDropdown key={property} filtersUpdate={this.filtersUpdate.bind(this)} name={property} options={filterData[property]}/>
    })
    let shouldBeVisisble = (index) => {
      let page = pages[index];
      console.log(this.state["Category"])
      if(page.category !== this.state["Category"] && this.state["Category"] !== "Any"){
        return false;
      }
      let mobilityRating = parseInt(page.mobilityRating.substring(0,1));
      if(mobilityRating < filterData["Mobility Level"].indexOf(this.state["Mobility Level"]) && this.state["Mobility Level"] !== "Any"){
        //This is so hacky but it works
        return false;
      }
      let soundRating = parseInt(page.soundRating.substring(0,1));
      if(soundRating < filterData["Noise Level"].indexOf(this.state["Noise Level"]) && this.state["Noise Level"] !== "Any"){
        return false;
      }
      return true;
    }
    let cards = [];
    for(let i = 0;i<pages.length;i++){
        cards.push(
          <Link to={"/"+pages[i].name} className={"thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 " + (shouldBeVisisble(i) ? "" : "hidden")} key={i}>
            <img src={"/images/thumbnails/" +pages[i].name + "." + pages[i].fileExtension}/>
            <h2>{pages[i].name}</h2>
            <Icon type="sound" level={pages[i].soundRating}></Icon>
            <Icon type="mobility" level={pages[i].mobilityRating}></Icon>
          </Link>
        )
    }
    let Navbar = (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                Filters:
            </li>
            {filters}
        </ul>
      </div>
    </nav>
    )
    return (
      <>
      <Header navAddition={Navbar}/>
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
}
export default index;