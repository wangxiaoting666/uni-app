(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"4da6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"68ba":function(e,t,n){"use strict";(function(e){n("0b81"),n("921b");a(n("66fd"));var t=a(n("71e8"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"71e8":function(e,t,n){"use strict";n.r(t);var a=n("4da6"),i=n("eefe");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("c9c5");var u=n("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"96cb":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62"),o={computed:(0,i.mapState)(["forcedLogin","hasLogin","userName"]),data:function(){return{date:(new Date).toISOString().slice(0,10),lists:[],productList:[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",name:"安徽未管所",date:"2019-12-31",beginTime:"2019-12-31   9:30",endTime:"2019-12-31   9:30",total:"3小时",stats:"正常"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",name:"安徽未管所",date:"2019-12-31",beginTime:"2019-12-09   9:00",endTime:"2019-12-10   15:35",total:"5小时",stats:"正常"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",name:"安徽未管所",date:"2019-12-31",beginTime:"2019-12-11   9:30",endTime:"2019-12-31   17:22",total:"6小时",stats:"正常"}]}},bindDateChange:function(e){this.date=e.target.value},onLoad:function(){var t=this;this.hasLogin||e.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(n){n.confirm&&(t.forcedLogin?e.reLaunch({url:"../login/login"}):e.navigateTo({url:"../login/login"}))}})},methods:{clickTest:function(e){console.log(a(e," at pages\\main\\main.vue:177")),console.log(a("click"," at pages\\main\\main.vue:178"));var t={image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",name:"安徽未管所",date:"2019-12-31",beginTime:"2019-12-31   9:30",endTime:"2019-12-31   9:30",total:"3小时",stats:"正常"};this.productList.push(t)}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},c9c5:function(e,t,n){"use strict";var a=n("ed95"),i=n.n(a);i.a},ed95:function(e,t,n){},eefe:function(e,t,n){"use strict";n.r(t);var a=n("96cb"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a}},[["68ba","common/runtime","common/vendor"]]]);