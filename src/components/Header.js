import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from './Router';

function Header(props){
    let { site } = useRouteData();
    return(
        <header>
            <div className="container">
                <div className="title-bar">
                    <Link to="/"><img src="/images/logos/logo_light.png" alt="Logo for Mason City Schools"/></Link>
                    <h1>{site.directory.toUpperCase()} Student Activities</h1>
                </div>
            </div>
            { props.navAddition !== undefined && props.navAddition }
        </header>
    );
}
export default Header;