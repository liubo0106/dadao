(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{H5oG:function(e,t,a){},hiwE:function(e,t,a){"use strict";var r=a("H5oG");a.n(r).a},oH0s:function(e,t,a){"use strict";a.r(t);var r=a("TsPW"),i={name:"edit-user-manage",data:function(){var e=sessionStorage.getItem("customerId");return"null"==e&&(e="-"),{disabled:!1,tableData:null,typeBool:!1,classify:0,formLabelWidth:"80px",dialogForm:{standard:"",number:"",price:"",id:"",productInfoId:""},orgTreeData:[],detailFormVisible:!1,detailTitle:"打包商品明细",detailForm:{serialNo:"",name:"",standard:"",number:""},id:"",saveLoading:!1,editForm:{name:"",orderNo:"",dateTime:"",totalNumber:"",totalPrice:"",remark:"",customerId:e,type:"1"},rules:{name:[{required:!0,message:"请输入订单名称",trigger:"blur"}],dateTime:[{required:!0,message:"请输入日期",trigger:"blur"}],number:[{required:!0,message:"请输入数量",trigger:"blur"}],price:[{required:!0,message:"请输入单价",trigger:"blur"}],productInfoId:[{required:!0,message:"请选择名称",trigger:"blur"}]},headers:{sessionId:sessionStorage.getItem("sessionId")},customerList:[],standardDataDicList:[],standardParam:{type:"单位"},dialogFormVisible:!1,dialogTitle:"新增订单明细",activeName:"1",tableListData:null,searchForm:{name:"",serialNo:""},param:{name:"",pageNo:1,type:1,pageSize:10,serialNo:"",isDelete:1,categoryId:""},totalNum:0,searchForm2:{name:"",serialNo:""},tableData2:null,param2:{name:"",pageNo:1,type:2,pageSize:10,serialNo:"",isDelete:1},totalNum2:0,param3:{pid:""},param4:{pageNo:1,pageSize:0,customerId:e},dialogNumberFormVisible:!1,editNumberForm:{number:0,stock:0,id:"",standard:"",name:"",serialNo:"",multiple:""},number:0,defaultProps:{children:"children",label:"name"}}},methods:{handleClick:function(e,t){"1"==e.name?(this.dialogForm.type=1,this.getAjaxList()):"2"==e.name&&(this.dialogForm.type=2,this.getAjaxList2())},indexMethod:function(e){return(this.param.pageNo-1)*this.param.pageSize+e+1},handleNodeClick:function(e){console.log(e.id),this.param.categoryId=e.id,this.getAjaxList()},handleClickAdd:function(e,t){if(null==this.tableData[e].multiple)return this.$message({type:"error",message:"数据错，请联系管理员",duration:1e3}),!1;if(this.tableData[e].number%this.tableData[e].multiple!=0)return this.$message({type:"error",message:"添加数量请输入"+this.tableData[e].multiple+"的倍数",duration:1e3}),!1;if(this.tableData[e].number>0){var a,i=this;a={id:"",standard:t.standard,number:this.tableData[e].number,price:t.price,name:t.name,serialNo:t.serialNo,productInfoId:t.productInfoId,salesOrderId:i.id,type:t.type},Object(r.gd)(a).then(function(e){200==e.status?i.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.saveLoading=!1,i.getDetailAjaxList(1)}}):(i.saveLoading=!1,i.$message({type:"error",message:e.msg}))})}else this.$message({type:"error",message:"请选择数量！"})},handleClickAdd2:function(e,t){if(this.tableData2[e].number>0){var a,i=this;a={id:"",standard:t.standard,number:this.tableData2[e].number,price:t.price,name:t.name,serialNo:t.serialNo,productInfoId:t.productInfoId,salesOrderId:i.id,type:t.type},Object(r.gd)(a).then(function(e){200==e.status?i.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){i.saveLoading=!1,i.getDetailAjaxList(1)}}):(i.saveLoading=!1,i.$message({type:"error",message:e.msg}))})}else this.$message({type:"error",message:"请选择数量！"})},getTreeAjaxList:function(){var e=this;Object(r.Id)({}).then(function(t){if(200==t.status){var a=t.data;a&&(a&&a.length>0?e.orgTreeData=a:e.orgTreeData=[])}else e.$message({type:"error",message:"系统异常!"})})},dialogNumberFormAdd:function(){var e=this;if(this.editNumberForm.number%this.editNumberForm.multiple!=0)return this.$message({type:"error",message:"添加数量请输入"+this.editNumberForm.multiple+"的倍数",duration:1e3}),!1;if(this.editNumberForm.number>0){e.saveLoading=!0;var t;t={id:this.editNumberForm.id,number:this.editNumberForm.number},Object(r.gd)(t).then(function(t){200==t.status?e.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){e.saveLoading=!1,e.dialogNumberFormVisible=!1,e.getDetailAjaxList(1)}}):(e.saveLoading=!1,e.dialogNumberFormVisible=!1,e.$message({type:"error",message:t.msg}))})}else this.$message({type:"error",message:"请选择数量！"})},onSearch:function(){this.param.pageNo=1,this.param.name=this.searchForm.name,this.param.serialNo=this.searchForm.serialNo,this.getAjaxList()},handleCurrentChange:function(e){this.param.pageNo=e,this.getAjaxList()},getAjaxList:function(){var e=this;Object(r.Ad)(e.param).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableData=a,e.totalNum=parseInt(t.data.totalNum)):(e.tableData=[],e.totalNum=0)}})},onSearch2:function(){this.param2.pageNo=1,this.param2.name=this.searchForm2.name,this.param2.serialNo=this.searchForm2.serialNo,this.getAjaxList2()},handleCurrentChange2:function(e){this.param2.pageNo=e,this.getAjaxList2()},getAjaxList2:function(){var e=this;Object(r.Ad)(e.param2).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableData2=a,e.totalNum2=parseInt(t.data.totalNum)):(e.tableData2=[],e.totalNum2=0)}})},getDetailAjaxList:function(e){var t=this;Object(r.Fb)(t.param3).then(function(a){t.tableListData=[];var r=a.data;r&&r.length>0?(t.tableListData=r,1==e&&t.requestClientInfo()):t.tableListData=[]})},getdatatime:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),i=r>9?r:"0"+r;this.editForm.dateTime=t+"-"+a+"-"+i},handleClickDetail:function(e,t,a){var i=this;"delete"==a?i.$confirm("真的删除该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id};Object(r.T)(e).then(function(e){200==e.status?i.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){i.getDetailAjaxList(1)}}):i.$message({type:"error",message:e.msg})})}).catch(function(){i.$message({type:"info",message:"已取消删除"})}):"add"==a?(i.dialogFormVisible=!0,i.getAjaxList(),i.getTreeAjaxList()):"edit"==a&&(i.dialogNumberFormVisible=!0,i.editNumberForm.number=t.number,i.editNumberForm.stock=t.stock,i.editNumberForm.id=t.id,i.editNumberForm.serialNo=t.serialNo,i.editNumberForm.name=t.name,i.editNumberForm.standard=t.standard,i.editNumberForm.multiple=t.multiple,null==t.multiple&&(i.editNumberForm.multiple=1))},requestClientInfo:function(){var e=this,t=this;Object(r.Ac)({id:this.id}).then(function(a){if(200==a.status){var r=a.data;r&&(t.editForm.name=r.name,t.editForm.orderNo=r.orderNo,t.editForm.dateTime=r.dateTime,t.editForm.totalNumber=r.totalNumber,t.editForm.totalPrice=r.totalPrice,t.editForm.remark=r.remark,t.editForm.supplier=r.supplierName,t.editForm.customerId=r.customerId,t.editForm.type=r.type+"")}else e.$message({message:"请求异常",type:"error"})})},getAjaxSupplier:function(){var e=this;Object(r.td)(e.param4).then(function(t){var a=t.data.items;a&&a.length>0?e.customerList=a:e.customerList=[]})},getAjaxStandardDataDic:function(){var e=this;Object(r.ze)(e.standardParam).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.standardDataDicList=a:e.standardDataDicList=[]}})},goBack:function(){this.$router.push({path:"/salesOrder"})},submitForm:function(e){var t=this,a=this;this.$refs[e].validate(function(e){if(!e)return!1;a.saveLoading=!0;var i;i=t.customerList.find(function(e){return e.id===a.editForm.customerId});var l={name:a.editForm.name,dateTime:a.editForm.dateTime,totalNumber:a.editForm.totalNumber,totalPrice:a.editForm.totalPrice,remark:a.editForm.remark,customerId:a.editForm.customerId,type:a.editForm.type,customerName:i.name,id:a.id};Object(r.id)(l).then(function(e){t.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){sessionStorage.setItem("id",e.data.id),a.id=e.data.id,a.requestClientInfo(),a.getAjaxList(2),a.saveLoading=!1,a.typeBool=!0,a.param3.pid=e.data.id}})})})}},beforeMount:function(){var e=sessionStorage.getItem("sId");e&&(this.id=e,this.param3.pid=e,this.typeBool=!0,this.requestClientInfo(),this.getAjaxList(2),this.getDetailAjaxList(2)),this.getAjaxSupplier(),this.getAjaxStandardDataDic(),this.getdatatime()}},l=(a("hiwE"),a("KHd+")),n=Object(l.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/salesOrder"}}},[e._v("门店下单管理")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(""==e.id?"新增":"编辑"))])],1),e._v(" "),a("div",{staticClass:"contentBody"},[a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"订单名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:15},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"门店",prop:"customerId"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:""},model:{value:e.editForm.customerId,callback:function(t){e.$set(e.editForm,"customerId",t)},expression:"editForm.customerId"}},e._l(e.customerList,function(e){return a("el-option",{attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"订单日期",prop:"dateTime"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.editForm.dateTime,callback:function(t){e.$set(e.editForm,"dateTime",t)},expression:"editForm.dateTime"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"总量"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:200,disabled:""},model:{value:e.editForm.totalNumber,callback:function(t){e.$set(e.editForm,"totalNumber",t)},expression:"editForm.totalNumber"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"总价"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:200,disabled:""},model:{value:e.editForm.totalPrice,callback:function(t){e.$set(e.editForm,"totalPrice",t)},expression:"editForm.totalPrice"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入",maxlength:200},model:{value:e.editForm.remark,callback:function(t){e.$set(e.editForm,"remark",t)},expression:"editForm.remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.submitForm("editForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("返回")])],1)],1),e._v(" "),e.id?a("div",{staticClass:"contentBody"},[a("el-form",{staticClass:"demo-form-inline",attrs:{"label-width":"60px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(t){return e.handleClickDetail("","","add")}}})],1)],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableListData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"序号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"type",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?[e._v("打包")]:e._e(),e._v(" "),2==t.row.type?[e._v("原材料")]:e._e(),e._v(" "),3==t.row.type?[e._v("固定资产")]:e._e(),e._v(" "),4==t.row.type?[e._v("易耗品")]:e._e(),e._v(" "),0==t.row.type?[e._v("复合调料包")]:e._e()]}}],null,!1,198563897)}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"standard",label:"单位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"number",label:"数量",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleClickDetail(t.$index,t.row,"edit")}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleClickDetail(t.$index,t.row,"delete")}}},[e._v("删除")])]}}],null,!1,794328897)})],1)],1):e._e()],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,width:"80%",top:"5vh"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"门店商品",name:"1"}},[a("el-container",[a("el-aside",[a("el-tree",{attrs:{"default-expand-all":"",data:e.orgTreeData,props:e.defaultProps,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node;return t.data,a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(r.label))])])}}])})],1),e._v(" "),a("el-main",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"编号",clearable:""},model:{value:e.searchForm.serialNo,callback:function(t){e.$set(e.searchForm,"serialNo",t)},expression:"searchForm.serialNo "}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"名称",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"编号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"number",label:"数量",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{staticStyle:{width:"130px"},attrs:{min:0,step:e.tableData[t.$index].multiple,max:999999999},model:{value:e.tableData[t.$index].number,callback:function(a){e.$set(e.tableData[t.$index],"number",a)},expression:"tableData[scope.$index].number"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"multiple",label:"倍数",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"standard",label:"单位",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleClickAdd(t.$index,t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.param.pageNo,"page-size":e.param.pageSize,layout:"total,prev, pager, next",total:e.totalNum},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.param,"pageNo",t)},"update:current-page":function(t){return e.$set(e.param,"pageNo",t)}}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"固定资产",name:"2"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm2,"label-width":"80px"}},[a("el-form-item",{staticStyle:{"font-family":"MicrosoftYaHeiLight","font-weight":"bold",color:"rgba(102,102,102,1)"},attrs:{label:"编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"编号",clearable:""},model:{value:e.searchForm2.serialNo,callback:function(t){e.$set(e.searchForm2,"serialNo",t)},expression:"searchForm2.serialNo "}})],1),e._v(" "),a("el-form-item",{staticStyle:{"font-family":"MicrosoftYaHeiLight","font-weight":"bold",color:"rgba(102,102,102,1)"},attrs:{label:"名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"名称",clearable:""},model:{value:e.searchForm2.name,callback:function(t){e.$set(e.searchForm2,"name",t)},expression:"searchForm2.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch2(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData2,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"编号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"number",label:"数量",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{staticStyle:{width:"130px"},attrs:{min:0,max:999999999},model:{value:e.tableData2[t.$index].number,callback:function(a){e.$set(e.tableData2[t.$index],"number",a)},expression:"tableData2[scope.$index].number"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"standard",label:"单位",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleClickAdd2(t.$index,t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.param2.pageNo,"page-size":e.param2.pageSize,layout:"total,prev, pager, next",total:e.totalNum2},on:{"current-change":e.handleCurrentChange2,"update:currentPage":function(t){return e.$set(e.param2,"pageNo",t)},"update:current-page":function(t){return e.$set(e.param2,"pageNo",t)}}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑数量",visible:e.dialogNumberFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogNumberFormVisible=t}}},[a("el-form",{ref:"editNumberForm",attrs:{model:e.editNumberForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"编号",prop:"serialNo","label-width":"80px"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editNumberForm.serialNo,callback:function(t){e.$set(e.editNumberForm,"serialNo",t)},expression:"editNumberForm.serialNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"name","label-width":"80px"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editNumberForm.name,callback:function(t){e.$set(e.editNumberForm,"name",t)},expression:"editNumberForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单位",prop:"standard","label-width":"80px"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editNumberForm.standard,callback:function(t){e.$set(e.editNumberForm,"standard",t)},expression:"editNumberForm.standard"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数量",prop:"number","label-width":"80px"}},[a("el-input-number",{attrs:{step:e.editNumberForm.multiple,min:1},model:{value:e.editNumberForm.number,callback:function(t){e.$set(e.editNumberForm,"number",t)},expression:"editNumberForm.number"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogNumberFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#35B178","border-color":"#35B178"},attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.dialogNumberFormAdd("editNumberForm")}}},[e._v("确 定")])],1)],1)],1)},[],!1,null,"441f38a4",null);n.options.__file="editSalesOrder.vue";t.default=n.exports}}]);