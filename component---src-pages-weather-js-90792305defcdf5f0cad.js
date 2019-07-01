(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(161),a(170)),s=a(168),l=a(8),o=a.n(l),c=a(218),u=a.n(c),m=function(e){function t(){var t;return(t=e.call(this)||this).state={items:[]},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.getItems()},a.getItems=function(){var e=this;fetch("https://api.nasa.gov/DONKI/notifications?type=all&api_key=EZlD2gwS3nwMcn2EbaATVg0VFP7vKFgINM4Z2HOw").then(function(e){return e.json()}).then(function(t){return e.setState({items:t.slice(0,1)})})},a.render=function(){return i.a.createElement("ul",null,this.state.items.map(function(e,t){return i.a.createElement("div",{className:"weather"},i.a.createElement("h2",null,e.messageType),i.a.createElement("h6",null,e.messageURL),i.a.createElement("h6",null,e.messageIssueTime),i.a.createElement(u.a,null,e.messageBody))}))},t}(n.Component);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(s.a,{title:"Weather"}),i.a.createElement("h1",{className:"title"},"Weather"),i.a.createElement("p",{className:"description"},"The following article was taken from NASA's Space Weather Database Of Notifications, Knowledge, Information (DONKI) API. NASA's DONKI API provides weather observations, forecasts and notifications on a daily basis."),i.a.createElement(m,null))}},161:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),s=a.n(r),l=a(40),o=a.n(l);a.d(t,"a",function(){return o.a});a(162),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},162:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(40),s=a.n(r);t.a=function(){return i.a.createElement("div",{style:{background:"#222",paddingTop:"10px",position:"relative",top:0,left:0,zIndex:30,width:"100%",borderBottom:"3px solid #3E8891"}},i.a.createElement("ul",{style:{listStyle:"none",display:"flex",justifyContent:"space-evenly",color:"#fff"}},i.a.createElement("li",null,i.a.createElement(s.a,{className:"navlink",to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(s.a,{className:"navlink",to:"/images"},"Images")),i.a.createElement("li",null,i.a.createElement(s.a,{className:"navlink",to:"/weather"},"Weather")),i.a.createElement("li",null,i.a.createElement(s.a,{className:"navlink",to:"/news"},"News"))))}},166:function(e,t,a){"use strict";var n=a(161),i=a(5),r=a.n(i),s=a(0),l=a.n(s),o=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.propTypes={siteTitle:r.a.string},o.defaultProps={siteTitle:""}},167:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),i=a.n(n),r=a(5),s=a.n(r),l=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},168:function(e,t,a){"use strict";var n=a(169),i=a(0),r=a.n(i),s=a(5),l=a.n(s),o=a(173),c=a.n(o);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=n.data.site,o=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},169:function(e){e.exports={data:{site:{siteMetadata:{title:"The Galaxy Times",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},170:function(e,t,a){"use strict";var n=a(171),i=a(0),r=a.n(i),s=a(5),l=a.n(s),o=a(165),c=(a(166),a(174),a(172)),u=function(e){var t=e.children;n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement(o.a,null)),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:2e3,padding:"0px",paddingTop:0,background:"white"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:2e3,padding:"2rem",paddingTop:0,position:c.relative}},r.a.createElement("main",null,t))))};u.propTypes={children:l.a.node.isRequired},t.a=u},171:function(e){e.exports={data:{site:{siteMetadata:{title:"The Galaxy Times"}}}}}}]);
//# sourceMappingURL=component---src-pages-weather-js-90792305defcdf5f0cad.js.map