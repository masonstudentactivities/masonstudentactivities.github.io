import React from 'react';
import { useRouteData } from 'react-static'
import Header from "./../../components/Header";
import PageContent from "./PageContent";
import { Helmet } from 'react-helmet';
import Meta from "../../components/Meta";
function Page() {
    const { page } = useRouteData();
    return (
        <>
        <Meta/>
        <Header/>
        <PageContent data={page}/>
        </>
    );
}
export default Page;