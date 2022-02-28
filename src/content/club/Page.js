import React from 'react';
import { useRouteData } from 'react-static'
import Meta from "../../components/Meta";
import MappedPage from "./MappedPage";
import Footer from "../../components/Footer";
/* The page uses route data to render a club page 
   It uses MappedPage to allow previews to be rendered exactly the same as the actual website
*/
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