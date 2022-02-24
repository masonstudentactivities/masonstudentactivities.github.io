import React from "react";
import { Link } from "../components/Router";
import { useRouteData } from "react-static";
import Meta from "./../components/Meta";
function root(){
    return(<>
        <Meta/>
        <div className="no-overflow">
            <Link className="homepage-btn ms-bg" to="/mms"><h1>Middle School</h1></Link>
            <Link className="homepage-btn hs-bg" to="/mhs"><h1>High School</h1></Link>
        </div>
    </>);
}
export default root;