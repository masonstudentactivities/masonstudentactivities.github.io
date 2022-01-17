import React from 'react';
import { useRouteData } from 'react-static'
import Header from "./../../components/Header";
import { Helmet } from 'react-helmet';
import Meta from "../../components/Meta";
import MappedPage from "./MappedPage";
function Page() {
    const { site,page } = useRouteData();
    return (
        <>
        <Meta/>
        <Header/>
        <MappedPage directory={site.directory} data={page}/>
        </>
    );
}
export default Page;