import React from "react";
import { Link } from "../../components/Router";
import { useRouteData } from "react-static";
import Icon from "./../../components/Icon";

function Thumbnail(props){
    let page = props.page;
    let {site} = useRouteData();
    return(
      <div className={"col-12 col-sm-12 col-md-6 col-lg-4 " + (props.shouldBeVisible ? "" : "hidden")}>
        {
          /* Update links so that they point to:
            comet-ice-hockey
            instead of
            comet%20ice%20hockey

            this is consistent with the format within /static.config.js
           */
        }
        <Link to={`/${site.directory}/${page.name.replaceAll(" ","-").toLowerCase()}`} className={"thumbnail"}>
        <img src={`/images/thumbnails/${site.directory}/${page.name}.${page.fileExtension}`} alt={"Thumbnail for" + page.name}/>
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