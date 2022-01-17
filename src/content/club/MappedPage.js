import React from 'react';
import PageContentMHS from "./PageContentMHS";
import PageContentMMS from "./PageContentMMS";
function MappedPage(props){
    let content;
    if(props.directory === "mms"){
        content = <PageContentMMS data={props.data}/>
    }
    else if(props.directory === "mhs"){
        content = <PageContentMHS data={props.data}/>
    } else{
        content = <p>Error, site directory not specified</p>;
    }
    return content;
}
export default MappedPage;