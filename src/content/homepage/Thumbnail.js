import React from "react";
import { Link } from "../../components/Router";
import { useRouteData } from "react-static";
import Icon from "./../../components/Icon";

function Thumbnail(props){
    let page = props.page;
    console.log(props);
    let {site} = useRouteData();
    return(
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
        <Link to={`/${site.directory}/${page.name}`} className={"thumbnail " + (props.shouldBeVisible ? "" : "hidden")}>
        <img src={`/images/thumbnails/${site.directory}/${page.name}.${page.fileExtension}`}/>
        <div className="thumbnail-side-content">
          <Icon type="sound" level={page.soundRating}></Icon>
          <Icon type="mobility" level={page.mobilityRating}></Icon>
          <h3>{page.name}</h3>
        </div>
        </Link>
      </div>
    );
}
export default Thumbnail;