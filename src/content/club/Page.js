import React from 'react';
import { useRouteData } from 'react-static'
import Header from "./../../components/Header";
import { Helmet } from 'react-helmet';
import Meta from "../../components/Meta";
import MappedPage from "./MappedPage";
import Footer from "../../components/Footer";
function Page() {
    const { site,page } = useRouteData();
    return (
        <>
        <Meta/>
        <MappedPage id="site-content" className="content" directory={site.directory} data={page}/>
        <Footer/>
        </>
    );
}
export default Page;