(this.webpackJsonpinfox=this.webpackJsonpinfox||[]).push([[0],{211:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(10),i=a.n(n),r=a(20),o=a(21),l=a(61),d=a(23),j=a(22),b=a(11),m=a(14),h=a(53),x=a(1),u=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){var t={};t[e.target.getAttribute("name")]=e.target.value,s.setState(t)},s.LoginFormHandle=function(e){e.preventDefault(),m.b.loading("Please wait",{username:s.state.username,password:s.state.password}),h.a.post("/login",s.state).then((function(e){m.b.hide(),s.setState({error:null}),sessionStorage.setItem("token",e.data.token),s.props.history.push("/")})).catch((function(e){m.b.fail("".concat(e),.8),s.setState({error:"invalid login"})}))},s.state={username:"",password:"",error:null},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{style:{width:"100vw",height:"100vh",background:"url(https://picsum.photos/1280/720)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row justify-content-center mt-5",children:Object(x.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6",children:Object(x.jsxs)("div",{className:"card o-hidden border-0 shadow my-5",children:[Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("div",{className:"p-3",children:[Object(x.jsxs)("div",{className:"text-center mb-4",children:[Object(x.jsx)("img",{src:"https://www.dreamindiaschool.com/cdn/logop.png",alt:"logo",className:"img-fluid col-10"}),null!==this.state.error?Object(x.jsx)("p",{className:"m-1 text-danger",children:this.state.error}):null]}),Object(x.jsxs)("form",{className:"user",autoComplete:"off",onSubmit:this.LoginFormHandle,children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"username",onChange:this.onChangeHandler,value:this.state.username,type:"username",className:"form-control form-control-user","aria-describedby":"usernameHelp",placeholder:"Username",required:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"password",onChange:this.onChangeHandler,value:this.state.password,type:"password",className:"form-control form-control-user",placeholder:"Password",required:!0})}),Object(x.jsx)("button",{className:"btn btn-primary btn-user btn-block",children:"Login"})]})]}),Object(x.jsx)("p",{className:"text-center",style:{fontSize:"7pt"},children:"\xa9 Azba India"})]}),Object(x.jsx)("p",{className:"text-center",style:{fontSize:"8pt"},children:Object(x.jsxs)("b",{children:["V ","0.1.3"]})})]})})})})})})}}]),a}(c.a.Component),O=Object(b.h)(u),p=a(52),f=a.n(p),g=a(12),v=a(25),N=a(33),y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("li",{className:"nav-item dropdown no-arrow",children:[Object(x.jsxs)(g.c,{className:"nav-link dropdown-toggle",to:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(x.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:this.context.u_name}),Object(x.jsx)("i",{className:"fas fa-user fa-fw"})]}),Object(x.jsxs)("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown",children:[Object(x.jsx)("div",{className:"dropdown-item d-none d-sm-block d-md-none text-gray-600 small",children:this.context.u_name}),"admin"===this.context.u_type||"root"===this.context.u_type?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(g.b,{className:"dropdown-item",to:"/setting/activity",children:[Object(x.jsx)("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"]}),Object(x.jsxs)(g.b,{className:"dropdown-item",to:"/setting/profile",children:[Object(x.jsx)("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"]}),Object(x.jsxs)(g.b,{className:"dropdown-item",to:"/setting",children:[Object(x.jsx)("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"]}),Object(x.jsx)("div",{className:"dropdown-divider"})]}):Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)("a",{className:"dropdown-item",href:"#infox","data-toggle":"modal","data-target":"#logoutModal",children:[Object(x.jsx)("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"]})]})]})}}]),a}(c.a.Component);y.contextType=N.a;var w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("li",{className:"nav-item dropdown no-arrow mx-1",children:[Object(x.jsxs)(g.c,{className:"nav-link dropdown-toggle",to:"/#",id:"messagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(x.jsx)("i",{className:"fas fa-envelope fa-fw"}),Object(x.jsx)("span",{className:"badge badge-danger badge-counter",children:"7"})]}),Object(x.jsxs)("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"messagesDropdown",children:[Object(x.jsx)("h6",{className:"dropdown-header",children:"Message Center"}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(x.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/fn_BT9fwg_E/60x60",alt:""}),Object(x.jsx)("div",{className:"status-indicator bg-success"})]}),Object(x.jsxs)("div",{className:"font-weight-bold",children:[Object(x.jsx)("div",{className:"text-truncate",children:"Hi there! I am wondering if you can help me with a problem I've been having."}),Object(x.jsx)("div",{className:"small text-gray-500",children:"Emily Fowler \xb7 58m"})]})]}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(x.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/AU4VPcFN4LE/60x60",alt:""}),Object(x.jsx)("div",{className:"status-indicator"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"text-truncate",children:"I have the photos that you ordered last month, how would you like them sent to you?"}),Object(x.jsx)("div",{className:"small text-gray-500",children:"Jae Chun \xb7 1d"})]})]}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(x.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/CS2uCrpNzJY/60x60",alt:""}),Object(x.jsx)("div",{className:"status-indicator bg-warning"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"text-truncate",children:"Last month's report looks great, I am very happy with the progress so far, keep up the good work!"}),Object(x.jsx)("div",{className:"small text-gray-500",children:"Morgan Alvarez \xb7 2d"})]})]}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(x.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/Mv9hjnEUHR4/60x60",alt:""}),Object(x.jsx)("div",{className:"status-indicator bg-success"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"text-truncate",children:"Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."}),Object(x.jsx)("div",{className:"small text-gray-500",children:"Chicken the Dog \xb7 2w"})]})]}),Object(x.jsx)("a",{className:"dropdown-item text-center small text-gray-500",href:"#infox",children:"Read More Messages"})]})]})}}]),a}(c.a.Component);w.contextType=N.a;var k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("li",{className:"nav-item dropdown no-arrow mx-1",children:[Object(x.jsxs)(g.c,{className:"nav-link dropdown-toggle",to:"/#",id:"alertsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(x.jsx)("i",{className:"fas fa-bell fa-fw"}),Object(x.jsx)("span",{className:"badge badge-danger badge-counter",children:"3+"})]}),Object(x.jsxs)("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"alertsDropdown",children:[Object(x.jsx)("h6",{className:"dropdown-header",children:"Alerts Center"}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsx)("div",{className:"mr-3",children:Object(x.jsx)("div",{className:"icon-circle bg-primary",children:Object(x.jsx)("i",{className:"fas fa-file-alt text-white"})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"small text-gray-500",children:"December 12, 2019"}),Object(x.jsx)("span",{className:"font-weight-bold",children:"A new monthly report is ready to download!"})]})]}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsx)("div",{className:"mr-3",children:Object(x.jsx)("div",{className:"icon-circle bg-success",children:Object(x.jsx)("i",{className:"fas fa-donate text-white"})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"small text-gray-500",children:"December 7, 2019"}),"$290.29 has been deposited into your account!"]})]}),Object(x.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(x.jsx)("div",{className:"mr-3",children:Object(x.jsx)("div",{className:"icon-circle bg-warning",children:Object(x.jsx)("i",{className:"fas fa-exclamation-triangle text-white"})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"small text-gray-500",children:"December 2, 2019"}),"Spending Alert: We've noticed unusually high spending for your account."]})]}),Object(x.jsx)("a",{className:"dropdown-item text-center small text-gray-500",href:"#infox",children:"Show All Alerts"})]})]})}}]),a}(c.a.Component);k.contextType=N.a,k=Object(b.h)(k),y=Object(b.h)(y),w=Object(b.h)(w);var _=a(84),S=a.n(_),C=a(116),D=a(49),I=a.n(D),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).get_place=function(){I.a.get("http://api.positionstack.com/v1/reverse?access_key=8adeff7f3eba5e4af8e780bb0172c545&limit=1&query=".concat(s.state.latitude,",").concat(s.state.longitude)).then((function(e){s.setState({positionStack:e.data})})).catch((function(e){s.setState({error:"".concat(e)})}))},s.get_place_locationiq=function(){I.a.get("https://us1.locationiq.com/v1/reverse.php?key=78a0e5fd31043f&lat=".concat(s.state.latitude,"&lon=").concat(s.state.longitude,"&format=json")).then((function(e){s.setState({locationiq:e.data})})).catch((function(e){s.setState({error:"".concat(e)})}))},s.position=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){s.setState({latitude:e.coords.latitude,longitude:e.coords.longitude}),s.get_place_locationiq()}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),s.handlePermission=function(){navigator.permissions.query({name:"geolocation"}).then((function(e){s.setState({geolocation:e.state}),e.onchange=function(){s.setState({geolocation:e.state})}}))},s.state={locationiq:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handlePermission()}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("hr",{}),"granted"===this.state.geolocation||"prompt"===this.state.geolocation?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("button",{onClick:this.position,className:"btn btn-primary btn-lg",children:[Object(x.jsx)("i",{className:"fa fa-street-view"})," Clock In"]}),Object(x.jsx)("hr",{})," ",this.state.geolocation," -",void 0!==this.state.locationiq.display_name?Object(x.jsx)("p",{children:this.state.locationiq.display_name}):Object(x.jsx)(x.Fragment,{children:"Place"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h3",{children:[Object(x.jsx)("i",{className:"fas fa-exclamation-triangle"})," Location permission ",this.state.geolocation]}),Object(x.jsx)("p",{children:"Please reset the site setting/permissions"})]})]})}}]),a}(c.a.Component),q=Object(b.h)(L),A=a.p+"static/media/load.fba03497.gif",F=Object(s.lazy)((function(){return a.e(6).then(a.bind(null,225))})),M=Object(s.lazy)((function(){return a.e(5).then(a.bind(null,226))})),P=Object(s.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,227))})),z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).closeSidebar=function(){f()(window).width()<700&&(f()("body").toggleClass("sidebar-toggled"),f()(".sidebar").toggleClass("toggled"),f()(".sidebar").hasClass("toggled")&&window.$(".sidebar .collapse").collapse("hide"))},s.state={infox_user_data:null},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.src="/infox/js/sb-admin-2.min.js",e.appendChild(t)}},{key:"render",value:function(){var e=this;return"admin"===this.context.u_type||"root"===this.context.u_type?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{id:"wrapper",children:[Object(x.jsxs)("ul",{className:"navbar-nav bg-gradient-dark sidebar toggled sidebar-dark accordion d-print-none",id:"accordionSidebar",children:[Object(x.jsxs)(g.b,{onClick:this.closeSidebar,className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/",children:[Object(x.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(x.jsx)("i",{className:"fas fa-handshake"})}),Object(x.jsxs)("div",{className:"sidebar-brand-text mx-3",children:["InfoX",Object(x.jsx)("sup",{children:"0.1.3"})]})]}),Object(x.jsx)("hr",{className:"sidebar-divider my-0"}),Object(x.jsx)(g.c,{className:"nav-item text-decoration-none",to:"/dashboard",children:Object(x.jsxs)("span",{className:"nav-link",href:"#dashboard",children:[Object(x.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(x.jsx)("span",{children:"Dashboard"})]})}),Object(x.jsx)("hr",{className:"sidebar-divider"}),Object(x.jsx)("div",{className:"sidebar-heading",children:"Assets"}),Object(x.jsx)(g.c,{className:"nav-item text-decoration-none",to:"/catalogue",children:Object(x.jsxs)("span",{className:"nav-link",children:[Object(x.jsx)("i",{className:"fas fa-fw fa-book"}),Object(x.jsx)("span",{children:"catalogue"})]})}),Object(x.jsx)("hr",{className:"sidebar-divider"}),Object(x.jsx)(g.c,{className:"nav-item text-decoration-none",to:"/quotation",children:Object(x.jsxs)("span",{className:"nav-link",children:[Object(x.jsx)("i",{className:"fas fa-fw fa-quote-left"}),Object(x.jsx)("span",{children:"Quotation"})]})}),Object(x.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(x.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(x.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(x.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column",children:[Object(x.jsxs)("div",{id:"content",className:"amy-crisp-gradient",children:[Object(x.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(x.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(x.jsx)("i",{className:"fa fa-bars"})}),Object(x.jsx)("form",{className:"d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsxs)("div",{className:"input-group-append",children:[" ",Object(x.jsxs)("button",{className:"btn btn-success btn-sm",type:"button",children:[" ",Object(x.jsx)("i",{className:"fas fa-building","aria-hidden":"true"})," "]})," "]}),Object(x.jsx)("input",{readOnly:!0,id:"infoxserver",type:"text",value:"Dream india School Aid (2022-23)",className:"form-control bg-light border-0 font-weight-bold","aria-label":"Search","aria-describedby":"basic-addon2"})]})}),Object(x.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(x.jsx)(k,{}),Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(x.jsx)(y,{})]})]}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsx)(s.Suspense,{fallback:Object(x.jsx)("div",{children:Object(x.jsx)("img",{alt:"loadimage",src:A})}),children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/dashboard",children:"Dashboard"}),Object(x.jsx)(b.b,{path:"/setting",component:F}),Object(x.jsx)(b.b,{path:"/catalogue",component:M}),Object(x.jsx)(b.b,{path:"/quotation",component:P}),Object(x.jsxs)(b.b,{exact:!0,path:"/",children:[Object(x.jsxs)("h5",{children:["Welcome, ",this.context.u_name]}),Object(x.jsx)(q,{})]}),Object(x.jsx)(b.b,{path:"*",children:Object(x.jsx)("div",{id:"content",children:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("div",{className:"error mx-auto","data-text":403,children:"403"}),Object(x.jsx)("p",{className:"lead text-gray-800 mb-3",children:"Access Denied"}),Object(x.jsx)("p",{className:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(x.jsx)("hr",{width:"20%"})]})})})})})]})})})]}),Object(x.jsx)("footer",{className:"sticky-footer bg-white",children:Object(x.jsx)("div",{className:"container my-auto",children:Object(x.jsx)("div",{className:"copyright text-center my-auto",children:Object(x.jsx)("span",{children:" \xa9 Azba India "})})})})]})]}),Object(x.jsx)("a",{className:"scroll-to-top rounded",href:"#page-top",title:"scroll to top",children:Object(x.jsx)("i",{className:"fas fa-angle-up"})}),Object(x.jsx)("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(x.jsx)("div",{className:"modal-dialog",role:"document",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Leave?"}),Object(x.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:'Select "Logout" below if you are ready to end your current session.'}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{className:"btn btn-primary","data-dismiss":"modal",onClick:function(){Object(v.d)(),e.props.history.replace("/")},children:"Logout"})]})]})})})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{id:"wrapper",children:[Object(x.jsxs)("ul",{className:"navbar-nav bg-gradient-primary sidebar toggled sidebar-dark accordion d-print-none",id:"accordionSidebar",children:[Object(x.jsxs)(g.b,{onClick:this.closeSidebar,className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/",children:[Object(x.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(x.jsx)("i",{className:"fas fa-handshake"})}),Object(x.jsxs)("div",{className:"sidebar-brand-text mx-3",children:["InfoX",Object(x.jsx)("sup",{children:"0.1.3"})]})]}),Object(x.jsx)("hr",{className:"sidebar-divider my-0"}),Object(x.jsx)(g.c,{onClick:this.closeSidebar,className:"nav-item text-decoration-none",to:"/dashboard",children:Object(x.jsxs)("span",{className:"nav-link",href:"#dashboard",children:[Object(x.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(x.jsx)("span",{children:"Dashboard"})]})}),Object(x.jsx)("hr",{className:"sidebar-divider"}),Object(x.jsx)(g.c,{onClick:this.closeSidebar,className:"nav-item text-decoration-none",to:"/quotation",children:Object(x.jsxs)("span",{className:"nav-link",children:[Object(x.jsx)("i",{className:"fas fa-fw fa-quote-left"}),Object(x.jsx)("span",{children:"Quotation"})]})}),Object(x.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(x.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(x.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(x.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column",children:[Object(x.jsxs)("div",{id:"content",className:"amy-crisp-gradient",children:[Object(x.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(x.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(x.jsx)("i",{className:"fa fa-bars"})}),Object(x.jsx)("form",{className:"d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsxs)("div",{className:"input-group-append",children:[" ",Object(x.jsxs)("button",{className:"btn btn-success btn-sm",type:"button",children:[" ",Object(x.jsx)("i",{className:"fas fa-building","aria-hidden":"true"})," "]})," "]}),Object(x.jsx)("input",{readOnly:!0,id:"infoxserver",type:"text",value:"Dream india",className:"form-control bg-light border-0 font-weight-bold","aria-label":"Search","aria-describedby":"basic-addon2"})]})}),Object(x.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(x.jsx)(y,{})]})]}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsx)(s.Suspense,{fallback:Object(x.jsx)("div",{children:Object(x.jsx)("img",{alt:"loadimage",src:A})}),children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/dashboard",children:"Dashboard"}),Object(x.jsxs)(b.b,{exact:!0,path:"/",children:[Object(x.jsxs)("h5",{children:["Welcome, ",this.context.u_name]}),Object(x.jsx)(q,{})]}),Object(x.jsx)(b.b,{path:"/quotation",component:P}),Object(x.jsx)(b.b,{path:"*",children:Object(x.jsx)("div",{id:"content",children:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("div",{className:"error mx-auto","data-text":404,children:"404"}),Object(x.jsx)("p",{className:"lead text-gray-800 mb-3",children:"Not Found"}),Object(x.jsx)("p",{className:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(x.jsx)("hr",{width:"20%"})]})})})})})]})})})]}),Object(x.jsx)("footer",{className:"sticky-footer bg-white",children:Object(x.jsx)("div",{className:"container my-auto",children:Object(x.jsx)("div",{className:"copyright text-center my-auto",children:Object(x.jsx)("span",{children:" \xa9 Azba India "})})})})]})]}),Object(x.jsx)("a",{className:"scroll-to-top rounded",href:"#page-top",title:"scroll to top",children:Object(x.jsx)("i",{className:"fas fa-angle-up"})}),Object(x.jsx)("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(x.jsx)("div",{className:"modal-dialog",role:"document",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Logout?"}),Object(x.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:'Select "Logout" below if you want to end your current session.'}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{className:"btn btn-primary","data-dismiss":"modal",onClick:function(){Object(v.d)(),e.props.history.replace("/")},children:"Logout"})]})]})})})]})}}]),a}(c.a.Component);z.contextType=N.a;var T=Object(b.h)(z),H=(a(210),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).load_infox_user_data=function(){h.a.get("/sync_user").then((function(e){s.setState({infox_user_data:e.data,infox_loaded:!0}),m.b.hide()})).catch((function(e){m.b.hide(),s.setState({infox_user_data:null,infox_loaded:!0,error:e})}))},s.state={infox_user_data:null,infox_loaded:!1,error:[]},s.load_infox_user_data=s.load_infox_user_data.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){m.b.loading("Loading",0),Object(v.c)()?this.load_infox_user_data():(Object(v.d)(),this.props.history.replace("/login"))}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:null!==this.state.infox_user_data&&!0===this.state.infox_loaded?Object(x.jsx)(N.a.Provider,{value:this.state.infox_user_data,children:Object(x.jsx)(T,{})}):Object(x.jsx)(x.Fragment,{children:!0===this.state.infox_loaded?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"wrapper",children:Object(x.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column ",children:Object(x.jsx)("div",{id:"content",children:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"text-center",children:[this.state.error.response?Object(x.jsx)("div",{className:"error mx-auto","data-text":this.state.error.response.status,children:this.state.error.response.status}):null,Object(x.jsx)("p",{className:"lead text-gray-800 mb-3",children:this.state.error.message}),Object(x.jsx)("p",{className:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(x.jsx)("a",{href:"tel:00000",children:"\u2190 Contact Support"}),Object(x.jsx)("hr",{width:"20%"}),Object(x.jsx)(g.b,{to:"/logout",children:"Reset"})]})})})})})})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("img",{src:A,alt:"Loader",style:{position:"fixed",top:0,bottom:0,left:0,right:0,margin:"auto"}})})})})}}]),a}(c.a.Component));var E=function(){return Object(x.jsx)(g.a,{basename:"/infox",children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/logout",render:function(){return Object(v.d)(),Object(x.jsx)(b.a,{to:"login"})}}),Object(x.jsx)(v.b,{path:"/login",component:O}),Object(x.jsx)(v.a,{path:"/",component:H})]})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))},25:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return l}));var s=a(39),c=a(85),n=a(11),i=a(1),r=["component"],o=["component"],l=function(){return sessionStorage.getItem("token")||null},d=function(){sessionStorage.removeItem("token")};function j(e){var t=e.component,a=Object(c.a)(e,r);return Object(i.jsx)(n.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){return l()?Object(i.jsx)(n.a,{to:{pathname:"/"}}):Object(i.jsx)(t,Object(s.a)({},e))}}))}function b(e){var t=e.component,a=Object(c.a)(e,o);return Object(i.jsx)(n.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){return l()?Object(i.jsx)(t,Object(s.a)({},e)):Object(i.jsx)(n.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),c=a.n(s).a.createContext()},53:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(49),c=a.n(s),n=a(14),i=a(25),r={baseURL:"/api"},o=c.a.create(r);o.interceptors.request.use((function(e){return e.headers.Authorization=Object(i.c)(),n.b.loading("synchronizing",0,!0),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return n.b.hide(),e}),(function(e){var t="";try{t=e.response.data,401===e.response.status?Object(i.d)():403===e.response.status?n.b.fail("".concat(t),3,null,!1):n.b.fail("".concat(t," ").concat(e),1,null,!1)}catch(a){t=" - ",n.b.offline("".concat(t," ").concat(e))}return Promise.reject(e)}))}},[[211,1,2]]]);