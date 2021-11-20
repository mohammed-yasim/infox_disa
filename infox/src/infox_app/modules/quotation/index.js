import { Toast } from "antd-mobile";
import React from "react";
import { Switch, Route, withRouter, useRouteMatch, NavLink } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
import { InfoXContext } from '../../etc/context';

class QuotationHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        infoxAPI.get('/quotation/').then(response => {
            this.setState({ data: response.data });
            console.log(response.data);
        })
    }
    render() {
        let data = this.state.data;
        let draft_count = null
        let submitted_count = null
        let approved_count = null
        let completed_count = null
        if (this.state.data.length > 0) {
            draft_count = data.filter(i => i.status === 'draft').length;
            submitted_count = data.filter(i => i.status === 'submitted').length;
            approved_count = data.filter(i => i.status === 'approved').length;
            completed_count = data.filter(i => i.status === 'completed').length;
        }
        return (<>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Quotations</h1>
                <NavLink className="d-inline-block btn btn-sm btn-primary shadow-sm" to="/quotation/quick/edit/new"><i className="fas fa-plus fa-sm text-white-50"></i> Quick</NavLink>
            </div>
            <div className="row">
                {draft_count > 0 ?
                <div className="col-xl-3 col-md-6 mb-4" key={'draft_count'}>
                    <div className="card border-left-danger shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <NavLink to="/quotation/draft" className="text-decoration-none"><div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Drafts</div></NavLink>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{draft_count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-file fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
                {submitted_count > 0 ?
                <div className="col-xl-3 col-md-6 mb-4" key={'submitted_count'}>
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <NavLink to="/quotation/submitted" className="text-decoration-none"><div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Submitted</div></NavLink>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{submitted_count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-file fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
                {approved_count > 0 ?
                <div className="col-xl-3 col-md-6 mb-4" key={'approved_count'}>
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <NavLink to="/quotation/approved" className="text-decoration-none"><div className="text-xs font-weight-bold text-success text-uppercase mb-1">Approved</div></NavLink>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{approved_count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-file fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
                {completed_count > 0 ?
                <div className="col-xl-3 col-md-6 mb-4" key={'completed_count'}>
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <NavLink to="/quotation/completed" className="text-decoration-none"><div className="text-xs font-weight-bold text-info text-uppercase mb-1">Completed</div></NavLink>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{completed_count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-file fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                : null}
            </div>
        </>)
    }
}
QuotationHome = withRouter(QuotationHome);

class QuickQuotation extends React.Component {
    constructor(props) {
        super(props);
        this.action = this.props.action;
        this.title = this.props.title;
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        infoxAPI.get(`/quotation/list/${this.action}`).then(response => {
            this.setState({ data: response.data });
            console.log(response.data)
        })
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (<>
            <div>
                <h4><button onClick={this.goBack}
                    className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>{this.title}</h4>
            </div>
            <table className="table">
                <tbody>
                    <th>File Name</th>
                    <th>Firm</th>
                    <th>Party</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tbody>
                <tbody>
                    {this.state.data.map((quotation, i) => {
                        return (<tr>
                            <td>{quotation.name}</td>
                            <td>{quotation.firm.toUpperCase()}</td>
                            <td>{quotation.party}</td>
                            <td>{new Date(quotation.date).toDateString()}</td>
                            <td>
                                <NavLink className="btn btn-link" to={`/quotation/quick/edit/${quotation.id}`}><i className="fa fa-edit"></i></NavLink>
                                <button className="btn btn-primary btn-sm" to={`/quotation/quick/edit/${quotation.id}`}><i className="fa fa-check-circle"></i> Apply</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>)
    }
}
QuickQuotation = withRouter(QuickQuotation);

class QuickQuotationEditor extends React.Component {
    static contextType = InfoXContext;
    constructor(props) {
        super(props);
        this.state = {
            action: 'edit',
            quotation: {
                no: '',
                date: '',
                validity: '',
                items: [],
                party_name: '',
                party_address: '',
                party_phone: '',
                file_name: '',
                firm: '',
                total: 0
            },
            editor: {
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
        if (this.props.match.params.id === 'new') {
            this.setState({ action: 'add' });
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
        if (this.state.quotation.total > 0) {
            let data = this.state.quotation;
            infoxAPI.post(`/quotation/quick/${this.props.match.params.id}?action=${this.state.action}`, data).then(
                (response) => {
                    Toast.success('Saved');
                    this.props.history.replace('/quotation/draft');
                }
            )
        } else {
            Toast.fail('Add data First');
        }
    }
    saveData = (total) => {
        if (total > 0) {
            let data = this.state.quotation;
            data['total'] = total;
            infoxAPI.post(`/quotation/quick/${this.props.match.params.id}?action=${this.state.action}`, data).then(
                (response) => {
                    Toast.success('Saved');
                    this.props.history.replace('/quotation/quick');
                }
            )
        } else {
            Toast.fail('Add data First');
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
        let data = { name: '', rate: 0, qty: 1, edit: true, amount: 0 }
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
        editor['amount'] = ((editor.qty) * (editor.rate)).toFixed(2)
        let quotation = this.state.quotation
        let items = quotation.items
        let new_items = items.map((item) => { item.edit = false; return item; })
        new_items[index] = JSON.parse(`${JSON.stringify(editor)}`);
        new_items[index]['edit'] = false;
        quotation['items'] = new_items;
        this.setState({
            quotation: quotation, editor: {
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
        quotation[event.target.getAttribute('name')] = event.target.value;
        this.setState({ quotation: quotation });

    }
    onFoucus_file = (e) => {
        if (e.target.value === '') {
            let quotation = this.state.quotation;
            quotation[e.target.getAttribute('name')] = `_${this.context.u_name}_[ ${this.context.u_designation} ]_${new Date().toLocaleString()}`;
            this.setState({ quotation: quotation });
            e.target.setSelectionRange(0, 0);
        }
    }
    adjustHeight = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    render() {
        let total = 0;
        if (this.state.quotation.items.length > 0) {
            total = (this.state.quotation.items.reduce((a, v) => { return a = a + (v.qty * v.rate) }, 0)).toFixed(2)
        }
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
                                <div className="col-6"><select name="firm" required onChange={this.onChangeInput} className="form-control">
                                    <option value="">choose</option>
                                    <option value="dream_india">Dream India</option>
                                </select>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col-md-10">
                                        <h5>Bill To</h5>
                                        <div className="form-group">
                                            <input type="text" required value={this.state.quotation.party_name} name="party_name" onChange={this.onChangeInput} className="form-control form-control-sm border-0 mb-1" id="formGroupExampleInput" placeholder="Name" />
                                            <textarea type="text" required value={this.state.quotation.party_address} name="party_address" onChange={this.onChangeInput}
                                                onInput={this.adjustHeight} onLoad={this.adjustHeight} on className="form-control form-control-sm border-0 mb-1"
                                                style={{ overflow: "hidden", }} rows="4"
                                                id="formGroupExampleInput" placeholder="Address"></textarea>
                                            <input type="text" value={this.state.quotation.party_phone} name="party_phone" onChange={this.onChangeInput} className="form-control form-control-sm border-0 mb-1" id="formGroupExampleInput" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h5>&nbsp;</h5>
                                    <table className="table table-bordered table-sm tex-center">
                                        <tbody>
                                            <tr>
                                                <th>Quotation No. </th><td><input className="form-control form-control-sm border-0" type="text" value={this.state.quotation.no} name="no" onChange={this.onChangeInput} /></td>
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
                                        <th>SI No.</th>
                                        <th scope="col">Description</th>
                                        <th>Rate</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        {this.state.edit === true ? <th></th> : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.quotation.items.map((item, i) => {
                                        if (item.edit === true) {
                                            let amount = ((this.state.editor.qty) * (this.state.editor.rate)).toFixed(2)
                                            return (
                                                <tr key={i}>
                                                    <th scope="col">
                                                        <button onClick={() => { this.delRow(i) }} className="btn btn-link ml-2"><i className="fa fa-trash"></i></button>
                                                    </th>
                                                    <td><input className="form-control" autoComplete="false" type="text" onChange={this.onRowInput} name="name" value={this.state.editor.name} autoFocus /></td>
                                                    <td className="col-md-1"><input className="form-control " type="number" onChange={this.onRowInput} name="rate" value={this.state.editor.rate} /></td>
                                                    <td className="col-md-1"><input maxLength={3} className="form-control " type="number" onChange={this.onRowInput} name="qty" value={this.state.editor.qty} /></td>
                                                    <td  >&#8377; {amount}</td>
                                                    <td>
                                                        <button onClick={() => { this.saveRow(i) }} className="btn btn-success btn-circle btn-sm mr-1"><i className="fa fa-save"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        else {
                                            return (<tr key={i} onClick={() => { this.editRow(i) }} >
                                                <th scope="col">{i + 1}</th>
                                                <td>{item.name}</td>
                                                <td>&#8377; {parseFloat(item.rate).toFixed(2)}</td>
                                                <td>{item.qty}</td>
                                                <td>&#8377; {item.amount}</td>
                                            </tr>)
                                        }
                                    })}
                                </tbody>
                                <tfoot>
                                    {this.state.edit === false ?
                                        <tr><td colSpan={6}>

                                            <button onClick={this.addRow} className="btn btn-primary btn-circle btn-sm"><i className="fa fa-plus"></i></button>
                                        </td>
                                        </tr>
                                        : null}

                                    <tr>
                                        <th className="text-right" colSpan={4}> Total Amount : </th><th>&#8377; {total} / -</th></tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="card-body text-right">
                            <button type="submit" onClick={(e) => {
                                e.target.value = total;
                                e.target.name = 'total';
                                this.onChangeInput(e);
                            }} className="btn btn-md btn-success"><i className="fa fa-save"></i> Save</button>
                        </div>
                    </div>
                </form>
                {JSON.stringify(this.state)}
            </>
        )
    }
}
QuickQuotationEditor = withRouter(QuickQuotationEditor);




function Quotation() {
    let { path } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route exact path={path} component={QuotationHome} />
                <Route exact path={`${path}/quick/edit/:id`} component={QuickQuotationEditor} />
                <Route exact path={`${path}/submitted`} ><QuickQuotation title="Submitted Quotations" action="submitted" /></Route>
                <Route exact path={`${path}/draft`}><QuickQuotation title="Drafts" action="draft" /></Route>
                <Route exact path={`${path}/approved`}><QuickQuotation title="Approved Quotations" action="approved" /></Route>
                <Route exact path={`${path}/completed`}><QuickQuotation title="complted Quotations" action="completed" /></Route>
            </Switch>
        </>
    )
}
export default Quotation;