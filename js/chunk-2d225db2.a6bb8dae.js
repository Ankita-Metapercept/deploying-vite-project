(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225db2"],{e5d0:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("PageHeader",{attrs:{title:t.title,items:t.items}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[t._v("Bootstrap-session-timeout")]),i("p",{staticClass:"sub-header"},[t._v(" Session timeout and keep-alive control with a nice Bootstrap warning dialog. ")]),i("div",[i("p",[t._v(' After a set amount of idle time, a Bootstrap warning dialog is shown to the user with the option to either log out, or stay connected. If "Logout" button is selected, the page is redirected to a logout URL. If "Stay Connected" is selected the dialog closes and the session is kept alive. If no option is selected after another set amount of idle time, the page is automatically redirected to a set timeout URL. ')]),i("p",[t._v("Idle time is defined as no mouse, keyboard or touch event activity registered by the browser.")]),i("p",{staticClass:"mb-0"},[t._v(" As long as the user is active, the (optional) keep-alive URL keeps getting pinged and the session stays alive. If you have no need to keep the server-side session alive via the keep-alive URL, you can also use this plugin as a simple lock mechanism that redirects to your lock-session or log-out URL after a set amount of idle time. ")])])])])])])],1)},s=[],n=(i("a4d3"),i("e01a"),i("3d20")),a=i.n(n),c=i("5658"),l=i("2579"),r=i("c2a4"),u={page:{title:"Session Timeout",meta:[{name:"description",content:r.description}]},components:{Layout:c["a"],PageHeader:l["a"]},data:function(){return{title:"Session Timeout",items:[{text:"UI Elements",href:"/"},{text:"Session Timeout",active:!0}],timeralert:null,timerswitch:!1,seconds:0}},mounted:function(){this.main_function()},methods:{main_function:function(){setTimeout(function(){setTimeout(function(){this.function1()}.bind(this),6e3),this.function2()}.bind(this),6e3)},tick:function(){var t=this;this.interval=setInterval((function(){t.seconds=t.seconds+1}),1e3)},function1:function(){"/ui/session-timeout"===window.location.pathname&&(window.location="/login")},function2:function(){var t=this;this.tick(),a.a.fire({showCancelButton:!0,confirmButtonText:"Stay Connected",cancelBtnText:"Logout",confirmBtnBsStyle:"success",cancelBtnBsStyle:"danger",title:"Your Session is About to Expire!",onClose:function(){return t.hideAlert()},html:"Redirecting in 10s seconds"})}}},d=u,h=i("2877"),m=Object(h["a"])(d,o,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d225db2.a6bb8dae.js.map