(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"+UbF":function(e,t,a){"use strict";var n=a("aF+V");a.n(n).a},YAr2:function(e,t,a){"use strict";a.r(t);var n=a("TsPW"),o={name:"user-manage",data:function(){var e=sessionStorage.getItem("customerId");return"null"==e&&(e=""),{loading:!1,searchForm:{status:"",endDate:"",beginDate:"",orderNo:"",deskNo:"",customerId:e},tableData:null,param:{status:"",endDate:"",beginDate:"",orderNo:"",deskNo:"",pageNo:1,pageSize:15,customerId:""},totalNum:0,saveLoadingId:""}},methods:{indexMethod:function(e){return(this.param.pageNo-1)*this.param.pageSize+e+1},handleSizeChange:function(e){var t=this;t.param.pageSize=e,Object(n.Od)(t.param).then(function(e){var a=e.data.items;a&&a.length>0?(t.tableData=a,t.totalNum=parseInt(e.data.totalNum)):(t.tableData=[],t.totalNum=0)})},exportClick:function(){location.href=n.He+"export/storeOrderReport?customerId="+this.searchForm.customerId+"&orderNo="+this.searchForm.orderNo+"&deskNo="+this.searchForm.deskNo+"&status="+this.searchForm.status+"&beginDate="+this.searchForm.beginDate+"&endDate="+this.searchForm.endDate},handleClick:function(e,t,a){var o=this,r=this;"ok"==a?this.$confirm("真的确认该订单么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.loading=!0;var e={id:t.id,status:1};Object(n.de)(e).then(function(e){o.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){r.loading=!1,r.param.pageNo=1,r.getAjaxList()}})})}).catch(function(){o.$message({type:"info",message:"已取消"})}):"pay"==a?this.$confirm("真的确认该订单已结账, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.loading=!0;var e={id:t.id,status:2};Object(n.de)(e).then(function(e){o.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){r.loading=!1,r.param.pageNo=1,r.getAjaxList()}})})}).catch(function(){o.$message({type:"info",message:"已取消"})}):"detail"==a?(sessionStorage.setItem("soId",t.id),sessionStorage.setItem("type",0),this.$router.push({path:"/detailStoreOrde"})):"delete"==a?this.$confirm("真的删除该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.loading=!0;var e={id:t.id};Object(n.X)(e).then(function(e){o.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){r.loading=!1,r.param.pageNo=1,r.getAjaxList()}})})}).catch(function(){o.$message({type:"info",message:"已取消删除"})}):"print"==a&&(r.saveLoadingId=t.id,Object(n.cc)({id:t.id}).then(function(e){200==e.status?r.saveLoadingId="":(r.saveLoadingId="",r.$message({message:"请求异常",duration:"2000",type:"error"}))}))},onSearch:function(){this.param.pageNo=1,this.param.status=this.searchForm.status,this.param.beginDate=this.searchForm.beginDate,this.param.endDate=this.searchForm.endDate,this.param.orderNo=this.searchForm.orderNo,this.param.deskNo=this.searchForm.deskNo,this.getAjaxList()},handleCurrentChange:function(e){this.param.pageNo=e,this.getAjaxList()},getAjaxList:function(){var e=this;this.param.customerId=sessionStorage.getItem("customerId"),this.param.orderNo=sessionStorage.getItem("soId"),Object(n.Od)(e.param).then(function(t){var a=t.data.items;a&&a.length>0?(e.tableData=a,e.totalNum=parseInt(t.data.totalNum)):(e.tableData=[],e.totalNum=0)})}},beforeMount:function(){sessionStorage.removeItem("userId"),this.getAjaxList()}},r=(a("+UbF"),a("KHd+")),i=Object(r.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/storeOrde"}}},[e._v("顾客订单管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("顾客订单列表")])],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contentBody",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(241, 242, 247, 0.5)"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"deskNo",label:"桌号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(t.row.deskNo)+"\n                    ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"orderNo",label:"订单号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"statusName",label:"订单状态",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"people",label:"用餐人数",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"totalPrice",label:"总额(元)"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"dateTime",label:"下单时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"createUser",label:"操作员",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"left","header-align":"center",label:"操作",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{"background-color":"#f37276",color:"#fff",border:"none"},attrs:{icon:"el-icon-document",size:"mini"},on:{click:function(a){return e.handleClick(t.$index,t.row,"detail")}}},[e._v("查看")]),e._v(" "),2!=t.row.status?a("el-button",{staticStyle:{"background-color":"#fe8d29",color:"#fff",border:"none"},attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(a){return e.handleClick(t.$index,t.row,"delete")}}},[e._v("删除")]):e._e(),e._v(" "),0==t.row.status?a("el-button",{staticStyle:{"background-color":"#6faffd",color:"#fff",border:"none"},attrs:{icon:"el-icon-success",size:"mini",type:"danger"},on:{click:function(a){return e.handleClick(t.$index,t.row,"ok")}}},[e._v("确认")]):e._e(),e._v(" "),a("el-button",{staticStyle:{"background-color":"#28db67",color:"#fff",border:"none"},attrs:{icon:"el-icon-printer",size:"mini",type:"success"},on:{click:function(a){return e.handleClick(t.$index,t.row,"print")}}},[e._v("出票")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[15,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,"fccdeeda",null);i.options.__file="storeList.vue";t.default=i.exports},"aF+V":function(e,t,a){}}]);