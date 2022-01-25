import React from "react";
import Helmet from "react-helmet";
import { useRouteData } from "react-static";
function Meta(){
    const { site } = useRouteData();
    const { page } = useRouteData();
    let descriptionContent;
    let titleContent;
    if(page){
        descriptionContent = page.description;
        titleContent = site.directory.toUpperCase() + " Student Activities - " + page.name;
    }
    else if(site){
        descriptionContent = `Explore enriching extracurricular options at ${site.name}.`;
        titleContent = site.directory.toUpperCase() + " Student Activities";
    } else{
        descriptionContent = "Explore enriching extracurricular options for the Mason City Schools district.";
        titleContent = "Mason Student Activities Homepage";
    }
    return(
        <Helmet>
          <title>{titleContent}</title>
          <meta name="description" content={descriptionContent}/>
          {/* opengraph embeds */}
          <meta content={titleContent} property="og:title"/>
          <meta content={descriptionContent} property="og:description"/>
          <meta content="MHS Student Activities" property="og:site_name"/>
          <meta content="/images/logos/logo192.png" property='og:image'/>
        </Helmet>
    );
}
export default Meta;