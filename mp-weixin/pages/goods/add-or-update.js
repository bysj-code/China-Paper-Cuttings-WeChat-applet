(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/add-or-update"],{"22b0":function(e,o,t){"use strict";t.d(o,"b",(function(){return r})),t.d(o,"c",(function(){return s})),t.d(o,"a",(function(){return n}));var n={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"cfb6"))}},r=function(){var e=this,o=e.$createElement;e._self._c},s=[]},"2acc":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,o,t,n,r,s,a){try{var u=e[s](a),i=u.value}catch(c){return void t(c)}u.done?o(i):Promise.resolve(i).then(n,r)}function a(e){return function(){var o=this,t=arguments;return new Promise((function(n,r){var a=e.apply(o,t);function u(e){s(a,n,r,u,i,"next",e)}function i(e){s(a,n,r,u,i,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("cfb6"))}.bind(null,t)).catch(t.oe)},i={data:function(){return{cross:"",ro:{goodsName:!1,goodsPhoto:!1,goodsTypes:!1,goodsKucunNumber:!1,goodsOldMoney:!1,goodsNewMoney:!1,goodsClicknum:!1,shangxiaTypes:!1,goodsDelete:!1,goodsContent:!1,createTime:!1},ruleForm:{goodsName:"",goodsPhoto:"",goodsTypes:"",goodsValue:"",goodsKucunNumber:"",goodsOldMoney:"",goodsNewMoney:"",goodsClicknum:"",shangxiaTypes:"",shangxiaValue:"",goodsDelete:"",goodsContent:"",createTime:""},user:{},goodsTypesOptions:[],goodsTypesIndex:0,shangxiaTypesOptions:[],shangxiaTypesIndex:0}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var o=this;return a(n.default.mark((function t(){var r,s,a,u,i;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={page:1,limit:100,dicCode:"goods_types"},t.next=3,o.$api.page("dictionary",r);case 3:return s=t.sent,o.goodsTypesOptions=s.data.list,a={page:1,limit:100,dicCode:"shangxia_types"},t.next=8,o.$api.page("dictionary",a);case 8:if(u=t.sent,o.shangxiaTypesOptions=u.data.list,!e.id){t.next=16;break}return o.ruleForm.id=e.id,t.next=14,o.$api.info("goods",o.ruleForm.id);case 14:i=t.sent,o.ruleForm=i.data;case 16:e.goodsId&&(o.ruleForm.goodsId=e.goodsId);case 17:case"end":return t.stop()}}),t)})))()},methods:{goodsTypesChange:function(e){this.goodsTypesIndex=e.target.value,this.ruleForm.goodsValue=this.goodsTypesOptions[this.goodsTypesIndex].indexName,this.ruleForm.goodsTypes=this.goodsTypesOptions[this.goodsTypesIndex].codeIndex},shangxiaTypesChange:function(e){this.shangxiaTypesIndex=e.target.value,this.ruleForm.shangxiaValue=this.shangxiaTypesOptions[this.shangxiaTypesIndex].indexName,this.ruleForm.shangxiaTypes=this.shangxiaTypesOptions[this.shangxiaTypesIndex].codeIndex},goodsPhotoTap:function(){var e=this;this.$api.upload((function(o){e.ruleForm.goodsPhoto=e.$base.url+"upload/"+o.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var o=this;return a(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o.ruleForm.goodsName){t.next=3;break}return o.$utils.msg("商品名称不能为空"),t.abrupt("return");case 3:if(o.ruleForm.goodsPhoto){t.next=6;break}return o.$utils.msg("商品照片不能为空"),t.abrupt("return");case 6:if(o.ruleForm.goodsKucunNumber||o.$validate.isIntNumer(o.ruleForm.goodsKucunNumber)||!(o.ruleForm.goodsKucunNumber>0)){t.next=9;break}return o.$utils.msg("商品库存不能为空，不能小于0 格式为数字"),t.abrupt("return");case 9:if(o.ruleForm.goodsClicknum||o.$validate.isIntNumer(o.ruleForm.goodsClicknum)||!(o.ruleForm.goodsClicknum>0)){t.next=12;break}return o.$utils.msg("点击次数不能为空，不能小于0 格式为数字"),t.abrupt("return");case 12:if(!o.ruleForm.id){t.next=17;break}return t.next=15,o.$api.update("goods",o.ruleForm);case 15:t.next=19;break;case 17:return t.next=19,o.$api.save("goods",o.ruleForm);case 19:e.setStorageSync("pingluenStateState",!0),o.$utils.msgBack("提交成功");case 21:case"end":return t.stop()}}),t)})))()},getDate:function(e){var o=new Date,t=o.getFullYear(),n=o.getMonth()+1,r=o.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};o.default=i}).call(this,t("543d")["default"])},"3e55":function(e,o,t){"use strict";t.r(o);var n=t("2acc"),r=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(o,e,(function(){return n[e]}))}(s);o["default"]=r.a},5340:function(e,o,t){"use strict";(function(e){t("0f28");n(t("66fd"));var o=n(t("ef1b"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t("543d")["createPage"])},"93ca":function(e,o,t){},e669:function(e,o,t){"use strict";var n=t("93ca"),r=t.n(n);r.a},ef1b:function(e,o,t){"use strict";t.r(o);var n=t("22b0"),r=t("3e55");for(var s in r)"default"!==s&&function(e){t.d(o,e,(function(){return r[e]}))}(s);t("e669");var a,u=t("f0c5"),i=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"4b5b984e",null,!1,n["a"],a);o["default"]=i.exports}},[["5340","common/runtime","common/vendor"]]]);