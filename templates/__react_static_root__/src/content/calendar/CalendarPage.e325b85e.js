(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(54),o=n(15);t.a=function(){var e,t,n=Object(o.useRouteData)().site,a=Object(o.useRouteData)().page;return a?(e=a.description,t=n.directory.toUpperCase()+" Student Activities - "+a.name):n?(e="Explore enriching extracurricular options at ".concat(n.name,"."),t=n.directory.toUpperCase()+" Student Activities"):(e="Explore enriching extracurricular options for the Mason City Schools district.",t="Mason Student Activities Homepage"),r.a.createElement(c.default,null,r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:e}),r.a.createElement("meta",{content:t,property:"og:title"}),r.a.createElement("meta",{content:e,property:"og:description"}),r.a.createElement("meta",{content:"MHS Student Activities",property:"og:site_name"}),r.a.createElement("meta",{content:"/images/logos/logo192.png",property:"og:image"}))}},136:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(15),o=n(27);t.a=function(e){var t=Object(c.useRouteData)().site;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title-bar"},r.a.createElement(o.a,{to:"/"},r.a.createElement("img",{src:"/images/logos/logo_light.png",alt:"Logo for Mason City Schools"})),r.a.createElement("h1",null,t.directory.toUpperCase()," Student Activities"))),void 0!==e.navAddition&&e.navAddition)}},137:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(15);t.a=function(){var e=Object(c.useRouteData)().site;return r.a.createElement("footer",{id:"footer",className:"d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"If you have any questions regarding student activities, email:"),r.a.createElement("h5",null,r.a.createElement("b",null,e.directory.toUpperCase()+" "+e.coordinator.title),": ",e.coordinator.name," <",e.coordinator.email,">")))}},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(55),r=n.n(a),c=n(56),o=n.n(c),i=n(57),l=n.n(i),s=n(58),u=n.n(s),m=n(59),d=n.n(m),p=n(0),f=n.n(p);n(134);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var E=function(e){l()(n,e);var t=v(n);function n(){return r()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return"undefined"!=typeof window?f.a.createElement(f.a.Fragment,null,f.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2379b290&ctz=America%2FNew_York&src=Y19tZjY1NmE0MmU2ZmpwdjFzYjFoNWM3NXYxb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2333B679",width:1e3,height:600})):f.a.createElement("p",null,"This calendar requires JavaScript to run.")}}]),n}(f.a.Component)},144:function(e){e.exports=JSON.parse("{}")},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=(n(144),n(135)),o=n(136),i=n(137),l=n(139),s=n(27);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("div",{id:"site-content",className:"content"},r.a.createElement(o.a,{navAddition:r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{to:"/mhs"},r.a.createElement("h4",null,"< Go back to student activities")))}),r.a.createElement("div",{className:"calendar-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(l.a,{view:"dayGridMonth"}))))),r.a.createElement(i.a,null))}}}]);