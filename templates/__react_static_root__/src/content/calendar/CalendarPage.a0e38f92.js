(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(54),i=a(15);t.a=function(){var e,t,a=Object(i.useRouteData)().site,n=Object(i.useRouteData)().page;return n?(e=n.description,t=a.directory.toUpperCase()+" Student Activities - "+n.name):a?(e="Explore enriching extracurricular options at ".concat(a.name,"."),t=a.directory.toUpperCase()+" Student Activities"):(e="Explore enriching extracurricular options for the Mason City Schools district.",t="Mason Student Activities Homepage"),r.a.createElement(o.default,null,r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:e}),r.a.createElement("meta",{content:t,property:"og:title"}),r.a.createElement("meta",{content:e,property:"og:description"}),r.a.createElement("meta",{content:"MHS Student Activities",property:"og:site_name"}),r.a.createElement("meta",{content:"/images/logos/logo192.png",property:"og:image"}))}},139:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(15),i=a(27);t.a=function(e){var t=Object(o.useRouteData)().site;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title-bar"},r.a.createElement(i.a,{to:"/"},r.a.createElement("img",{src:"/images/logos/logo_light.png",alt:"Logo for Mason City Schools"})),r.a.createElement("h1",null,t.directory.toUpperCase()," Student Activities"))),void 0!==e.navAddition&&e.navAddition)}},140:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(15);t.a=function(){var e=Object(o.useRouteData)().site;return r.a.createElement("footer",{id:"footer",className:"d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"If you have any questions regarding student activities, email:"),r.a.createElement("h5",null,r.a.createElement("b",null,e.directory.toUpperCase()+" "+e.coordinator.title),": ",e.coordinator.name," <",e.coordinator.email,">")))}},143:function(e){e.exports=JSON.parse("{}")},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a(55),r=a.n(n),o=a(56),i=a.n(o),c=a(57),l=a.n(c),s=a(58),u=a.n(s),d=a(59),m=a.n(d),p=a(0),v=a.n(p),f=a(149),E=a(145),g=a(146),h=a(147);a(143),a(134);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var w=function(e){l()(a,e);var t=y(a);function a(){return r()(this,a),t.apply(this,arguments)}return i()(a,[{key:"render",value:function(){return"undefined"!=typeof window?v.a.createElement(v.a.Fragment,null,v.a.createElement(f.a,{plugins:[g.a,E.a,h.a],googleCalendarApiKey:"AIzaSyC9Z83mzJ3NX6c21TPhqy0fF9oVvz2akBo",events:{googleCalendarId:"c_mf656a42e6fjpv1sb1h5c75v1o@group.calendar.google.com"},dayMaxEventRows:3,views:{dayGridMonth:{dayMaxEventRows:3},dayGridWeek:{dayMaxEventRows:3}},height:"dayGridWeek"===this.props.view?200:"100vh",contentHeight:"auto",initialView:this.props.view,headerToolbar:"dayGridMonth"===this.props.view&&{start:"title",center:"",end:"prev,next,today"}})):v.a.createElement("p",null,"This calendar requires JavaScript to run.")}}]),a}(v.a.Component)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(143),a(137)),i=a(139),c=a(140),l=a(144),s=a(27);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement("div",{id:"site-content",className:"content"},r.a.createElement(i.a,{navAddition:r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{to:"/mhs"},r.a.createElement("h4",null,"< Go back to student activities")))}),r.a.createElement("div",{className:"calendar-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(l.a,{view:"dayGridMonth"}))))),r.a.createElement(c.a,null))}}}]);