import React from 'react';
import { useRouteData } from 'react-static';

function Footer(){
    let { site } = useRouteData();
    return (
        <footer id="footer" className="d-flex align-items-center">
        <div className="container">
          <h5>If you have any questions regarding student activities, email:</h5>
          <h5>
            <b>{site.directory.toUpperCase() + " " + site.coordinator.title}</b>: {site.coordinator.name} &lt;{site.coordinator.email}&gt;
          </h5>
        </div>
      </footer>
    );
}
export default Footer;