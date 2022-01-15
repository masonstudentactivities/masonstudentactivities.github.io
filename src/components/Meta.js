import React from "react";
import Helmet from "react-helmet";
import { useRouteData } from "react-static";
function Meta(){
    const { data } = useRouteData;
    return(
        <Helmet>
          <title>MHS Student Activities</title>
          <meta name="description" content="Explore enriching extracurricular options for the Mason City Schools district."/>
          {/* opengraph embeds */}
          <meta content={"MHS Student Activities Homepage"} property="og:title"/>
          <meta content="Explore enriching extracurricular options for the Mason City Schools district." property="og:description"/>
          <meta content="MHS Student Activities" property="og:site_name"/>
          <meta content="/images/logos/logo192.png" property='og:image'/>
        </Helmet>
    );
}
export default Meta;