import React from 'react';
import events from "../../eventsMHS.json";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EventRollup from "./EventRollup";
import Calendar from "./Calendar";
import { Link } from "../../components/Router";
function CalendarPage(){
    return(
    <>
        <Meta/>
        <div id="site-content" className="content">
            { /* This part is also pretty strange. We want to re-use our header component, but also want our navbar in the header.
            So, we pass the Navbar we built with our filter dropdowns, and pass it as a prop to the Navbar component. */}
            <Header navAddition={
                <Link to="/mhs">Go back to student activities</Link>
            }/>
            <div className="calendar-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Calendar/>
                        </div>
                        <div id="event-preview" className="col-md-4">
                            <h3>Upcoming Events</h3>
                            <EventRollup event={events[0]}/>
                            <EventRollup event={events[1]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
}
export default CalendarPage;