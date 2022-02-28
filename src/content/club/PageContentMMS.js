import formatDate from "./../../functions/formatDate";
import { Link } from './../../components/Router';
import Icon from "./../../components/Icon";
import React from "react";
import validateLink from "./validateLink";
/*
    Note that MHS and MMS have different page strucutres
    When implementing global changes, edit both PageContentMHS.js and PageContentMMS.js
    If changes are specific to a certain school, just edit the individual page
*/
function PageContent(props){
    let data = props.data;
    data.schoologyPage = validateLink(data.schoologyPage);
    data.website = validateLink(data.website);
    return (
        <div>
            <div className="container page-title-bar">
                <Link to="/mhs" className="back-button"><h3>&lt; Back to MMS</h3></Link>
                <h1 className="club-title">{data.name}</h1>
                <div className="green-divider"></div>
            </div>
            <div className="info-bar">
                <div className="container">
                    <Icon type="sound" level={data.soundRating}></Icon>
                    <Icon type="mobility" level={data.mobilityRating}></Icon>
                {
                    data.schoologyPage !== undefined &&
                    <a href={data.schoologyPage} className="site-link">Schoology Link</a>
                }
                {
                    data.website !== undefined &&
                    <a href={data.website} className="site-link">Website Link</a>
                }
                </div>
            </div>
            <div className="container page-content">
            <br/>
            <h4>About this club</h4>
            <p>{data.description}</p>
            {
                data.sectionOneTitle !== undefined && data.sectionOneTitle !== "" &&
                <>
                <h4>{data.sectionOneTitle}</h4> 
                <p>{data.sectionOneContent}</p>
                </>
            }
            {
                data.sectionTwoTitle !== undefined && data.sectionTwoTitle !== "" &&
                <>
                <h4>{data.sectionTwoTitle}</h4> 
                <p>{data.sectionTwoContent}</p>
                </>
            }
            {
                data.sectionThreeTitle !== undefined && data.sectionThreeTitle !== "" &&
                <>
                <h4>{data.sectionThreeTitle}</h4> 
                <p>{data.sectionThreeContent}</p>
                </>
            }

            <h4>Contact Information</h4>
            <p>Contact anyone below for more information about the club:</p>
            <p>Advisor: {data.advisorName} @ {data.advisorEmail}</p>
            {typeof data.additionalTitle == 'undefined' &&
                <p>{data.additionalTitle}: {data.additionalName} @ {data.additionalEmail}</p>
            }

            {
                data.sectionAccomodationsContent !== undefined && data.sectionAccomodationsContent !== "" &&
                <>
                    <h4>Accomodations</h4>
                    <p>{data.sectionAccomodationsContent}</p>
                </>
            }
            <h4>Accomodations</h4>
            <p>If your student has an Individualized Education Plan and needs accommodations to participate, please contact the advisor/coach and your student's Intervention Specialist.</p>
            <p><i>Updated on: {formatDate(data.timestamp)}</i></p>
        </div>
    </div>
    )
}
export default PageContent;