(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinpingjia/add-or-update"],{"3d26":function(n,e,t){},"684b":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,u){try{var o=n[r](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var u=n.apply(e,t);function o(n){r(u,i,a,o,s,"next",n)}function s(n){r(u,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("a588"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",caipinmingcheng:"",caipinfenlei:"",kouwei:"",baozhuang:"",pingjianeirong:"",tianjiatupian:"",yonghuming:"",sfsh:"",shhf:"",userid:""},kouweiOptions:[],kouweiIndex:0,baozhuangOptions:[],baozhuangIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,caipinfenlei:!1,kouwei:!1,baozhuang:!1,pingjianeirong:!1,tianjiatupian:!1,yonghuming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var a,r,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.kouweiOptions="1星,2星,3星,4星,5星".split(","),this.baozhuangOptions="1星,2星,3星,4星,5星".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid),!t.id){e.next=15;break}return this.ruleForm.id=t.id,e.next=13,this.$api.info("caipinpingjia",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(!t.cross){e.next=58;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=58;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=24;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",18);case 24:if("caipinmingcheng"!=o){e.next=28;break}return this.ruleForm.caipinmingcheng=u[o],this.ro.caipinmingcheng=!0,e.abrupt("continue",18);case 28:if("caipinfenlei"!=o){e.next=32;break}return this.ruleForm.caipinfenlei=u[o],this.ro.caipinfenlei=!0,e.abrupt("continue",18);case 32:if("kouwei"!=o){e.next=36;break}return this.ruleForm.kouwei=u[o],this.ro.kouwei=!0,e.abrupt("continue",18);case 36:if("baozhuang"!=o){e.next=40;break}return this.ruleForm.baozhuang=u[o],this.ro.baozhuang=!0,e.abrupt("continue",18);case 40:if("pingjianeirong"!=o){e.next=44;break}return this.ruleForm.pingjianeirong=u[o],this.ro.pingjianeirong=!0,e.abrupt("continue",18);case 44:if("tianjiatupian"!=o){e.next=48;break}return this.ruleForm.tianjiatupian=u[o],this.ro.tianjiatupian=!0,e.abrupt("continue",18);case 48:if("yonghuming"!=o){e.next=52;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,e.abrupt("continue",18);case 52:if("userid"!=o){e.next=56;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",18);case 56:e.next=18;break;case 58:this.styleChange();case 59:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},kouweiChange:function(n){this.kouweiIndex=n.target.value,this.ruleForm.kouwei=this.kouweiOptions[this.kouweiIndex]},baozhuangChange:function(n){this.baozhuangIndex=n.target.value,this.ruleForm.baozhuang=this.baozhuangOptions[this.baozhuangIndex]},tianjiatupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tianjiatupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("caipinpingjia",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("caipinpingjia",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},"9c93":function(n,e,t){"use strict";var i=t("3d26"),a=t.n(i);a.a},ae3e:function(n,e,t){"use strict";(function(n){t("c89d"),t("921b");i(t("66fd"));var e=i(t("fc88"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},b5c7f:function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},be7e:function(n,e,t){"use strict";t.r(e);var i=t("684b"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},fc88:function(n,e,t){"use strict";t.r(e);var i=t("b5c7f"),a=t("be7e");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("9c93");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"75a8a68e",null,!1,i["a"],u);e["default"]=s.exports}},[["ae3e","common/runtime","common/vendor"]]]);