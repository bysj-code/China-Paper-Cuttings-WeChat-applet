(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianzhishipin/add-or-update"],{"35d6":function(i,n,e){"use strict";var t=e("4464"),a=e.n(t);a.a},4464:function(i,n,e){},7328:function(i,n,e){"use strict";e.r(n);var t=e("f6b6"),a=e.n(t);for(var r in t)"default"!==r&&function(i){e.d(n,i,(function(){return t[i]}))}(r);n["default"]=a.a},9134:function(i,n,e){"use strict";e.r(n);var t=e("d14d"),a=e("7328");for(var r in a)"default"!==r&&function(i){e.d(n,i,(function(){return a[i]}))}(r);e("35d6");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"7a945ae8",null,!1,t["a"],u);n["default"]=s.exports},d14d:function(i,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"cfb6"))}},a=function(){var i=this,n=i.$createElement;i._self._c},r=[]},dca2:function(i,n,e){"use strict";(function(i){e("0f28");t(e("66fd"));var n=t(e("9134"));function t(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e("543d")["createPage"])},f6b6:function(i,n,e){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(e("a34a"));function a(i){return i&&i.__esModule?i:{default:i}}function r(i,n,e,t,a,r,u){try{var o=i[r](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(t,a)}function u(i){return function(){var n=this,e=arguments;return new Promise((function(t,a){var u=i.apply(n,e);function o(i){r(u,t,a,o,s,"next",i)}function s(i){r(u,t,a,o,s,"throw",i)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("cfb6"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{cross:"",ro:{jianzhishipinName:!1,jianzhishipinPhoto:!1,jianzhishipinVideo:!1,jianzhishipinTypes:!1,jianzhishipinClicknum:!1,jianzhishipinDelete:!1,jianzhishipinContent:!1,createTime:!1},ruleForm:{jianzhishipinName:"",jianzhishipinPhoto:"",jianzhishipinVideo:"",jianzhishipinTypes:"",jianzhishipinValue:"",jianzhishipinClicknum:"",jianzhishipinDelete:"",jianzhishipinContent:"",createTime:""},user:{},jianzhishipinTypesOptions:[],jianzhishipinTypesIndex:0}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(i){var n=this;return u(t.default.mark((function e(){var a,r,u;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={page:1,limit:100,dicCode:"jianzhishipin_types"},e.next=3,n.$api.page("dictionary",a);case 3:if(r=e.sent,n.jianzhishipinTypesOptions=r.data.list,!i.id){e.next=11;break}return n.ruleForm.id=i.id,e.next=9,n.$api.info("jianzhishipin",n.ruleForm.id);case 9:u=e.sent,n.ruleForm=u.data;case 11:i.jianzhishipinId&&(n.ruleForm.jianzhishipinId=i.jianzhishipinId);case 12:case"end":return e.stop()}}),e)})))()},methods:{jianzhishipinTypesChange:function(i){this.jianzhishipinTypesIndex=i.target.value,this.ruleForm.jianzhishipinValue=this.jianzhishipinTypesOptions[this.jianzhishipinTypesIndex].indexName,this.ruleForm.jianzhishipinTypes=this.jianzhishipinTypesOptions[this.jianzhishipinTypesIndex].codeIndex},jianzhishipinPhotoTap:function(){var i=this;this.$api.upload((function(n){i.ruleForm.jianzhishipinPhoto=i.$base.url+"upload/"+n.file,i.$forceUpdate(),i.$nextTick((function(){}))}))},jianzhishipinVideoTap:function(){var i=this;this.$api.upload((function(n){i.ruleForm.jianzhishipinVideo=i.$base.url+"upload/"+n.file,i.$forceUpdate(),i.$nextTick((function(){}))}))},createTimeConfirm:function(i){console.log(i),this.ruleForm.createTime=i.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.jianzhishipinName){e.next=3;break}return n.$utils.msg("视频名称不能为空"),e.abrupt("return");case 3:if(n.ruleForm.jianzhishipinPhoto){e.next=6;break}return n.$utils.msg("视频封面不能为空"),e.abrupt("return");case 6:if(n.ruleForm.jianzhishipinClicknum||n.$validate.isIntNumer(n.ruleForm.jianzhishipinClicknum)||!(n.ruleForm.jianzhishipinClicknum>0)){e.next=9;break}return n.$utils.msg("点击次数不能为空，不能小于0 格式为数字"),e.abrupt("return");case 9:if(!n.ruleForm.id){e.next=14;break}return e.next=12,n.$api.update("jianzhishipin",n.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,n.$api.save("jianzhishipin",n.ruleForm);case 16:i.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 18:case"end":return e.stop()}}),e)})))()},getDate:function(i){var n=new Date,e=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===i?e-=60:"end"===i&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(i){this.$refs[i].show()}}};n.default=s}).call(this,e("543d")["default"])}},[["dca2","common/runtime","common/vendor"]]]);