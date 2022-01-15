import React from "react";
import { Link } from "../components/Router";
import { useRouteData } from "react-static";
function root(){
    return(<>
        <p>You are at the root of the website!</p>
        <p><Link to="/mms">Mason middle school</Link></p>
        <p><Link to="/mhs">Mason high school</Link></p>
    </>);
}
export default root;