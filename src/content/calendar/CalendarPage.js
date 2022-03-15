import React from 'react';
import Calendar from "./Calendar";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function CalendarPage(){
    return(
    <>
        <Meta/>
        <div id="site-content" className="content">
        { /* This part is also pretty strange. We want to re-use our header component, but also want our navbar in the header.
        So, we pass the Navbar we built with our filter dropdowns, and pass it as a prop to the Navbar component. */}
        <Header/>
        <Calendar/>
        </div>
        <Footer/>
    </>
    );
}
export default CalendarPage;