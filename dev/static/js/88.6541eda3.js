(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"1/QJ":function(e,t,a){"use strict";var r=a("LiYZ");a.n(r).a},LiYZ:function(e,t,a){},"RU/L":function(e,t,a){a("Rqdy");var r=a("WEpk").Object;e.exports=function(e,t,a){return r.defineProperty(e,t,a)}},Rqdy:function(e,t,a){var r=a("Y7ZC");r(r.S+r.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},SEkw:function(e,t,a){e.exports={default:a("RU/L"),__esModule:!0}},YEIV:function(e,t,a){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(a("SEkw"));t.default=function(e,t,a){return t in e?(0,r.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},mdvC:function(e,t,a){"use strict";a.r(t);var r,n=a("YEIV"),l=a.n(n),i=a("TsPW"),o={name:"merchant",data:function(){return{loading:!1,searchForm:{time:"",customerName:"",createTime:""},tableData:[],param:{beginDate:"",endDate:"",name:"",orderNo:"",pageNo:1,pageSize:20},totalNum:0,shopData:[]}},methods:(r={onPickHandle:function(e){this.onSearch()},resetForm:function(e){this.$refs[e].resetFields(),this.onSearch()},getShop:function(){var e=this;Object(i.td)(this.param).then(function(t){var a=t.data.items;a.length>0&&(e.shopData=a)})},handleSizeChange:function(e){var t=this;t.param.pageSize=e,Object(i.tb)(t.param).then(function(e){t.loading=!1;var a=e.data.items;a&&a.length>0?(t.tableData=a,t.totalNum=t.tableData.length):(t.tableData=[],t.totalNum=0)})},indexMethod:function(e){return(this.param.pageNo-1)*this.param.pageSize+e+1},handleClick:function(e,t,a){if("export"==a){this.searchForm.time&&this.searchForm.time.length>0&&(this.searchForm.time.length>0?this.searchForm.time[0]:"",this.searchForm.time.length>0?this.searchForm.time[1]:""),location.href=i.He+"/export/consumeDetailReport?createTime="+this.searchForm.createTime+"&customerName="+this.param.customerName}else"detail"==a&&(sessionStorage.setItem("inStockReportId",t.id),this.$router.push({path:"/instockreportdetail"}))},onSearch:function(){this.param.pageNo=1,this.param.customerName=this.searchForm.customerName,this.param.createTime=this.searchForm.createTime,this.getAjaxList()},handleCurrentChange:function(e){this.param.pageNo=e,this.getAjaxList()}},l()(r,"handleSizeChange",function(e){this.param.pageNo=1,this.param.pageSize=e,this.getAjaxList()}),l()(r,"getAjaxList",function(){var e=this;e.loading=!0,Object(i.i)(e.param).then(function(t){e.loading=!1;var a=t.data;a&&a.length>0?(e.tableData=a,e.totalNum=e.tableData.length):(e.tableData=[],e.totalNum=0)})}),r),filters:{substr:function(e){if(null!=e)return e.toFixed(2)}},beforeMount:function(){this.getShop()}},s=(a("1/QJ"),a("KHd+")),c=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("日消费报表统计")])],1),e._v(" "),a("div",{staticClass:"contentBody",staticStyle:{"padding-bottom":"0px"}},[a("el-form",{ref:"ruleForm",attrs:{model:e.searchForm,inline:"","label-width":"100px","label-position":"left"}},[a("el-form-item",{attrs:{label:"选择日期"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.createTime,callback:function(t){e.$set(e.searchForm,"createTime",t)},expression:"searchForm.createTime"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"选择门店"}},[a("el-select",{attrs:{placeholder:"请选择门店"},model:{value:e.searchForm.customerName,callback:function(t){e.$set(e.searchForm,"customerName",t)},expression:"searchForm.customerName"}},e._l(e.shopData,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),a("el-form-item",{staticStyle:{"padding-left":"20px"}},[a("el-button",{attrs:{type:"success","native-type":"submit"},nativeOn:{click:function(t){return t.preventDefault(),e.onSearch(t)}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contentBody",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(241, 242, 247, 0.5)"}},[a("div",{staticStyle:{"padding-bottom":"20px","text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClick("","","export")}}},[e._v("导出")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center",type:"index",index:e.indexMethod,label:"行号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"ymdTime",label:"时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"customerName",label:"门店"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"category",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"number",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"unit",label:"单位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"price",label:"应收单价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.price)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"costPrice",label:"成本价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.costPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"sumPrice",label:"应收金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.sumPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"realitySumPrice",label:"实收金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.realitySumPrice)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center",prop:"discountAmount",label:"优惠金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("substr")(t.row.discountAmount)))])]}}])})],1)],1)],1)},[],!1,null,"0d57a749",null);c.options.__file="consumption.vue";t.default=c.exports}}]);