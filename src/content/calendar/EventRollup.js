import React from "react";
import { Link } from "../../components/Router";
import { useRouteData } from "react-static";
import Icon from "./../../components/Icon";

function Thumbnail(props){
    let event = props.event;
    let {site} = useRouteData();
    return(
      <div>
        {
          /* Update links so that they point to:
            comet-ice-hockey
            instead of
            comet%20ice%20hockey

            this is consistent with the format within /static.config.js
           */
        }
        <Link to={`/${site.directory}/${event.name.replaceAll(" ","-").toLowerCase()}`} className={"thumbnail"}>
        <div className="thumbnail-side-content">
          <Icon type="sound" level={event.soundRating}></Icon>
          <Icon type="mobility" level={event.mobilityRating}></Icon>
          <h3>{event.name}</h3>
          <h3>{event.start}</h3>
        </div>
        </Link>
      </div>
    );
}
export default Thumbnail;