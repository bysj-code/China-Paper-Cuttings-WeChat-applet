(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/detail"],{"0db3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return i(r.default.mark((function e(){var o,a,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),o=t.getStorageSync("nowTable"),e.next=4,n.$api.session(o);case 4:a=e.sent,n.user=a.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),i=t.getStorageSync("pingluenStateState"),i&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return i(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("goods",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.goodsPhoto?t.detail.goodsPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},onCartTap:function(){var t=this;return i(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.page("cart",{page:1,limit:9999,goodsId:t.id});case 2:if(n=e.sent,!(n.data.list.length>0)){e.next=6;break}return t.$utils.msg("商品已添加到购物车"),e.abrupt("return");case 6:return e.next=8,t.$api.save("cart",{goodsId:t.detail.id,buyNumber:1,yonghuId:t.user.id});case 8:t.$utils.msg("添加到购物车成功");case 9:case"end":return e.stop()}}),e)})))()},onSubmit:function(){t.setStorageSync("orderGoods",[{goodsId:this.detail.id,goodsName:this.detail.goodsName,goodsPhoto:this.swiperList[0],buyNumber:1,goodsNewMoney:this.detail.goodsNewMoney}]),this.$utils.jump("../goodsOrder/confirm")},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.mescroll.endByPage(e.mescroll.num,10);case 1:case"end":return t.stop()}}),t)})))()}}};e.default=u}).call(this,n("543d")["default"])},"6d89":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"a811"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"76fe":function(t,e,n){"use strict";n.r(e);var r=n("0db3"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"7a40":function(t,e,n){"use strict";(function(t){n("0f28");r(n("66fd"));var e=r(n("c10f"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},bedd:function(t,e,n){},c10f:function(t,e,n){"use strict";n.r(e);var r=n("6d89"),o=n("76fe");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d151");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},d151:function(t,e,n){"use strict";var r=n("bedd"),o=n.n(r);o.a}},[["7a40","common/runtime","common/vendor"]]]);