import formatDate from "./../../functions/formatDate";
import { Link } from './../../components/Router';
import Icon from "./../../components/Icon";
import React from "react";
import { useRouteData } from 'react-static'
import Meta from "../../components/Meta";
import Footer from "../../components/Footer";

function EventPage(props){
    const { event } = useRouteData();
    let dateText = "";
    if(event.end){
        dateText = `takes place from ${event.start} to ${event.end}`;
    } else{
        dateText = `takes place on ${event.start}`;
    }
    return (
        <>
        <Meta/>
        <div>
            <div className="container page-title-bar">
                <Link to="/mhs" className="back-button"><h3>&lt; Back to MHS</h3></Link>
                <h1 className="club-title">{event.name}</h1>
                <div className="green-divider"></div>
            </div>
            <div className="info-bar">
                <div className="container">
                    <Icon type="sound" level={event.soundRating}></Icon>
                    <Icon type="mobility" level={event.mobilityRating}></Icon>
                </div>
            </div>
            <br/>
            <div className="container page-content">
                <h4>About this event</h4>
                <p>{event.description}</p>
                <h4>When does this event take place?</h4>
                <p>{event.name} {dateText}</p>
            </div>
            <Footer/>
            
        </div>
    </>
    )
}
export default EventPage;