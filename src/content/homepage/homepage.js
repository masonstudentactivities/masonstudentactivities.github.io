import React from 'react'
import { useRouteData } from "react-static";
import Header from "../../components/Header";
import BootstrapDropdown from './BootstrapDropdown';
import Thumbnail from "./Thumbnail";
import Meta from "../../components/Meta";
import Footer from "../../components/Footer";
import Calendar from "../calendar/Calendar";
//Filter categories. These must be manually synced with the google form given any changes.
const filterData = {
  "Category":["Any","Honors Societies","Sports","Gaming","Technology","Academic","Involvement","Arts","Other"],
  "Noise Level":["Any","Low","Medium","High"],
  "Mobility Level":["Any","Low","Medium","High"],
}

//This is a hacky solution to use route data within the index. It has to do with react hooks.
//Reference: https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
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
    //Enable bootstrap tooltips for mobility / sound icons
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    this.tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new window.bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
  componentWillUnmount(){
    //Make sure old tooltips dissapear on page change
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
    //Create a bootstrap dropdown component that passes state up through the filtersUpdate method
    let filters = Object.keys(filterData).map((property) => {
      return <BootstrapDropdown key={property} filtersUpdate={this.filtersUpdate.bind(this)} name={property} options={filterData[property]}/>
    })
    //Determine for each club whether it should show given filters
    let shouldBeVisisble = (index) => {
      let page = pages[index];
      if(page.category !== this.state["Category"] && this.state["Category"] !== "Any"){
        return false;
      }
      //If page mobility is greater than your filter mobility, hide a club.
      //Intuitively, filtering for medium clubs should also show low clubs.
      let pageMobility = filterData["Mobility Level"].indexOf(page.mobilityRating);
      let filterMobility = filterData["Mobility Level"].indexOf(this.state["Mobility Level"])
      if(pageMobility > filterMobility && this.state["Mobility Level"] !== "Any"){
        return false;
      }
      let pageSound = filterData["Noise Level"].indexOf(page.soundRating);
      let filterSound = filterData["Noise Level"].indexOf(this.state["Noise Level"]);
      if(pageSound > filterSound && this.state["Noise Level"] !== "Any"){
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
      <div id="site-content" className="content">
        { /* This part is also pretty strange. We want to re-use our header component, but also want our navbar in the header.
        So, we pass the Navbar we built with our filter dropdowns, and pass it as a prop to the Navbar component. */}
        <Header navAddition={<>
          {Navbar}
        </>}/>
        <div id="thumbnail-container">
          <div className="container-md-fluid container-xl">
            <div className="row gx-3 gy-3">
              {cards}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
      )
  }
}
export default withPageJSON(index);