(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t;return e.isIndex&&(t=l.a.createElement("nav",{class:"navbar navbar-expand-sm navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("ul",{class:"nav navbar-nav"},l.a.createElement("li",{class:"nav-item"},"Filters:"),l.a.createElement("li",{class:"nav-item"},l.a.createElement("span",{class:"badge bg-success"},"Mobility: Low")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("span",{class:"badge bg-success"},"Audio Level: Medium")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("button",{class:"btn btn-sm btn-outline-success",type:"button"},"+ Add filter")))))),l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"MHS Student Activities"),l.a.createElement("p",null,"This site is currently under development! To find student activities information please visit the ",l.a.createElement("a",{href:"https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b"},"Google Site"))),t)}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n);var i=function(e){var t=new Date(e),a=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],n=t.getDay(),l=t.getFullYear();return"".concat(a," ").concat(n,", ").concat(l)},c=a(20),o=a(27),r=a(133);t.default=function(){var e=Object(c.useRouteData)().data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null),l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement(o.a,{to:"/"},"MHS Activities")," >",l.a.createElement(o.a,{to:"/?filter="+e.category},e.category)," >",l.a.createElement(o.a,{to:"/"+e.name},e.name)," "),l.a.createElement("h2",null,e.name),void 0!==e.schoologyPage&&l.a.createElement("a",{href:e.schoologyPage,className:"site-link"},"Schoology Link"),void 0!==e.website&&l.a.createElement("a",{href:e.website,className:"site-link"},"Website Link"),l.a.createElement("hr",null),l.a.createElement("h4",null,"About this club"),l.a.createElement("p",null,e.description),void 0!==e.sectionOneTitle&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,e.sectionOneTitle),l.a.createElement("p",null,e.sectionOneContent)),void 0!==e.sectionTwoTitle&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,e.sectionTwoTitle),l.a.createElement("p",null,e.sectionTwoContent)),void 0!==e.sectionThreeTitle&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,e.sectionThreeTitle),l.a.createElement("p",null,e.sectionThreeContent)),l.a.createElement("h4",null,"Contact Information"),l.a.createElement("p",null,"Contact anyone below for more information about the club:"),l.a.createElement("p",null,"Advisor: ",e.advisorName," @ ",e.advisorEmail),void 0!==e.additionalTitle&&l.a.createElement("p",null,e.additionalTitle,": ",e.additionalName," @ ",e.additionalEmail),l.a.createElement("h4",null,"Accesibility information"),l.a.createElement("p",null,"Mobility Rating: ",e.mobilityRating),l.a.createElement("p",null,"Sound Rating: ",e.soundRating),void 0!==e.sectionAccomodationsContent&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Accomodations"),l.a.createElement("p",null,e.sectionAccomodationsContent)),l.a.createElement("p",null,"Updated on: ",i(e.timestamp))))}}}]);