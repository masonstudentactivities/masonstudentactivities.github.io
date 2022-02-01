//Takes a string link, and checks if it is a valid link.
//If it is not valid, make it a valid link.
function validateLink(link){
    if(link === "" || link === undefined){
        return undefined;
    }
    if(link.includes('http://') || link.includes('https://')){
        return link;
    }
    else{
        //Check if the link is valid, if not return undefined
        return 'http://' + link;
    }
}
export default validateLink;