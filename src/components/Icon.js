import React from 'react';
function Icon(props){
    return(
        // props.type: mobility
        // props.level: Low
        <img src={"/icons/" + props.level + "_" + props.type.toLowerCase() + ".png"} 
            data-placement="top" data-toggle="tooltip" title={props.level + " " + props.type}/>
    );
}
export default Icon;

/*
<Icon type="mobility, sound" level="low, medium, high" />

*/