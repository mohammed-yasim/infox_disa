(this.webpackJsonpinfox=this.webpackJsonpinfox||[]).push([[5],{323:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var s=a(15),c=a(16),r=a(17),n=a(18),o=a(0),i=a.n(o),l=a(11),d=a(12),p=a(32),m=a(1),u=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_allproducts=function(){p.a.get("catalogue/allproducts").then((function(e){c.setState({products:e.data,pending:!1}),window.jQuery("#dataTable").DataTable()}))},c.goBack=function(){c.props.history.push("/catalogue/")},c.state={products:[],pending:!0},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_allproducts()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"d-print-none",children:Object(m.jsx)("h4",{children:Object(m.jsx)("button",{onClick:this.goBack,className:"btn btn-link btn-lg",children:Object(m.jsx)("i",{className:"fa fa-arrow-left"})})})}),Object(m.jsxs)("div",{className:"card shadow mb-4",children:[Object(m.jsx)("div",{className:"card-header py-3",children:Object(m.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:"All Products"})}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("div",{className:"table-responsive",children:Object(m.jsxs)("table",{className:"table table-bordered text-center",id:"dataTable",width:"100%",cellSpacing:"0",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"S1 No"}),Object(m.jsx)("th",{children:"Product Information"}),Object(m.jsx)("th",{children:"Reference"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:this.state.products.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-2",children:[Object(m.jsx)("img",{className:"img-fluid",alt:e.p_image,src:"https://www.dreamindiaschool.com/infox_image_server/thumb/"+e.p_image}),Object(m.jsx)("p",{className:"text-center m-0",children:Object(m.jsx)("b",{children:e.p_code})})]}),Object(m.jsxs)("div",{className:"col text-left",children:[Object(m.jsx)("h5",{children:Object(m.jsx)("b",{children:e.p_name})}),Object(m.jsx)("p",{children:e.p_description}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"MRP : "})," \u20b9",parseFloat(e.p_price).toFixed(2)]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Unit : "})," ",e.p_unit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Options : "})," ",e.p_options]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Tags : "})," ",e.p_tags]})]})]})}),Object(m.jsx)("td",{children:Object(m.jsxs)("div",{className:"text-left",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Catergory: "}),e.p_master]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Sub Catergory: "}),e.p_sub]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Group: "}),e.p_group]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Alias: "}),e.p_alias]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Reference: "}),e.p_reference]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Remarks: "}),e.p_remarks]})]})}),Object(m.jsx)("td",{children:Object(m.jsxs)(d.b,{to:"/catalogue/edit/"+e.p_id,className:"btn btn-sm btn-info",children:[Object(m.jsx)("i",{className:"fa fa-edit"})," Edit"]})})]},e.p_id)}))})]})})})]})]})}}]),a}(i.a.Component),j=a(48),h=a(14),b=a(113),_=a.n(b),g=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_edit_data=function(){p.a.get("catalogue/products?id="+c.props.match.params.p_id).then((function(e){var t=e.data;c.setState({title:"Edit "+t.p_name,active:!0,error:null,category_master:t.p_master,category_sub:t.p_sub,category_group:t.p_group,category_unit:t.p_unit,p_name:t.p_name,p_code:t.p_code,p_description:t.p_description,p_options:t.p_options,p_image:t.p_image,p_reference:t.p_reference,p_alias:t.p_alias,p_tags:t.p_tags,p_remarks:t.p_remarks,p_price:t.p_price})})).catch((function(e){c.setState({error:"".concat(e)})}))},c.load_category_data=function(){p.a.get("catalogue/categories").then((function(e){c.setState({category_data:e.data})}))},c.checkcharcter=function(e,t){return/^[a-zA-Z 0-9 -]*$/.test(e)?e:(h.b.info("Character Not Supported",.5),t)},c.onSelectChange=function(e){var t=e.target.getAttribute("name"),a={};a[t]="category_modal_value"===t?c.checkcharcter(e.target.value,c.state.category_modal_value):e.target.value,c.setState(a),"category_master"===t&&c.setState({category_sub:"",category_group:""}),"category_sub"===t&&c.setState({category_group:""})},c.save_category=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(e.length>1){h.b.loading("saving");var s=c.state.category_data,r={var_n:e,var_t:t,var_c:a};p.a.post("catalogue/categories",r).then((function(e){s.push(e.data),c.setState({category_data:s,category_modal_value:""}),h.b.success("saved",.8)}))}else h.b.fail("minimum 2 characters",.8)},c.formHandler=function(e){e.preventDefault(),c.setState({active:!1});var t={};t.p_name=c.state.p_name,t.p_code=c.state.p_code,t.p_master=c.state.category_master,t.p_sub=c.state.category_sub,t.p_group=c.state.category_group,t.p_image=c.state.p_image,t.p_description=c.state.p_description,t.p_options=c.state.p_options,t.p_unit=c.state.category_unit,t.p_alias=c.state.p_alias,t.p_reference=c.state.p_reference,t.p_remarks=c.state.p_remarks,t.p_tags=c.state.p_tags,t.p_price=c.state.p_price,"edit"===c.state.action&&(t.p_id=c.props.match.params.p_id),p.a.post("catalogue/products?action="+c.state.action,t).then((function(e){"add"===c.state.action?(h.b.success("Product Saved"),c.props.history.replace("/catalogue/go")):(h.b.success("Product Updated"),c.props.history.go(-1))})).catch((function(e){c.setState({active:!0})}))},c.handleInputChange=function(e){var t=e.target.files[0],a=new FileReader;a.readAsDataURL(t),a.onloadend=function(e){this.setState({modal_image_src:[a.result]})}.bind(Object(j.a)(c)),c.setState({modal_image:t})},c.goBack=function(){c.props.history.push("/catalogue/all")},c.state={active:!1,error:null,action:"edit",title:"url",category_data:[],category_master:"",category_master_modal:!1,category_sub:"",category_sub_modal:!1,category_group:"",category_group_modal:!1,category_unit:"",category_unit_modal:!1,category_modal_value:"",image_modal:!1,modal_image:"",modal_image_src:"",modal_image_progress:!1,options:[],p_name:"",p_code:"",p_description:"",p_options:"",p_image:"",p_reference:"",p_alias:"",p_tags:"",p_remarks:"",p_price:"0"},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_category_data(),"add"===this.props.action?this.setState({title:"Add New Product",action:"add",active:!0,error:null}):this.load_edit_data()}},{key:"render",value:function(){var e=this;return!0===this.state.active?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"d-print-none",children:Object(m.jsx)("h4",{children:Object(m.jsx)("button",{onClick:this.goBack,className:"btn btn-link btn-lg",children:Object(m.jsx)("i",{className:"fa fa-arrow-left"})})})}),Object(m.jsxs)("div",{className:"card shadow animated--grow-in",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{className:"card-title",children:this.state.title})}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("form",{onSubmit:this.formHandler,children:[Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsxs)("div",{className:"form-group col-md-4",children:[Object(m.jsxs)("label",{children:["Master Category",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",onClick:function(){e.setState({category_master_modal:!0})},children:Object(m.jsx)("div",{className:"btn btn-info",children:Object(m.jsx)("i",{className:"fa fa-plus"})})}),Object(m.jsxs)("select",{required:!0,className:"form-control",value:this.state.category_master,name:"category_master",onChange:this.onSelectChange,children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose master-Category"}),this.state.category_data.filter((function(e){return"MC"===e.var_t})).map((function(e,t){return Object(m.jsx)("option",{value:e.var_v,children:e.var_n},"category_master_"+t)}))]})]}),Object(m.jsx)(h.a,{visible:this.state.category_master_modal,title:"New Master Catergory",transparent:!0,footer:[{text:"save",onPress:function(){e.save_category(e.state.category_modal_value,"MC"),e.setState({category_master_modal:!1})}},{text:"cancel",onPress:function(){e.setState({category_master_modal:!1})}}],children:Object(m.jsx)("input",{className:"form-control",placeholder:"Value",type:"text",name:"category_modal_value",value:this.state.category_modal_value,onChange:this.onSelectChange})})]}),Object(m.jsxs)("div",{className:"form-group col-md-4",children:[Object(m.jsxs)("label",{children:["Sub Category",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",onClick:function(){""!==e.state.category_master?e.setState({category_sub_modal:!0}):h.b.fail("choose master category",.8)},children:Object(m.jsx)("div",{className:"btn btn-info",children:Object(m.jsx)("i",{className:"fa fa-plus"})})}),Object(m.jsxs)("select",{required:!0,className:"form-control",value:this.state.category_sub,name:"category_sub",onChange:this.onSelectChange,children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose sub-Category"}),this.state.category_data.filter((function(t){return"SC"===t.var_t&&t.var_c===e.state.category_master})).map((function(e,t){return Object(m.jsx)("option",{value:e.var_v,children:e.var_n},"category_sub_"+t)}))]})]}),Object(m.jsx)(h.a,{visible:this.state.category_sub_modal,title:"New Sub-category for "+this.state.category_master,transparent:!0,footer:[{text:"save",onPress:function(){e.save_category(e.state.category_modal_value,"SC",e.state.category_master),e.setState({category_sub_modal:!1})}},{text:"cancel",onPress:function(){e.setState({category_sub_modal:!1})}}],children:Object(m.jsx)("input",{className:"form-control",placeholder:"Value",type:"text",name:"category_modal_value",value:this.state.category_modal_value,onChange:this.onSelectChange})})]}),Object(m.jsxs)("div",{className:"form-group col-md-4",children:[Object(m.jsxs)("label",{children:["Group",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",onClick:function(){""!==e.state.category_master&&""!==e.state.category_sub?e.setState({category_group_modal:!0}):h.b.fail("choose sub catergory",.8)},children:Object(m.jsx)("div",{className:"btn btn-info",children:Object(m.jsx)("i",{className:"fa fa-plus"})})}),Object(m.jsxs)("select",{required:!0,className:"form-control",value:this.state.category_group,name:"category_group",onChange:this.onSelectChange,children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose group"}),Object(m.jsx)("option",{value:"all",children:"All"}),this.state.category_data.filter((function(t){return"LC"===t.var_t&&t.var_c===e.state.category_sub})).map((function(e,t){return Object(m.jsx)("option",{value:e.var_v,children:e.var_n},"category_group_"+t)}))]})]}),Object(m.jsx)(h.a,{visible:this.state.category_group_modal,title:"New Sub-category for "+this.state.category_sub,transparent:!0,footer:[{text:"save",onPress:function(){e.save_category(e.state.category_modal_value,"LC",e.state.category_sub),e.setState({category_group_modal:!1})}},{text:"cancel",onPress:function(){e.setState({category_group_modal:!1})}}],children:Object(m.jsx)("input",{className:"form-control",placeholder:"Value",type:"text",name:"category_modal_value",value:this.state.category_modal_value,onChange:this.onSelectChange})})]})]}),Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsxs)("label",{children:["Product Name",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",pattern:".{6,}",value:this.state.p_name,onChange:this.onSelectChange,name:"p_name",required:!0,placeholder:"Enter Product Name"})]}),Object(m.jsxs)("div",{className:"form-group col-md-3",children:[Object(m.jsxs)("label",{children:["Product Code",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",pattern:"[A-Z0-9-]{3,}",value:this.state.p_code,onChange:this.onSelectChange,name:"p_code",required:!0,placeholder:"Enter Product Code"})]}),Object(m.jsxs)("div",{className:"form-group col-md-3",children:[Object(m.jsxs)("label",{children:["Product MRP",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",pattern:"[0-9]{1,}",value:this.state.p_price,onChange:this.onSelectChange,name:"p_price",required:!0,placeholder:"Enter Maximum Retail Price"})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Image"}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",onClick:function(){e.setState({image_modal:!0})},children:Object(m.jsx)("div",{className:"btn btn-info",children:Object(m.jsx)("i",{className:"fa fa-upload"})})}),Object(m.jsx)("input",{required:!0,type:"text",className:"form-control",placeholder:"Value",name:"p_image",readOnly:!0,style:{pointerEvents:"none",cursor:"not-allowed"},value:this.state.p_image,onChange:this.onSelectChange})]}),Object(m.jsx)(h.a,{visible:this.state.image_modal,transparent:!0,title:"Upload Image",footer:[{text:"upload",onPress:function(){var t=new FormData;t.append("file",e.state.modal_image);var a={onUploadProgress:function(t){e.setState({modal_image_progress:t})}};_.a.post("https://dreamindiaschool.com/uploader",t,a).then((function(t){h.b.info("".concat(t.data)),e.setState({image_modal:!1,p_image:t.data})})).catch((function(e){h.b.info("".concat(e))}))}},{text:"cancel",onPress:function(){e.setState({image_modal:!1})}}],children:Object(m.jsxs)("div",{className:"center-text",children:[this.state.modal_image_src?Object(m.jsx)("img",{src:this.state.modal_image_src,className:"img-fluid",alt:"upload"}):null,Object(m.jsx)("input",{type:"file",id:"imgupload",accept:"image/png,image/jpeg",style:{display:"none"},onChange:this.handleInputChange}),Object(m.jsx)("button",{href:"#",className:"btn btn-sm btn-secondary m-3",onClick:function(){window.jQuery("#imgupload").trigger("click")},children:"choose image"}),!1!==this.state.modal_image_progress?Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsx)("hr",{}),"Uploading ","".concat(Math.floor(parseInt(this.state.modal_image_progress.loaded)/parseInt(this.state.modal_image_progress.total)*100),"%")]}):null]})})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Unit"}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",onClick:function(){e.setState({category_unit_modal:!0})},children:Object(m.jsx)("div",{className:"btn btn-info",children:Object(m.jsx)("i",{className:"fa fa-plus"})})}),Object(m.jsxs)("select",{className:"form-control",value:this.state.category_unit,name:"category_unit",onChange:this.onSelectChange,children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose Unit"}),this.state.category_data.filter((function(e){return"UNIT"===e.var_t})).map((function(e,t){return Object(m.jsx)("option",{value:e.var_v,children:e.var_n},"category_master_"+t)}))]})]}),Object(m.jsx)(h.a,{visible:this.state.category_unit_modal,title:"New Unit",transparent:!0,footer:[{text:"save",onPress:function(){e.save_category(e.state.category_modal_value,"UNIT"),e.setState({category_unit_modal:!1})}},{text:"cancel",onPress:function(){e.setState({category_unit_modal:!1})}}],children:Object(m.jsx)("input",{className:"form-control",placeholder:"Value",type:"text",name:"category_modal_value",value:this.state.category_modal_value,onChange:this.onSelectChange})})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)("textarea",{type:"text",className:"form-control",pattern:"[A-Z0-9-]{3,}",value:this.state.p_description,onChange:this.onSelectChange,name:"p_description",placeholder:"Enter Product Description"})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Tags"}),Object(m.jsx)("textarea",{type:"text",className:"form-control",pattern:"[A-Z0-9-]{3,}",value:this.state.p_tags,onChange:this.onSelectChange,name:"p_tags",placeholder:"Enter Tags - tag1,tag2.."})]}),Object(m.jsxs)("div",{className:"form-group col-md-12",children:[Object(m.jsx)("label",{children:"Options"}),Object(m.jsx)("textarea",{className:"form-control",type:"text",value:this.state.p_options,onChange:this.onSelectChange,name:"p_options",placeholder:"Enter Product Options"}),Object(m.jsxs)("p",{className:"m-0 mt-2",style:{letterSpacing:"1px"},children:[Object(m.jsx)("b",{children:"Eample "}),"color:red;size:large; model:X; ",Object(m.jsx)("b",{children:"|"}),"color:red,blue;size:small,medium,large;  ",Object(m.jsx)("b",{children:"|"}),"width:5cm; height:50cm;"]})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsxs)("label",{children:["Reference Name",Object(m.jsx)("span",{className:"text-danger",children:"*"})]}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.p_reference,onChange:this.onSelectChange,name:"p_reference",required:!0,placeholder:"Enter Reference Name"})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Alias"}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.p_alias,onChange:this.onSelectChange,name:"p_alias",placeholder:"Enter Alias"})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Remarks"}),Object(m.jsx)("textarea",{type:"text",className:"form-control",pattern:"[A-Z0-9-]{3,}",value:this.state.p_remarks,onChange:this.onSelectChange,name:"p_remarks",placeholder:"Remarks"})]}),Object(m.jsx)("div",{className:"form-group col-md-6 text-center",children:""!==this.state.p_image?Object(m.jsx)("img",{src:"https://www.dreamindiaschool.com/infox_image_server/thumb/"+this.state.p_image,alt:"product"}):null}),Object(m.jsx)("div",{className:"form-group col-md-6  text-center",children:Object(m.jsx)("button",{className:"btn btn-success btn-lg",children:"Save"})})]})]})})]})]}):Object(m.jsx)(m.Fragment,{children:null===this.state.error?Object(m.jsx)("h5",{children:"processing.."}):Object(m.jsx)("span",{className:"text-danger",children:this.state.error})})}}]),a}(i.a.Component),x=Object(l.h)(g),O=(a(323),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).load_products=function(){p.a.get("/catalogue/list").then((function(e){var t=e.data;c.setState({product_data:t})}))},c.filter=function(e){return e.filter((function(t,a){return e.indexOf(t)===a})).map((function(e){return{name:e.replace(/_/g," ").toProperCase(),value:e}}))},c.onChange=function(e){var t=[],a=e.target.getAttribute("name");t[a]=e.target.value,"p_master"===a&&(t.p_sub="",t.p_group="",t.p_input=""),"p_sub"===a&&(t.p_group="",t.p_input=""),c.setState(t)},c.state={product_data:[],p_master:"plaything",p_sub:"",p_group:"",p_input:""},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_products()}},{key:"render",value:function(){var e=this,t=[],a=[],s=[],c=0,r=[];return this.state.product_data.length>0&&(t=this.state.product_data.map((function(e){return e.p_master})),a=this.state.product_data.filter((function(t){return t.p_master===e.state.p_master})).map((function(e){return e.p_sub})),s=this.state.product_data.filter((function(t){return t.p_master===e.state.p_master&&t.p_sub===e.state.p_sub})).map((function(e){return e.p_group})),t=this.filter(t),a=this.filter(a),s=this.filter(s),c=this.state.product_data.length,r=this.state.product_data.filter((function(t){return!e.state.p_master||e.state.p_sub||e.state.p_group?""!==e.state.p_master&&""===e.state.p_sub&&""===e.state.p_group?t.p_master===e.state.p_master:""!==e.state.p_master&&""!==e.state.p_sub&&""===e.state.p_group?t.p_master===e.state.p_master&&t.p_sub===e.state.p_sub:""!==e.state.p_master&&""!==e.state.p_sub&&""!==e.state.p_group&&(t.p_master===e.state.p_master&&t.p_sub===e.state.p_sub&&t.p_group===e.state.p_group):t.p_master===e.state.p_master})).sort((function(e,t){return e.p_name<t.p_name?-1:e.p_name>t.p_name?1:0})).filter((function(t){return e.state.p_input?t.p_name.toLowerCase().indexOf(e.state.p_input.toLowerCase())>=0:t}))),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"bottom-bar shadow",children:[Object(m.jsxs)("div",{className:"form-inline",children:[Object(m.jsxs)("select",{name:"p_master",value:this.state.p_master,onChange:this.onChange,className:"form-control form-control-sm col",children:[Object(m.jsx)("option",{value:"",children:"Category"}),t.map((function(e){return Object(m.jsx)("option",{value:e.value,children:e.name})}))]}),Object(m.jsxs)("select",{name:"p_sub",value:this.state.p_sub,onChange:this.onChange,className:"form-control form-control-sm col",children:[Object(m.jsx)("option",{value:"",children:"Sub Category"}),a.map((function(e){return Object(m.jsx)("option",{value:e.value,children:e.name})}))]}),Object(m.jsxs)("select",{name:"p_group",value:this.state.p_group,onChange:this.onChange,className:"form-control form-control-sm col",children:[Object(m.jsx)("option",{value:"",children:"Group"}),s.map((function(e){return Object(m.jsx)("option",{value:e.value,children:e.name})}))]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",name:"p_input",value:this.state.p_input,onChange:this.onChange,placeholder:"filter by Name",className:"form-control form-control-sm col"})})]}),Object(m.jsxs)("p",{className:"mt-1 mb-2",children:[r.filter((function(e){return""!==e.p_image})).length," result with image from ",r.length," out of ",c]}),Object(m.jsx)("div",{className:"row justify-content-center",children:r.filter((function(e){return""!==e.p_image})).map((function(e){return Object(m.jsx)("div",{className:"col-12 col-sm-6 col-md-4",children:Object(m.jsx)("div",{className:"card mb-2 text-center",children:Object(m.jsxs)("div",{className:"card-body row",children:[Object(m.jsxs)("div",{className:"col-10",children:[Object(m.jsx)("b",{children:e.p_code}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{style:{height:"100px"},className:"img-fluid",alt:e.p_image,src:"https://www.dreamindiaschool.com/infox_image_server/thumb/"+e.p_image}),Object(m.jsx)("br",{}),Object(m.jsxs)("b",{children:[" ",e.p_name]}),Object(m.jsx)("p",{children:e.p_reference})]}),Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)("button",{className:"btn btn-sm btn-primary",children:Object(m.jsx)("i",{className:"fa fa-plus"})})})]})})},e.p_id)}))})]})})}}]),a}(i.a.Component)),f=Object(l.h)(O),v=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).load_data=function(){p.a.get("/catalogue").then((function(t){e.setState(t.data),e.drawgraph()}))},e.drawgraph=function(){new window.Chart(document.getElementById("myPieChart"),{type:"polarArea",data:{labels:["Verified","Not Verified","Discontinued","Total","No MRP","Image Uploaded","No Image"],datasets:[{label:"My First Dataset",data:[e.state.verified,e.state.totel-e.state.verified,e.state.discontinued,e.state.totel,e.state.mrp,e.state.image,e.state.noimage],backgroundColor:["green","red","yellow","blue","violet","orange","pink"]}]},options:{maintainAspectRatio:!0,legend:{position:"bottom",title:{text:"Product Catalogue Report",fontColor:"black"}}}})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load_data()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"text-center",children:"Catelogue Report"}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-md-10",children:Object(m.jsx)("canvas",{id:"myPieChart"})})})]})}}]),a}(i.a.Component);t.default=function(){var e=Object(l.g)().path;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:e,component:v}),Object(m.jsx)(l.b,{exact:!0,path:"".concat(e,"/edit/:p_id"),component:x}),Object(m.jsx)(l.b,{exact:!0,path:"".concat(e,"/go"),children:Object(m.jsx)(l.a,{to:"/catalogue/add"})}),Object(m.jsx)(l.b,{exact:!0,path:"".concat(e,"/add"),children:Object(m.jsx)(x,{action:"add"})}),Object(m.jsx)(l.b,{exact:!0,path:"".concat(e,"/all"),component:u}),Object(m.jsx)(l.b,{exact:!0,path:"".concat(e,"/advanced"),component:f})]})})}}}]);