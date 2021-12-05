import { Modal, Toast } from "antd-mobile";
import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import { infoxAPI } from './../../etc/api';
class CatalogueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            error: null,
            action: 'edit',
            title: 'url',
            //category
            category_data: [],
            category_master: '',
            category_master_modal: false,
            category_sub: '',
            category_sub_modal: false,
            category_group: '',
            category_group_modal: false,
            category_unit: '',
            category_unit_modal: false,
            category_modal_value: '',
            image_modal: false,
            modal_image: '',
            modal_image_src: '',
            modal_image_progress: false,
            //options
            options: [],
            // Product data
            p_name: '',
            p_code: '',
            p_description: '',
            p_options: '',
            p_image: '',
            p_reference: '',
            p_alias: '',
            p_tags: '',
            p_remarks: '',
            p_price: '0'

        }
    }
    componentDidMount() {
        this.load_category_data();
        if (this.props.action === 'add') {
            this.setState({
                title: "Add New Product",
                action: 'add',
                active: true,
                error: null,
            });
        } else {
            this.load_edit_data();
        }
    }
    load_edit_data = () => {
        infoxAPI.get('catalogue/products?id=' + this.props.match.params.p_id).then(
            (response) => {
                let data = response.data
                this.setState({
                    title: "Edit " + data.p_name,
                    active: true,
                    error: null,
                    category_master: data.p_master,
                    category_sub: data.p_sub,
                    category_group: data.p_group,
                    category_unit: data.p_unit,
                    p_name: data.p_name,
                    p_code: data.p_code,
                    p_description: data.p_description,
                    p_options: data.p_options,
                    p_image: data.p_image,
                    p_reference: data.p_reference,
                    p_alias: data.p_alias,
                    p_tags: data.p_tags,
                    p_remarks: data.p_remarks,
                    p_price: data.p_price
                })
            }
        ).catch((err) => {
            this.setState({ error: `${err}` });
        })
    }
    load_category_data = () => {
        infoxAPI.get('catalogue/categories').then(
            (response) => {
                this.setState({ category_data: response.data })
            }
        )
    }
    checkcharcter = (value, cvalue) => {
        var regex = /^[a-zA-Z 0-9 -]*$/;
        if (regex.test(value)) {
            return value
        } else {
            Toast.info("Character Not Supported", 0.5);
            return cvalue
        }
    }
    onSelectChange = (event) => {
        let element = event.target.getAttribute('name')
        let data = {}
        if (element === 'category_modal_value') {
            data[element] = this.checkcharcter(event.target.value, this.state.category_modal_value)
        } else {
            data[element] = event.target.value
        }
        this.setState(data);
        if (element === 'category_master') {
            this.setState({
                category_sub: '',
                category_group: ''
            });
        }
        if (element === 'category_sub') {
            this.setState({
                category_group: ''
            });
        }
    }
    save_category = (var_n, var_t, var_c = "") => {
        if (var_n.length > 1) {
            Toast.loading('saving');
            let category_data = this.state.category_data;
            let category = {
                var_n: var_n,
                var_t: var_t,
                var_c: var_c
            }
            infoxAPI.post('catalogue/categories', category).then((response) => {
                category_data.push(response.data);
                this.setState({ category_data: category_data, category_modal_value: '' });
                Toast.success('saved', 0.8)
            });
        } else {
            Toast.fail('minimum 2 characters', 0.8);
        }
    }
    formHandler = (event) => {
        event.preventDefault();
        this.setState({ active: false });
        let data = {}
        data['p_name'] = this.state.p_name;
        data['p_code'] = this.state.p_code;
        data['p_master'] = this.state.category_master;
        data['p_sub'] = this.state.category_sub;
        data['p_group'] = this.state.category_group;
        data['p_image'] = this.state.p_image;
        data['p_description'] = this.state.p_description;
        data['p_options'] = this.state.p_options;
        data['p_unit'] = this.state.category_unit;
        data['p_alias'] = this.state.p_alias;
        data['p_reference'] = this.state.p_reference;
        data['p_remarks'] = this.state.p_remarks;
        data['p_tags'] = this.state.p_tags;
        data['p_price'] = this.state.p_price;
        if (this.state.action === 'edit') {
            data['p_id'] = this.props.match.params.p_id;
        }
        infoxAPI.post('catalogue/products?action=' + this.state.action, data)
            .then(
                (response) => {
                    if (this.state.action === 'add') {
                        Toast.success("Product Saved");
                        this.props.history.replace('/catalogue/go');
                    } else {
                        Toast.success("Product Updated");

                        this.props.history.go(-1);
                    }
                }
            )
            .catch((err) => {
                this.setState({ active: true });
            })
    }
    handleInputChange = (event) => {
        const file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            this.setState({
                modal_image_src: [reader.result]
            })
        }.bind(this);
        this.setState({
            modal_image: file,
        });
    }
    goBack = () => {
        this.props.history.push('/catalogue/all');
    }
    render() {
        if (this.state.active === true) {
            return (
                <>
                    <div className="d-print-none">
                        <h4><button onClick={this.goBack} className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button></h4>
                    </div>
                    <div className="card shadow animated--grow-in">
                        <div className="card-header">
                            <h4 className="card-title">{this.state.title}</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.formHandler}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>Master Category<span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend" onClick={() => {
                                                this.setState({ category_master_modal: true });
                                            }}>
                                                <div className="btn btn-info"><i className="fa fa-plus"></i></div>
                                            </div>
                                            <select required className="form-control" value={this.state.category_master} name="category_master" onChange={this.onSelectChange}>
                                                <option value='' disabled>Choose master-Category</option>
                                                {this.state.category_data.filter((item) => { return item.var_t === 'MC' }).map((master, i) => {
                                                    return (
                                                        <option key={"category_master_" + i} value={master.var_v}>{master.var_n}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <Modal visible={this.state.category_master_modal} title="New Master Catergory" transparent
                                            footer={[
                                                {
                                                    text: 'save', onPress: () => {
                                                        this.save_category(this.state.category_modal_value, "MC");
                                                        this.setState({ category_master_modal: false })
                                                    }
                                                },
                                                { text: 'cancel', onPress: () => { this.setState({ category_master_modal: false }); } },
                                            ]}>
                                            <input className="form-control" placeholder="Value" type="text" name="category_modal_value" value={this.state.category_modal_value} onChange={this.onSelectChange} />
                                        </Modal>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Sub Category<span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend" onClick={() => {
                                                if (this.state.category_master !== '') {
                                                    this.setState({ category_sub_modal: true });
                                                } else {
                                                    Toast.fail('choose master category', 0.8);
                                                }
                                            }}>
                                                <div className="btn btn-info"><i className="fa fa-plus"></i></div>
                                            </div>
                                            <select required className="form-control" value={this.state.category_sub} name="category_sub" onChange={this.onSelectChange}>
                                                <option value="" disabled>Choose sub-Category</option>
                                                {this.state.category_data.filter((item) => { return item.var_t === 'SC' && item.var_c === this.state.category_master }).map((master, i) => {
                                                    return (
                                                        <option key={"category_sub_" + i} value={master.var_v}>{master.var_n}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <Modal visible={this.state.category_sub_modal} title={"New Sub-category for " + this.state.category_master} transparent
                                            footer={[
                                                {
                                                    text: 'save', onPress: () => {
                                                        this.save_category(this.state.category_modal_value, "SC", this.state.category_master);
                                                        this.setState({ category_sub_modal: false });
                                                    }
                                                },
                                                { text: 'cancel', onPress: () => { this.setState({ category_sub_modal: false }); } },
                                            ]}>
                                            <input className="form-control" placeholder="Value" type="text" name="category_modal_value" value={this.state.category_modal_value} onChange={this.onSelectChange} />
                                        </Modal>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Group<span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend" onClick={() => {
                                                if (this.state.category_master !== '' && this.state.category_sub !== '') {
                                                    this.setState({ category_group_modal: true });
                                                } else {
                                                    Toast.fail('choose sub catergory', 0.8);
                                                }

                                            }}>
                                                <div className="btn btn-info"><i className="fa fa-plus"></i></div>
                                            </div>
                                            <select required className="form-control" value={this.state.category_group} name="category_group" onChange={this.onSelectChange}>
                                                <option value='' disabled>Choose group</option>
                                                <option value='all'>All</option>
                                                {this.state.category_data.filter(item => { return item.var_t === 'LC' && item.var_c === this.state.category_sub }).map((master, i) => {
                                                    return (
                                                        <option key={"category_group_" + i} value={master.var_v}>{master.var_n}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <Modal visible={this.state.category_group_modal} title={"New Sub-category for " + this.state.category_sub} transparent
                                            footer={[
                                                {
                                                    text: 'save', onPress: () => {
                                                        this.save_category(this.state.category_modal_value, "LC", this.state.category_sub);
                                                        this.setState({ category_group_modal: false });
                                                    }
                                                },
                                                { text: 'cancel', onPress: () => { this.setState({ category_group_modal: false }); } },
                                            ]}>
                                            <input className="form-control" placeholder="Value" type="text" name="category_modal_value" value={this.state.category_modal_value} onChange={this.onSelectChange} />
                                        </Modal>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Product Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" pattern=".{6,}"
                                            value={this.state.p_name} onChange={this.onSelectChange} name="p_name" required placeholder="Enter Product Name" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Product Code<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" pattern="[A-Z0-9-]{3,}"
                                            value={this.state.p_code} onChange={this.onSelectChange} name="p_code" required placeholder="Enter Product Code" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Product MRP<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" pattern="[0-9]{1,}"
                                            value={this.state.p_price} onChange={this.onSelectChange} name="p_price" required placeholder="Enter Maximum Retail Price" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label>Image</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend" onClick={() => {
                                                this.setState({ image_modal: true });
                                            }}>
                                                <div className="btn btn-info"><i className="fa fa-upload"></i></div>
                                            </div>
                                            <input required type="text" className="form-control" placeholder="Value" name="p_image" readOnly style={{ pointerEvents: 'none', cursor: 'not-allowed' }} value={this.state.p_image} onChange={this.onSelectChange} />
                                        </div>
                                        <Modal visible={this.state.image_modal} transparent
                                            title="Upload Image"
                                            footer={[
                                                {
                                                    text: 'upload', onPress: () => {
                                                        const data = new FormData()
                                                        data.append('file', this.state.modal_image);
                                                        const config = {
                                                            onUploadProgress: (progressEvent) => {
                                                                this.setState({ modal_image_progress: progressEvent });
                                                            }
                                                        }
                                                        axios.post('https://dreamindiaschool.com/uploader', data, config)
                                                            .then((response) => {
                                                                Toast.info(`${response.data}`);
                                                                this.setState({ image_modal: false, p_image: response.data });
                                                            }).catch((err) => {
                                                                Toast.info(`${err}`);
                                                            })
                                                    }
                                                },
                                                { text: 'cancel', onPress: () => { this.setState({ image_modal: false }); } },
                                            ]}><div className="center-text">
                                                {this.state.modal_image_src ? <img src={this.state.modal_image_src} className="img-fluid" alt="upload" /> : null}
                                                <input type="file" id="imgupload" accept="image/png,image/jpeg" style={{ display: 'none' }} onChange={this.handleInputChange} />
                                                <button href="#" className="btn btn-sm btn-secondary m-3" onClick={() => { window.jQuery('#imgupload').trigger('click'); }}>choose image</button>

                                                {this.state.modal_image_progress !== false ? <> <hr />Uploading {`${Math.floor((parseInt(this.state.modal_image_progress.loaded) / parseInt(this.state.modal_image_progress.total)) * 100)}%`}</> : null}

                                            </div>
                                        </Modal>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Unit</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend" onClick={() => {
                                                this.setState({ category_unit_modal: true });
                                            }}>
                                                <div className="btn btn-info"><i className="fa fa-plus"></i></div>
                                            </div>
                                            <select className="form-control" value={this.state.category_unit} name="category_unit" onChange={this.onSelectChange}>
                                                <option value='' disabled>Choose Unit</option>
                                                {this.state.category_data.filter((item) => { return item.var_t === 'UNIT' }).map((master, i) => {
                                                    return (
                                                        <option key={"category_master_" + i} value={master.var_v}>{master.var_n}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <Modal visible={this.state.category_unit_modal} title="New Unit" transparent
                                            footer={[
                                                {
                                                    text: 'save', onPress: () => {
                                                        this.save_category(this.state.category_modal_value, "UNIT");
                                                        this.setState({ category_unit_modal: false })
                                                    }
                                                },
                                                { text: 'cancel', onPress: () => { this.setState({ category_unit_modal: false }); } },
                                            ]}>
                                            <input className="form-control" placeholder="Value" type="text" name="category_modal_value" value={this.state.category_modal_value} onChange={this.onSelectChange} />
                                        </Modal>

                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Description</label>
                                        <textarea type="text" className="form-control" pattern="[A-Z0-9-]{3,}"
                                            value={this.state.p_description} onChange={this.onSelectChange} name="p_description" placeholder="Enter Product Description"></textarea>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Tags</label>
                                        <textarea type="text" className="form-control" pattern="[A-Z0-9-]{3,}"
                                            value={this.state.p_tags} onChange={this.onSelectChange} name="p_tags" placeholder="Enter Tags - tag1,tag2.."></textarea>
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label>Options</label>
                                        <textarea className="form-control" type="text" value={this.state.p_options} onChange={this.onSelectChange} name="p_options" placeholder="Enter Product Options"></textarea>
                                        <p className="m-0 mt-2" style={{ letterSpacing: '1px' }}><b>Eample </b>
                                            color:red;size:large; model:X; <b>|</b>
                                            color:red,blue;size:small,medium,large;  <b>|</b>
                                            width:5cm; height:50cm;</p>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Reference Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control"
                                            value={this.state.p_reference} onChange={this.onSelectChange} name="p_reference" required placeholder="Enter Reference Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Alias</label>
                                        <input type="text" className="form-control"
                                            value={this.state.p_alias} onChange={this.onSelectChange} name="p_alias" placeholder="Enter Alias" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Remarks</label>
                                        <textarea type="text" className="form-control" pattern="[A-Z0-9-]{3,}"
                                            value={this.state.p_remarks} onChange={this.onSelectChange} name="p_remarks" placeholder="Remarks"></textarea>
                                    </div>
                                    <div className="form-group col-md-6 text-center">
                                        {this.state.p_image !== '' ? <img src={'https://www.dreamindiaschool.com/infox_image_server/thumb/' + this.state.p_image} alt="product" /> : null}
                                    </div>
                                    <div className="form-group col-md-6  text-center">
                                        <button className="btn btn-success btn-lg">Save</button>
                                    </div>


                                </div>
                            </form>

                        </div>

                    </div>
                </>
            )
        } else {
            return (<>{this.state.error === null ? <h5>processing..</h5> : <span className="text-danger">{this.state.error}</span>}</>)
        }
    }

}
export default withRouter(CatalogueForm);