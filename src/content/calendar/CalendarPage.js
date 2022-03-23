import React from 'react';
import events from "../../eventsMHS.json";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
                <div className="container">
                    <Link to="/mhs"><h4>&lt; Go back to student activities</h4></Link>
                </div>
            }/>
            <div className="calendar-page">
                <div className="container">
                    <div className="row">
                        <Calendar view="dayGridMonth"/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
}
export default CalendarPage;