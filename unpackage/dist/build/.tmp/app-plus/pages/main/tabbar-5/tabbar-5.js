(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/tabbar-5/tabbar-5"],{"030c":function(t,e,i){"use strict";i.r(e);var n=i("78f1"),a=i("2190");for(var u in a)"default"!==u&&function(t){i.d(e,t,function(){return a[t]})}(u);var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"14dd":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{productList:[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"李俊飞",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"罗西西",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"小金龙",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"陈雅婷",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"王晓燕",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"小美人",originalPrice:2899,favourPrice:2799,tip:"自营"}],renderImage:!1}},methods:{getList:function(){var e=this;t.request({url:"http://localhost:3000/goods",success:function(t){console.log(i(t.data," at pages\\main\\tabbar-5\\tabbar-5.vue:82")),e.productList=t.data.goodslist}})}},onLoad:function(){this.getList(),this.renderImage=!0}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},2190:function(t,e,i){"use strict";i.r(e);var n=i("14dd"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,function(){return n[t]})}(u);e["default"]=a.a},"78f1":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b880:function(t,e,i){"use strict";(function(t){i("0b81"),i("921b");n(i("66fd"));var e=n(i("030c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])}},[["b880","common/runtime","common/vendor"]]]);