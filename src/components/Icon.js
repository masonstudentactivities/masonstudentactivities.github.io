import React from 'react';
function Icon(props){
    return(
        // props.type: mobility
        // props.level: Low
        <img className="icon" src={"/icons/" + props.level + "_" + props.type.toLowerCase() + ".png"} 
            data-bs-placement="top" data-bs-toggle="tooltip" title={props.level + " " + props.type}/>
    );
}
export default Icon;

/*
<Icon type="mobility, sound" level="low, medium, high" />

*/