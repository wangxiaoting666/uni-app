(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0145":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},"158d":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(e("b07f")),r=e("2f62");function u(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){c(n,t,e[t])})}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var s=function(){return e.e("components/m-input").then(e.bind(null,"4f68"))},f={components:{mInput:s},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,r.mapState)(["forcedLogin"]),methods:a({},(0,r.mapMutations)(["login"]),{initProvider:function(){var t=this,e=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var o=0;o<n.provider.length;o++)~e.indexOf(n.provider[o])&&t.providerList.push({value:n.provider[o],image:"../../static/img/"+n.provider[o]+".png"});t.hasProvider=!0}},fail:function(n){console.error(o("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:71"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(this.account.length<5)n.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)n.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t={account:this.account,password:this.password},e=i.default.getUsers().some(function(n){return t.account===n.account&&t.password===n.password});e?this.toMain(this.account):n.showToast({icon:"none",title:"用户账号或密码不正确"})}},oauth:function(t){var e=this;n.login({provider:t,success:function(o){n.getUserInfo({provider:t,success:function(n){e.toMain(n.userInfo.nickName)}})},fail:function(n){console.error(o("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:138"))}})},toMain:function(t){this.login(t),this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}),onReady:function(){this.initPosition(),this.initProvider()}};t.default=f}).call(this,e("6e42")["default"],e("0de9")["default"])},"3b26":function(n,t,e){"use strict";e.r(t);var o=e("0145"),i=e("bf46");for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);e("e619");var u=e("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"4c6a":function(n,t,e){"use strict";(function(n){e("0b81"),e("921b");o(e("66fd"));var t=o(e("3b26"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"8a51":function(n,t,e){},bf46:function(n,t,e){"use strict";e.r(t);var o=e("158d"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=i.a},e619:function(n,t,e){"use strict";var o=e("8a51"),i=e.n(o);i.a}},[["4c6a","common/runtime","common/vendor"]]]);