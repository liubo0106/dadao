(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4Xsu":function(e,t,n){"use strict";n.r(t);var a=n("TsPW"),i={name:"menu-manage",data:function(){return{expandAll:!1,tableData:[]}},methods:{handleClick:function(e,t,n){var i=this,r=this;"delete"==n?this.$confirm("真的删除该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id};Object(a.J)(e).then(function(e){200==e.status?i.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){r.getAjaxList()}}):i.$message({type:"error",message:e.msg})})}).catch(function(){i.$message({type:"info",message:"已取消删除"})}):"add"==n?(sessionStorage.setItem("menuId",""),this.$router.push({path:"/editmenu"})):"edit"==n&&(sessionStorage.setItem("menuId",t.id),this.$router.push({path:"/editmenu"}))},getAjaxList:function(){var e=this;Object(a.a)().then(function(t){if(200==t.status){var n=t.data;n&&n.length>0?e.tableData=n:e.tableData=[]}})}},beforeMount:function(){sessionStorage.removeItem("menuId"),this.getAjaxList()}},r=(n("n/gt"),n("KHd+")),o=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),n("el-breadcrumb-item",[e._v("权限管理")]),e._v(" "),n("el-breadcrumb-item",[e._v("菜单管理")])],1),e._v(" "),n("div",{staticClass:"contentBody"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(t){return e.handleClick("","","add")}}})],1)],1),e._v(" "),n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{border:"","row-key":"id",data:e.tableData,"expand-all":e.expandAll,border:""}},[n("el-table-column",{attrs:{align:"center","header-align":"center",label:"菜单名称",prop:"name"}}),e._v(" "),n("el-table-column",{attrs:{align:"center","header-align":"center",label:"前台路由",prop:"path"}}),e._v(" "),n("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-edit",size:"mini"},on:{click:function(n){return e.handleClick(t.$index,t.row,"edit")}}},[e._v("编辑")]),e._v(" "),n("el-button",{staticStyle:{"background-color":"#fe8d29",color:"#fff",border:"none"},attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(n){return e.handleClick(t.$index,t.row,"delete")}}},[e._v("删除")])]}}])})],1)],1)],1)},[],!1,null,"7e1810d8",null);o.options.__file="menu.vue";t.default=o.exports},CCN0:function(e,t,n){},"n/gt":function(e,t,n){"use strict";var a=n("CCN0");n.n(a).a}}]);