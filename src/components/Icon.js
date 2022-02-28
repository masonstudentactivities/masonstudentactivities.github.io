import React from "react";
function Icon(props) {
  return (
    // props.type: mobility
    // props.level: Low
    <div className={"icon " + props.type}>
      <img
        className="icon-image"
        src={
          "/images/icons/" + props.level.toLowerCase() + "_" + props.type + ".png"
        }
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        title={props.level + " " + props.type}
        alt={props.level + " " + props.type + " level icon"}
      />
    </div>
  );
}
export default Icon;

