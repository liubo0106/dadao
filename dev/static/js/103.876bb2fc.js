(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"2oeP":function(e,t,i){"use strict";var a=i("bf1F");i.n(a).a},bf1F:function(e,t,i){},"knh+":function(e,t,i){"use strict";i.r(t);var a=i("TsPW"),o={data:function(){return{loading:!1,doType:"add",saveLoading:!1,dialogTitle:"新增",tableData:[],param:{pageSize:15,pageNo:1,integral:""},editForm:{id:"",type:"",integral:"",amount:"",minUseAmount:"",maxUseAmount:"",edit:!1},searchForm:{money:""},dialogFormVisible:!1,formLabelWidth:"160px"}},methods:{handleClick:function(e,t,i){var o=this,l=this;"delete"==i?l.$confirm("真的删除该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.loading=!0;var e={id:t.id};Object(a.E)(e).then(function(e){o.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){l.loading=!1,l.dialogFormVisible=!1,l.getAjaxList()}})})}).catch(function(){l.$message({type:"info",message:"已取消删除"})}):"add"==i?this.showEdit("add",t):"edit"==i&&this.showEdit("edit",t)},showEdit:function(e,t){"add"==e?(this.editForm.type="",this.editForm.edit=!1,this.editForm.integral="",this.editForm.amount="",this.editForm.minUseAmount="",this.editForm.maxUseAmount="",this.editForm.id=""):"edit"==e&&(this.doType="edit",this.dialogTitle="编辑",this.editForm.id=t.id,2==t.type?this.editForm.type="积分抵现":this.editForm.type="消费积分",this.editForm.edit=!0,this.editForm.integral=t.integral,this.editForm.amount=t.amount,this.editForm.minUseAmount=t.minUseAmount,this.editForm.maxUseAmount=t.maxUseAmount),this.dialogFormVisible=!0},dialogFormAdd:function(e){var t=this,i=this;this.$refs[e].validate(function(e){if(!e)return!1;i.saveLoading=!0,"积分抵现"==t.editForm.type&&(t.editForm.type=2),"消费积分"==t.editForm.type&&(t.editForm.type=1),Object(a.wb)(t.editForm).then(function(e){if(400==e.status)return t.$message({type:"error",message:e.msg,duration:1e3}),i.saveLoading=!1,!1;t.$message({type:"success",message:"操作成功!",duration:1e3,onClose:function(){i.saveLoading=!1,i.dialogFormVisible=!1,i.getAjaxList()}})})})},onSearch:function(){this.getAjaxList()},getAjaxList:function(){var e=this;Object(a.vb)(e.param).then(function(t){var i=t.data.items;200==t.status?i&&i.length>0?e.tableData=i:e.tableData=[]:e.$message({message:"请求异常",type:"error"})})}},beforeMount:function(){this.getAjaxList()}},l=(i("2oeP"),i("KHd+")),n=Object(l.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("积分规则管理")])],1),e._v(" "),i("div",{staticClass:"contentBody"},[i("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:e.param}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{"label-width":"80px",label:"积分",prop:"money"}},[i("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"积分",clearable:""},model:{value:e.param.integral,callback:function(t){e.$set(e.param,"integral",t)},expression:"param.integral"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:4}},[i("el-form-item",{attrs:{"label-width":"0"}},[i("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch(t)}}}),e._v(" "),i("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(t){return e.handleClick("","","add")}}})],1)],1)],1)],1)],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contentBody",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(241, 242, 247, 0.5)"}},[i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableData,border:"","row-key":"id"}},[i("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"行号",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"integral",label:"积分"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"amount",label:"金额"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"minUseAmount",label:"积分使用区间最小金额"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"maxUseAmount",label:"积分使用区间最大金额"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"type",label:"规则类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?i("span",[e._v("消费积分")]):e._e(),e._v(" "),2==t.row.type?i("span",[e._v("积分抵现")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"createTime",label:"创建时间"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","header-align":"center",prop:"createUser",label:"操作员"}}),e._v(" "),i("el-table-column",{attrs:{align:"left","header-align":"center",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-edit",size:"mini"},on:{click:function(i){return e.handleClick(t.$index,t.row,"edit")}}},[e._v("编辑")]),e._v(" "),i("el-button",{staticStyle:{"background-color":"#fe8d29",color:"#fff",border:"none"},attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(i){return e.handleClick(t.$index,t.row,"delete")}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.editForm}},[i("el-form-item",{attrs:{label:"选择规则","label-width":e.formLabelWidth}},[i("el-select",{attrs:{disabled:e.editForm.edit},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}},[i("el-option",{attrs:{label:"消费积分",value:1}}),e._v(" "),i("el-option",{attrs:{label:"积分抵现",value:2}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"积分",prop:"integral","label-width":e.formLabelWidth}},[i("el-input",{staticStyle:{width:"217px"},model:{value:e.editForm.integral,callback:function(t){e.$set(e.editForm,"integral",t)},expression:"editForm.integral"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"金额",prop:"give","label-width":e.formLabelWidth}},[i("el-input",{staticStyle:{width:"217px"},model:{value:e.editForm.amount,callback:function(t){e.$set(e.editForm,"amount",t)},expression:"editForm.amount"}})],1),e._v(" "),2==e.editForm.type||"积分抵现"==e.editForm.type?i("el-form-item",{attrs:{label:"积分使用区间最小金额",prop:"discount","label-width":e.formLabelWidth}},[i("el-input",{staticStyle:{width:"217px"},model:{value:e.editForm.minUseAmount,callback:function(t){e.$set(e.editForm,"minUseAmount",t)},expression:"editForm.minUseAmount"}})],1):e._e(),e._v(" "),2==e.editForm.type||"积分抵现"==e.editForm.type?i("el-form-item",{attrs:{label:"积分使用区间最大金额",prop:"discount","label-width":e.formLabelWidth}},[i("el-input",{staticStyle:{width:"217px"},model:{value:e.editForm.maxUseAmount,callback:function(t){e.$set(e.editForm,"maxUseAmount",t)},expression:"editForm.maxUseAmount"}})],1):e._e()],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{staticStyle:{"background-color":"#35B178","border-color":"#35B178"},attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.dialogFormAdd("editForm")}}},[e._v("确 定")])],1)],1)],1)},[],!1,null,"8b73c920",null);n.options.__file="integralrule.vue";t.default=n.exports}}]);