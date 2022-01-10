import React from 'react';
import { useRouteData } from 'react-static'
import Header from "./../../components/Header";
import PageContent from "./PageContent";
import { Helmet } from 'react-helmet';
function Page() {
    const { data } = useRouteData();
    return (
        <>
        <Header/>
        <Helmet>
            <title>MHS Student Activities - {data.name}</title>
            <meta name="description" content={data.description}/>
            {/* opengraph embeds */}
            <meta content={"MHS Student Activities - " + data.name} property="og:title"/>
            <meta content={data.description} property="og:description"/>
            <meta content="MHS Student Activities" property="og:site_name"/>
            <meta content="/logo192.png" property='og:image'/>
        </Helmet>
        <PageContent data={data}/>
        </>
    );
}
export default Page;