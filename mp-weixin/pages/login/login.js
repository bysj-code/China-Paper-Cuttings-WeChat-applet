(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"213e":function(t,e,n){"use strict";n.r(e);var o=n("2e1d"),r=n("f27f");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("7ce7");var i,s=n("f0c5"),u=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"92f4d1f8",null,!1,o["a"],i);e["default"]=u.exports},"2e1d":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"7ce7":function(t,e,n){"use strict";var o=n("b987"),r=n.n(o);r.a},"99d6":function(t,e,n){"use strict";(function(t){n("0f28");o(n("66fd"));var e=o(n("213e"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},a59c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a")),r=a(n("ffa2"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,r,a,i){try{var s=t[a](i),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(o,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,u,"next",t)}function u(t){i(a,o,r,s,u,"throw",t)}s(void 0)}))}}var u={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=r.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.randomString(4),this.styleChange()},methods:{randomString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o=["28","30","32","34","36"],r=0;r<t;r++){var a=Math.floor(Math.random()*e.length);this.codes[r].num=e[a];for(var i="#",s=0;s<6;s++){var u=Math.floor(Math.random()*n.length);i+=n[u]}this.codes[r].color=i;var c=Math.floor(30*Math.random()),f=Math.floor(2*Math.random());1==f&&(c="-"+c),this.codes[r].rotate="rotate("+c+"deg)";var d=Math.floor(Math.random()*o.length);this.codes[r].size=o[d]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){t.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=this;return s(o.default.mark((function n(){var r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.optionsValues[e.index]){n.next=3;break}return e.$utils.msg("请选择登陆${firstRegisterComment}类型"),n.abrupt("return");case 3:return n.next=5,e.$api.login("".concat(e.optionsValues[e.index]),{username:e.username,password:e.password});case 5:return r=n.sent,t.setStorageSync("token",r.token),t.setStorageSync("nickname",e.username),t.setStorageSync("nowTable","".concat(e.optionsValues[e.index])),n.next=11,e.$api.session("".concat(e.optionsValues[e.index]));case 11:r=n.sent,t.setStorageSync("userid",r.data.id),r.data.vip&&t.setStorageSync("vip",r.data.vip),t.setStorageSync("role","".concat(e.options[e.index])),e.$utils.tab("../index/index");case 16:case"end":return n.stop()}}),n)})))()},optionsChange:function(t){this.index=t.target.value}}};e.default=u}).call(this,n("543d")["default"])},b987:function(t,e,n){},f27f:function(t,e,n){"use strict";n.r(e);var o=n("a59c"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a}},[["99d6","common/runtime","common/vendor"]]]);