import React from 'react';
import { useRouteData } from 'react-static'
import Header from "./../../components/Header";
import PageContent from "./PageContent";
import { Helmet } from 'react-helmet';
function Page() {
    const { page } = useRouteData();
    return (
        <>
        <Header/>
        <PageContent data={page}/>
        </>
    );
}
export default Page;