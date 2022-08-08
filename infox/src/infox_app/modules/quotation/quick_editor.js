import { Toast } from 'antd-mobile';
import React from 'react';
import { infoxAPI } from '../../etc/api';
import { InfoXContext } from '../../etc/context';
import { withRouter } from "react-router-dom";
class QuickQuotationEditor extends React.Component {
    static contextType = InfoXContext;
    constructor(props) {
        super(props);
        this.state = {
            action: 'edit',
            quotation: {
                date: '',
                validity: '',
                items: [],
                party_name: '',
                party_address: '',
                party_phone: '',
                file_name: '',
                firm: '',
                total: 0.00,
                discount: 0.00,
                discount_amount: 0.00,
                shipping_charge: 0.00,
                additional_information: '',
                prepared_by: ''
            },
            editor: {
                code: '',
                name: '',
                rate: 0,
                qty: 1,
                edit: true,
                amount: 0
            },
            edit: false,
        }
    }
    componentDidMount() {
        let quotation = this.state.quotation
        quotation['prepared_by'] = this.context.profile;
        if (this.props.match.params.id === 'new') {
            this.setState({ action: 'add', quotation: quotation });
        } else {
            this.loadData();
        }
    }
    loadData = () => {
        infoxAPI.get(`/quotation/quick/${this.props.match.params.id}`).then(
            (response) => {
                this.setState({ quotation: JSON.parse(response.data.blob) });
            });
    }
    saveForm = (event) => {
        event.preventDefault();
        if (this.state.edit === false) {
            if (this.state.quotation.total > 0) {
                let data = this.state.quotation;
                infoxAPI.post(`/quotation/quick/${this.props.match.params.id}?action=${this.state.action}`, data).then(
                    (response) => {
                        Toast.success('Saved');
                        this.props.history.replace('/quotation/draft');
                    }
                ).catch((err) => {
                    Toast.fail();
                })
            } else {
                Toast.fail('Add data First');
            }
        } else {
            Toast.fail('First Save the Row ');
        }
    }
    goBack = () => {
        this.props.history.goBack();
    }
    addRow = () => {
        let quotation = this.state.quotation
        let items = quotation.items
        let new_items = []
        if (items.length > 0) {
            new_items = items.map((item) => { item.edit = false; return item; })
        }
        let data = {
            code: '', name: '', rate: 0, qty: 1, edit: true, amount: 0
        }
        new_items.push(data)
        quotation['items'] = new_items;
        this.setState({ quotation: quotation, edit: true });
    }
    editRow = (index) => {
        let quotation = this.state.quotation
        let items = quotation.items
        let new_items = items.map((item) => { item.edit = false; return item; })
        new_items[index]['edit'] = true;
        this.setState({ quotation: quotation, editor: items[index], edit: true });
    }
    saveRow = (index) => {
        let editor = this.state.editor;
        editor['amount'] = ((editor.qty) * (editor.rate)).toFixed(2);
        let quotation = this.state.quotation
        let items = quotation.items
        let new_items = items.map((item) => { item.edit = false; return item; })
        new_items[index] = JSON.parse(`${JSON.stringify(editor)}`);
        new_items[index]['edit'] = false;
        quotation['items'] = new_items;
        quotation['total'] = (new_items.reduce((a, v) => { return a = a + (v.qty * v.rate) }, 0)).toFixed(2)
        quotation['discount_amount'] = ((parseFloat(quotation.total) * (parseFloat(quotation.discount) / 100))).toFixed(2);

        this.setState({
            quotation: quotation, editor: {
                code: '',
                name: '',
                rate: 0,
                qty: 1,
                edit: true
            },
            edit: false
        });
    }
    delRow = (index) => {
        let quotation = this.state.quotation
        let items = quotation.items
        items.splice(index, 1);
        this.setState({
            quotation: quotation, editor: {
                code: '',
                name: '',
                rate: 0,
                qty: 1,
                edit: true
            }, edit: false
        })
    }
    onRowInput = (event) => {
        let editor = this.state.editor
        editor[event.target.getAttribute('name')] = event.target.value;
        this.setState({ editor: editor });
    }
    onChangeInput = (event) => {
        let quotation = this.state.quotation;

        if (event.target.getAttribute('name') === 'discount') {
            if (event.target.value === '') {
                quotation['discount'] = 0.00;
                quotation['discount_amount'] = 0.00;
            } else {
                quotation['discount'] = event.target.value;
                quotation['discount_amount'] = ((parseFloat(this.state.quotation.total) * (parseFloat(event.target.value) / 100))).toFixed(2);
            }
        }
        if (event.target.getAttribute('name') === 'shipping_charge') {
            if (event.target.value === '') {
                quotation['shipping_charge'] = 0;
            } else {
                quotation['shipping_charge'] = parseInt(event.target.value)
            }
        }
        else {
            quotation[event.target.getAttribute('name')] = event.target.value;
        }
        this.setState({ quotation: quotation });

    }
    onFoucus_file = (e) => {
        if (e.target.value === '') {
            let quotation = this.state.quotation;
            quotation[e.target.getAttribute('name')] = `_${this.context.profile.u_name}_${new Date().toLocaleString()}`;
            this.setState({ quotation: quotation });
            e.target.setSelectionRange(0, 0);
        }
    }
    adjustHeight = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    fetch_product = (p_code) => {
        infoxAPI.get(`/quotation/pcode/${p_code}`).then((response) => {
            let editor = {
                code: response.data.p_code,
                name: `${response.data.p_reference} ${response.data.p_description}`,
                rate: response.data.p_price,
                qty: 1,
                edit: true
            }
            this.setState({ editor: editor })
        }).catch(err => {
            Toast.fail()
        });
    }
    render() {
        return (
            <>
                <div>
                    <h4><button onClick={this.goBack}
                        className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Quotation Editor</h4>
                </div>
                <form className="row justify-content-center" onSubmit={this.saveForm}>
                    <div className="card shadow col-xl-10">
                        <div className="card-body">
                            <div className="form-group row">
                                <label className="col-6 d-flex align-items-center justify-content-center"><b>File Name</b></label>
                                <div className="col-6">
                                    <input type="text" value={this.state.quotation.file_name} onChange={this.onChangeInput} name="file_name" required className="form-control" autoFocus onFocus={this.onFoucus_file} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-6 d-flex align-items-center justify-content-center"><b>Choose Firm</b></label>
                                <div className="col-6"><select name="firm" value={this.state.quotation.firm} required onChange={this.onChangeInput} className="form-control">
                                    <option value="" disabled>choose</option>
                                    <option value="dream_india">Dream India School Aid</option>
                                    <option value="dream_india_tl">Dream India Trade Links</option>
                                    <option value="dream_india_vns">VNS School</option>
                                    <option value="dream_india_vt">VT School Land</option>
                                </select>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col-md-10">
                                        <h5>Bill To</h5>
                                        <div className="form-group">
                                            <input type="text" required value={this.state.quotation.party_name} name="party_name" onChange={this.onChangeInput} className="form-control form-control-sm border-0 mb-1" placeholder="Name" />
                                            <textarea type="text" required value={this.state.quotation.party_address} name="party_address" onChange={this.onChangeInput}
                                                onInput={this.adjustHeight} onLoad={this.adjustHeight} className="form-control form-control-sm border-0 mb-1"
                                                style={{ overflow: "hidden", }} rows="4"
                                                placeholder="Address"></textarea>
                                            <input type="text" value={this.state.quotation.party_phone} name="party_phone" onChange={this.onChangeInput} className="form-control form-control-sm border-0 mb-1" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h5>&nbsp;</h5>
                                    <table className="table table-bordered table-sm tex-center">
                                        <tbody>
                                            <tr>
                                                <th>Quotation No. </th><td className="text-center">Auto</td>
                                            </tr>
                                            <tr>
                                                <th>Date </th><td><input required className="form-control form-control-sm border-0" type="date" value={this.state.quotation.date} name="date" onChange={this.onChangeInput} /></td>
                                            </tr>
                                            <tr>
                                                <th>Validity </th><td><input required className="form-control form-control-sm border-0" type="date" value={this.state.quotation.validity} name="validity" onChange={this.onChangeInput} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <table className="table table-sm table-bordered text-center table-responsive-sm ">
                                <thead>
                                    <tr>
                                        {this.state.edit === true ? <td className="col-md-1">PCODE</td> : null}
                                        <th className="col-md-1">SI No.</th>
                                        <th scope="col">Description</th>
                                        <th className="col-md-1">Rate</th>
                                        <th className="col-md-1">Quantity</th>
                                        <th className="col-md-2">Amount</th>
                                        {this.state.edit === true ? <th className="col-md-1"></th> : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.quotation.items.map((item, i) => {
                                        if (item.edit === true) {
                                            let amount = ((this.state.editor.qty) * (this.state.editor.rate)).toFixed(2)
                                            return (
                                                <tr key={i}>
                                                    {this.state.edit === true ?
                                                        <td><input className="form-control" autoComplete="false" type="text" onChange={this.onRowInput} onKeyPress={(event) => {
                                                            if (event.key === "Enter") {
                                                                event.preventDefault();
                                                                this.fetch_product(this.state.editor.code);
                                                            }
                                                        }} name="code" value={this.state.editor.code} /></td> : null}
                                                    <th scope="col">
                                                        <button onClick={() => { this.delRow(i) }} className="btn btn-link ml-2"><i className="fa fa-trash"></i></button>
                                                    </th>
                                                    <td><textarea className="form-control" autoComplete="false" type="text" onChange={this.onRowInput} name="name" value={this.state.editor.name} autoFocus /></td>
                                                    <td><input className="form-control " type="number" onChange={this.onRowInput} name="rate" value={this.state.editor.rate} /></td>
                                                    <td><input maxLength={3} className="form-control " type="number" onChange={this.onRowInput} name="qty" value={this.state.editor.qty} /></td>
                                                    <td>&#8377; {amount}</td>
                                                    <td>
                                                        <button onClick={() => { this.saveRow(i) }} className="btn btn-success btn-circle btn-sm mr-1"><i className="fa fa-save"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        else {
                                            return (<tr key={i} onClick={() => { this.editRow(i) }} >
                                                {this.state.edit === true ? <td>{item.code}</td> : null}
                                                <th scope="col">{i + 1}</th>
                                                <td>{item.name}</td>
                                                <td>&#8377; {parseFloat(item.rate).toFixed(2)}</td>
                                                <td>{item.qty}</td>
                                                <td>&#8377; {item.amount}</td>
                                                {this.state.edit === true ? <th className="col-md-2"></th> : null}
                                            </tr>)
                                        }
                                    })}
                                </tbody>
                                <tfoot>
                                    {this.state.edit === false ?
                                        <tr><td colSpan={this.state.edit === true ? 7 : 5}>
                                            <button onClick={this.addRow} className="btn btn-primary btn-circle btn-sm"><i className="fa fa-plus"></i></button>
                                        </td>
                                        </tr>
                                        : null}

                                    <tr>
                                        <th className="text-right" colSpan={this.state.edit === true ? 6 : 4}> Sub Total : </th><th>&#8377; {this.state.quotation.total} / -</th>
                                    </tr>
                                    <tr>
                                        <th className="text-right" colSpan={this.state.edit === true ? 6 : 4}> Discount(%): </th><th>
                                            <input type="number" min={0} max={25} step={0.5} onChange={this.onChangeInput} value={this.state.quotation.discount} name="discount" className="form-control form-control-sm" size={3} required />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="text-right" colSpan={this.state.edit === true ? 6 : 4}> Discount: </th><th>{this.state.quotation.discount_amount}</th>
                                    </tr>
                                    <tr>
                                        <th className="text-right" colSpan={this.state.edit === true ? 6 : 4}> Freight charge : </th><th>
                                            <input type="number" onChange={this.onChangeInput} value={this.state.quotation.shipping_charge} name="shipping_charge" className="form-control form-control-sm" required />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="text-right" colSpan={this.state.edit === true ? 6 : 4}> Grand Total : </th><th>&#8377; {(parseFloat(this.state.quotation.total) - parseFloat(this.state.quotation.discount_amount) + parseFloat(this.state.quotation.shipping_charge)).toFixed(2)} / -</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <textarea type="text" value={this.state.quotation.additional_information} name="additional_information" onChange={this.onChangeInput}
                                                onInput={this.adjustHeight} onLoad={this.adjustHeight} className="form-control form-control-sm border-0 mb-1"
                                                style={{ overflow: "hidden", }} rows="4"
                                                placeholder="Additional information"></textarea>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="card-body text-right">
                            <button type="submit" className="btn btn-md btn-success"><i className="fa fa-save"></i> Save</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
export default withRouter(QuickQuotationEditor);
