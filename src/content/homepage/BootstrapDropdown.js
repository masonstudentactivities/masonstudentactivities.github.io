import React from "react";
class BootstrapDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {"selected":props[0]};
    }
    updateSelected(value){
        return () => {
            this.props.filtersUpdate(this.props.name,value);
            this.setState({"selected":value});
        }
    } 
    render(){
        return(
            <div className="btn-group filter">
    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {this.props.name}: {this.state.selected || this.props.options[0]}
    </button>
    <ul className="dropdown-menu">
        {this.props.options.map((val) => {
            if(val === "High"){
                return;
            }
            return <li key={val}><button className="dropdown-item" href="#" onClick={this.updateSelected(val)}>{val}</button></li>
        })}
    </ul>
    </div>
        )
    }
}
export default BootstrapDropdown;