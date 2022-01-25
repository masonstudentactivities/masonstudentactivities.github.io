import React from "react";
import { Link } from "../../components/Router";
import { useRouteData } from "react-static";
import Icon from "./../../components/Icon";

function Thumbnail(props){
    let page = props.page;
    console.log(props);
    let {site} = useRouteData();
    return(
        <Link to={`/${site.directory}/${page.name}`} className={"thumbnail col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 " + (props.shouldBeVisible ? "" : "hidden")}>
        <img src={`/images/thumbnails/${site.directory}/${page.name}.${page.fileExtension}`}/>
        <div className="thumbnail-side-content">
          <h2>{page.name}</h2>
          <Icon type="sound" level={page.soundRating}></Icon>
          <Icon type="mobility" level={page.mobilityRating}></Icon>
        </div>
      </Link>
    );
}
export default Thumbnail;