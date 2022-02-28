import React from 'react';
import PageContentMHS from "./PageContentMHS";
import PageContentMMS from "./PageContentMMS";
class MappedPage extends React.Component{
    //Unmount and mount tooltips just like in homepage.js
    componentDidMount(){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        this.tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl)
        })
      }
      componentWillUnmount(){
        this.tooltipList.forEach(function(val){
          val.dispose();
        })
      }
    render(){
        let content;
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