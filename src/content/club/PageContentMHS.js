import formatDate from "./../../functions/formatDate";
import { Link } from './../../components/Router';
import Icon from "./../../components/Icon";
import React from "react";
function PageContent(props){
    let data = props.data;
    console.log(data.soundRating);
    return (
        <div>
            <div className="container">
                <Link to="/mhs" className="back-button">&lt; Back to MHS</Link>
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
            {typeof data.additionalTitle == 'undefined' &&
                <p>{data.additionalTitle}: {data.additionalName} @ {data.additionalEmail}</p>
            }

            {
                data.sectionAccomodationsContent !== undefined &&
                <>
                    <h4>Accomodations</h4>
                    <p>{data.sectionAccomodationsContent}</p>
                </>
            }
            <p>Updated on: {formatDate(data.timestamp)}</p>
        </div>
    </div>
    )
}
export default PageContent;