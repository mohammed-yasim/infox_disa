(this.webpackJsonpinfox=this.webpackJsonpinfox||[]).push([[0],{128:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(10),i=a.n(n),r=a(20),o=a(21),l=a(54),d=a(22),j=a(23),b=(a(127),a(128),a(11)),m=a(14),h=a(35),x=a.p+"static/media/logo.2d91a656.png",u=a(1),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){var t={};t[e.target.getAttribute("name")]=e.target.value,s.setState(t)},s.LoginFormHandle=function(e){e.preventDefault(),m.b.loading("Please wait",{username:s.state.username,password:s.state.password}),h.a.post("/login",s.state).then((function(e){m.b.hide(),s.setState({error:null}),sessionStorage.setItem("token",e.data.token),s.props.history.push("/")})).catch((function(e){m.b.fail("".concat(e),.8),s.setState({error:"invalid login"})}))},s.state={username:"",password:"",error:null},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{width:"100vw",height:"100vh",background:"url(https://picsum.photos/1280/720)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row justify-content-center mt-5",children:Object(u.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6",children:Object(u.jsxs)("div",{className:"card o-hidden border-0 shadow my-5",children:[Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{className:"p-3",children:[Object(u.jsxs)("div",{className:"text-center mb-4",children:[Object(u.jsx)("img",{src:x,alt:"logo",className:"img-fluid col-10"}),null!==this.state.error?Object(u.jsx)("p",{className:"m-1 text-danger",children:this.state.error}):null]}),Object(u.jsxs)("form",{className:"user",autoComplete:"off",onSubmit:this.LoginFormHandle,children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{name:"username",onChange:this.onChangeHandler,value:this.state.username,type:"username",className:"form-control form-control-user","aria-describedby":"usernameHelp",placeholder:"Username",required:!0})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{name:"password",onChange:this.onChangeHandler,value:this.state.password,type:"password",className:"form-control form-control-user",placeholder:"Password",required:!0})}),Object(u.jsx)("button",{className:"btn btn-primary btn-user btn-block",children:"Login"})]})]}),Object(u.jsx)("p",{className:"text-center",style:{fontSize:"7pt"},children:"\xa9 Azba India"})]}),Object(u.jsx)("p",{className:"text-center",style:{fontSize:"8pt"},children:Object(u.jsxs)("b",{children:["V ","0.1.3"]})})]})})})})})})}}]),a}(c.a.Component),p=Object(b.h)(O),f=a(52),g=a.n(f),v=a(12),N=a(25),y=a(33),w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("li",{className:"nav-item dropdown no-arrow",children:[Object(u.jsxs)(v.c,{className:"nav-link dropdown-toggle",to:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(u.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:this.context.u_name}),Object(u.jsx)("i",{className:"fas fa-user fa-fw"})]}),Object(u.jsxs)("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown",children:[Object(u.jsx)("div",{className:"dropdown-item d-none d-sm-block d-md-none text-gray-600 small",children:this.context.u_name}),"admin"===this.context.u_type||"root"===this.context.u_type?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(v.b,{className:"dropdown-item",to:"/setting/activity",children:[Object(u.jsx)("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"]}),Object(u.jsxs)(v.b,{className:"dropdown-item",to:"/setting/profile",children:[Object(u.jsx)("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"]}),Object(u.jsxs)(v.b,{className:"dropdown-item",to:"/setting",children:[Object(u.jsx)("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"]}),Object(u.jsx)("div",{className:"dropdown-divider"})]}):Object(u.jsx)(u.Fragment,{}),Object(u.jsxs)("a",{className:"dropdown-item",href:"#infox","data-toggle":"modal","data-target":"#logoutModal",children:[Object(u.jsx)("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"]})]})]})}}]),a}(c.a.Component);w.contextType=y.a;var k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("li",{className:"nav-item dropdown no-arrow mx-1",children:[Object(u.jsxs)(v.c,{className:"nav-link dropdown-toggle",to:"/#",id:"messagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(u.jsx)("i",{className:"fas fa-envelope fa-fw"}),Object(u.jsx)("span",{className:"badge badge-danger badge-counter",children:"7"})]}),Object(u.jsxs)("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"messagesDropdown",children:[Object(u.jsx)("h6",{className:"dropdown-header",children:"Message Center"}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(u.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/fn_BT9fwg_E/60x60",alt:""}),Object(u.jsx)("div",{className:"status-indicator bg-success"})]}),Object(u.jsxs)("div",{className:"font-weight-bold",children:[Object(u.jsx)("div",{className:"text-truncate",children:"Hi there! I am wondering if you can help me with a problem I've been having."}),Object(u.jsx)("div",{className:"small text-gray-500",children:"Emily Fowler \xb7 58m"})]})]}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(u.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/AU4VPcFN4LE/60x60",alt:""}),Object(u.jsx)("div",{className:"status-indicator"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-truncate",children:"I have the photos that you ordered last month, how would you like them sent to you?"}),Object(u.jsx)("div",{className:"small text-gray-500",children:"Jae Chun \xb7 1d"})]})]}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(u.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/CS2uCrpNzJY/60x60",alt:""}),Object(u.jsx)("div",{className:"status-indicator bg-warning"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-truncate",children:"Last month's report looks great, I am very happy with the progress so far, keep up the good work!"}),Object(u.jsx)("div",{className:"small text-gray-500",children:"Morgan Alvarez \xb7 2d"})]})]}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(u.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/Mv9hjnEUHR4/60x60",alt:""}),Object(u.jsx)("div",{className:"status-indicator bg-success"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-truncate",children:"Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."}),Object(u.jsx)("div",{className:"small text-gray-500",children:"Chicken the Dog \xb7 2w"})]})]}),Object(u.jsx)("a",{className:"dropdown-item text-center small text-gray-500",href:"#infox",children:"Read More Messages"})]})]})}}]),a}(c.a.Component);k.contextType=y.a;var _=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("li",{className:"nav-item dropdown no-arrow mx-1",children:[Object(u.jsxs)(v.c,{className:"nav-link dropdown-toggle",to:"/#",id:"alertsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(u.jsx)("i",{className:"fas fa-bell fa-fw"}),Object(u.jsx)("span",{className:"badge badge-danger badge-counter",children:"3+"})]}),Object(u.jsxs)("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"alertsDropdown",children:[Object(u.jsx)("h6",{className:"dropdown-header",children:"Alerts Center"}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsx)("div",{className:"mr-3",children:Object(u.jsx)("div",{className:"icon-circle bg-primary",children:Object(u.jsx)("i",{className:"fas fa-file-alt text-white"})})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"small text-gray-500",children:"December 12, 2019"}),Object(u.jsx)("span",{className:"font-weight-bold",children:"A new monthly report is ready to download!"})]})]}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsx)("div",{className:"mr-3",children:Object(u.jsx)("div",{className:"icon-circle bg-success",children:Object(u.jsx)("i",{className:"fas fa-donate text-white"})})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"small text-gray-500",children:"December 7, 2019"}),"$290.29 has been deposited into your account!"]})]}),Object(u.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(u.jsx)("div",{className:"mr-3",children:Object(u.jsx)("div",{className:"icon-circle bg-warning",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle text-white"})})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"small text-gray-500",children:"December 2, 2019"}),"Spending Alert: We've noticed unusually high spending for your account."]})]}),Object(u.jsx)("a",{className:"dropdown-item text-center small text-gray-500",href:"#infox",children:"Show All Alerts"})]})]})}}]),a}(c.a.Component);_.contextType=y.a,_=Object(b.h)(_),w=Object(b.h)(w),k=Object(b.h)(k);var S=a(82),C=a.n(S),L=a(122),A=a(86),D=a(87),I=a.n(D),F=(a(114),a(223),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).position=Object(L.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({color:"yellow",text:"getting location"}),e.next=3,navigator.geolocation.getCurrentPosition((function(e){s.setState({latitude:e.coords.latitude,longitude:e.coords.longitude,color:"Green",text:"Sending Location"}),s.clock_post()}),(function(e){s.setState({clock_status:0})}));case 3:case"end":return e.stop()}}),e)}))),s.handlePermission=function(){navigator.permissions.query({name:"geolocation"}).then((function(e){s.setState({geolocation:e.state}),e.onchange=function(){s.setState({geolocation:e.state})}}))},s.load_env=function(){h.a.get("/clock").then((function(e){""!==e.data&&s.setState({clock_status:e.data.clock_status,color:e.data.color,text:e.data.text})})).catch((function(e){s.setState({clock_status:0})}))},s.clock_post=function(){h.a.post("/clock",{test:0,latitude:s.state.latitude,longitude:s.state.longitude,clock_status:s.state.clock_status}).then((function(e){""!==e.data&&s.setState({clock_status:e.data.clock_status,color:e.data.color,text:e.data.text})})).catch((function(e){s.setState({clock_status:0})}))},s.state={clock_status:0,locationiq:[],color:"",text:""},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handlePermission()}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"attendance_app",children:"granted"===this.state.geolocation||"prompt"===this.state.geolocation?Object(u.jsxs)(u.Fragment,{children:[0===this.state.clock_status?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"mb-3",children:[this.state.text," "]}),Object(u.jsx)("button",{onClick:this.load_env,className:"btn btn-primary",children:"Connect"})]}):null,1===this.state.clock_status?Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:Object(u.jsx)(I.a,{format:"h:mm:ss A",ticking:!0,timezone:"Asia/Kolkata"})}),Object(u.jsx)(A.a,{text:"Swipe To Clock In",text_unlocked:this.state.text,color:this.state.color,onSuccess:this.position,onFailure:function(){m.b.fail("Swipe Error")}})]}):null,2===this.state.clock_status?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:Object(u.jsx)(I.a,{format:"h:mm:ss A",ticking:!0,timezone:"Asia/Kolkata"})}),Object(u.jsxs)("h3",{children:[this.state.text," "]}),Object(u.jsx)(A.a,{text:"Swipe To Clock Out",text_unlocked:this.state.text,color:this.state.color,onSuccess:this.position,onFailure:function(){m.b.fail("Swipe Error")}})]})}):null,3===this.state.clock_status?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:[this.state.text," "]})})}):null]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})," Location permission ",this.state.geolocation]}),Object(u.jsx)("p",{children:"Please reset the site setting/permissions"})]})})}}]),a}(c.a.Component)),M=Object(b.h)(F),z=a.p+"static/media/load.fba03497.gif",T=Object(s.lazy)((function(){return a.e(7).then(a.bind(null,390))})),P=Object(s.lazy)((function(){return a.e(6).then(a.bind(null,391))})),q=Object(s.lazy)((function(){return Promise.all([a.e(4),a.e(5)]).then(a.bind(null,392))})),E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).closeSidebar=function(){g()(window).width()<700&&(g()("body").toggleClass("sidebar-toggled"),g()(".sidebar").toggleClass("toggled"),g()(".sidebar").hasClass("toggled")&&window.$(".sidebar .collapse").collapse("hide"))},s.state={infox_user_data:null},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.src="/infox/js/sb-admin-2.min.js",e.appendChild(t)}},{key:"render",value:function(){var e=this;return"admin"===this.context.u_type||"root"===this.context.u_type?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsxs)("ul",{className:"navbar-nav bg-gradient-dark sidebar toggled sidebar-dark accordion d-print-none",id:"accordionSidebar",children:[Object(u.jsxs)(v.b,{onClick:this.closeSidebar,className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/",children:[Object(u.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(u.jsx)("i",{className:"fas fa-handshake"})}),Object(u.jsxs)("div",{className:"sidebar-brand-text mx-3",children:["InfoX",Object(u.jsx)("sup",{children:"0.1.3"})]})]}),Object(u.jsx)("hr",{className:"sidebar-divider my-0"}),Object(u.jsx)(v.c,{className:"nav-item text-decoration-none",to:"/dashboard",children:Object(u.jsxs)("span",{className:"nav-link",href:"#dashboard",children:[Object(u.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(u.jsx)("span",{children:"Dashboard"})]})}),Object(u.jsx)("hr",{className:"sidebar-divider"}),Object(u.jsx)("div",{className:"sidebar-heading",children:"Assets"}),Object(u.jsx)(v.c,{className:"nav-item text-decoration-none",to:"/catalogue",children:Object(u.jsxs)("span",{className:"nav-link",children:[Object(u.jsx)("i",{className:"fas fa-fw fa-book"}),Object(u.jsx)("span",{children:"catalogue"})]})}),Object(u.jsx)("hr",{className:"sidebar-divider"}),Object(u.jsx)(v.c,{className:"nav-item text-decoration-none",to:"/quotation",children:Object(u.jsxs)("span",{className:"nav-link",children:[Object(u.jsx)("i",{className:"fas fa-fw fa-quote-left"}),Object(u.jsx)("span",{children:"Quotation"})]})}),Object(u.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(u.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(u.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(u.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column",children:[Object(u.jsxs)("div",{id:"content",className:"amy-crisp-gradient",children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(u.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(u.jsx)("i",{className:"fa fa-bars"})}),Object(u.jsx)("form",{className:"d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(u.jsxs)("div",{className:"input-group",children:[Object(u.jsxs)("div",{className:"input-group-append",children:[" ",Object(u.jsxs)("button",{className:"btn btn-success btn-sm",type:"button",children:[" ",Object(u.jsx)("i",{className:"fas fa-building","aria-hidden":"true"})," "]})," "]}),Object(u.jsx)("input",{readOnly:!0,id:"infoxserver",type:"text",value:"Dream india School Aid (2022-23)",className:"form-control bg-light border-0 font-weight-bold","aria-label":"Search","aria-describedby":"basic-addon2"})]})}),Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)(_,{}),Object(u.jsx)(k,{}),Object(u.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(u.jsx)(w,{})]})]}),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)(s.Suspense,{fallback:Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"loadimage",src:z})}),children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{path:"/dashboard",children:"Dashboard"}),Object(u.jsx)(b.b,{path:"/setting",component:T}),Object(u.jsx)(b.b,{path:"/catalogue",component:P}),Object(u.jsx)(b.b,{path:"/quotation",component:q}),Object(u.jsxs)(b.b,{exact:!0,path:"/",children:[Object(u.jsxs)("h5",{children:["Welcome, ",this.context.u_name]}),Object(u.jsx)(M,{})]}),Object(u.jsx)(b.b,{path:"*",children:Object(u.jsx)("div",{id:"content",children:Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("div",{className:"error mx-auto","data-text":403,children:"403"}),Object(u.jsx)("p",{className:"lead text-gray-800 mb-3",children:"Access Denied"}),Object(u.jsx)("p",{className:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(u.jsx)("hr",{width:"20%"})]})})})})})]})})})]}),Object(u.jsx)("footer",{className:"sticky-footer bg-white",children:Object(u.jsx)("div",{className:"container my-auto",children:Object(u.jsx)("div",{className:"copyright text-center my-auto",children:Object(u.jsx)("span",{children:" \xa9 Azba India "})})})})]})]}),Object(u.jsx)("a",{className:"scroll-to-top rounded",href:"#page-top",title:"scroll to top",children:Object(u.jsx)("i",{className:"fas fa-angle-up"})}),Object(u.jsx)("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog",role:"document",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Leave?"}),Object(u.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsx)("div",{className:"modal-body",children:'Select "Logout" below if you are ready to end your current session.'}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(u.jsx)("button",{className:"btn btn-primary","data-dismiss":"modal",onClick:function(){Object(N.d)(),e.props.history.replace("/")},children:"Logout"})]})]})})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsxs)("ul",{className:"navbar-nav bg-gradient-primary sidebar toggled sidebar-dark accordion d-print-none",id:"accordionSidebar",children:[Object(u.jsxs)(v.b,{onClick:this.closeSidebar,className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/",children:[Object(u.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(u.jsx)("i",{className:"fas fa-handshake"})}),Object(u.jsxs)("div",{className:"sidebar-brand-text mx-3",children:["InfoX",Object(u.jsx)("sup",{children:"0.1.3"})]})]}),Object(u.jsx)("hr",{className:"sidebar-divider my-0"}),Object(u.jsx)(v.c,{onClick:this.closeSidebar,className:"nav-item text-decoration-none",to:"/dashboard",children:Object(u.jsxs)("span",{className:"nav-link",href:"#dashboard",children:[Object(u.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(u.jsx)("span",{children:"Dashboard"})]})}),Object(u.jsx)("hr",{className:"sidebar-divider"}),Object(u.jsx)(v.c,{onClick:this.closeSidebar,className:"nav-item text-decoration-none",to:"/quotation",children:Object(u.jsxs)("span",{className:"nav-link",children:[Object(u.jsx)("i",{className:"fas fa-fw fa-quote-left"}),Object(u.jsx)("span",{children:"Quotation"})]})}),Object(u.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(u.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(u.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(u.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column",children:[Object(u.jsxs)("div",{id:"content",className:"amy-crisp-gradient",children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(u.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(u.jsx)("i",{className:"fa fa-bars"})}),Object(u.jsx)("form",{className:"d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(u.jsxs)("div",{className:"input-group",children:[Object(u.jsxs)("div",{className:"input-group-append",children:[" ",Object(u.jsxs)("button",{className:"btn btn-success btn-sm",type:"button",children:[" ",Object(u.jsx)("i",{className:"fas fa-building","aria-hidden":"true"})," "]})," "]}),Object(u.jsx)("input",{readOnly:!0,id:"infoxserver",type:"text",value:"Dream india",className:"form-control bg-light border-0 font-weight-bold","aria-label":"Search","aria-describedby":"basic-addon2"})]})}),Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)(_,{}),Object(u.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(u.jsx)(w,{})]})]}),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)(s.Suspense,{fallback:Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"loadimage",src:z})}),children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{path:"/dashboard",children:"Dashboard"}),Object(u.jsxs)(b.b,{exact:!0,path:"/",children:[Object(u.jsxs)("h5",{children:["Welcome, ",this.context.u_name]}),Object(u.jsx)(M,{})]}),Object(u.jsx)(b.b,{path:"/quotation",component:q}),Object(u.jsx)(b.b,{path:"*",children:Object(u.jsx)("div",{id:"content",children:Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("div",{className:"error mx-auto","data-text":404,children:"404"}),Object(u.jsx)("p",{className:"lead text-gray-800 mb-3",children:"Not Found"}),Object(u.jsx)("p",{className:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(u.jsx)("hr",{width:"20%"})]})})})})})]})})})]}),Object(u.jsx)("footer",{className:"sticky-footer bg-white",children:Object(u.jsx)("div",{className:"container my-auto",children:Object(u.jsx)("div",{className:"copyright text-center my-auto",children:Object(u.jsx)("span",{children:" \xa9 Azba India "})})})})]})]}),Object(u.jsx)("a",{className:"scroll-to-top rounded",href:"#page-top",title:"scroll to top",children:Object(u.jsx)("i",{className:"fas fa-angle-up"})}),Object(u.jsx)("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog",role:"document",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Logout?"}),Object(u.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsx)("div",{className:"modal-body",children:'Select "Logout" below if you want to end your current session.'}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(u.jsx)("button",{className:"btn btn-primary","data-dismiss":"modal",onClick:function(){Object(N.d)(),e.props.history.replace("/")},children:"Logout"})]})]})})})]})}}]),a}(c.a.Component);E.contextType=y.a;var H=Object(b.h)(E),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).load_infox_user_data=function(){h.a.get("/sync_user").then((function(e){s.setState({infox_user_data:e.data,infox_loaded:!0}),m.b.hide()})).catch((function(e){m.b.hide(),s.setState({infox_user_data:null,infox_loaded:!0,error:e})}))},s.state={infox_user_data:null,infox_loaded:!1,error:[]},s.load_infox_user_data=s.load_infox_user_data.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){m.b.loading("Loading",0),Object(N.c)()?this.load_infox_user_data():(Object(N.d)(),this.props.history.replace("/login"))}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:null!==this.state.infox_user_data&&!0===this.state.infox_loaded?Object(u.jsx)(y.a.Provider,{value:this.state.infox_user_data,children:Object(u.jsx)(H,{})}):Object(u.jsx)(u.Fragment,{children:!0===this.state.infox_loaded?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{id:"wrapper",children:Object(u.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column ",children:Object(u.jsx)("div",{id:"content",children:Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"text-center",children:[this.state.error.response?Object(u.jsx)("div",{className:"error mx-auto","data-text":this.state.error.response.status,children:this.state.error.response.status}):null,Object(u.jsx)("p",{className:"lead text-gray-800 mb-3",children:this.state.error.message}),Object(u.jsx)("p",{className:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(u.jsx)("a",{href:"tel:00000",children:"\u2190 Contact Support"}),Object(u.jsx)("hr",{width:"20%"}),Object(u.jsx)(v.b,{to:"/logout",children:"Reset"})]})})})})})})}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{src:z,alt:"Loader",style:{position:"fixed",top:0,bottom:0,left:0,right:0,margin:"auto"}})})})})}}]),a}(c.a.Component);var J=function(){return Object(u.jsx)(v.a,{basename:"/infox",children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{path:"/logout",render:function(){return Object(N.d)(),Object(u.jsx)(b.a,{to:"login"})}}),Object(u.jsx)(N.b,{path:"/login",component:p}),Object(u.jsx)(N.a,{path:"/",component:R})]})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))},25:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return l}));var s=a(40),c=a(88),n=a(11),i=a(1),r=["component"],o=["component"],l=function(){return sessionStorage.getItem("token")||null},d=function(){sessionStorage.removeItem("token")};function j(e){var t=e.component,a=Object(c.a)(e,r);return Object(i.jsx)(n.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){return l()?Object(i.jsx)(n.a,{to:{pathname:"/"}}):Object(i.jsx)(t,Object(s.a)({},e))}}))}function b(e){var t=e.component,a=Object(c.a)(e,o);return Object(i.jsx)(n.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){return l()?Object(i.jsx)(t,Object(s.a)({},e)):Object(i.jsx)(n.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),c=a.n(s).a.createContext()},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(104),c=a.n(s),n=a(14),i=a(25),r={baseURL:"/_api"},o=c.a.create(r);o.interceptors.request.use((function(e){return e.headers.Authorization=Object(i.c)(),n.b.loading("synchronizing",0,!0),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return n.b.hide(),e}),(function(e){var t="";try{t=e.response.data,401===e.response.status?Object(i.d)():403===e.response.status?n.b.fail("".concat(t),3,null,!1):n.b.fail("".concat(t," ").concat(e),1,null,!1)}catch(a){t=" - ",n.b.offline("".concat(t," ").concat(e))}return Promise.reject(e)}))}},[[224,1,2]]]);