import formatDate from "./../../functions/formatDate";
import { Link } from './../../components/Router';
import React from "react";
function PageContent(props){
    let data = props.data;
    return (
        <div className="container">
        <p>
            <Link to="/"><b>MHS Activities</b></Link> &gt; 
            <b>{data.category}&nbsp;&gt;&nbsp;</b>
            <b>{data.name}</b>
        </p>
        <h2>{data.name}</h2>
        {
            data.schoologyPage !== undefined &&
            <a href={data.schoologyPage} className="site-link">Schoology Link</a>
        }
        {
            data.website !== undefined &&
            <a href={data.website} className="site-link">Website Link</a>
        }
        <hr/>
        <h4>About this club</h4>
        <p>{data.description}</p>
        {
            data.sectionOneTitle !== undefined &&
            <>
            <h4>{data.sectionOneTitle}</h4> 
            <p>{data.sectionOneContent}</p>
            </>
        }
        {
            data.sectionTwoTitle !== undefined &&
            <>
            <h4>{data.sectionTwoTitle}</h4> 
            <p>{data.sectionTwoContent}</p>
            </>
        }
        {
            data.sectionThreeTitle !== undefined &&
            <>
            <h4>{data.sectionThreeTitle}</h4> 
            <p>{data.sectionThreeContent}</p>
            </>
        }

        <h4>Contact Information</h4>
        <p>Contact anyone below for more information about the club:</p>
        <p>Advisor: {data.advisorName} @ {data.advisorEmail}</p>
        {data.additionalTitle !== undefined &&
            <p>{data.additionalTitle}: {data.additionalName} @ {data.additionalEmail}</p>
        }

        <h4>Accesibility information</h4>
        <p>Mobility Rating: {data.mobilityRating}</p>
        <p>Sound Rating: {data.soundRating}</p>
        {
            data.sectionAccomodationsContent !== undefined &&
            <>
                <h4>Accomodations</h4>
                <p>{data.sectionAccomodationsContent}</p>
            </>
        }
        <p>Updated on: {formatDate(data.timestamp)}</p>
    </div>
    )
}
export default PageContent;