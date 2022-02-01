import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from './Router';

function Header(props){
    let { site } = useRouteData();
    return(
        <header>
            <div className="container">
                <div className="title-bar">
                    <Link to="/"><img src="/images/logos/logo_light.png"/></Link>
                    <h1>{site.directory.toUpperCase()} Student Activities</h1>
                </div>
                <p>This site is currently under development! To find student activities information please visit the <a href = "https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b">Google Site</a></p>
            </div>
            { props.navAddition !== undefined && props.navAddition }
        </header>
    );
}
export default Header;