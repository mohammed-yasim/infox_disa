(this.webpackJsonpinfox=this.webpackJsonpinfox||[]).push([[7],{405:function(e,t,a){"use strict";a.r(t);var s=a(15),c=a(16),n=a(17),i=a(18),o=a(14),r=a(0),l=a.n(r),d=a(12),j=a(11),m=a(32),b=a(38),h=a(1),u=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_data=function(){m.a.get("/settings/config/locations").then((function(e){return c.setState({data:e.data})}))},c.onSubmit=function(e){e.preventDefault(),m.a.post("/settings/config/locations/add",{name:e.target.location_name.value}).then((function(t){e.target.reset(),c.load_data()}))},c.goBack=function(){c.props.history.goBack()},c.state={data:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_data()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"d-print-none",children:Object(h.jsxs)("h4",{children:[Object(h.jsx)("button",{onClick:this.goBack,className:"btn btn-link btn-lg",children:Object(h.jsx)("i",{className:"fa fa-arrow-left"})}),"Locations "]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsx)("div",{className:"accordion",id:"loc_collapse",children:this.state.data.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",id:"headingOne",children:Object(h.jsx)("h2",{className:"mb-0",children:Object(h.jsx)("button",{className:"btn btn-link btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#loc_collapse_"+t,"aria-expanded":"true","aria-controls":"loc_collapse_"+t,children:e.name})})}),Object(h.jsx)("div",{id:"loc_collapse_"+t,className:"collapse","data-parent":"#loc_collapse",children:Object(h.jsx)("div",{className:"card-body",children:e.users.map((function(e){return Object(h.jsx)(h.Fragment,{children:JSON.stringify(e)})}))})})]})}))})}),Object(h.jsx)("form",{onSubmit:this.onSubmit,children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{className:"form-control",type:"text",name:"location_name",required:!0,pattern:".{5,}"}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("input",{className:"btn btn-sm btn-primary",type:"submit",value:"Save"})})]})})]})})]})}}]),a}(l.a.Component),x=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_data=function(){m.a.get("/settings/config/designations").then((function(e){return c.setState({data:e.data})}))},c.onSubmit=function(e){e.preventDefault(),m.a.post("/settings/config/designations/add",{name:e.target.location_name.value}).then((function(t){e.target.reset(),c.load_data()}))},c.goBack=function(){c.props.history.goBack()},c.state={data:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_data()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"d-print-none",children:Object(h.jsxs)("h4",{children:[Object(h.jsx)("button",{onClick:this.goBack,className:"btn btn-link btn-lg",children:Object(h.jsx)("i",{className:"fa fa-arrow-left"})}),"Designations "]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsx)("div",{className:"accordion",id:"loc_collapse",children:this.state.data.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",id:"headingOne",children:Object(h.jsx)("h2",{className:"mb-0",children:Object(h.jsx)("button",{className:"btn btn-link btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#loc_collapse_"+t,"aria-expanded":"true","aria-controls":"loc_collapse_"+t,children:e.name})})}),Object(h.jsx)("div",{id:"loc_collapse_"+t,className:"collapse","data-parent":"#loc_collapse",children:Object(h.jsx)("div",{className:"card-body",children:e.users.map((function(e){return Object(h.jsx)(h.Fragment,{children:JSON.stringify(e)})}))})})]})}))})}),Object(h.jsx)("form",{onSubmit:this.onSubmit,children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{className:"form-control",type:"text",name:"location_name",required:!0,pattern:".{3,}"}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("input",{className:"btn btn-sm btn-primary",type:"submit",value:"Save"})})]})})]})})]})}}]),a}(l.a.Component),O=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_data=function(){m.a.get("/settings/config/schedules").then((function(e){return c.setState({data:e.data})}))},c.onSubmit=function(e){e.preventDefault();var t=new FormData(e.target);console.log(t,e),m.a.post("/settings/config/schedules/add",Object.fromEntries(t.entries())).then((function(t){e.target.reset(),c.load_data()}))},c.goBack=function(){c.props.history.goBack()},c.state={data:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_data()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"d-print-none",children:Object(h.jsxs)("h4",{children:[Object(h.jsx)("button",{onClick:this.goBack,className:"btn btn-link btn-lg",children:Object(h.jsx)("i",{className:"fa fa-arrow-left"})}),"Schedules "]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsx)("div",{className:"accordion",id:"loc_collapse",children:this.state.data.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",id:"headingOne",children:Object(h.jsx)("h2",{className:"mb-0",children:Object(h.jsxs)("button",{className:"btn btn-link btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#loc_collapse_"+t,"aria-expanded":"true","aria-controls":"loc_collapse_"+t,children:[e.id,". ",Object(h.jsxs)("b",{children:[e.clock_in," - ",e.clock_out]})]})})}),Object(h.jsx)("div",{id:"loc_collapse_"+t,className:"collapse","data-parent":"#loc_collapse",children:Object(h.jsx)("div",{className:"card-body",children:e.users.map((function(e){return Object(h.jsx)(h.Fragment,{children:JSON.stringify(e)})}))})})]})}))})}),Object(h.jsx)("form",{onSubmit:this.onSubmit,children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("span",{className:"btn ",children:"Clock In"})}),Object(h.jsx)("input",{className:"form-control",type:"time",name:"clock_in"}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("span",{className:"btn ",children:"Clock Out"})}),Object(h.jsx)("input",{className:"form-control",type:"time",name:"clock_out"}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("button",{className:"btn btn-sm btn-primary",type:"submit",children:"Save"})})]})})]})})]})}}]),a}(l.a.Component),p=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_data=function(){m.a.get("/settings").then((function(e){return c.setState({data:e.data})}))},c.state={data:{locations:0,designations:0,schedules:0,users:0}},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_data()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h1",{className:"h3 mb-2 text-gray-800",children:[Object(h.jsx)("i",{className:"fa fa-cog",children:" "})," Settings            ",Object(h.jsx)("button",{className:"float-right btn btn-sm btn-secondary",onClick:this.load_data,children:Object(h.jsx)("i",{className:"fa fa-sync"})})]}),Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsx)("div",{className:"col-xl-2 col-md-3 col-6 mb-4",children:Object(h.jsx)("div",{className:"card shadow h-100 py-2",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)(d.b,{className:"text-decoration-none",to:"setting/locations",children:Object(h.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(h.jsxs)("div",{className:"col mr-2",children:[Object(h.jsx)("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Locations"}),Object(h.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:this.state.data.locations})]}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("i",{className:"fas fa-globe-asia fa-2x text-gray-300"})})]})})})})}),Object(h.jsx)("div",{className:"col-xl-2 col-md-3 col-6 mb-4",children:Object(h.jsx)("div",{className:"card shadow h-100 py-2",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)(d.b,{className:"text-decoration-none",to:"setting/designations",children:Object(h.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(h.jsxs)("div",{className:"col mr-2",children:[Object(h.jsx)("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Designations"}),Object(h.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:this.state.data.designations})]}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("i",{className:"fas fa-briefcase fa-2x text-gray-300"})})]})})})})}),Object(h.jsx)("div",{className:"col-xl-2 col-md-3 col-6 mb-4",children:Object(h.jsx)("div",{className:"card shadow h-100 py-2",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)(d.b,{className:"text-decoration-none",to:"setting/schedules",children:Object(h.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(h.jsxs)("div",{className:"col mr-2",children:[Object(h.jsx)("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Schedules"}),Object(h.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:this.state.data.schedules})]}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("i",{className:"fas fa-user-clock fa-2x text-gray-300"})})]})})})})}),Object(h.jsx)("div",{className:"col-xl-2 col-md-3 col-6 mb-4",children:Object(h.jsx)("div",{className:"card shadow h-100 py-2",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)(d.b,{className:"text-decoration-none",to:"setting/users",children:Object(h.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(h.jsxs)("div",{className:"col mr-2",children:[Object(h.jsx)("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Users"}),Object(h.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:this.state.data.users})]}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("i",{className:"fas fa-users fa-2x text-gray-300"})})]})})})})})]}),Object(h.jsxs)("div",{className:"card shadow mb-4",children:[Object(h.jsx)("div",{className:"card-header py-3",children:Object(h.jsxs)("h6",{className:"m-0 font-weight-bold text-primary",children:[Object(h.jsx)("i",{className:"fa fa-cogs"})," Configuration Variables"]})}),Object(h.jsx)("div",{className:"card-body"})]})]})}}]),a}(l.a.Component);p.contextType=b.a;var f=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={},c}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:"Profile"})}}]),a}(l.a.Component);f.contextType=b.a;var g=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={},c}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:"Activity"})}}]),a}(l.a.Component);g.contextType=b.a;var v=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_users_data=function(){m.a.get("/settings/config/users").then((function(e){c.setState({users_data:e.data.users,locations:e.data.locations,designations:e.data.designations,schedules:e.data.schedules})}))},c.OnFormChange=function(e){var t=c.state.formdata;t[e.target.getAttribute("name")]=e.target.value,c.setState({formdata:t})},c.addNewuser=function(e){e.preventDefault(),c.state.formdata.confirm_password===c.state.formdata.password?m.a.post("settings/config/users/add",c.state.formdata).then((function(e){c.setState({formdata:{username:"",password:"",confirm_password:"",u_name:"",u_email:"",u_contact:"",u_type:"",designation_:"",location_:"",schedule_:""},modal:!1}),c.load_users_data()})):o.b.fail("Password Not Matching")},c.goBack=function(){c.props.history.goBack()},c.useraction=function(e,t){m.a.post("settings/config/users/".concat(t),{u_id:e}).then((function(e){c.load_users_data()}))},c.state={modal:!1,users_data:[],schedules:[],locations:[],designations:[],formdata:{username:"",password:"",confirm_password:"",u_name:"",u_email:"",u_contact:"",u_type:"",designation_:"",location_:"",schedule_:""}},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_users_data()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"d-print-none",children:Object(h.jsxs)("h4",{children:[Object(h.jsx)("button",{onClick:this.goBack,className:"btn btn-link btn-lg",children:Object(h.jsx)("i",{className:"fa fa-arrow-left"})}),"Users "]})}),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h6",{children:"All User"})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("table",{className:"table table-sm table-responsive-sm table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"SINo."}),Object(h.jsx)("th",{children:"Type"}),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Contact"}),Object(h.jsx)("th",{children:"actions"})]})}),Object(h.jsx)("tbody",{children:this.state.users_data.map((function(t,a){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{scope:"row",children:["\xa0\xa0",a+1,"\xa0\xa0"]}),Object(h.jsx)("td",{children:t.u_type}),Object(h.jsx)("td",{children:t.username}),Object(h.jsx)("td",{children:t.profile.u_name}),Object(h.jsx)("td",{children:t.profile.u_email}),Object(h.jsx)("td",{children:t.profile.u_contact}),Object(h.jsxs)("td",{children:[1===t.active?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"btn btn-sm btn-warning m-2",onClick:function(){e.useraction(t.u_id,"deactivate")},children:"Deactivate"})," ",Object(h.jsx)("button",{className:"btn btn-sm btn-info m-2",onClick:function(){e.useraction(t.u_id,"reset")},children:"Reset"})]}):Object(h.jsx)("button",{className:"btn btn-sm btn-success mr-2",onClick:function(){e.useraction(t.u_id,"activate")},children:"Activate"}),0===t.active?Object(h.jsx)("button",{className:"btn btn-sm btn-danger m-2",onClick:function(){e.useraction(t.u_id,"suspend")},children:"Suspend"}):null]})]},"user_"+a)}))})]})}),Object(h.jsx)("div",{className:"card-footer",children:Object(h.jsx)("button",{className:"btn btm-sm btn-primary",onClick:function(){e.setState({modal:!0})},children:Object(h.jsx)("i",{className:"fa fa-plus"})})})]}),Object(h.jsx)(o.a,{visible:this.state.modal,transparent:!0,title:"Add New User",footer:[{text:"Cancel",onPress:function(){e.setState({modal:!1})}}],children:Object(h.jsxs)("form",{onSubmit:this.addNewuser,children:[Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsxs)("select",{className:" form-control  form-control-sm",name:"u_type",value:this.state.formdata.u_type,onChange:this.OnFormChange,required:!0,children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"User type"}),Object(h.jsx)("option",{value:"admin",children:"Admin"}),Object(h.jsx)("option",{value:"user",children:"User"}),Object(h.jsx)("option",{value:"root",children:"Root"})]})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Username",name:"username",value:this.state.formdata.username,onChange:this.OnFormChange,required:!0,type:"text",pattern:".{5,}",title:"At least 5 or more characters"})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Password",name:"password",value:this.state.formdata.password,onChange:this.OnFormChange,required:!0,type:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Confirm Password",name:"confirm_password",value:this.state.formdata.confirm_password,onChange:this.OnFormChange,required:!0,type:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsxs)("select",{className:" form-control  form-control-sm",name:"location_",value:this.state.formdata.location_,onChange:this.OnFormChange,required:!0,children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Work Location"}),this.state.locations.map((function(e,t){return Object(h.jsx)("option",{value:e.id,children:e.name},"location_".concat(t))}))]})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsxs)("select",{className:" form-control  form-control-sm",name:"designation_",value:this.state.formdata.designation_,onChange:this.OnFormChange,required:!0,children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Designations"}),this.state.designations.map((function(e,t){return Object(h.jsx)("option",{value:e.id,children:e.name},"location_".concat(t))}))]})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsxs)("select",{className:" form-control  form-control-sm",name:"schedule_",value:this.state.formdata.schedule_,onChange:this.OnFormChange,required:!0,children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Schedules"}),this.state.schedules.map((function(e,t){return Object(h.jsxs)("option",{value:e.id,children:[e.clock_in,"-",e.clock_out]},"location_".concat(t))}))]})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Name",name:"u_name",value:this.state.formdata.u_name,onChange:this.OnFormChange,pattern:".{6,}",required:!0,type:"text",title:"minimum 6 characters"})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Email",name:"u_email",value:this.state.formdata.u_email,onChange:this.OnFormChange,required:!0,type:"email"})}),Object(h.jsx)("div",{className:"input-group mb-2",children:Object(h.jsx)("input",{className:" form-control  form-control-sm",placeholder:"Contact No",name:"u_contact",value:this.state.formdata.u_contact,onChange:this.OnFormChange,required:!0,type:"tel",pattern:"[0-9]{10}",size:10,maxLength:10,title:"Enter a Valid Mobile Number "})}),Object(h.jsx)("button",{className:"btn btn-success btn-block btn-sm",children:"Add"})]})})]})}}]),a}(l.a.Component);v.contextType=b.a,p=Object(j.h)(p),f=Object(j.h)(f),g=Object(j.h)(g),v=Object(j.h)(v);t.default=function(){var e=Object(j.g)().path;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:e,component:p}),Object(h.jsx)(j.b,{path:"".concat(e,"/profile"),component:f}),Object(h.jsx)(j.b,{path:"".concat(e,"/activity"),component:g}),Object(h.jsx)(j.b,{path:"".concat(e,"/users"),component:v}),Object(h.jsx)(j.b,{path:"".concat(e,"/locations"),component:u}),Object(h.jsx)(j.b,{path:"".concat(e,"/designations"),component:x}),Object(h.jsx)(j.b,{path:"".concat(e,"/schedules"),component:O})]})})}}}]);