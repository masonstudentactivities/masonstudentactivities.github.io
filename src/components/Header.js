import React from 'react';
import { useRouteData } from 'react-static';
function Header(props){
    let { site } = useRouteData();
    return(
        <header>
            <div className="container">
                <div className="title-bar">
                    <img src="/images/logos/logo_light.png"/>
                    <h1>{site.directory.toUpperCase()} Student Activities</h1>
                </div>
                <p>This site is currently under development! To find student activities information please visit the <a href = "https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b">Google Site</a></p>
            </div>
            { props.navAddition !== undefined && props.navAddition }
        </header>
    );
}
export default Header;