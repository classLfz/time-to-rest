(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(t,e,r){t.exports=r(263)},178:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=178},193:function(t,e,r){"use strict";var n=r(62);r.n(n).a},194:function(t,e,r){(t.exports=r(45)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},195:function(t,e,r){"use strict";var n=r(63);r.n(n).a},196:function(t,e,r){(t.exports=r(45)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},202:function(t,e,r){"use strict";var n=r(64);r.n(n).a},203:function(t,e,r){(t.exports=r(45)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},263:function(t,e,r){"use strict";r.r(e);r(101),r(110),r(113);var n=r(33),o=r.n(n),i=(r(72),r(73),r(158),r(5)),a=r.n(i),s=(r(160),r(161),r(118),r(55),r(120),r(119),r(165),r(177),r(0)),u=(r(125),r(178)),c=u.keys();function p(t){var e=u(t);return e.default||e}var f={},l=!0,d=!1,h=void 0;try{for(var x,m=c[Symbol.iterator]();!(l=(x=m.next()).done);l=!0){var y=x.value;f[y.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(y)}}catch(t){d=!0,h=t}finally{try{l||null==m.return||m.return()}finally{if(d)throw h}}var v=f,g=(r(179),r(180),r(181),r(147),r(148),r(184),r(187),r(34)),b=r.n(g),w=function(){return{}};function _(t,e){var r=t.options.data||w;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var n=r.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},n,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,r){return Object.keys(t.components).map(function(n){return e&&e.push(r),t.components[n]})}))}function R(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,r){return Object.keys(t.components).reduce(function(n,o){return t.components[o]?n.push(e(t.components[o],t.instances[o],t,o,r)):delete t.components[o],n},[])}))}function E(t){return Promise.all(R(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,r,n,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return n.components[o]=C(e),t.abrupt("return",n.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,r,n,o){return t.apply(this,arguments)}}()))}function T(t){return S.apply(this,arguments)}function S(){return(S=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:return t.abrupt("return",b()({},e,{meta:$(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){return O.apply(this,arguments)}function O(){return(O=a()(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:r.payload,error:r.error,base:"/time-to-rest/",env:{}},r.req&&(e.context.req=r.req),r.res&&(e.context.res=r.res),e.context.redirect=function(t,r,n){if(t){e.context._redirected=!0;var i=o()(r);if("number"==typeof t||"undefined"!==i&&"object"!==i||(n=r||{},r=t,i=o()(r),t=302),"object"===i&&(r=e.router.resolve(r).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(r))throw r=U(r,n),window.location.replace(r),new Error("ERR_REDIRECT");e.context.next({path:r,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=r.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!r.isHMR,!r.route){t.next=9;break}return t.next=8,T(r.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!r.from){t.next=15;break}return t.next=14,T(r.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function N(t,e){var r;return(r=2===t.length?new Promise(function(r){t(e,function(t,n){t&&e.error(t),r(n=n||{})})}):t(e))&&(r instanceof Promise||"function"==typeof r.then)||(r=Promise.resolve(r)),r}function P(t,e){var r=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===r.indexOf(t)&&(r=r.slice(t.length)),decodeURI(r||"/")+window.location.search+window.location.hash)}function q(t,e){return function(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"===o()(t[r])&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=n||{},s=a.pretty?L:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=i[c.name||"pathMatch"],f=void 0;if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(f=s(p[l]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===l?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}(function(t,e){var r,n=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(r=M.exec(t));){var u=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],l=r[2],d=r[3],h=r[4],x=r[5],m=r[6],y=r[7];a&&(n.push(a),a="");var v=null!=l&&null!=f&&f!==l,g="+"===m||"*"===m,b="?"===m||"*"===m,w=r[2]||s,_=h||x;n.push({name:d||o++,prefix:l||"",delimiter:w,optional:b,repeat:g,partial:v,asterisk:!!y,pattern:_?I(_):y?".*":"[^"+z(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&n.push(a);return n}(t,e))}function k(t,e){var r={},n=b()({},t,e);for(var o in n)String(t[o])!==String(e[o])&&(r[o]=!0);return r}function D(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(r){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){var r,n=t.indexOf("://");-1!==n?(r=t.substring(0,n),t=t.substring(n+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(r?r+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var r=t[e];return null==r?"":Array.isArray(r)?r.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+r}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var B=r(145),J=r.n(B),K=r(100),H=function(){return r.e(2).then(r.bind(null,267)).then(function(t){return t.default||t})};s.default.use(K.a),window.history.scrollRestoration="manual";var F=function(t,e,r){var n=!1;return t.matched.length<2?n={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(n={x:0,y:0}),r&&(n=r),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var r=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(r="#"+window.CSS.escape(r.substr(1)));try{document.querySelector(r)&&(n={selector:r})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(n)})})};var Q=r(146),V=r.n(Q).a,X={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var r=e.parent,n=e.data,o=e.props;n.nuxtChild=!0;for(var i=r,a=r.$nuxt.nuxt.transitions,s=r.$nuxt.nuxt.defaultTransition,u=0;r;)r.$vnode&&r.$vnode.data.nuxtChild&&u++,r=r.$parent;n.nuxtChildDepth=u;var c=a[u]||s,p={};W.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var f={};G.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(i))});var l=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),l)return l.call(i,t)};var d=[t("router-view",n)];return o.keepAlive&&(d=[t("keep-alive",{props:o.keepAliveProps},d)]),t("transition",{props:p,on:f},d)}},W=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],G=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],Y={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},Z={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},j=(r(193),r(32)),tt=Object(j.a)(Z,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"error"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[r("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?r("p",{staticClass:"description"},[r("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);tt.options.__file="nuxt-error.vue";var et=tt.exports,rt={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||q(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:X,NuxtError:et}},nt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ot=(r(195),Object(j.a)(nt,void 0,void 0,!1,null,null,null));ot.options.__file="nuxt-loading.vue";var it=ot.exports,at=(r(197),r(202),Object(j.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null));at.options.__file="default.vue";var st={_default:at.exports},ut={head:{title:"time-to-rest",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"settimeout to rest, clock"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var r=t("nuxt-loading",{ref:"loading"}),n=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[r,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&st["_"+t]||(t="default"),this.layoutName=t,this.layout=st["_"+t],this.layout},loadLayout:function(t){return t&&st["_"+t]||(t="default"),Promise.resolve(st["_"+t])}},components:{NuxtLoading:it}},ct=r(20),pt=r(35),ft=r.n(pt),lt=function(){s.default.use(ct.Button,{locale:ft.a}),s.default.use(ct.Input,{locale:ft.a}),s.default.use(ct.Switch,{locale:ft.a}),s.default.use(ct.TimePicker,{locale:ft.a}),s.default.use(ct.Dialog,{locale:ft.a}),s.default.prototype.$message=ct.MessageBox};s.default.component(V.name,V),s.default.component(X.name,X),s.default.component(Y.name,Y),s.default.component(rt.name,rt),s.default.use(J.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var dt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ht(){return(ht=a()(regeneratorRuntime.mark(function t(e){var r,n,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new K.a({mode:"history",base:"/time-to-rest/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:F,routes:[{path:"/",component:H,name:"index"}],fallback:!1});case 2:return r=t.sent,n=b()({router:r,nuxt:{defaultTransition:dt,transitions:[dt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},dt,{name:t}):Object.assign({},dt,t):dt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,n.context._errored=!!t,t=t?D(t):null;var r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=t,e&&(e.nuxt.error=t),t}}},ut),o=e?e.next:function(t){return n.router.push(t)},e?i=r.resolve(e.url).route:(a=P(r.options.base),i=r.resolve(a).route),t.next=8,A(n,{route:i,next:o,error:n.nuxt.error.bind(n),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");n[t="$"+t]=e;var r="__nuxt_"+t+"_installed__";s.default[r]||(s.default[r]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof lt){t.next=12;break}return t.next=12,lt(n.context,u);case 12:t.next=15;break;case 15:return t.abrupt("return",{app:n,router:r});case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var xt,mt,yt=[],vt=window.__NUXT__||{};function gt(t,e,r){var n=function(t){var n=function(t,e){if(!t||!t.options||!t.options[e])return{};var r=t.options[e];if("function"==typeof r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return r.apply(void 0,o)}return r}(t,"transition",e,r)||{};return"string"==typeof n?{name:n}:n};return t.map(function(t){var e=Object.assign({},n(t));if(r&&r.matched.length&&r.matched[0].components.default){var o=n(r.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function bt(t,e,r){return wt.apply(this,arguments)}function wt(){return(wt=a()(regeneratorRuntime.mark(function t(e,r,n){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!xt.nuxt.err||r.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(r.query),this._diffQuery=this._queryChanged?k(e.query,r.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,E(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),n(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,r,error),n(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function _t(t,e){return vt.serverRendered&&e&&_(t,e),t._Ctor=t,t}function Ct(t,e,r){var n=this,o=[],i=!1;if(void 0!==r&&(o=[],r.middleware&&(o=o.concat(r.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof v[t]&&(i=!0,n.error({statusCode:500,message:"Unknown middleware "+t})),v[t])}),!i)return function t(e,r){return!e.length||r._redirected||r._errored?Promise.resolve():N(e[0],r).then(function(){return t(e.slice(1),r)})}(o,e)}function $t(t,e,r){return Rt.apply(this,arguments)}function Rt(){return(Rt=a()(regeneratorRuntime.mark(function t(e,r,n){var o,i,a,u,c,p,f,l,d,h,x,m,y,v,g,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",n());case 2:return yt=e===r?[]:$(r,o=[]).map(function(t,e){return q(r.matched[o[e]].path)(r.params)}),i=!1,a=function(t){r.path===t.path&&w.$loading.finish&&w.$loading.finish(),r.path!==t.path&&w.$loading.pause&&w.$loading.pause(),i||(i=!0,n(t))},t.next=7,A(xt,{route:e,from:r,next:a.bind(this)});case 7:if(this._dateLastError=xt.nuxt.dateErr,this._hadError=!!xt.nuxt.err,(c=$(e,u=[])).length){t.next=25;break}return t.next=14,Ct.call(this,c,xt.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof et.layout?et.layout(xt.context):et.layout);case 18:return p=t.sent,t.next=21,Ct.call(this,c,xt.context,p);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return xt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",n());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(gt(c,e,r)),t.prev=27,t.next=30,Ct.call(this,c,xt.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!xt.context._errored){t.next=34;break}return t.abrupt("return",n());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(xt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,Ct.call(this,c,xt.context,f);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!xt.context._errored){t.next=45;break}return t.abrupt("return",n());case 45:l=!0,t.prev=46,d=!0,h=!1,x=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(d=(y=m.next()).done){t.next=64;break}if("function"==typeof(v=y.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,v.options.validate(xt.context);case 58:if(l=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,x=t.t0;case 70:t.prev=70,t.prev=71,d||null==m.return||m.return();case 73:if(t.prev=73,!h){t.next=76;break}throw x;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",n());case 84:if(l){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",n());case 87:return t.next=89,Promise.all(c.map(function(t,r){if(t._path=q(e.matched[u[r]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==yt[r])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=N(t.options.asyncData,xt.context).then(function(e){_(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var p=t.options.fetch(xt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),n()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(g=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,r,g));case 97:return yt=[],C=g,s.default.config.errorHandler&&s.default.config.errorHandler(C),"function"==typeof(b=et.layout)&&(b=b(xt.context)),t.next=103,this.loadLayout(b);case 103:this.error(g),this.$nuxt.$emit("routeChanged",e,r,g),n(!1);case 106:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Et(t,e){R(t,function(t,e,r,n){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,r.components[n]=t),t})}function Tt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?et.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(xt.context)),this.setLayout(e)}function St(t,e){var r=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],n=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,r){return Object.keys(t.instances).map(function(n){return e&&e.push(r),t.instances[n]})}))}(t,e),o=$(t,e);n.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var r=t.constructor.options.data.call(t);for(var n in r)s.default.set(t.$data,n,r[n])}}),Tt.call(r,t)})}function At(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),mt.afterEach(function(e,r){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,r)})})}function Ot(){return(Ot=a()(regeneratorRuntime.mark(function t(e){var r,n,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return xt=e.app,mt=e.router,t.next=4,Promise.all((c=void 0,c=P((u=mt).options.base,u.options.mode),R(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,r,n,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=_t(C(e),vt.data?vt.data[i]:null),n.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,r,n,o,i){return t.apply(this,arguments)}}())));case 4:return r=t.sent,n=new s.default(xt),o=vt.layout||"default",t.next=9,n.loadLayout(o);case 9:if(n.setLayout(o),i=function(){n.$mount("#__nuxt"),s.default.nextTick(function(){At(n)})},n.setTransitions=n.$options.nuxt.setTransitions.bind(n),r.length&&(n.setTransitions(gt(r,mt.currentRoute)),yt=mt.currentRoute.matched.map(function(t){return q(t.path)(mt.currentRoute.params)})),n.$loading={},vt.error&&n.error(vt.error),mt.beforeEach(bt.bind(n)),mt.beforeEach($t.bind(n)),mt.afterEach(Et),mt.afterEach(St.bind(n)),!vt.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:$t.call(n,mt.currentRoute,mt.currentRoute,function(t){if(!t)return Et(mt.currentRoute,mt.currentRoute),Tt.call(n,mt.currentRoute),void i();mt.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.default.config,{silent:!0,performance:!1}),function(t){return ht.apply(this,arguments)}().then(function(t){return Ot.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},62:function(t,e,r){var n=r(194);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(46).default)("45b1ddea",n,!0,{})},63:function(t,e,r){var n=r(196);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(46).default)("fd547dac",n,!0,{})},64:function(t,e,r){var n=r(203);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(46).default)("371b8fbf",n,!0,{})}},[[149,3,1,4]]]);