(this.webpackJsonpinfox=this.webpackJsonpinfox||[]).push([[0],{204:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(10),r=a.n(n),i=a(15),l=a(16),o=a(56),d=a(18),j=a(17),b=a(12),m=a(14),h=a(108),u=a.n(h),x=a(37),O=a(79),p=a(1),f=["component"],g=["component"],v=function(){return sessionStorage.getItem("token")||null},N=function(){sessionStorage.removeItem("token")};function w(e){var t=e.component,a=Object(O.a)(e,f);return Object(p.jsx)(b.b,Object(x.a)(Object(x.a)({},a),{},{render:function(e){return v()?Object(p.jsx)(b.a,{to:{pathname:"/"}}):Object(p.jsx)(t,Object(x.a)({},e))}}))}function y(e){var t=e.component,a=Object(O.a)(e,g);return Object(p.jsx)(b.b,Object(x.a)(Object(x.a)({},a),{},{render:function(e){return v()?Object(p.jsx)(t,Object(x.a)({},e)):Object(p.jsx)(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var _={baseURL:"http://192.168.43.32:3001/api"},C=u.a.create(_);C.interceptors.request.use((function(e){return e.headers.Authorization=v(),m.b.loading("synchronizing",0,!0),e}),(function(e){return Promise.reject(e)})),C.interceptors.response.use((function(e){return m.b.hide(),e}),(function(e){var t="";try{t=e.response.data,401===e.response.status?N():403===e.response.status?m.b.fail("".concat(t),3,null,!1):m.b.fail("".concat(t," ").concat(e),1,null,!1)}catch(a){t=" - ",m.b.offline("".concat(t," ").concat(e))}return Promise.reject(e)}));var k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){var t={};t[e.target.getAttribute("name")]=e.target.value,s.setState(t)},s.LoginFormHandle=function(e){e.preventDefault(),m.b.loading("Please wait",0),C.post("/login",s.state).then((function(e){m.b.hide(),sessionStorage.setItem("token",e.data.token),s.props.history.push("/")})).catch((function(e){m.b.hide()}))},s.state={username:"",password:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{style:{width:"100vw",height:"100vh",background:"url(https://picsum.photos/1360/768)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(p.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(p.jsx)("div",{className:"container pt-5",children:Object(p.jsx)("div",{className:"row justify-content-center mt-5",children:Object(p.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-9",children:Object(p.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(p.jsxs)("div",{className:"card-body p-0",children:[Object(p.jsxs)("div",{className:"p-5",children:[Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)("h1",{className:"h4 text-gray-900 mb-4",children:"Welcome!"})}),Object(p.jsxs)("form",{className:"user",autoComplete:"off",onSubmit:this.LoginFormHandle,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{name:"username",onChange:this.onChangeHandler,value:this.state.username,type:"username",className:"form-control form-control-user","aria-describedby":"usernameHelp",placeholder:"Username",required:!0})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{name:"password",onChange:this.onChangeHandler,value:this.state.password,type:"password",className:"form-control form-control-user",placeholder:"Password",required:!0})}),Object(p.jsx)("button",{className:"btn btn-primary btn-user btn-block",children:"Login"})]})]}),Object(p.jsx)("p",{className:"text-center",style:{fontSize:"7pt"},children:"\xa92022 Diya infocare"})]})})})})})})})}}]),a}(c.a.Component),S=Object(b.h)(k),A=a(11),F=c.a.createContext(),D=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("li",{className:"nav-item dropdown no-arrow",children:[Object(p.jsxs)(A.c,{className:"nav-link dropdown-toggle",to:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(p.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:this.context.u_name}),Object(p.jsx)("i",{className:"fas fa-user fa-fw"})]}),Object(p.jsxs)("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown",children:[Object(p.jsxs)(A.b,{className:"dropdown-item",to:"/setting/activity",children:[Object(p.jsx)("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"]}),Object(p.jsxs)(A.b,{className:"dropdown-item",to:"/setting/profile",children:[Object(p.jsx)("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"]}),Object(p.jsxs)(A.b,{className:"dropdown-item",to:"/setting",children:[Object(p.jsx)("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"]}),Object(p.jsx)("div",{className:"dropdown-divider"}),Object(p.jsxs)("a",{className:"dropdown-item",href:"#infox","data-toggle":"modal","data-target":"#logoutModal",children:[Object(p.jsx)("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"]})]})]})}}]),a}(c.a.Component);D.contextType=F;var T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("li",{className:"nav-item dropdown no-arrow mx-1",children:[Object(p.jsxs)(A.c,{className:"nav-link dropdown-toggle",to:"/#",id:"messagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(p.jsx)("i",{className:"fas fa-envelope fa-fw"}),Object(p.jsx)("span",{className:"badge badge-danger badge-counter",children:"7"})]}),Object(p.jsxs)("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"messagesDropdown",children:[Object(p.jsx)("h6",{className:"dropdown-header",children:"Message Center"}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(p.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/fn_BT9fwg_E/60x60",alt:""}),Object(p.jsx)("div",{className:"status-indicator bg-success"})]}),Object(p.jsxs)("div",{className:"font-weight-bold",children:[Object(p.jsx)("div",{className:"text-truncate",children:"Hi there! I am wondering if you can help me with a problem I've been having."}),Object(p.jsx)("div",{className:"small text-gray-500",children:"Emily Fowler \xb7 58m"})]})]}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(p.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/AU4VPcFN4LE/60x60",alt:""}),Object(p.jsx)("div",{className:"status-indicator"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-truncate",children:"I have the photos that you ordered last month, how would you like them sent to you?"}),Object(p.jsx)("div",{className:"small text-gray-500",children:"Jae Chun \xb7 1d"})]})]}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(p.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/CS2uCrpNzJY/60x60",alt:""}),Object(p.jsx)("div",{className:"status-indicator bg-warning"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-truncate",children:"Last month's report looks great, I am very happy with the progress so far, keep up the good work!"}),Object(p.jsx)("div",{className:"small text-gray-500",children:"Morgan Alvarez \xb7 2d"})]})]}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsxs)("div",{className:"dropdown-list-image mr-3",children:[Object(p.jsx)("img",{className:"rounded-circle",src:"https://source.unsplash.com/Mv9hjnEUHR4/60x60",alt:""}),Object(p.jsx)("div",{className:"status-indicator bg-success"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-truncate",children:"Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."}),Object(p.jsx)("div",{className:"small text-gray-500",children:"Chicken the Dog \xb7 2w"})]})]}),Object(p.jsx)("a",{className:"dropdown-item text-center small text-gray-500",href:"#infox",children:"Read More Messages"})]})]})}}]),a}(c.a.Component);T.contextType=F;var M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("li",{className:"nav-item dropdown no-arrow mx-1",children:[Object(p.jsxs)(A.c,{className:"nav-link dropdown-toggle",to:"/#",id:"alertsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(p.jsx)("i",{className:"fas fa-bell fa-fw"}),Object(p.jsx)("span",{className:"badge badge-danger badge-counter",children:"3+"})]}),Object(p.jsxs)("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"alertsDropdown",children:[Object(p.jsx)("h6",{className:"dropdown-header",children:"Alerts Center"}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsx)("div",{className:"mr-3",children:Object(p.jsx)("div",{className:"icon-circle bg-primary",children:Object(p.jsx)("i",{className:"fas fa-file-alt text-white"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"small text-gray-500",children:"December 12, 2019"}),Object(p.jsx)("span",{className:"font-weight-bold",children:"A new monthly report is ready to download!"})]})]}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsx)("div",{className:"mr-3",children:Object(p.jsx)("div",{className:"icon-circle bg-success",children:Object(p.jsx)("i",{className:"fas fa-donate text-white"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"small text-gray-500",children:"December 7, 2019"}),"$290.29 has been deposited into your account!"]})]}),Object(p.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"#infox",children:[Object(p.jsx)("div",{className:"mr-3",children:Object(p.jsx)("div",{className:"icon-circle bg-warning",children:Object(p.jsx)("i",{className:"fas fa-exclamation-triangle text-white"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"small text-gray-500",children:"December 2, 2019"}),"Spending Alert: We've noticed unusually high spending for your account."]})]}),Object(p.jsx)("a",{className:"dropdown-item text-center small text-gray-500",href:"#infox",children:"Show All Alerts"})]})]})}}]),a}(c.a.Component);M.contextType=F,M=Object(b.h)(M),D=Object(b.h)(D),T=Object(b.h)(T);var U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"h3 mb-2 text-gray-800",children:Object(p.jsx)("i",{className:"fa fa-cog",children:" Settings"})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-xl-2 col-md-3 mb-4",children:Object(p.jsx)("div",{className:"card border-left-primary shadow h-100 py-2",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(A.b,{className:"text-decoration-none",to:"setting/users",children:Object(p.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(p.jsxs)("div",{className:"col mr-2",children:[Object(p.jsx)("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Users"}),Object(p.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:"1"})]}),Object(p.jsx)("div",{className:"col-auto",children:Object(p.jsx)("i",{className:"fas fa-users fa-2x text-gray-300"})})]})})})})})}),Object(p.jsxs)("div",{className:"card shadow mb-4",children:[Object(p.jsx)("div",{className:"card-header py-3",children:Object(p.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:"Basic"})}),Object(p.jsx)("div",{className:"card-body"})]})]})}}]),a}(c.a.Component);U.contextType=F;var L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:"Profile"})}}]),a}(c.a.Component);L.contextType=F;var I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:"Activity"})}}]),a}(c.a.Component);I.contextType=F;var P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).load_users_data=function(){C.get("/settings/users").then((function(e){s.setState({users_data:e.data})}))},s.OnFormChange=function(e){var t=s.state.formdata;t[e.target.getAttribute("name")]=e.target.value,s.setState({formdata:t})},s.addNewuser=function(e){e.preventDefault(),s.state.formdata.confirm_password===s.state.formdata.password?C.post("settings/users?action=add",s.state.formdata).then((function(e){var t=s.state.users_data;t.push(e.data),s.setState({users_data:t,formdata:{username:"",password:"",confirm_password:"",u_name:"",u_email:"",u_contact:"",u_type:""},modal:!1})})):m.b.fail("Password Not Matching")},s.state={modal:!1,users_data:[],formdata:{username:"",password:"",confirm_password:"",u_name:"",u_email:"",u_contact:"",u_type:""}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.load_users_data()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("h6",{children:"All User"})}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("table",{className:"table table-sm table-responsive-sm table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"SINo."}),Object(p.jsx)("th",{children:"Type"}),Object(p.jsx)("th",{children:"Username"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Email"}),Object(p.jsx)("th",{children:"Contact"}),Object(p.jsx)("th",{children:"actions"})]})}),Object(p.jsx)("tbody",{children:this.state.users_data.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("th",{scope:"row",children:["\xa0\xa0",t+1,"\xa0\xa0"]}),Object(p.jsx)("td",{children:e.u_type}),Object(p.jsx)("td",{children:e.username}),Object(p.jsx)("td",{children:e.u_name}),Object(p.jsx)("td",{children:e.u_email}),Object(p.jsx)("td",{children:e.u_contact}),Object(p.jsxs)("td",{children:[1===e.active?Object(p.jsx)("button",{className:"btn btn-sm btn-warning m-2",children:"Deacivate"}):Object(p.jsx)("button",{className:"btn btn-sm btn-success mr-2",children:"Activate"}),0===e.active?Object(p.jsx)("button",{className:"btn btn-sm btn-danger m-2",children:"Suspend"}):null,Object(p.jsx)("button",{className:"btn btn-sm btn-info m-2",children:"Reset Password"})]})]},"user_"+t)}))})]})}),Object(p.jsx)("div",{className:"card-footer",children:Object(p.jsx)("button",{className:"btn btm-sm btn-primary",onClick:function(){e.setState({modal:!0})},children:Object(p.jsx)("i",{className:"fa fa-plus"})})})]}),Object(p.jsx)(m.a,{visible:this.state.modal,transparent:!0,title:"Add New User",footer:[{text:"Cancel",onPress:function(){e.setState({modal:!1})}}],children:Object(p.jsxs)("form",{onSubmit:this.addNewuser,children:[Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsxs)("select",{className:" form-control  form-control-sm",name:"u_type",value:this.state.formdata.u_type,onChange:this.OnFormChange,required:!0,children:[Object(p.jsx)("option",{value:"",disabled:!0,children:"User type"}),Object(p.jsx)("option",{value:"admin",children:"Admin"}),Object(p.jsx)("option",{value:"user",children:"User"}),Object(p.jsx)("option",{value:"root",children:"Root"})]})}),Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Username",name:"username",value:this.state.formdata.username,onChange:this.OnFormChange,required:!0,type:"text",pattern:".{5,}",title:"At least 5 or more characters"})}),Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Password",name:"password",value:this.state.formdata.password,onChange:this.OnFormChange,required:!0,type:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"})}),Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Confirm Password",name:"confirm_password",value:this.state.formdata.confirm_password,onChange:this.OnFormChange,required:!0,type:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"})}),Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Name",name:"u_name",value:this.state.formdata.u_name,onChange:this.OnFormChange,pattern:".{6,}",required:!0,type:"text",title:"minimum 6 characters"})}),Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Email",name:"u_email",value:this.state.formdata.u_email,onChange:this.OnFormChange,required:!0,type:"email"})}),Object(p.jsx)("div",{className:"input-group mb-2",children:Object(p.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Contact No",name:"u_contact",value:this.state.formdata.u_contact,onChange:this.OnFormChange,required:!0,type:"tel",pattern:"[0-9]{10}",title:"Enter a Valid Mobile Number "})}),Object(p.jsx)("button",{className:"btn btn-success btn-block btn-sm",children:"Add"})]})})]})}}]),a}(c.a.Component);P.contextType=F,U=Object(b.h)(U),L=Object(b.h)(L),I=Object(b.h)(I),P=Object(b.h)(P);var q=function(){var e=Object(b.g)(),t=e.path;return e.url,Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:t,component:U}),Object(p.jsx)(b.b,{path:"".concat(t,"/profile"),component:L}),Object(p.jsx)(b.b,{path:"".concat(t,"/activity"),component:I}),Object(p.jsx)(b.b,{path:"".concat(t,"/users"),component:P})]})})},E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={infox_user_data:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.src="/infox/js/sb-admin-2.min.js",e.appendChild(t)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"wrapper",children:[Object(p.jsxs)("ul",{className:"navbar-nav bg-gradient-dark sidebar toggled sidebar-dark accordion",id:"accordionSidebar",children:[Object(p.jsxs)(A.b,{className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/",children:[Object(p.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(p.jsx)("i",{className:"fas fa-handshake"})}),Object(p.jsxs)("div",{className:"sidebar-brand-text mx-3",children:["InfoX",Object(p.jsx)("sup",{children:"2"})]})]}),Object(p.jsx)("hr",{className:"sidebar-divider my-0"}),Object(p.jsx)(A.c,{className:"nav-item text-decoration-none",to:"/dashboard",children:Object(p.jsxs)("span",{className:"nav-link",href:"#dashboard",children:[Object(p.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(p.jsx)("span",{children:"Dashboard"})]})}),Object(p.jsx)("hr",{className:"sidebar-divider"}),Object(p.jsx)("div",{className:"sidebar-heading",children:"Assets"}),Object(p.jsxs)("li",{className:"nav-item text-decoration-none",children:[Object(p.jsxs)(A.c,{className:"nav-link collapsed",to:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo",children:[Object(p.jsx)("i",{className:"fas fa-fw fa-book"}),Object(p.jsx)("span",{children:"Catalogue"})]}),Object(p.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar",children:Object(p.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(p.jsx)("h6",{className:"collapse-header",children:"Custom Components:"}),Object(p.jsx)(A.c,{className:"collapse-item",to:"buttons.html",children:"Buttons"}),Object(p.jsx)(A.c,{className:"collapse-item",to:"cards.html",children:"Cards"})]})})]}),Object(p.jsxs)("li",{className:"nav-item text-decoration-none",children:[Object(p.jsxs)(A.c,{className:"nav-link collapsed",to:"/yasim","data-toggle":"collapse","data-target":"#collapseUtilities","aria-expanded":"true","aria-controls":"collapseUtilities",children:[Object(p.jsx)("i",{className:"fas fa-fw fa-users"}),Object(p.jsx)("span",{children:"Employees"})]}),Object(p.jsx)("div",{id:"collapseUtilities",className:"collapse","aria-labelledby":"headingUtilities","data-parent":"#accordionSidebar",children:Object(p.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(p.jsx)("h6",{className:"collapse-header",children:"Custom Utilities:"}),Object(p.jsx)(A.b,{className:"collapse-item",to:"utilities-color.html",children:"Create/Edit"}),Object(p.jsx)(A.b,{className:"collapse-item",to:"utilities-border.html",children:"Activity"}),Object(p.jsx)(A.b,{className:"collapse-item",to:"utilities-animation.html",children:"Animations"}),Object(p.jsx)(A.b,{className:"collapse-item",to:"utilities-other.html",children:"Other"})]})})]}),Object(p.jsx)("hr",{className:"sidebar-divider"}),Object(p.jsx)("div",{className:"sidebar-heading",children:"Reports"}),Object(p.jsx)(A.c,{className:"nav-item text-decoration-none",to:"/attendance",children:Object(p.jsxs)("span",{className:"nav-link",children:[Object(p.jsx)("i",{className:"fas fa-fw fa-file"}),Object(p.jsx)("span",{children:"Attendance"})]})}),Object(p.jsx)("hr",{className:"sidebar-divider"}),Object(p.jsx)("div",{className:"sidebar-heading",children:"Reports"}),Object(p.jsx)(A.c,{className:"nav-item text-decoration-none",to:"/quotation",children:Object(p.jsxs)("span",{className:"nav-link",children:[Object(p.jsx)("i",{className:"fas fa-fw fa-quote-left"}),Object(p.jsx)("span",{children:"Quotation"})]})}),Object(p.jsx)(A.c,{className:"nav-item text-decoration-none",to:"/orders",children:Object(p.jsxs)("span",{className:"nav-link",children:[Object(p.jsx)("i",{className:"fas fa-fw fa-shopping-cart"}),Object(p.jsx)("span",{children:"Order"})]})}),Object(p.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(p.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(p.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(p.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column",children:[Object(p.jsxs)("div",{id:"content",className:"amy-crisp-gradient",children:[Object(p.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(p.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(p.jsx)("i",{className:"fa fa-bars"})}),Object(p.jsx)("form",{className:"d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsxs)("div",{className:"input-group-append",children:[" ",Object(p.jsxs)("button",{className:"btn btn-success btn-sm",type:"button",children:[" ",Object(p.jsx)("i",{className:"fas fa-building","aria-hidden":"true"})," "]})," "]}),Object(p.jsx)("input",{readOnly:!0,id:"infoxserver",type:"text",value:"Dream india School Aid (2022-23)",className:"form-control bg-light border-0 font-weight-bold","aria-label":"Search","aria-describedby":"basic-addon2"})]})}),Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)(M,{}),Object(p.jsx)(T,{}),Object(p.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(p.jsx)(D,{})]})]}),Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/dashboard",children:"Dashboard"}),Object(p.jsx)(b.b,{path:"/setting",component:q}),Object(p.jsx)(b.b,{path:"/",children:Object(p.jsxs)("h5",{children:["Welcome, ",this.context.u_name]})})]})})]}),Object(p.jsx)("footer",{className:"sticky-footer bg-white",children:Object(p.jsx)("div",{className:"container my-auto",children:Object(p.jsx)("div",{className:"copyright text-center my-auto",children:Object(p.jsx)("span",{children:" \xa9 2022 Diya infocare "})})})})]})]}),Object(p.jsx)(A.b,{className:"scroll-to-top rounded",to:"#page-top",children:Object(p.jsx)("i",{className:"fas fa-angle-up"})}),Object(p.jsx)("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog",role:"document",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Leave?"}),Object(p.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(p.jsx)("div",{className:"modal-body",children:'Select "Logout" below if you are ready to end your current session.'}),Object(p.jsxs)("div",{className:"modal-footer",children:[Object(p.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(p.jsx)("button",{className:"btn btn-primary","data-dismiss":"modal",onClick:function(){N(),e.props.history.replace("/")},children:"Logout"})]})]})})})]})}}]),a}(c.a.Component);E.contextType=F;var R=Object(b.h)(E),z=(a(203),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).load_infox_user_data=function(){C.get("/sync_user").then((function(e){s.setState({infox_user_data:e.data,infox_loaded:!0}),m.b.hide()})).catch((function(e){m.b.hide(),s.setState({infox_user_data:null,infox_loaded:!0,error:e})}))},s.state={infox_user_data:null,infox_loaded:!1,error:[]},s.load_infox_user_data=s.load_infox_user_data.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){m.b.loading("Loading",0),v()?this.load_infox_user_data():(N(),this.props.history.replace("/login"))}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:null!==this.state.infox_user_data&&!0===this.state.infox_loaded?Object(p.jsx)(F.Provider,{value:this.state.infox_user_data,children:Object(p.jsx)(R,{})}):Object(p.jsx)(p.Fragment,{children:!0===this.state.infox_loaded?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{id:"wrapper",children:Object(p.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column ",children:Object(p.jsx)("div",{id:"content",children:Object(p.jsx)("div",{class:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsxs)("div",{class:"text-center",children:[this.state.error.response?Object(p.jsx)("div",{class:"error mx-auto","data-text":this.state.error.response.status,children:this.state.error.response.status}):null,Object(p.jsx)("p",{class:"lead text-gray-800 mb-3",children:this.state.error.message}),Object(p.jsx)("p",{class:"text-gray-500 mb-0",children:"It looks like you found a glitch in the infox..."}),Object(p.jsx)("a",{href:"tel:00000",children:"\u2190 Contact Support"}),Object(p.jsx)("hr",{width:"20%"}),Object(p.jsx)(A.b,{to:"/logout",children:"Reset"})]})})})})})})}):Object(p.jsx)(p.Fragment,{children:"Loading"})})})}}]),a}(c.a.Component));var H=function(){return Object(p.jsx)(A.a,{basename:"/infox",children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/logout",render:function(){return N(),Object(p.jsx)(b.a,{to:"login"})}}),Object(p.jsx)(w,{path:"/login",component:S}),Object(p.jsx)(y,{path:"/",component:z})]})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.819e37d3.chunk.js.map