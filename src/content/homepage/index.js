import React from 'react'
import { Link } from './../../components/Router';
import { useRouteData } from "react-static";
import Header from "./../../components/Header";
import BootstrapDropdown from './BootstrapDropdown';
import Thumbnail from "./Thumbnail";
import Meta from "./../../components/Meta";

const filterData = {
  "Category":["Any","Honors Societies","Sports","Gaming","Technology","Academic","Involvement","Arts","Other"],
  "Noise Level":["Any","Low","Medium","High"],
  "Mobility Level":["Any","Low","Medium","High"],
}

function withPageJSON(Component) {
  return function WrappedComponent(props) {
    const { site } = useRouteData();
    let pages = require(`./../../pages${site.directory.toUpperCase()}.json`);
    return <Component {...props} pages={pages} />;
  }
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
    this.tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
  componentWillUnmount(){
    this.tooltipList.forEach(function(val){
      val.dispose();
    })
  }
  filtersUpdate(dropdownName,value){
    let newState = this.state;
    newState[dropdownName] = value;
    this.setState(newState);
  }
  render(){
    let pages = this.props.pages;
    let filters = Object.keys(filterData).map((property) => {
      return <BootstrapDropdown key={property} filtersUpdate={this.filtersUpdate.bind(this)} name={property} options={filterData[property]}/>
    })
    let shouldBeVisisble = (index) => {
      let page = pages[index];
      console.log(this.state["Category"])
      if(page.category !== this.state["Category"] && this.state["Category"] !== "Any"){
        return false;
      }
      if(filterData["Mobility Level"].indexOf(page.mobilityRating) < filterData["Mobility Level"].indexOf(this.state["Mobility Level"]) && this.state["Mobility Level"] !== "Any"){
        //This is so hacky but it works
        return false;
      }
      if(filterData["Noise Level"].indexOf(page.soundRating) < filterData["Noise Level"].indexOf(this.state["Noise Level"]) && this.state["Noise Level"] !== "Any"){
        return false;
      }
      return true;
    }
    let cards = [];
    for(let i = 0;i<pages.length;i++){
        cards.push(
          <Thumbnail key={i} page={pages[i]} shouldBeVisible={shouldBeVisisble(i)}/>
        )
    }
    let Navbar = (
    <nav className="navbar navbar-expand-sm">
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
      <Meta/>
      <Header navAddition={Navbar}/>
      <div id="thumbnail-container">
        <div className="container-md-fluid container-xl">
          <div className="row gx-2 gy-4">
            {cards}
          </div>
        </div>
      </div>
      </>
      )
  }
}
export default withPageJSON(index);