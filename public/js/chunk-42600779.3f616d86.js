(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42600779"],{5863:function(t,e,i){},"794d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticClass:"layout-container"},[t.showAside?i("el-aside",{staticClass:"admin-view-aside",attrs:{width:t.isCollapse?"65px":"240px"}},[i("el-menu",{staticClass:"admin-view-menu",attrs:{"default-active":t.active,router:!0,collapse:t.isCollapse}},[i("el-menu-item",{attrs:{index:"/admin/document"}},[i("i",{staticClass:"wi wi-folder"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的文档管理")])]),i("div",{staticClass:"line"}),i("el-menu-item",{attrs:{index:"/admin/document/star"}},[i("i",{staticClass:"wi wi-star"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的星标")])]),i("el-menu-item",{attrs:{index:"/admin/document/history"}},[i("i",{staticClass:"wi wi-waiting"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("历史查看")])]),i("el-menu-item",{attrs:{index:"/admin/document/involved"}},[i("i",{staticClass:"wi wi-wocanyude"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("我参与的")])])],1)],1):t._e(),i("el-main",[i("router-view")],1)],1)},n=[],s=(i("7f7f"),{data:function(){return{active:"/admin/document",isCollapse:!1,showAside:!0}},watch:{$route:function(t){"manageSetting"===t.name||"chapter"===t.name?this.showAside=!1:this.showAside=!0}},beforeRouteEnter:function(t,e,i){i((function(e){"/admin/document/star"==t.path||"/admin/document/history"==t.path||"/admin/document/involved"==t.path?e.active=t.path:e.active="/admin/document","manageSetting"===t.name||"chapter"===t.name?e.showAside=!1:e.showAside=!0}))}}),o=s,c=(i("e787"),i("2877")),l=Object(c["a"])(o,a,n,!1,null,"c920d438",null);e["default"]=l.exports},"7f7f":function(t,e,i){var a=i("86cc").f,n=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in n||i("9e1e")&&a(n,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},e787:function(t,e,i){"use strict";var a=i("5863"),n=i.n(a);n.a}}]);