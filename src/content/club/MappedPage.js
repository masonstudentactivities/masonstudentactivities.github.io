import React from 'react';
import PageContentMHS from "./PageContentMHS";
import PageContentMMS from "./PageContentMMS";
class MappedPage extends React.Component{
    componentDidMount(){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        this.tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
      }
      componentWillUnmount(){
        this.tooltipList.forEach(function(val){
          val.dispose();
        })
      }
    constructor(props){
        super(props);
    }
    render(){
        let content;
        console.log(this.props.data);
        console.log("MONKEY");
        if(this.props.directory === "mms"){
            content = <PageContentMMS data={this.props.data}/>
        }
        else if(this.props.directory === "mhs"){
            content = <PageContentMHS data={this.props.data}/>
        } else{
            content = <p>Error, site directory not specified</p>;
        }
        return content;
    }
}
export default MappedPage;