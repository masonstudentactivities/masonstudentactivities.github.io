(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"MHS Student Activities"),l.a.createElement("p",null,"This site is currently under development! To find student activities information please visit the ",l.a.createElement("a",{href:"https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b"},"Google Site"))),void 0!==e.navAddition&&e.navAddition)}},61:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(20),o=n(133);var c=function(e){var t=new Date(e),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],a=t.getDay(),l=t.getFullYear();return"".concat(n," ").concat(a,", ").concat(l)},r=n(27);var m=function(e){var t=e.data;return l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement(r.a,{to:"/"},l.a.createElement("b",null,"MHS Activities"))," >",l.a.createElement("b",null,t.category," > "),l.a.createElement("b",null,t.name)),l.a.createElement("h2",null,t.name),void 0!==t.schoologyPage&&l.a.createElement("a",{href:t.schoologyPage,className:"site-link"},"Schoology Link"),void 0!==t.website&&l.a.createElement("a",{href:t.website,className:"site-link"},"Website Link"),l.a.createElement("hr",null),l.a.createElement("h4",null,"About this club"),l.a.createElement("p",null,t.description),void 0!==t.sectionOneTitle&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,t.sectionOneTitle),l.a.createElement("p",null,t.sectionOneContent)),void 0!==t.sectionTwoTitle&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,t.sectionTwoTitle),l.a.createElement("p",null,t.sectionTwoContent)),void 0!==t.sectionThreeTitle&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,t.sectionThreeTitle),l.a.createElement("p",null,t.sectionThreeContent)),l.a.createElement("h4",null,"Contact Information"),l.a.createElement("p",null,"Contact anyone below for more information about the club:"),l.a.createElement("p",null,"Advisor: ",t.advisorName," @ ",t.advisorEmail),void 0!==t.additionalTitle&&l.a.createElement("p",null,t.additionalTitle,": ",t.additionalName," @ ",t.additionalEmail),l.a.createElement("h4",null,"Accesibility information"),l.a.createElement("p",null,"Mobility Rating: ",t.mobilityRating),l.a.createElement("p",null,"Sound Rating: ",t.soundRating),void 0!==t.sectionAccomodationsContent&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Accomodations"),l.a.createElement("p",null,t.sectionAccomodationsContent)),l.a.createElement("p",null,"Updated on: ",c(t.timestamp)))};t.default=function(){var e=Object(i.useRouteData)().data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null),l.a.createElement(m,{data:e}))}}}]);