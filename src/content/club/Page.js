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
        <PageContent data={data}/>
        </>
    );
}
export default Page;