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
        </Helmet>
        <PageContent data={data}/>
        </>
    );
}
export default Page;