import React from 'react'

import { Link } from './../components/Router';
import pages from "./../pages";
import Header from "./../components/Header";
import BootstrapDropdown from './BootstrapDropdown';

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
  filtersUpdate(dropdownName,value){
    let newState = this.state;
    newState[dropdownName] = value;
    this.setState(newState);
  }
  render(){
    let cards = [];
    let filters = Object.keys(filterData).map((property) => {
      return <BootstrapDropdown key={property} filtersUpdate={this.filtersUpdate.bind(this)} name={property} options={filterData[property]}/>
    })
    function shouldBeVisisble(index){
      let page = pages[index];
      let visible = true;
      if(filters[0].state !== undefined && (page.category !== filters[0].state.selected || filters[0].state.selected === "Any")){
        visible = false;
      }
      return visible;
    }
    for(let i = 0;i<pages.length;i++){
        cards.push(
          <Link to={"/"+pages[i].name} className={"thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 " + (shouldBeVisisble(i) ? "" : "hidden")} key={i}>
            <img src={"/thumbnails/" +pages[i].name + "." + pages[i].fileExtension}/>
            <h2>{pages[i].name}</h2>
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

            <li className="nav-item">
                <button className="btn btn-sm btn-outline-success" type="button">+ Add filter</button>
            </li>
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