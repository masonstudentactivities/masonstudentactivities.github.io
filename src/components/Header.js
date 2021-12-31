import React from 'react';
function Header(props){
    return(
        <header>
            <div className="container">
                <h1>MHS Student Activities</h1>
                <p>This site is currently under development! To find student activities information please visit the <a href = "https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b">Google Site</a></p>
            </div>
            { props.navAddition !== undefined && props.navAddition }
        </header>
    );
}
export default Header;