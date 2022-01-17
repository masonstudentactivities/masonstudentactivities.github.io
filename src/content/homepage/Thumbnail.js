import React from "react";
import { Link } from "../../components/Router";
import { useRouteData } from "react-static";
import Icon from "./../../components/Icon";

function Thumbnail(props){
    let page = props.page;
    console.log(props);
    let {site} = useRouteData();
    return(
        <Link to={`/${site.directory}/${page.name}`} className={"thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 " + (props.shouldBeVisible ? "" : "hidden")}>
        <img src={"/images/thumbnails/" +page.name + "." + page.fileExtension}/>
        <h2>{page.name}</h2>
        <Icon type="sound" level={page.soundRating}></Icon>
        <Icon type="mobility" level={page.mobilityRating}></Icon>
      </Link>
    );
}
export default Thumbnail;