(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"249x":function(e,t,a){"use strict";a.r(t);var r=a("TsPW"),s={name:"edit-user-manage",data:function(){return{id:"",saveLoading:!1,editForm:{name:"",serialNo:"",type:"1",model:"",category:"",remark:"",standard:"",safeStock:0},rules:{serialNo:[{required:!0,message:"请输入资产编号",trigger:"blur"}],name:[{required:!0,message:"请输入资产名称",trigger:"blur"}],model:[{required:!0,message:"请输入型号",trigger:"blur"}],category:[{required:!0,message:"请选择资产类别",trigger:"blur"}],type:[{required:!0,message:"请选择资产类型",trigger:"blur"}],standard:[{required:!0,message:"请选择单位",trigger:"change"}]},standardParam:{type:"单位"},assetsParam:{type:"资产类别"},assetsList:[],standardDataDicList:[]}},methods:{requestAssetsInfo:function(){var e=this,t=this;Object(r.c)({id:this.id}).then(function(a){if(200==a.status){var r=a.data;r&&(t.editForm.name=r.name,t.editForm.model=r.model,t.editForm.category=r.category,t.editForm.remark=r.remark,t.editForm.serialNo=r.serialNo,t.editForm.safeStock=r.safeStock,t.editForm.type=r.type+"",t.editForm.standard=r.standard)}else e.$message({message:"请求异常",type:"error"})})},goBack:function(){this.$router.push({path:"/assetsManage"})},submitForm:function(e){var t=this,a=this;this.$refs[e].validate(function(e){if(!e)return!1;a.saveLoading=!0;var s={name:a.editForm.name,model:a.editForm.model,category:a.editForm.category,remark:a.editForm.remark,serialNo:a.editForm.serialNo,safeStock:a.editForm.safeStock,type:a.editForm.type,standard:a.editForm.standard,id:a.id};Object(r.Cc)(s).then(function(e){t.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){a.goBack(),a.saveLoading=!1}})})})},getAjaxStandardDataDic:function(){var e=this;Object(r.ze)(e.standardParam).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.standardDataDicList=a:e.standardDataDicList=[]}}),Object(r.ze)(e.assetsParam).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.assetsList=a:e.assetsList=[]}})}},beforeMount:function(){var e=sessionStorage.getItem("id");e&&(this.id=e,this.requestAssetsInfo()),this.getAjaxStandardDataDic()}},o=(a("zKig"),a("KHd+")),i=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/assetsManage"}}},[e._v("固定资产及易消耗品管理")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(""==e.id?"新增":"编辑"))])],1),e._v(" "),a("div",{staticClass:"contentBody"},[a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"资产编号",prop:"serialNo"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:25},model:{value:e.editForm.serialNo,callback:function(t){e.$set(e.editForm,"serialNo",t)},expression:"editForm.serialNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:25},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"资产类型",prop:"type"}},[a("el-select",{staticStyle:{width:"218px"},attrs:{placeholder:"请选择"},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}},[a("el-option",{attrs:{label:"固定资产",value:"1"}},[e._v("固定资产")]),e._v(" "),a("el-option",{attrs:{label:"易耗品",value:"2"}},[e._v("易耗品")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"资产类別",prop:"category"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.category,callback:function(t){e.$set(e.editForm,"category",t)},expression:"editForm.category"}},e._l(e.assetsList,function(e){return a("el-option",{attrs:{label:e.name,value:e.name}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"单位",prop:"standard"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.standard,callback:function(t){e.$set(e.editForm,"standard",t)},expression:"editForm.standard"}},e._l(e.standardDataDicList,function(e){return a("el-option",{attrs:{label:e.name,value:e.name}})}),1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"型号",prop:"model"}},[a("el-input",{staticStyle:{width:"218px"},attrs:{placeholder:"请输入",maxlength:15},model:{value:e.editForm.model,callback:function(t){e.$set(e.editForm,"model",t)},expression:"editForm.model"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"安全库存",prop:"safeStock"}},[a("el-input-number",{staticStyle:{width:"218px"},attrs:{size:"medium",precision:2,min:0,max:999999999,step:1},model:{value:e.editForm.safeStock,callback:function(t){e.$set(e.editForm,"safeStock",t)},expression:"editForm.safeStock"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入",maxlength:50},model:{value:e.editForm.remark,callback:function(t){e.$set(e.editForm,"remark",t)},expression:"editForm.remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.submitForm("editForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("返回")])],1)],1)],1)],1)},[],!1,null,"401ac974",null);i.options.__file="editAssets.vue";t.default=i.exports},meNH:function(e,t,a){},zKig:function(e,t,a){"use strict";var r=a("meNH");a.n(r).a}}]);