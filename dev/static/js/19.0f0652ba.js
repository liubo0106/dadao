(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0391":function(e,t,r){"use strict";var a=r("u4+e");r.n(a).a},"RU/L":function(e,t,r){r("Rqdy");var a=r("WEpk").Object;e.exports=function(e,t,r){return a.defineProperty(e,t,r)}},Rqdy:function(e,t,r){var a=r("Y7ZC");a(a.S+a.F*!r("jmDH"),"Object",{defineProperty:r("2faE").f})},SEkw:function(e,t,r){e.exports={default:r("RU/L"),__esModule:!0}},YEIV:function(e,t,r){"use strict";t.__esModule=!0;var a=function(e){return e&&e.__esModule?e:{default:e}}(r("SEkw"));t.default=function(e,t,r){return t in e?(0,a.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"u4+e":function(e,t,r){},uRmX:function(e,t,r){"use strict";r.r(t);var a=r("YEIV"),i=r.n(a),s=r("TsPW"),o={name:"edit-user-manage",data:function(){var e;return{pathIds:sessionStorage.getItem("pathIds"),oldName:"",nextDeptData:[],postList:[],dataDicList:[],standardDataDicList:[],props:{checkStrictly:!0,value:"id",label:"name",children:"children"},deptList:[],deptId:sessionStorage.getItem("deptId"),saveLoading:!1,userId:"",param:{type:"规格"},standardParam:{type:"单位"},editForm:(e={name:"",spec:"",serialNo:"",checkedRole:[],flag:"staff",post:"",deptArray:[],isManager:"",rawPrice:"",rawYield:"",yieldPrice:"",standard:"",netYield:1},i()(e,"rawYield",1),i()(e,"costPrice",""),i()(e,"number",""),i()(e,"stock",""),i()(e,"safeStock",""),i()(e,"dataDicListId",""),i()(e,"specPrefNum",""),i()(e,"specSufStandard",""),i()(e,"isLook","0"),i()(e,"price","0"),e),checkAll:!1,roleIdList:[],roleList:null,isIndeterminate:!0,rules:{name:[{required:!0,message:"请输入原料名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 100 个字",trigger:"blur"}],serialNo:[{required:!0,message:"请输入原料编号",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 100 个字",trigger:"blur"}],standard:[{required:!0,message:"请选择单位",trigger:"blur"}],deptArray:[{type:"array",required:!0,message:"请选择原料分类",trigger:"change"}],specPrefNum:[{required:!0,message:"请输入原料规格",trigger:"blur"}],specSufStandard:[{required:!0,message:"请选择原料规格单位",trigger:"change"}]},headers:{sessionId:sessionStorage.getItem("sessionId")}}},methods:{getTreeAjaxList:function(){var e=this;Object(s.Jd)({}).then(function(t){var r=t.data;r&&(r&&r.length>0?e.deptList=r:e.deptList=[])})},getAjaxUserInfo:function(){var e=this,t=this;Object(s.dc)({id:this.userId}).then(function(r){var a=r.data;if(a){t.oldName=a.username,t.editForm.name=a.name,t.editForm.spec=a.spec,t.editForm.serialNo=a.serialNo,t.editForm.rawPrice=a.rawPrice,t.editForm.rawYield=a.rawYield,t.editForm.yieldPrice=a.yieldPrice,t.editForm.standard=a.standard,t.editForm.netYield=a.netYield,t.editForm.costPrice=a.costPrice,t.editForm.number=a.number,t.editForm.stock=a.stock,t.editForm.safeStock=a.safeStock,t.editForm.isLook=a.isLook+"",t.editForm.price=a.price,t.editForm.isWarning=a.isWarning,t.editForm.specPrefNum=a.specPrefNum,t.editForm.specSufStandard=a.specSufStandard;var i=a.strArray;i&&(t.editForm.deptArray=i.length>0?i.split(","):[]),a.flag&&(t.editForm.flag=a.flag)}else e.$message({message:"请求异常",type:"error"})})},getAjaxAllRole:function(){var e=this,t=this;Object(s.b)().then(function(r){var a=r.data;a&&a.length>0?(t.roleList=a,t.roleList.forEach(function(e){t.roleIdList.push(e.id)})):e.$message({message:"请求异常",type:"error"})})},handleCheckAllChange:function(e){this.editForm.checkedRole=e?this.roleIdList:[],this.isIndeterminate=!1},goBack:function(){this.$router.push({path:"/commodityManage"})},submitForm:function(e){var t=this,r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.saveLoading=!0;var a=r.editForm.deptArray,o=i()({categoryId:a.length>0?a[a.length-1].toString():"",name:r.editForm.name,spec:r.editForm.spec,serialNo:r.editForm.serialNo,id:r.userId,strArray:a.length>0?a.toString():"",rawPrice:r.editForm.rawPrice,rawYield:r.editForm.rawYield,yieldPrice:r.editForm.yieldPrice,standard:r.editForm.standard,netYield:r.editForm.netYield,costPrice:r.editForm.costPrice,number:r.editForm.number,stock:r.editForm.stock,safeStock:r.editForm.safeStock,isLook:r.editForm.isLook,price:r.editForm.price,isWarning:r.editForm.isWarning,specPrefNum:r.editForm.specPrefNum,specSufStandard:r.editForm.specSufStandard},"spec",""+r.editForm.specPrefNum+r.editForm.standard+"/"+r.editForm.specSufStandard);Object(s.cd)(o).then(function(e){if(400==e.status)return t.$message({type:"error",message:e.msg,duration:1e3}),r.saveLoading=!1,!1;t.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){r.goBack(),r.saveLoading=!1}})})})},getAjaxProductDataDic:function(){var e=this;Object(s.ze)(e.param).then(function(t){if(200==t.status){var r=t.data;r&&r.length>0?e.dataDicList=r:e.dataDicList=[]}})},getAjaxStandardDataDic:function(){var e=this;Object(s.ze)(e.standardParam).then(function(t){if(200==t.status){var r=t.data;r&&r.length>0?e.standardDataDicList=r:e.standardDataDicList=[]}})}},beforeMount:function(){this.getTreeAjaxList();var e=sessionStorage.getItem("userId");this.userId=e,e?this.getAjaxUserInfo():this.pathIds&&this.pathIds.length>0&&(this.editForm.deptArray=this.pathIds.length>0?this.pathIds.split(","):[]),this.getAjaxAllRole(),this.getAjaxProductDataDic(),this.getAjaxStandardDataDic()}},d=(r("0391"),r("KHd+")),n=Object(d.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),r("el-breadcrumb-item",{attrs:{to:{path:"/commodityManage"}}},[e._v("原料管理")]),e._v(" "),r("el-breadcrumb-item",[e._v(e._s(""==e.userId?"新增":"编辑"))])],1),e._v(" "),r("div",{staticClass:"contentBody"},[r("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"120px"}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"原料编号",prop:"serialNo"}},[r("el-input",{attrs:{placeholder:"请输入",maxlength:50},model:{value:e.editForm.serialNo,callback:function(t){e.$set(e.editForm,"serialNo",t)},expression:"editForm.serialNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"安全库存",prop:"safeStock"}},[r("el-input-number",{attrs:{size:"medium",precision:2,min:0,max:999999999,step:1},model:{value:e.editForm.safeStock,callback:function(t){e.$set(e.editForm,"safeStock",t)},expression:"editForm.safeStock"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"原料名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入",maxlength:50},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"净料出成率",prop:"netYield"}},[r("el-input-number",{attrs:{size:"medium",min:.1,max:1,step:.1},model:{value:e.editForm.netYield,callback:function(t){e.$set(e.editForm,"netYield",t)},expression:"editForm.netYield"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"原料分类",prop:"deptArray"}},[[r("el-cascader",{staticClass:"self-cascader-width",staticStyle:{width:"100%"},attrs:{filterable:"",clearable:!0,props:e.props,placeholder:"请选择","change-on-select":"",options:e.deptList},model:{value:e.editForm.deptArray,callback:function(t){e.$set(e.editForm,"deptArray",t)},expression:"editForm.deptArray"}})]],2)],1),e._v(" "),r("el-col",{attrs:{span:8}}),e._v(" "),r("el-col",{attrs:{span:24}})],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"规格含量",prop:"specPrefNum"}},[r("el-input",{model:{value:e.editForm.specPrefNum,callback:function(t){e.$set(e.editForm,"specPrefNum",t)},expression:"editForm.specPrefNum"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"基础单位",prop:"standard"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.editForm.standard,callback:function(t){e.$set(e.editForm,"standard",t)},expression:"editForm.standard"}},e._l(e.standardDataDicList,function(e){return r("el-option",{attrs:{label:e.name,value:e.name}})}),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"规格单位",prop:"specSufStandard"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.editForm.specSufStandard,callback:function(t){e.$set(e.editForm,"specSufStandard",t)},expression:"editForm.specSufStandard"}},e._l(e.standardDataDicList,function(e){return r("el-option",{attrs:{label:e.name,value:e.name}})}),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}}),e._v(" "),r("el-col",{attrs:{span:8}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticStyle:{"background-color":"#35B178","border-color":"#35B178"},attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.submitForm("editForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("返回")])],1)],1)],1)],1)},[],!1,null,"1573f648",null);n.options.__file="editCommodity.vue";t.default=n.exports}}]);