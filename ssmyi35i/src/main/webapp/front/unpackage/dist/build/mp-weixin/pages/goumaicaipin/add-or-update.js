(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaicaipin/add-or-update"],{"2fbe":function(n,e,i){"use strict";i.r(e);var r=i("4199"),a=i("ba14");for(var t in a)"default"!==t&&function(n){i.d(e,n,(function(){return a[n]}))}(t);i("a07f");var u,o=i("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"643f6989",null,!1,r["a"],u);e["default"]=c.exports},4199:function(n,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return t})),i.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"06a7"))}},a=function(){var n=this,e=n.$createElement;n._self._c},t=[]},5095:function(n,e,i){"use strict";(function(n){i("aa8d");r(i("66fd"));var e=r(i("2fbe"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},9366:function(n,e,i){},a07f:function(n,e,i){"use strict";var r=i("9366"),a=i.n(r);a.a},ba14:function(n,e,i){"use strict";i.r(e);var r=i("e00e"),a=i.n(r);for(var t in r)"default"!==t&&function(n){i.d(e,n,(function(){return r[n]}))}(t);e["default"]=a.a},e00e:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function t(n,e,i,r,a,t,u){try{var o=n[t](u),c=o.value}catch(s){return void i(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(r,a){var u=n.apply(e,i);function o(n){t(u,r,a,o,c,"next",n)}function c(n){t(u,r,a,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("06a7"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),caipinmingcheng:"",tupian:"",jiage:"",shuliang:"",zongjine:"",xiadanshijian:"",beizhu:"",shangjiazhanghao:"",shangjiaxingming:"",dianpuming:"",zhanghao:"",xingming:"",shouji:"",dizhi:"",ispay:"",userid:""},user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,tupian:!1,jiage:!1,shuliang:!1,zongjine:!1,xiadanshijian:!1,beizhu:!1,shangjiazhanghao:!1,shangjiaxingming:!1,dianpuming:!1,zhanghao:!1,xingming:!1,shouji:!1,dizhi:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{zongjine:{get:function(){return 1*this.ruleForm.jiage*this.ruleForm.shuliang}}},onLoad:function(e){var i=this;return u(r.default.mark((function a(){var t,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i.ruleForm.xiadanshijian=i.$utils.getCurDateTime(),t=n.getStorageSync("nowTable"),a.next=4,i.$api.session(t);case 4:if(u=a.sent,i.user=u.data,i.ruleForm.zhanghao=i.user.zhanghao,i.ro.zhanghao=!0,i.ruleForm.xingming=i.user.xingming,i.ro.xingming=!0,i.ruleForm.shouji=i.user.shouji,i.ro.shouji=!0,i.ruleForm.dizhi=i.user.dizhi,i.ro.dizhi=!0,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=22;break}return i.ruleForm.id=e.id,a.next=20,i.$api.info("goumaicaipin",i.ruleForm.id);case 20:u=a.sent,i.ruleForm=u.data;case 22:if(!e.cross){a.next=93;break}o=n.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 25:if((a.t1=a.t0()).done){a.next=93;break}if(c=a.t1.value,"dingdanbianhao"!=c){a.next=31;break}return i.ruleForm.dingdanbianhao=o[c],i.ro.dingdanbianhao=!0,a.abrupt("continue",25);case 31:if("caipinmingcheng"!=c){a.next=35;break}return i.ruleForm.caipinmingcheng=o[c],i.ro.caipinmingcheng=!0,a.abrupt("continue",25);case 35:if("tupian"!=c){a.next=39;break}return i.ruleForm.tupian=o[c],i.ro.tupian=!0,a.abrupt("continue",25);case 39:if("jiage"!=c){a.next=43;break}return i.ruleForm.jiage=o[c],i.ro.jiage=!0,a.abrupt("continue",25);case 43:if("shuliang"!=c){a.next=47;break}return i.ruleForm.shuliang=o[c],i.ro.shuliang=!0,a.abrupt("continue",25);case 47:if("zongjine"!=c){a.next=51;break}return i.ruleForm.zongjine=o[c],i.ro.zongjine=!0,a.abrupt("continue",25);case 51:if("xiadanshijian"!=c){a.next=55;break}return i.ruleForm.xiadanshijian=o[c],i.ro.xiadanshijian=!0,a.abrupt("continue",25);case 55:if("beizhu"!=c){a.next=59;break}return i.ruleForm.beizhu=o[c],i.ro.beizhu=!0,a.abrupt("continue",25);case 59:if("shangjiazhanghao"!=c){a.next=63;break}return i.ruleForm.shangjiazhanghao=o[c],i.ro.shangjiazhanghao=!0,a.abrupt("continue",25);case 63:if("shangjiaxingming"!=c){a.next=67;break}return i.ruleForm.shangjiaxingming=o[c],i.ro.shangjiaxingming=!0,a.abrupt("continue",25);case 67:if("dianpuming"!=c){a.next=71;break}return i.ruleForm.dianpuming=o[c],i.ro.dianpuming=!0,a.abrupt("continue",25);case 71:if("zhanghao"!=c){a.next=75;break}return i.ruleForm.zhanghao=o[c],i.ro.zhanghao=!0,a.abrupt("continue",25);case 75:if("xingming"!=c){a.next=79;break}return i.ruleForm.xingming=o[c],i.ro.xingming=!0,a.abrupt("continue",25);case 79:if("shouji"!=c){a.next=83;break}return i.ruleForm.shouji=o[c],i.ro.shouji=!0,a.abrupt("continue",25);case 83:if("dizhi"!=c){a.next=87;break}return i.ruleForm.dizhi=o[c],i.ro.dizhi=!0,a.abrupt("continue",25);case 87:if("userid"!=c){a.next=91;break}return i.ruleForm.userid=o[c],i.ro.userid=!0,a.abrupt("continue",25);case 91:a.next=25;break;case 93:i.styleChange();case 94:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xiadanshijianConfirm:function(n){console.log(n),this.ruleForm.xiadanshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.zongjine=n.zongjine,!n.ruleForm.jiage||n.$validate.isIntNumer(n.ruleForm.jiage)){e.next=4;break}return n.$utils.msg("价格应输入整数"),e.abrupt("return");case 4:if(!n.ruleForm.shuliang||n.$validate.isIntNumer(n.ruleForm.shuliang)){e.next=7;break}return n.$utils.msg("数量应输入整数"),e.abrupt("return");case 7:if(!n.ruleForm.zongjine||n.$validate.isIntNumer(n.ruleForm.zongjine)){e.next=10;break}return n.$utils.msg("总金额应输入整数"),e.abrupt("return");case 10:if(!n.ruleForm.id){e.next=15;break}return e.next=13,n.$api.update("goumaicaipin",n.ruleForm);case 13:e.next=17;break;case 15:return e.next=17,n.$api.add("goumaicaipin",n.ruleForm);case 17:n.$utils.msgBack("提交成功");case 18:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(i,"-").concat(r,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,i("543d")["default"])}},[["5095","common/runtime","common/vendor"]]]);