import React from 'react';
function Header(props){
    let navAddition;
    if(props.isIndex){
        navAddition = (
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        Filters:
                    </li>
                    <li class="nav-item">
                        <span class="badge bg-success">Mobility: Low</span>
                    </li>

                    <li class="nav-item">
                        <span class="badge bg-success">Audio Level: Medium</span>
                    </li>
            
                    <li class="nav-item">
                        <button class="btn btn-sm btn-outline-success" type="button">+ Add filter</button>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
    return(
        <header>
            <div className="container">
                <h1>MHS Student Activities</h1>
                <p>This site is currently under development! To find student activities information please visit the <a href = "https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b">Google Site</a></p>
            </div>
            { navAddition }
        </header>
    );
}
export default Header;