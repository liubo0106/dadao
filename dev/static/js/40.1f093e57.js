(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0xHn":function(e,t,a){"use strict";a.r(t);var n=a("TsPW"),i={name:"user-manage",data:function(){return{loading:!1,tableLoading:!1,searchForm:{username:""},tableData:null,param:{pageNo:1,pageSize:15,customerId:sessionStorage.getItem("customerId")},totalNum:0,multipleSelection:[]}},methods:{handleSelectionChange:function(e){this.multipleSelection=e},indexMethod:function(e){return(this.param.pageNo-1)*this.param.pageSize+e+1},handleSizeChange:function(e){var t=this;t.param.pageSize=e,Object(n.yd)(t.param).then(function(e){t.tableLoading=!1;var a=e.data.items;a&&a.length>0?(t.tableData=a,t.totalNum=parseInt(e.data.totalNum)):(t.tableData=[],t.totalNum=0)})},handleClick:function(e,t,a){var i=this,o=this;if("delete"==a)this.$confirm("真的删除该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.loading=!0;var e={id:t.id};Object(n.x)(e).then(function(e){i.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){o.loading=!1,o.param.pageNo=1,o.getAjaxList()}})})}).catch(function(){i.$message({type:"info",message:"已取消删除"})});else if("add"==a)sessionStorage.setItem("id",""),this.$router.push({path:"/editStoreDesk"});else if("edit"==a)sessionStorage.setItem("id",t.id),this.$router.push({path:"/editStoreDesk"});else if("qrcode"==a)Object(n.ib)({ids:t.id}).then(function(e){200==e.status?i.$message({type:"success",message:"生成成功!",duration:300,onClose:function(){o.param.pageNo=1,o.getAjaxList()}}):i.$message({type:"error",message:"生成失败"})});else if("allQRcode"==a)if(this.multipleSelection&&this.multipleSelection.length>0){var l=[];this.multipleSelection.forEach(function(e){l.push(e.id)}),l&&l.length>0&&this.$confirm("批量生成二维码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.tableLoading=!0;var e={ids:l.toString()};Object(n.ib)(e).then(function(e){200==e.status?i.$message({type:"success",message:"生成成功!",duration:300,onClose:function(){o.param.pageNo=1,o.getAjaxList()}}):(o.tableLoading=!1,i.$message({type:"error",message:"生成失败"}))})}).catch(function(){i.$message({type:"info",message:"已取消"})})}else this.$message({type:"info",message:"请至少选择一项！"});else"allExport"==a&&(location.href=n.He+"export/downloadQrcode?customerId="+this.param.customerId)},onSearch:function(){this.param.pageNo=1,this.param.content=this.searchForm.username,this.getAjaxList()},handleCurrentChange:function(e){this.param.pageNo=e,this.getAjaxList()},getAjaxList:function(){var e=this;Object(n.yd)(e.param).then(function(t){e.tableLoading=!1;var a=t.data.items;a&&a.length>0?(e.tableData=a,e.totalNum=parseInt(t.data.totalNum)):(e.tableData=[],e.totalNum=0)})}},beforeMount:function(){sessionStorage.removeItem("userId"),this.getAjaxList()}},o=(a("scTW"),a("KHd+")),l=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("门店桌号管理")])],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contentBody",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(241, 242, 247, 0.5)"}},[a("el-form",{attrs:{model:e.searchForm,"label-width":"50px",inline:"","label-position":"left"}},[a("el-form-item",{attrs:{label:"搜索"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:200,autocomplete:"off",placeholder:"请输入",clearable:""},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-search","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch(t)}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(t){return e.handleClick("","","add")}}},[e._v("添加")])],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{type:"warning"},on:{click:function(t){return e.handleClick("","","allQRcode")}}},[e._v("批量生成二维码")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.handleClick("","","allExport")}}},[e._v("导出二维码")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"deskNo",label:"桌号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"二维码"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.qrcodeUrl?a("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.row.qrcodeUrl,fit:"fit"}}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"isOpenName",label:"是否开放",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"createUser",label:"操作员"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.handleClick(t.$index,t.row,"edit")}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#fe8d29",color:"#fff",border:"none"},attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(a){return e.handleClick(t.$index,t.row,"delete")}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-menu",size:"mini",type:"warning"},on:{click:function(a){return e.handleClick(t.$index,t.row,"qrcode")}}},[e._v("生成二维码")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[15,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,"25a517ef",null);l.options.__file="storeDesk.vue";t.default=l.exports},"3kHD":function(e,t,a){},scTW:function(e,t,a){"use strict";var n=a("3kHD");a.n(n).a}}]);