(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"RU/L":function(e,t,a){a("Rqdy");var n=a("WEpk").Object;e.exports=function(e,t,a){return n.defineProperty(e,t,a)}},Rqdy:function(e,t,a){var n=a("Y7ZC");n(n.S+n.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},RrcA:function(e,t,a){"use strict";var n=a("m63B");a.n(n).a},SEkw:function(e,t,a){e.exports={default:a("RU/L"),__esModule:!0}},UOPh:function(e,t,a){"use strict";a.r(t);var n,l=a("YEIV"),r=a.n(l),o=a("TsPW"),i={name:"user-manage",data:function(){return{loading:!1,searchForm:{name:"",serialNo:"",type:"",isDelete:""},tableData:null,param:{content:"",pageNo:1,pageSize:15,isDelete:""},totalNum:0}},methods:(n={indexMethod:function(e){return(this.param.pageNo-1)*this.param.pageSize+e+1},handleSizeChange:function(e){var t=this;t.param.pageSize=e,Object(o.sd)(t.param).then(function(e){var a=e.data.items;a&&a.length>0?(t.tableData=a,t.totalNum=parseInt(e.data.totalNum)):(t.tableData=[],t.totalNum=0)})},handleCurrentChange:function(){},handleClick:function(e,t,a){var n=this,l=this;if("delete"==a)this.$confirm("真的停用该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.loading=!0;var e={id:t.id,isDelete:0};Object(o.Je)(e).then(function(e){n.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){l.loading=!1,l.param.pageNo=1,l.getAjaxList()}})})}).catch(function(){n.$message({type:"info",message:"已取消删除"})});else if("start"==a){var r={id:t.id,isDelete:1};Object(o.Je)(r).then(function(e){n.$message({type:"success",message:"启用成功",duration:1e3,onClose:function(){l.loading=!1,l.param.pageNo=1,l.getAjaxList()}})})}else"add"==a?(sessionStorage.setItem("id",""),this.$router.push({path:"/editAssets"})):"edit"==a&&(sessionStorage.setItem("id",t.id),this.$router.push({path:"/editAssets"}))},onSearch:function(){this.param.pageNo=1,this.param.name=this.searchForm.name,this.param.serialNo=this.searchForm.serialNo,this.param.type=this.searchForm.type,this.getAjaxList()}},r()(n,"handleCurrentChange",function(e){this.param.pageNo=e,this.getAjaxList()}),r()(n,"getAjaxList",function(){var e=this;this.param.isDelete=this.searchForm.isDelete,Object(o.sd)(e.param).then(function(t){var a=t.data.items;a&&a.length>0?(e.tableData=a,e.totalNum=parseInt(t.data.totalNum)):(e.tableData=[],e.totalNum=0)})}),n),beforeMount:function(){sessionStorage.removeItem("userId"),this.getAjaxList()}},s=(a("RrcA"),a("KHd+")),c=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("固定资产及易消耗品管理")])],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contentBody",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(241, 242, 247, 0.5)"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm,"label-width":"70px","label-position":"left\n"}},[a("el-form-item",{staticStyle:{"font-family":"MicrosoftYaHeiLight","font-weight":"bold",color:"rgba(102,102,102,1)"},attrs:{label:"资产编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"资产编号",clearable:""},model:{value:e.searchForm.serialNo,callback:function(t){e.$set(e.searchForm,"serialNo",t)},expression:"searchForm.serialNo"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"font-family":"MicrosoftYaHeiLight","font-weight":"bold",color:"rgba(102,102,102,1)"},attrs:{label:"资产名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"资产名称",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[a("el-option",{attrs:{label:"全部",value:""}},[e._v("全部")]),e._v(" "),a("el-option",{attrs:{label:"固定资产",value:"1"}},[e._v("固定资产")]),e._v(" "),a("el-option",{attrs:{label:"易耗品",value:"2"}},[e._v("易耗品")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"启用状态",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.isDelete,callback:function(t){e.$set(e.searchForm,"isDelete",t)},expression:"searchForm.isDelete"}},[a("el-option",{attrs:{label:"全部",value:""}},[e._v("全部")]),e._v(" "),a("el-option",{attrs:{label:"停用",value:"0"}},[e._v("停用")]),e._v(" "),a("el-option",{attrs:{label:"启用",value:"1"}},[e._v("启用")])],1)],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch(t)}}}),e._v(" "),a("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(t){return e.handleClick("","","add")}}})],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"资产编号",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"资产名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"model",label:"型号",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"category",label:"资产类别",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"safeStock",label:"安全库存",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"isDeleteName",label:"是否启用",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:{active:"0"==t.row.isDelete}},[e._v(e._s(t.row.isDeleteName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"left","header-align":"center",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.handleClick(t.$index,t.row,"edit")}}},[e._v("编辑")]),e._v(" "),1==t.row.isDelete?a("el-button",{staticStyle:{"background-color":"#fe8d29",color:"#fff",border:"none"},attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(a){return e.handleClick(t.$index,t.row,"delete")}}},[e._v("停用")]):a("el-button",{staticStyle:{"background-color":"#fe8d29",color:"#fff",border:"none"},attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(a){return e.handleClick(t.$index,t.row,"start")}}},[e._v("启用")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[15,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,"4b89dfa0",null);c.options.__file="assetsManage.vue";t.default=c.exports},YEIV:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a("SEkw"));t.default=function(e,t,a){return t in e?(0,n.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},m63B:function(e,t,a){}}]);