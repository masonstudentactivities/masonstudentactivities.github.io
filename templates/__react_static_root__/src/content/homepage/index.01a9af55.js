(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{133:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"MHS Student Activities"),r.a.createElement("p",null,"This site is currently under development! To find student activities information please visit the ",r.a.createElement("a",{href:"https://sites.google.com/masonohioschools.com/mhsactivities2021/home?scrlybrkr=e3f4ff9b"},"Google Site"))),void 0!==e.navAddition&&e.navAddition)}},63:function(e,t,n){"use strict";n.r(t);var a=n(55),r=n.n(a),i=n(56),o=n.n(i),s=n(57),c=n.n(s),l=n(58),u=n.n(l),m=n(59),f=n.n(m),d=n(0),v=n.n(d),p=n(28),h=n(60),y=n(133);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var g=function(e){c()(n,e);var t=b(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).state={selected:e[0]},a}return o()(n,[{key:"updateSelected",value:function(e){var t=this;return function(){t.props.filtersUpdate(t.props.name,e),t.setState({selected:e})}}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{className:"btn-group filter"},v.a.createElement("button",{type:"button",className:"btn btn-success dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},this.props.name,": ",this.state.selected||this.props.options[0]),v.a.createElement("ul",{className:"dropdown-menu"},this.props.options.map((function(t){return v.a.createElement("li",{key:t},v.a.createElement("button",{className:"dropdown-item",href:"#",onClick:e.updateSelected(t)},t))}))))}}]),n}(v.a.Component);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var N={Category:["Any","Honors Societies (Non-Competitive)","Sports","Gaming","Technology","Academic","Involvement","Arts","Other"],"Mobility Level":["Any","Low","Medium","High"],"Noise Level":["Any","Low","Medium","High"]},k=function(e){c()(n,e);var t=E(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).state={},Object.keys(N).forEach((function(e){a.state[e]=N[e][0]})),a}return o()(n,[{key:"filtersUpdate",value:function(e,t){var n=this.state;n[e]=t,this.setState(n)}},{key:"render",value:function(){for(var e,t,n=this,a=Object.keys(N).map((function(e){return v.a.createElement(g,{key:e,filtersUpdate:n.filtersUpdate.bind(n),name:e,options:N[e]})})),r=[],i=0;i<h.length;i++)r.push(v.a.createElement(p.a,{to:"/"+h[i].name,className:"thumbnail col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 "+(e=i,t=void 0,t=h[e],console.log(n.state.Category),t.category!==n.state.Category&&"Any"!==n.state.Category||parseInt(t.mobilityRating.substring(0,1))<N["Mobility Level"].indexOf(n.state["Mobility Level"])&&"Any"!==n.state["Mobility Level"]||parseInt(t.soundRating.substring(0,1))<N["Noise Level"].indexOf(n.state["Noise Level"])&&"Any"!==n.state["Noise Level"]?"hidden":""),key:i},v.a.createElement("img",{src:"/thumbnails/"+h[i].name+"."+h[i].fileExtension}),v.a.createElement("h2",null,h[i].name)));var o=v.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},v.a.createElement("div",{className:"container-fluid"},v.a.createElement("ul",{className:"nav navbar-nav"},v.a.createElement("li",{className:"nav-item"},"Filters:"),a)));return v.a.createElement(v.a.Fragment,null,v.a.createElement(y.a,{navAddition:o}),v.a.createElement("div",{id:"thumbnail-container"},v.a.createElement("div",{className:"container"},v.a.createElement("div",{className:"row"},r))))}}]),n}(v.a.Component);t.default=k}}]);