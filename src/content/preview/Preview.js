import React from 'react';
import Header from "./../../components/Header";
import PageContent from "./../club/PageContent";
import { Helmet } from 'react-helmet';
import JSONCrush from '../../functions/JSONCrush';

function Preview() {
    let approved, proposed;
    let approvedElement, proposedElement;
    if(typeof window !== 'undefined'){
        let url_string = window.location.href;
        let url = new URL(url_string);
        let urlData = url.searchParams.get("data");
        let decompress = JSONCrush.uncrush(urlData);
        console.log(decompress);
        let data = JSON.parse(decompress);
        approved = data.approved;
        if(approved !== undefined){
            approved.thumbURL = approved.thumbURL.replace("open?","uc?");
            approvedElement = (
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="container bg-success text-dark">
                    <h3>Approved thumbnail</h3>
                    <p>This thumbnail is currently on the website</p>
                </div>
                <div className="container">
                    <div class="row">
                        <span className={"mx-auto thumbnail col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4"}>
                            <img src={approved.thumbURL}/>
                            <h2>{approved.name}</h2>
                        </span>
                    </div>
                </div>
                <div className="container bg-success text-dark">
                    <h3>Approved webpage</h3>
                    <p>This club page is currently on the website</p>
                </div>
                {
                    approved !== undefined &&
                    <PageContent data={approved}/>
                }
            </div>
            );
        }
        proposed = data.proposed;
        if(proposed !== undefined){
            proposed.thumbURL = proposed.thumbURL.replace("open?","uc?");
            proposedElement = (
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="container bg-warning text-dark">
                    <h3>Proposed thumbnail</h3>
                    <p>"Approve" this club, to put it on the website</p>
                </div>
                <div className="container">
                    <div className="row">
                        <span className={"mx-auto thumbnail col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4"}>
                            <img src={proposed.thumbURL}/>
                            <h2>{proposed.name}</h2>
                        </span>
                    </div>
                </div>
                <div className="container bg-warning text-dark">
                    <h3>Proposed webpage</h3>
                    <p>"Approve" this club, to put it on the website</p>

                </div>
                {
                    proposed !== undefined &&
                    <PageContent data={proposed}/>
                }
                </div>
            )
        }
    } else{
        return (
            <div>You don't have Javascript enabled! Previews will not work.</div>
        )
    }
    
    return (
        <>
        <Header/>
        <Helmet style={[{
        "cssText": `
            .text-dark{
                padding:12px;
                color:#111 !important;
            }
            .bg-success{
                background:#23c278 !important;
            }
            .col-12{
                margin:0px;
                padding:0px;
            }
            .row{
                --bs-gutter-x:0rem;
            }
        `
    }]}>
            <title>Web Preview - {proposed.name || approved.name}</title>
        </Helmet>
        <div className="row">
            {proposedElement}
            {approvedElement}
            
        </div>
        </>
    );
}
export default Preview;