(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={index:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("a097")},a097:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("body",[n("div",{staticClass:"container justify-content-center"},[n("h1",[t._v("Index page")]),n("div",{staticClass:"container"},[n("div",{ref:"myInput",staticClass:"input-field col s12"},[t._m(0),n("label",[t._v("Materialize Select")])])]),n("br"),n("br"),n("br"),n("p",[t._v("dqwedwqed")]),n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[t._v("Aboud")]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"sometable"}}},[t._v("Table One")])],1),n("br"),n("br"),n("router-view"),n("div",{attrs:{id:"app"}})],1)])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",[n("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose your option")]),n("option",{attrs:{value:"1"}},[t._v("Option 1")]),n("option",{attrs:{value:"2"}},[t._v("Option 2")]),n("option",{attrs:{value:"3"}},[t._v("Option 3")])])}],i=n("8ffa"),s=n("6712");n("1797"),n("62a9");var l={name:"index",components:{Header:i["a"],Navigate:s["a"]},mounted:function(){M.AutoInit()}},u=l,c=n("2877"),p=Object(c["a"])(u,a,o,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row jistify-content-center"},[n("h4",[t._v("About")]),n("p",[t._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni nihil odio aliquid neque a dolorem quod est officia! Architecto possimus cupiditate provident molestiae et. Iste reprehenderit possimus molestias distinctio.\n    ")])])])}],b={name:"about",mounted:function(){console.log("iam about")}},m=b,h=Object(c["a"])(m,f,v,!1,null,null,null),_=h.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row jistify-content-center"},[n("subtable")],1)])},O=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("table",{staticClass:"table table-sm table-hover"},[n("tbody",t._l(t.tasks,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.title))])])}),0)])])},j=[],w=n("bc3a"),x=n.n(w),C={name:"subtable",data:function(){return{tasks:[]}},created:function(){var t=this;x.a.get("https://jsonplaceholder.typicode.com/posts").then(function(e){return t.tasks=e.data})}},k=C,P=Object(c["a"])(k,g,j,!1,null,null,null),q=P.exports,E={name:"tableOne",components:{subtable:q}},S=E,$=Object(c["a"])(S,y,O,!1,null,null,null),A=$.exports,I=n("8c4f");r["a"].use(I["a"]);var T=new I["a"]({mode:"history",routes:[{path:"/index/about",name:"about",component:_},{path:"/index/sometable",name:"sometable",component:A}]});r["a"].config.productionTip=!1,new r["a"]({router:T,el:"#app",render:function(t){return t(d)}})}});
//# sourceMappingURL=index.ceb770d8.js.map