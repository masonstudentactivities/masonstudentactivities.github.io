function formatDate(dateString){
    let timestamp = new Date(dateString);
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[timestamp.getMonth()];
    let day = timestamp.getDate();
    let year = timestamp.getFullYear();
    return `${month} ${day}, ${year}`

}
export default formatDate;