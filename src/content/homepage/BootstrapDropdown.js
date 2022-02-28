import React from "react";
class BootstrapDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: props[0]};
  }
  updateSelected(value) {
    //Use this arrow function to send up state to homepage.js
    return () => {
      this.props.filtersUpdate(this.props.name, value);
      this.setState({selected: value});
    };
  }
  render() {
    return (
      <div className="btn-group filter">
        <button
          type="button"
          className="btn filter-background dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
            {/* Show filter's name, and show active filter */}
          {this.props.name}: {this.state.selected || this.props.options[0]}
        </button>
        <ul className="dropdown-menu">
          {this.props.options.map((val) => {
            {/* It makes no sense to have high mobility as a dropdown. This would show the same items as "Any" 
                Return nothing
            */}
            if (val === "High") {
              return;
            }
            return (
              <li key={val}>
                <button
                  className="dropdown-item"
                  href="#"
                  onClick={this.updateSelected(val)}>
                  {val}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default BootstrapDropdown;
