import React from 'react';
import formatDate from "./functions/formatDate";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import pages from './pages';

class Page extends React.Component {
    render(){
        let data = this.props.data;
        console.log(data);

        return (
            <div className="container">
                <p>
                    <Link to="/">MHS Activities</Link> &gt; 
                    <Link to={"/?filter=" + data.category}>{data.category}</Link> &gt; 
                    <Link to={"/" + data.name}>{data.name}</Link> </p>
                <h2>{data.name}</h2>
                <a href={data.schoologyPage}>Schoology Link</a>&nbsp;
                <a href={data.website}>Website Link</a><br/><br/>
                <h4>About this club</h4>
                <p>{data.description}</p>

                <h4>{data.sectionOneTitle}</h4>
                <p>{data.sectionOneContent}</p>
                <h4>{data.sectionTwoTitle}</h4>
                <p>{data.sectionTwoContent}</p>
                <h4>{data.sectionThreeTitle}</h4>
                <p>{data.sectionThreeContent}</p>

                <h4>Contact Information</h4>
                <p>Contact anyone below for more information about the club:</p>
                <p>Advisor: {data.advisorName} @ {data.advisorEmail}</p>
                <p>{data.additionalTitle}: {data.additionalName} @ {data.additionalEmail}</p>

                <h4>Accesibility information</h4>
                <p>Mobility Rating: {data.mobilityRating}</p>
                <p>Sound Rating: {data.soundRating}</p>
                <h4>Accomodations</h4>
                <p>{data.sectionAccomodationsContent}</p>
                <p>Updated on: {formatDate(data.timestamp)}</p>


            </div>
        );
    }
}
export default Page;