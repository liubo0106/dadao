(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1NB+":function(e,t,a){"use strict";a.r(t);var n=a("TsPW"),r={name:"user-manage",data:function(){return{searchForm:{name:""},tableData:null,param:{name:"",pageNo:1,pageSize:15,deptId:"",checkChild:"all",serialNo:"",isDelete:1},totalNum:0,orgTreeData:[],defaultProps:{children:"children",label:"name"},checkNodeKey:"",pathIds:"",activeName:"first",searchForm2:{name:""},tableData2:null,param2:{name:"",pageNo:1,pageSize:10,deptId:"",checkChild:"all",serialNo:"",isDelete:1},totalNum2:0,orgTreeData2:[],defaultProps2:{children:"children",label:"name"},checkNodeKey2:"",pathIds2:"",searchForm3:{name:""},tableData3:null,param3:{name:"",pageNo:1,pageSize:15,deptId:"",checkChild:"all",serialNo:"",type:1,isDelete:1},totalNum3:0,searchForm4:{name:"",serialNo:""},tableData4:null,param4:{name:"",pageNo:1,pageSize:15,serialNo:"",type:2,isDelete:1},totalNum4:0}},methods:{handleYuJingClick:function(e,t,a){var r=this,i=this;"isOpen"==a?"first"==i.activeName?this.$confirm("是否开启预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:1};Object(n.cd)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param.pageNo=1,i.getAjaxList()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"second"==i.activeName?this.$confirm("是否开启预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:1};Object(n.Mc)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param2.pageNo=1,i.getAjaxList2()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"third"==i.activeName?this.$confirm("是否开启预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:1};Object(n.Cc)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param3.pageNo=1,i.getAjaxList3()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"fourth"==i.activeName&&this.$confirm("是否开启预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:1};Object(n.Cc)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param4.pageNo=1,i.getAjaxList4()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"isClose"==a&&("first"==i.activeName?this.$confirm("是否取消预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:0};Object(n.cd)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param.pageNo=1,i.getAjaxList()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"second"==i.activeName?this.$confirm("是否取消预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:0};Object(n.Mc)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param2.pageNo=1,i.getAjaxList2()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"third"==i.activeName?this.$confirm("是否取消预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:0};Object(n.Cc)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param3.pageNo=1,i.getAjaxList3()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}):"fourth"==i.activeName&&this.$confirm("是否取消预警?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id,isWarning:0};Object(n.Cc)(e).then(function(e){r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.param4.pageNo=1,i.getAjaxList4()}})})}).catch(function(){r.$message({type:"info",message:"已取消"})}))},tableRowClassName:function(e){var t=e.row;e.rowIndex;return 1==t.isWarning&&t.stock<=t.safeStock?"warning-row":""},indexMethod:function(e){return(this.param.pageNo-1)*this.param.pageSize+e+1},handleNodeClick:function(e){this.searchForm.name="",this.param.name="",this.param.categoryId="","0"==e.id||(this.param.categoryId=e.id),this.param.pageNo=1,e.pathIds&&(this.pathIds="0,"+e.pathIds),this.getAjaxList(),this.checkNodeKey=e.id,sessionStorage.setItem("UContent",this.param.name),sessionStorage.setItem("deptId",this.param.deptId)},handleClick:function(e,t){"third"==e.name?this.getAjaxList3():"fourth"==e.name&&this.getAjaxList4()},onSearch:function(){this.param.pageNo=1,this.param.serialNo=this.searchForm.serialNo,this.param.name=this.searchForm.name,this.getAjaxList()},handleCurrentChange:function(e){this.param.pageNo=e,this.getAjaxList()},indexMethod3:function(e){return(this.param3.pageNo-1)*this.param3.pageSize+e+1},onSearch3:function(){this.param3.pageNo=1,this.param3.serialNo=this.searchForm3.serialNo,this.param3.name=this.searchForm3.name,this.getAjaxList3()},handleCurrentChange3:function(e){this.param3.pageNo=e,this.getAjaxList3()},indexMethod4:function(e){return(this.param4.pageNo-1)*this.param4.pageSize+e+1},onSearch4:function(){this.param4.pageNo=1,this.param4.serialNo=this.searchForm4.serialNo,this.param4.name=this.searchForm4.name,this.getAjaxList4()},handleCurrentChange4:function(e){this.param4.pageNo=e,this.getAjaxList4()},handleSizeChange:function(e){var t=this;t.param.pageSize=e,Object(n.Md)(t.param).then(function(e){if(200==e.status){var a=e.data.items;a&&a.length>0?(t.tableData=a,t.totalNum=parseInt(e.data.totalNum)):(t.tableData=[],t.totalNum=0)}})},handleSizeChange2:function(e){var t=this;t.param2.pageSize=e,Object(n.Cd)(t.param2).then(function(e){if(200==e.status){var a=e.data.items;a&&a.length>0?(t.tableData2=a,t.totalNum2=parseInt(e.data.totalNum)):(t.tableData2=[],t.totalNum2=0)}})},handleSizeChange3:function(e){var t=this;t.param3.pageSize=e,Object(n.sd)(t.param3).then(function(e){if(200==e.status){var a=e.data.items;a&&a.length>0?(t.tableData3=a,t.totalNum3=parseInt(e.data.totalNum)):(t.tableData3=[],t.totalNum3=0)}})},handleSizeChange4:function(e){var t=this;t.param4.pageSize=e,Object(n.sd)(t.param4).then(function(e){if(200==e.status){var a=e.data.items;a&&a.length>0?(t.tableData4=a,t.totalNum4=parseInt(e.data.totalNum)):(t.tableData4=[],t.totalNum4=0)}})},getAjaxList:function(){var e=this,t=this;Object(n.Md)(t.param).then(function(a){if(200==a.status){var n=a.data.items;if(n&&n.length>0){t.tableData=n,e.tableData.forEach(function(t){e.$set(t,"totolPrice",0)});for(var r=0;r<e.tableData.length;r++)e.tableData[r].totolPrice=e.tableData[r].stock*e.tableData[r].costPrice;t.totalNum=parseInt(a.data.totalNum)}else t.tableData=[],t.totalNum=0}})},getTreeAjaxList:function(){var e=this;Object(n.Ld)({}).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.orgTreeData=a:e.orgTreeData=[]}})},indexMethod2:function(e){return(this.param2.pageNo-1)*this.param2.pageSize+e+1},handleNodeClick2:function(e){this.searchForm2.name="",this.param2.name="",this.param2.packCategoryId="","0"==e.id||(this.param2.packCategoryId=e.id),this.param2.pageNo=1,e.pathIds&&(this.pathIds="0,"+e.pathIds),this.getAjaxList2(),this.checkNodeKey2=e.id,sessionStorage.setItem("UContent2",this.param2.name),sessionStorage.setItem("deptId2",this.param2.deptId)},onSearch2:function(){this.param2.pageNo=1,this.param2.name=this.searchForm2.name,this.param2.serialNo=this.searchForm2.serialNo,this.getAjaxList2()},handleCurrentChange2:function(e){this.param2.pageNo=e,this.getAjaxList2()},getAjaxList2:function(){var e=this,t=this;Object(n.Cd)(t.param2).then(function(a){if(200==a.status){var n=a.data.items;if(n&&n.length>0){t.tableData2=n,t.totalNum2=parseInt(a.data.totalNum),e.tableData2.forEach(function(e){t.$set(e,"totolPrice",0)});for(var r=0;r<e.tableData2.length;r++)t.tableData2[r].totolPrice=t.tableData2[r].stock*t.tableData2[r].costPrice;console.log(t.tableData2)}else t.tableData2=[],t.totalNum2=0}})},getTreeAjaxList2:function(){var e=this;Object(n.Bd)({}).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.orgTreeData2=a:e.orgTreeData2=[]}})},getAjaxList3:function(){var e=this;Object(n.sd)(e.param3).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableData3=a,e.totalNum3=parseInt(t.data.totalNum)):(e.tableData3=[],e.totalNum3=0)}})},getAjaxList4:function(){var e=this;Object(n.sd)(e.param4).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableData4=a,e.totalNum4=parseInt(t.data.totalNum)):(e.tableData4=[],e.totalNum4=0)}})}},filters:{substr:function(e){if(null!=e)return e.toFixed(2)}},beforeMount:function(){var e=sessionStorage.getItem("deptId"),t=sessionStorage.getItem("UPageNo"),a=sessionStorage.getItem("UContent");sessionStorage.removeItem("userId"),e?(this.param.deptId=e,this.checkNodeKey=e):this.checkNodeKey="",t&&(this.param.pageNo=parseInt(t)),a&&(this.searchForm.name=a,this.param.name=a),this.getAjaxList(),this.getTreeAjaxList();var n=sessionStorage.getItem("deptId2"),r=sessionStorage.getItem("UPageNo2");sessionStorage.getItem("UContent2");sessionStorage.removeItem("userId2"),n?(this.param2.deptId=n,this.checkNodeKey2=n):this.checkNodeKey2="",r&&(this.param2.pageNo=parseInt(t)),name&&(this.searchForm2.name=name,this.param2.name=name),this.getAjaxList2(),this.getTreeAjaxList2()}},i=(a("Syfr"),a("KHd+")),l=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("库存管理")])],1),e._v(" "),a("div",{staticClass:"contentBody"},[[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"原料库存",name:"first"}},[a("el-container",[a("el-aside",[a("el-tree",{attrs:{"highlight-current":!0,"node-key":"id","default-expand-all":"",data:e.orgTreeData,props:e.defaultProps,"current-node-key":e.checkNodeKey,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),a("el-main",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm,"label-width":"75px","label-position":"left"}},[a("el-form-item",{attrs:{label:"原料编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"原料编号",clearable:""},model:{value:e.searchForm.serialNo,callback:function(t){e.$set(e.searchForm,"serialNo",t)},expression:"searchForm.serialNo "}})],1),e._v(" "),a("el-form-item",{attrs:{label:"原料名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"原料名称",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"原料编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"原料名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"price",label:"单价",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.price)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"costPrice",label:"成本价",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.costPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"totolPrice",label:"总价",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.totolPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"standard",label:"单位",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"safeStock",label:"安全库存量",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#f37276",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isOpen")}}},[e._v("开启预警")]):e._e(),e._v(" "),1==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isClose")}}},[e._v("取消预警")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[15,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"打包库存",name:"second"}},[a("el-container",[a("el-aside",[a("el-tree",{attrs:{"highlight-current":!0,"node-key":"id","default-expand-all":"",data:e.orgTreeData2,props:e.defaultProps2,"current-node-key":e.checkNodeKey2,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick2}})],1),e._v(" "),a("el-main",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm2,"label-width":"75px","label-position":"left"}},[a("el-form-item",{attrs:{label:"打包编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"打包编号",clearable:""},model:{value:e.searchForm2.serialNo,callback:function(t){e.$set(e.searchForm2,"serialNo",t)},expression:"searchForm2.serialNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"打包名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"打包名称",clearable:""},model:{value:e.searchForm2.name,callback:function(t){e.$set(e.searchForm2,"name",t)},expression:"searchForm2.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch2(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData2,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod2,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"打包编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"打包名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"costPrice",label:"成本价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.costPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"totolPrice",label:"总价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.totolPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"safeStock",label:"安全库存量",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#f37276",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isOpen")}}},[e._v("开启预警")]):e._e(),e._v(" "),1==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isClose")}}},[e._v("取消预警")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[10,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum2},on:{"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange2}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"固定资产",name:"third"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm3,"label-width":"75px","label-position":"left"}},[a("el-form-item",{attrs:{label:"资产编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"资产编号",clearable:""},model:{value:e.searchForm3.serialNo,callback:function(t){e.$set(e.searchForm3,"serialNo",t)},expression:"searchForm3.serialNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"资产编号",clearable:""},model:{value:e.searchForm3.name,callback:function(t){e.$set(e.searchForm3,"name",t)},expression:"searchForm3.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch3(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData3,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod3,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"资产编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"资产名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"category",label:"类别"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"safeStock",label:"安全库存量",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#f37276",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isOpen")}}},[e._v("开启预警")]):e._e(),e._v(" "),1==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isClose")}}},[e._v("取消预警")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[15,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum3},on:{"size-change":e.handleSizeChange3,"current-change":e.handleCurrentChange3}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"低值易耗品",name:"fourth"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm4,"label-width":"100px","label-position":"left"}},[a("el-form-item",{attrs:{label:"易耗品编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"易耗品编号",clearable:""},model:{value:e.searchForm4.serialNo,callback:function(t){e.$set(e.searchForm4,"serialNo",t)},expression:"searchForm4.serialNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"易耗品名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"易耗品名称",clearable:""},model:{value:e.searchForm4.name,callback:function(t){e.$set(e.searchForm4,"name",t)},expression:"searchForm4.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch4(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData4,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod4,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"易耗品编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"易耗品名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"category",label:"类别"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"safeStock",label:"安全库存量",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#f37276",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",type:"warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isOpen")}}},[e._v("开启预警")]):e._e(),e._v(" "),1==t.row.isWarning?a("el-button",{staticStyle:{"background-color":"#24cbc1",color:"#fff",border:"none"},attrs:{icon:"el-icon-warning",size:"small"},on:{click:function(a){return e.handleYuJingClick(t.$index,t.row,"isClose")}}},[e._v("取消预警")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.param.pageNo,"page-sizes":[15,30,45,60],"page-size":e.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum4},on:{"size-change":e.handleSizeChange4,"current-change":e.handleCurrentChange4}})],1)],1)]],2)],1)},[],!1,null,null,null);l.options.__file="inventoryManage.vue";t.default=l.exports},DLBh:function(e,t,a){},Syfr:function(e,t,a){"use strict";var n=a("DLBh");a.n(n).a}}]);