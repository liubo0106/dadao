(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"5f6c":function(e,t,a){"use strict";a.r(t);var r=a("YEIV"),i=a.n(r),l=a("TsPW"),o={name:"edit-user-manage",data:function(){var e,t=this,a=sessionStorage.getItem("customerId"),r=sessionStorage.getItem("id");return e={kindList:[{name:"炒锅涮锅",value:1},{name:"烧烤",value:2},{name:"凉菜",value:3},{name:"其他",value:0}],oldProductInfoId:"",pathIds:sessionStorage.getItem("pathIds"),headers:{sessionId:sessionStorage.getItem("sessionId")},id:r,saveLoading:!1,formLabelWidth:"100px",editForm:{customerId:a,num:0,type:"1",productInfoId:"",price:0,isSale:"1",isSide:"0",isDiscount:1,remark:"",name:"",serialNo:"",standard:"",categoryId:"",kind:"",nature:""},param:{pageNo:1,pageSize:0,isLook:"1"},param3:{pid:"0"},categoryList:[],rules:{num:[{required:!0,message:"请输入排序号",trigger:"blur"}],productInfoId:[{required:!0,message:"请选择商品",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字",trigger:"blur"},{validator:function(e,a,r){""===a?r(new Error("请选择商品")):t.oldProductInfoId===a?r():Object(l.mb)({pid:a}).then(function(e){e.data,200==e.status?r():r(new Error(e.msg))})},trigger:"blur"}],kind:[{required:!0,message:"请选择菜品种类",trigger:"change"}],nature:[{required:!0,message:"请选择菜品性质",trigger:"change"}],isSale:[{required:!0,message:"请选择是否上下架",trigger:"change"}],isSide:[{required:!0,message:"请选择是否配料",trigger:"change"}],isDiscount:[{required:!0,message:"请选择是否打折",trigger:"change"}],price:[{required:!0,message:"请输入价格",trigger:"blur"}]},imageUrl:"",upLoadAction:l.Ge,avatarBosKey:"",commodityName:"名称",dialogTreeTitle:"新增门店商品",dialogTreeFormVisible:!1,activeName:"1",searchTreeForm:{name:"",serialNo:""},tableTreeData:null,paramTree:{name:"",pageNo:1,pageSize:10,deptId:"",checkChild:"all",serialNo:"",packCategoryId:"",isDelete:1},totalTreeNum:0,orgTreeData:[],defaultProps:{children:"children",label:"name"},searchTreeForm2:{name:"",serialNo:""},tableTreeData2:null,paramTree2:{name:"",pageNo:1,pageSize:10,deptId:"",checkChild:"all",serialNo:"",categoryId:"",isLook:"1"},totalTreeNum2:0,orgTreeData2:[],searchTreeForm3:{name:"",serialNo:""},tableTreeData3:null,paramTree3:{name:"",pageNo:1,pageSize:10,deptId:"",checkChild:"all",serialNo:"",packCategoryId:""},totalTreeNum3:0,orgTreeData3:[],dialogTreeFormVisible2:!1,dialogTreeTitle2:"新增配料明细",tableData:null},i()(e,"tableTreeData3",null),i()(e,"totalTreeNum3",0),i()(e,"paramTree3",{pageNo:1,pageSize:10,name:"",isSale:1,isSide:"1",isDelete:1,customerId:a}),i()(e,"tableTreeData4",{num:0,showName:""}),i()(e,"dialogTitle",""),i()(e,"dialogFormVisible",!1),i()(e,"dialogForm",{parentId:"",goodsId:"",type:"",productInfoId:"",serialNo:"",name:"",standard:"",num:"",showName:"",number:"",id:""}),e},methods:{handleRowClick:function(){this.getTreeAjaxPage(),this.getTreeAjaxList(),this.dialogTreeFormVisible=!0},indexMethod:function(e){return(this.paramTree3.pageNo-1)*this.paramTree3.pageSize+e+1},handleClick:function(e,t){"1"==e.name?(this.getTreeAjaxPage(),this.getTreeAjaxList()):"2"==e.name?(this.getTreeAjaxPage2(),this.getTreeAjaxList2()):"3"==e.name&&this.getTreeAjaxPage3()},handleNodeClick:function(e){this.searchTreeForm.name="",this.searchTreeForm.serialNo="",this.paramTree.serialNo="",this.paramTree.name="",this.paramTree.packCategoryId="","0"==e.id||(this.paramTree.packCategoryId=e.id),this.paramTree.pageNo=1,this.getTreeAjaxPage()},onSearchTree:function(){this.paramTree.pageNo=1,this.paramTree.serialNo=this.searchTreeForm.serialNo,this.paramTree.name=this.searchTreeForm.name,this.getTreeAjaxPage()},handleCurrentChangeTree:function(e){this.paramTree3.pageNo=e,this.getAjaxDosingList()},getTreeAjaxPage:function(){var e=this;Object(l.hd)(e.paramTree).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableTreeData=a,e.totalTreeNum=parseInt(t.data.totalNum)):(e.tableTreeData=[],e.totalTreeNum=0)}})},getTreeAjaxList:function(){var e=this;Object(l.Bd)({}).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.orgTreeData=a:e.orgTreeData=[]}})},handleClickTreeAdd:function(e,t){console.log(t),this.editForm.standard=t.standard,this.editForm.number=this.tableTreeData[e].number,this.editForm.name=t.name,this.editForm.productInfoId=t.id,this.editForm.type=this.activeName,this.editForm.serialNo=t.serialNo,this.dialogTreeFormVisible=!1},handleNodeClick2:function(e){this.searchTreeForm2.name="",this.searchTreeForm2.serialNo="",this.paramTree2.name="",this.paramTree2.serialNo="",this.paramTree2.categoryId="","0"==e.id||(this.paramTree2.categoryId=e.id),this.paramTree2.pageNo=1,this.getTreeAjaxPage2()},onSearchTree2:function(){this.paramTree2.pageNo=1,this.paramTree2.serialNo=this.searchTreeForm2.serialNo,this.paramTree2.name=this.searchTreeForm2.name,this.getTreeAjaxPage2()},handleCurrentChangeTree2:function(e){this.paramTree3.pageNo=e,this.getTreeAjaxPage()},getTreeAjaxPage2:function(){var e=this;Object(l.Md)(e.paramTree2).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableTreeData2=a,e.totalTreeNum2=parseInt(t.data.totalNum)):(e.tableTreeData2=[],e.totalTreeNum2=0)}})},getTreeAjaxList2:function(){var e=this;Object(l.Ld)({}).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.orgTreeData2=a:e.orgTreeData2=[]}})},handleClickTreeAdd2:function(e,t){this.editForm.standard=t.standard,this.editForm.number=this.tableTreeData2[e].number,this.editForm.name=t.name,this.editForm.productInfoId=t.id,this.editForm.type=this.activeName,this.editForm.serialNo=t.serialNo,this.dialogTreeFormVisible=!1},handleClickTreeAdd4:function(e,t){this.editForm.standard=t.standard,this.editForm.number=this.tableTreeData3[e].number,this.editForm.name=t.name,this.editForm.productInfoId=t.id,this.editForm.type=0,this.editForm.serialNo=t.serialNo,this.dialogTreeFormVisible=!1},getTreeAjaxPage3:function(){var e=this;Object(l.ud)(e.paramTree3).then(function(t){if(200==t.status){var a=t.data.items;a&&a.length>0?(e.tableTreeData3=a,e.totalTreeNum3=parseInt(t.data.totalNum)):(e.tableTreeData3=[],e.totalTreeNum3=0)}})},handleClickDetail:function(e,t,a){var r=this;"delete"==a?r.$confirm("真的删除该行数据么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={id:t.id};Object(l.A)(e).then(function(e){200==e.status?r.$message({type:"success",message:"删除成功!",duration:300,onClose:function(){r.getAjaxList()}}):r.$message({type:"error",message:e.msg})})}).catch(function(){r.$message({type:"info",message:"已取消删除"})}):"add"==a?(this.getAjaxDosingList(),this.dialogTreeFormVisible2=!0):"edit"==a&&r.addOrg("edit",t)},getAjaxDosingList:function(e){var t=this;Object(l.Ad)(t.paramTree3).then(function(e){if(200==e.status){var a=e.data.items;a&&a.length>0?(t.tableTreeData3=a,t.totalTreeNum3=parseInt(e.data.totalNum)):(t.tableTreeData3=[],t.totalTreeNum3=0)}})},handleClickTreeAdd3:function(e,t){var a,r=this;a={parentId:r.id,goodsId:t.id,type:t.type,productInfoId:t.productInfoId,serialNo:t.serialNo,name:t.name,standard:t.standard,showName:this.tableTreeData3[e].name,number:this.tableTreeData3[e].number},Object(l.Kc)(a).then(function(e){200==e.status?r.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){r.saveLoading=!1,r.getAjaxList()}}):(r.saveLoading=!1,r.$message({type:"error",message:e.msg}))})},getAjaxList:function(){var e=this;Object(l.zd)({parentId:e.id}).then(function(t){e.tableData=[];var a=t.data.items;a&&a.length>0?e.tableData=a:e.tableData=[]})},changeCategory:function(e){this.categoryList.find(function(t){return t.id===e})},getAjaxCategory:function(){var e=this;Object(l.Ub)(e.param3).then(function(t){if(200==t.status){var a=t.data;a&&a.length>0?e.categoryList=a:e.categoryList=[]}})},requestGoodsInfo:function(){var e=this,t=this;Object(l.lb)({id:this.id}).then(function(a){if(200==a.status){var r=a.data;r&&(t.editForm.name=r.name,t.editForm.num=r.num,t.editForm.type=r.type+"",t.editForm.productInfoId=r.productInfoId,t.editForm.serialNo=r.serialNo,t.editForm.standard=r.standard,t.editForm.price=r.price,t.editForm.kind=r.kind,t.imageUrl=r.pictureUrl,t.editForm.isSale=r.isSale+"",t.editForm.isSide=r.isSide+"",t.editForm.isDiscount=r.isDiscount,t.oldProductInfoId=r.productInfoId,t.editForm.categoryId=r.categoryId),1==r.nature&&(t.editForm.nature="1"),0==r.nature&&(t.editForm.nature="0")}else e.$message({message:"请求异常",type:"error"})})},addOrg:function(e,t){this.dialogFormVisible=!0,"add"==e||(this.disabled=!this.disabled,this.dialogTitle="编辑配料明细",this.dialogForm.parentId=t.parentId,this.dialogForm.goodsId=t.goodsId,this.dialogForm.type=t.type,this.dialogForm.productInfoId=t.productInfoId,this.dialogForm.serialNo=t.serialNo,this.dialogForm.name=t.name,this.dialogForm.standard=t.standard,this.dialogForm.num=t.num,this.dialogForm.showName=t.showName,this.dialogForm.number=t.number,this.dialogForm.id=t.id)},dialogFormAdd:function(e){var t,a=this;t={goodsId:a.dialogForm.goodsId,type:a.dialogForm.type,productInfoId:a.dialogForm.productInfoId,serialNo:a.dialogForm.serialNo,name:a.dialogForm.name,standard:a.dialogForm.standard,num:a.dialogForm.num,showName:this.dialogForm.showName,parentId:this.dialogForm.parentId,number:a.dialogForm.number,id:a.dialogForm.id},this.$refs[e].validate(function(e){if(!e)return!1;a.saveLoading=!0,Object(l.Kc)(t).then(function(e){200==e.status?a.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){a.saveLoading=!1,a.dialogFormVisible=!1,a.getAjaxList()}}):(a.saveLoading=!1,a.$message({type:"error",message:e.msg}))})})},goBack:function(){this.$router.push({path:"/shopInStock"})},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG或PNG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handleAvatarSuccess:function(e,t){var a=e.data;this.avatarBosKey=a.key,this.avatarBosKey?this.imageUrl=a.thumbnailUrl:this.$message.error("上传失败!")},submitForm:function(e){var t=this,a=this;this.$refs[e].validate(function(e){if(!e)return!1;if(a.saveLoading=!0,0==t.editForm.price)return t.$message({type:"error",message:"菜品价格不能为0"}),a.saveLoading=!1,!1;var r={id:a.id,num:a.editForm.num,type:a.editForm.type,productInfoId:a.editForm.productInfoId,price:a.editForm.price,isSale:a.editForm.isSale,isSide:a.editForm.isSide,isDiscount:a.editForm.isDiscount,remark:a.editForm.remark,name:a.editForm.name,serialNo:a.editForm.serialNo,standard:a.editForm.standard,picture:a.avatarBosKey,customerId:a.editForm.customerId,categoryId:a.editForm.categoryId,kind:a.editForm.kind,nature:a.editForm.nature};Object(l.Lc)(r).then(function(e){console.log(e),200==e.status?t.$message({type:"success",message:"操作成功!",duration:300,onClose:function(){a.id=e.data.id,a.requestGoodsInfo(),a.saveLoading=!1}}):t.$message({type:"info",message:e.msg})})})}},beforeMount:function(){this.getAjaxCategory(),this.id&&(this.requestGoodsInfo(),this.getAjaxList())}},n=(a("hb6g"),a("KHd+")),s=Object(n.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/shopInStock"}}},[e._v("门店商品管理")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(""==e.id?"新增":"编辑"))])],1),e._v(" "),a("div",{staticClass:"contentBody"},[a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"排序号",prop:"num"}},[a("el-input-number",{staticStyle:{width:"216px"},attrs:{min:0,max:999999999},model:{value:e.editForm.num,callback:function(t){e.$set(e.editForm,"num",e._n(t))},expression:"editForm.num"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"菜品分类","label-width":e.formLabelWidth,prop:"categoryId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeCategory},model:{value:e.editForm.categoryId,callback:function(t){e.$set(e.editForm,"categoryId",t)},expression:"editForm.categoryId"}},e._l(e.categoryList,function(e){return a("el-option",{attrs:{label:e.name,value:e.id}})}),1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.commodityName,"label-width":e.formLabelWidth,prop:"productInfoId"}},[a("el-input",{staticStyle:{width:"216px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}}),e._v(" "),""==e.id?a("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:e.handleRowClick}}):e._e()],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"菜品种类",prop:"kind","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.kind,callback:function(t){e.$set(e.editForm,"kind",t)},expression:"editForm.kind"}},e._l(e.kindList,function(e){return a("el-option",{attrs:{label:e.name,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"菜品性质",prop:"nature","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.nature,callback:function(t){e.$set(e.editForm,"nature",t)},expression:"editForm.nature"}},[a("el-option",{attrs:{label:"成品菜",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"配菜/料",value:"1"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"是否上架",prop:"isSale"}},[[a("el-radio",{attrs:{label:"1"},model:{value:e.editForm.isSale,callback:function(t){e.$set(e.editForm,"isSale",t)},expression:"editForm.isSale"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"0"},model:{value:e.editForm.isSale,callback:function(t){e.$set(e.editForm,"isSale",t)},expression:"editForm.isSale"}},[e._v("否")])]],2)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"是否配料",prop:"isSide"}},[[a("el-radio",{attrs:{label:"1"},model:{value:e.editForm.isSide,callback:function(t){e.$set(e.editForm,"isSide",t)},expression:"editForm.isSide"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"0"},model:{value:e.editForm.isSide,callback:function(t){e.$set(e.editForm,"isSide",t)},expression:"editForm.isSide"}},[e._v("否")])]],2)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"是否打折",prop:"isDiscount"}},[[a("el-radio",{attrs:{label:0},model:{value:e.editForm.isDiscount,callback:function(t){e.$set(e.editForm,"isDiscount",t)},expression:"editForm.isDiscount"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:1},model:{value:e.editForm.isDiscount,callback:function(t){e.$set(e.editForm,"isDiscount",t)},expression:"editForm.isDiscount"}},[e._v("否")])]],2)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input-number",{staticStyle:{width:"216px"},attrs:{min:0,max:999999999},model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"照片",prop:"avatarBosKey"}},[[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upLoadAction,headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("div",{staticClass:"el-upload__tip"},[e._v("只能上传jpg/png文件，且不超过2M")])]],2),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.submitForm("editForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("返回")])],1)],1),e._v(" "),0==e.editForm.isSide&&e.id?a("div",{staticClass:"contentBody"},[a("el-form",{staticClass:"demo-form-inline",attrs:{"label-width":"60px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(t){return e.handleClickDetail("","","add")}}})],1)],1)],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"序号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"showName",label:"显示名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"打包编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"打包名称",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"number",label:"数量",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"num",label:"排序号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleClickDetail(t.$index,t.row,"edit")}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleClickDetail(t.$index,t.row,"delete")}}},[e._v("删除")])]}}],null,!1,2993806499)})],1)],1):e._e()],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTreeTitle,visible:e.dialogTreeFormVisible,width:"80%",top:"5vh"},on:{"update:visible":function(t){e.dialogTreeFormVisible=t}}},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"打包",name:"1"}},[a("el-container",[a("el-aside",[a("el-tree",{attrs:{"highlight-current":!0,"node-key":"id","default-expand-all":"",data:e.orgTreeData,props:e.defaultProps,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),a("el-main",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchTreeForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"编号",clearable:""},model:{value:e.searchTreeForm.serialNo,callback:function(t){e.$set(e.searchTreeForm,"serialNo",t)},expression:"searchTreeForm.serialNo "}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"名称",clearable:""},model:{value:e.searchTreeForm.name,callback:function(t){e.$set(e.searchTreeForm,"name",t)},expression:"searchTreeForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearchTree(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableTreeData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"编号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleClickTreeAdd(t.$index,t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.paramTree.pageNo,"page-size":e.paramTree.pageSize,layout:"total,prev, pager, next",total:e.totalTreeNum},on:{"current-change":e.handleCurrentChangeTree,"update:currentPage":function(t){return e.$set(e.paramTree,"pageNo",t)},"update:current-page":function(t){return e.$set(e.paramTree,"pageNo",t)}}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"原材料",name:"2"}},[a("el-container",[a("el-aside",[a("el-tree",{attrs:{"highlight-current":!0,"node-key":"id","default-expand-all":"",data:e.orgTreeData2,props:e.defaultProps,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick2}})],1),e._v(" "),a("el-main",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchTreeForm2,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"编号",clearable:""},model:{value:e.searchTreeForm2.serialNo,callback:function(t){e.$set(e.searchTreeForm2,"serialNo",t)},expression:"searchTreeForm2.serialNo "}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"名称",clearable:""},model:{value:e.searchTreeForm2.name,callback:function(t){e.$set(e.searchTreeForm2,"name",t)},expression:"searchTreeForm2.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearchTree2(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableTreeData2,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"原料编号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"原料名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"stock",label:"库存量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleClickTreeAdd2(t.$index,t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.paramTree2.pageNo,"page-size":e.paramTree2.pageSize,layout:"total,prev, pager, next",total:e.totalTreeNum2},on:{"current-change":e.handleCurrentChangeTree2,"update:currentPage":function(t){return e.$set(e.paramTree2,"pageNo",t)},"update:current-page":function(t){return e.$set(e.paramTree2,"pageNo",t)}}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"复合调料包",name:"3"}},[a("el-container",[a("el-main",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchTreeForm3,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"编号",clearable:""},model:{value:e.searchTreeForm3.serialNo,callback:function(t){e.$set(e.searchTreeForm3,"serialNo",t)},expression:"searchTreeForm3.serialNo "}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{maxlength:200,autocomplete:"off",placeholder:"名称",clearable:""},model:{value:e.searchTreeForm3.name,callback:function(t){e.$set(e.searchTreeForm3,"name",t)},expression:"searchTreeForm3.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{icon:"el-icon-search",circle:"","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearchTree3(t)}}})],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableTreeData3,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"编号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"standard",label:"单位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleClickTreeAdd4(t.$index,t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.paramTree3.pageNo,"page-size":e.paramTree3.pageSize,layout:"total,prev, pager, next",total:e.totalTreeNum3},on:{"current-change":e.handleCurrentChangeTree2,"update:currentPage":function(t){return e.$set(e.paramTree3,"pageNo",t)},"update:current-page":function(t){return e.$set(e.paramTree3,"pageNo",t)}}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogTreeFormVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTreeTitle2,visible:e.dialogTreeFormVisible2,width:"80%",top:"5vh"},on:{"update:visible":function(t){e.dialogTreeFormVisible2=t}}},[a("el-container",[a("el-main",[a("el-table",{attrs:{data:e.tableTreeData3,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"serialNo",label:"打包编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"打包名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"safeStock",label:"数量",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{staticStyle:{width:"130px"},attrs:{min:0},model:{value:e.tableTreeData3[t.$index].number,callback:function(a){e.$set(e.tableTreeData3[t.$index],"number",a)},expression:"tableTreeData3[scope.$index].number"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleClickTreeAdd3(t.$index,t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.paramTree3.pageNo,"page-size":e.paramTree3.pageSize,layout:"total,prev, pager, next",total:e.totalTreeNum3},on:{"current-change":e.handleCurrentChangeTree,"update:currentPage":function(t){return e.$set(e.paramTree3,"pageNo",t)},"update:current-page":function(t){return e.$set(e.paramTree3,"pageNo",t)}}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogTreeFormVisible2=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"800px",left:"25%"},attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"排序号","label-width":e.formLabelWidth}},[a("el-input-number",{staticStyle:{width:"216px"},attrs:{min:0,max:999999999},model:{value:e.dialogForm.num,callback:function(t){e.$set(e.dialogForm,"num",t)},expression:"dialogForm.num"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"打包编号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",disabled:""},model:{value:e.dialogForm.serialNo,callback:function(t){e.$set(e.dialogForm,"serialNo",t)},expression:"dialogForm.serialNo"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"打包名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",disabled:""},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"316px"},attrs:{label:"显示名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.dialogForm.showName,callback:function(t){e.$set(e.dialogForm,"showName",t)},expression:"dialogForm.showName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数量","label-width":e.formLabelWidth}},[a("el-input-number",{staticStyle:{width:"216px"},attrs:{min:0,max:999999999},model:{value:e.dialogForm.number,callback:function(t){e.$set(e.dialogForm,"number",t)},expression:"dialogForm.number"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:function(t){return e.dialogFormAdd("dialogForm")}}},[e._v("确 定")])],1)],1)],1)},[],!1,null,"64828a3d",null);s.options.__file="editInShopInStock.vue";t.default=s.exports},"RU/L":function(e,t,a){a("Rqdy");var r=a("WEpk").Object;e.exports=function(e,t,a){return r.defineProperty(e,t,a)}},Rqdy:function(e,t,a){var r=a("Y7ZC");r(r.S+r.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},SEkw:function(e,t,a){e.exports={default:a("RU/L"),__esModule:!0}},YEIV:function(e,t,a){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(a("SEkw"));t.default=function(e,t,a){return t in e?(0,r.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},hb6g:function(e,t,a){"use strict";var r=a("jI90");a.n(r).a},jI90:function(e,t,a){}}]);