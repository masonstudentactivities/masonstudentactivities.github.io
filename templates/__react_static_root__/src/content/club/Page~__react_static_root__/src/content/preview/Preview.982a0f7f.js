(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){"use strict";var a=n(0),l=n.n(a),o=n(27),i=n(15);t.a=function(){var e,t,n=Object(i.useRouteData)().site,a=Object(i.useRouteData)().page;return a?(e=a.description,t=n.directory.toUpperCase()+" Student Activities - "+a.name):n?(e="Explore enriching extracurricular options at ".concat(n.name,"."),t=n.directory.toUpperCase()+" Student Activities"):(e="Explore enriching extracurricular options for the Mason City Schools district.",t="Mason Student Activities Homepage"),l.a.createElement(o.default,null,l.a.createElement("title",null,t),l.a.createElement("meta",{name:"description",content:e}),l.a.createElement("meta",{content:t,property:"og:title"}),l.a.createElement("meta",{content:e,property:"og:description"}),l.a.createElement("meta",{content:"MHS Student Activities",property:"og:site_name"}),l.a.createElement("meta",{content:"/images/logos/logo192.png",property:"og:image"}))}},134:function(e,t,n){"use strict";var a=n(0),l=n.n(a),o=n(15);t.a=function(e){var t=Object(o.useRouteData)().site;return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title-bar"},l.a.createElement("img",{src:"/images/logos/logo_light.png"}),l.a.createElement("h1",null,t.directory.toUpperCase()," Student Activities")),l.a.createElement("p",null,"This site is currently under development! To find student activities information please visit the ",l.a.createElement("a",{href:"https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b"},"Google Site"))),void 0!==e.navAddition&&e.navAddition)}},135:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("img",{className:"icon "+e.type,src:"/images/icons/"+e.level.toLowerCase()+"_"+e.type+".png","data-bs-placement":"top","data-bs-toggle":"tooltip",title:e.level+" "+e.type})}},136:function(e,t,n){"use strict";var a=n(55),l=n.n(a),o=n(56),i=n.n(o),c=n(57),r=n.n(c),s=n(58),m=n.n(s),u=n(59),d=n.n(u),p=n(0),E=n.n(p);var h=function(e){var t=new Date(e),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],a=t.getDay(),l=t.getFullYear();return"".concat(n," ").concat(a,", ").concat(l)},v=n(28),g=n(135);var f=function(e){if(""!==e&&void 0!==e)return e.includes("http://")||e.includes("https://")?e:"http://"+e};var b=function(e){var t=e.data;return t.schoologyPage=f(t.schoologyPage),t.website=f(t.website),console.log(t.soundRating),E.a.createElement("div",null,E.a.createElement("div",{className:"container page-title-bar"},E.a.createElement(v.a,{to:"/mhs",className:"back-button"},E.a.createElement("h3",null,"< Back to MHS")),E.a.createElement("h1",{className:"club-title"},t.name),E.a.createElement("div",{className:"green-divider"})),E.a.createElement("div",{className:"info-bar"},E.a.createElement("div",{className:"container"},E.a.createElement(g.a,{type:"sound",level:t.soundRating}),E.a.createElement(g.a,{type:"mobility",level:t.mobilityRating}),void 0!==t.schoologyPage&&E.a.createElement("a",{href:t.schoologyPage,className:"site-link"},"Schoology Link"),void 0!==t.website&&E.a.createElement("a",{href:t.website,className:"site-link"},"Website Link"))),E.a.createElement("div",{className:"container page-content"},E.a.createElement("br",null),E.a.createElement("h4",null,"About this club"),E.a.createElement("p",null,t.description),void 0!==t.sectionOneTitle&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,t.sectionOneTitle),E.a.createElement("p",null,t.sectionOneContent)),void 0!==t.sectionTwoTitle&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,t.sectionTwoTitle),E.a.createElement("p",null,t.sectionTwoContent)),void 0!==t.sectionThreeTitle&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,t.sectionThreeTitle),E.a.createElement("p",null,t.sectionThreeContent)),E.a.createElement("h4",null,"Contact Information"),E.a.createElement("p",null,"Contact anyone below for more information about the club:"),E.a.createElement("p",null,"Advisor: ",t.advisorName," @ ",t.advisorEmail),void 0===t.additionalTitle&&E.a.createElement("p",null,t.additionalTitle,": ",t.additionalName," @ ",t.additionalEmail),void 0!==t.sectionAccomodationsContent&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,"Accomodations"),E.a.createElement("p",null,t.sectionAccomodationsContent)),E.a.createElement("p",null,"Updated on: ",h(t.timestamp))))};var y=function(e){var t=e.data;return E.a.createElement("div",{className:"container"},E.a.createElement("p",null,E.a.createElement(v.a,{to:"/"},E.a.createElement("b",null,"Mason Student Activities"))," >",E.a.createElement(v.a,{to:"/mms"},E.a.createElement("b",null,"MMS"))," >",E.a.createElement("b",null,t.category," > "),E.a.createElement("b",null,t.name)),E.a.createElement("h2",null,t.name),void 0!==t.schoologyPage&&E.a.createElement("a",{href:t.schoologyPage,className:"site-link"},"Schoology Link"),void 0!==t.website&&E.a.createElement("a",{href:t.website,className:"site-link"},"Website Link"),E.a.createElement("hr",null),E.a.createElement("h4",null,"About this club"),E.a.createElement("p",null,t.description),void 0!==t.sectionOneTitle&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,t.sectionOneTitle),E.a.createElement("p",null,t.sectionOneContent)),void 0!==t.sectionTwoTitle&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,t.sectionTwoTitle),E.a.createElement("p",null,t.sectionTwoContent)),void 0!==t.sectionThreeTitle&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,t.sectionThreeTitle),E.a.createElement("p",null,t.sectionThreeContent)),E.a.createElement("h4",null,"Contact Information"),E.a.createElement("p",null,"Contact anyone below for more information about the club:"),E.a.createElement("p",null,"Advisor: ",t.advisorName," @ ",t.advisorEmail),void 0!==t.additionalTitle&&E.a.createElement("p",null,t.additionalTitle,": ",t.additionalName," @ ",t.additionalEmail),E.a.createElement("h4",null,"Accesibility information"),E.a.createElement("p",null,"Mobility Rating: ",t.mobilityRating),E.a.createElement("p",null,"Sound Rating: ",t.soundRating),void 0!==t.sectionAccomodationsContent&&E.a.createElement(E.a.Fragment,null,E.a.createElement("h4",null,"Accomodations"),E.a.createElement("p",null,t.sectionAccomodationsContent)),E.a.createElement("p",null,"Updated on: ",h(t.timestamp)))};function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var l=d()(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return m()(this,n)}}var w=function(e){r()(n,e);var t=T(n);function n(e){return l()(this,n),t.call(this,e)}return i()(n,[{key:"componentDidMount",value:function(){var e=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));this.tooltipList=e.map((function(e){return new bootstrap.Tooltip(e)}))}},{key:"componentWillUnmount",value:function(){this.tooltipList.forEach((function(e){e.dispose()}))}},{key:"render",value:function(){return console.log(this.props.data),console.log("MONKEY"),"mms"===this.props.directory?E.a.createElement(y,{data:this.props.data}):"mhs"===this.props.directory?E.a.createElement(b,{data:this.props.data}):E.a.createElement("p",null,"Error, site directory not specified")}}]),n}(E.a.Component);t.a=w}}]);