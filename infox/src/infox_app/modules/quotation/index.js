import React from "react";
import { Switch, Route, withRouter, useRouteMatch, NavLink } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
import QuickQuotationEditor from './quick_editor';
import QuotationPreview from './preview';
class QuotationHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        infoxAPI.get('/quotation/').then(response => {
            this.setState({ data: response.data });
        })
    }
    render() {
        let data = this.state.data;
        let draft_count = null;
        let request_count = null;
        let ready_count = null;
        let submitted_count = null;
        let approved_count = null;
        let disposed_count = null;
        let completed_count = null;
        if (this.state.data.length > 0) {
            draft_count = data.filter(i => i.status === 'draft').length;
            request_count = data.filter(i => i.status === 'request').length;
            ready_count = data.filter(i => i.status === 'ready').length;
            submitted_count = data.filter(i => i.status === 'submitted').length;
            approved_count = data.filter(i => i.status === 'approved').length;
            disposed_count = data.filter(i => i.status === 'disposed').length;
            completed_count = data.filter(i => i.status === 'disposed').length;
        }
        return (<>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Quotations </h1>
                <div>
                    <NavLink className="btn btn-sm btn-primary shadow-sm mr-1" to="/quotation/quick/edit/new"><i className="fas fa-plus fa-sm text-white-50"></i> Quick</NavLink>
                    <button onClick={this.loadData} className="btn btn-circle btn-info btn-sm"><i className="fa fa-sync"></i></button>
                </div>
            </div>
            <div className="row">
                {draft_count > 0 ?
                    <div className="col-xl-3 col-md-6 mb-4" key={'draft_count'}>
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <NavLink to="/quotation/draft" className="text-decoration-none"><div className="text-sm font-weight-bold text-danger text-uppercase mb-1">Drafts</div></NavLink>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{draft_count}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fab fa-firstdraft fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                {request_count > 0 ?
                    <div className="col-xl-3 col-md-6 mb-4" key={'draft_count'}>
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <NavLink to="/quotation/request" className="text-decoration-none"><div className="text-sm font-weight-bold text-danger text-uppercase mb-1">Requests</div></NavLink>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{request_count}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-stream fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                {ready_count > 0 ?

                    <div className="col-xl-3 col-md-6 mb-4" key={'ready_count'}>
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <NavLink to="/quotation/ready" className="text-decoration-none"><div className="text-sm font-weight-bold text-info text-uppercase mb-1">Ready</div></NavLink>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{ready_count}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fab fa-readme fa-2x text-gray-300"></i>
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
                                        <NavLink to="/quotation/submitted" className="text-decoration-none"><div className="text-sm font-weight-bold text-warning text-uppercase mb-1">Submitted</div></NavLink>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{submitted_count}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-check fa-2x text-gray-300"></i>
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
                                        <NavLink to="/quotation/approved" className="text-decoration-none"><div className="text-sm font-weight-bold text-success text-uppercase mb-1">Approved</div></NavLink>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{approved_count}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-check-circle fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                {disposed_count > 0 ?
                    <div className="col-xl-3 col-md-6 mb-4" key={'approved_count'}>
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <NavLink to="/quotation/approved" className="text-decoration-none"><div className="text-sm font-weight-bold text-success text-uppercase mb-1">Disposed</div></NavLink>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{disposed_count}</div>
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
                    <div className="col-xl-3 col-md-6 mb-4" key={'approved_count'}>
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <NavLink to="/quotation/approved" className="text-decoration-none"><div className="text-sm font-weight-bold text-success text-uppercase mb-1">Completed</div></NavLink>
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
            window.jQuery('#dataTable').DataTable();
        })
    }
    goBack = () => {
        this.props.history.goBack();
    }
    actionStatus = (id, status) => {
        infoxAPI.post(`/quotation/status/${id}/${status}`, {}).then(response => {
            this.loadData();
        });
    }
    render() {
        return (<>
            <div>
                <h4><button onClick={this.goBack}
                    className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>{this.title}<button onClick={this.loadData} className="btn btn-circle btn-info btn-sm float-right"><i className="fa fa-sync"></i></button>
                </h4>
            </div>
            {this.state.data.length > 0 ?
            <div className="table-responsive table-responsive-sm">
                <table id="dataTable" className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        <th>File Name</th>
                        <th>Firm</th>
                        <th>Party</th>
                        <th>Date</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((quotation, i) => {
                            return (<tr>
                                <td>{quotation.name}<br />
                                    {quotation.status === 'draft' && quotation.permission === 0 ? <span className="btn-danger btn-sm">Rejected</span> : null}
                                </td>
                                <td>{quotation.firm.toUpperCase()}</td>
                                <td>{quotation.party}</td>
                                <td>{new Date(quotation.date).toDateString()}</td>
                                <td className="d-flex align-items-center justify-content-center">
                                    <div className="btn-group btn-group-sm" role="group">
                                        {quotation.status === 'draft' ? <NavLink className="btn btn-link" to={`/quotation/quick/edit/${quotation.id}`}><i className="fa fa-edit"></i></NavLink> : null}
                                        {quotation.status === 'draft' ? <NavLink className="btn btn-link text-danger" to={`/quotation/quick/edit/${quotation.id}`}><i className="fa fa-trash"></i></NavLink> : null}
                                        {quotation.status === 'request' ? <button onClick={() => { this.actionStatus(quotation.id, 'accept') }} className="btn btn-success" style={{ width: "60px" }}><i className="fa fa-check-circle"></i> Accept</button> : null}
                                        {quotation.status === '!ready' ?
                                            <>
                                                <NavLink className="btn btn-warning btn-sm " to={`/quotation/quick/edit/${quotation.id}`}><i className="fa fa-print"></i></NavLink>
                                            </>
                                            : null
                                        }
                                        {quotation.status === 'request' || quotation.status === 'ready'||quotation.status === 'submitted' ?
                                            <>
                                                <NavLink className="btn btn-secondary btn-sm " to={`/quotation/quick/preview/${quotation.id}`}><i className="fa fa-eye"></i></NavLink>
                                            </>
                                            : null
                                        }
                                        {quotation.status === 'draft' && quotation.permission === 1 ? <button onClick={() => { this.actionStatus(quotation.id, 'apply') }} className="btn btn-primary" style={{ width: "60px" }}><i className="fa fa-check-circle"></i> Apply</button> : null}
                                        {quotation.status === 'request' ? <button onClick={() => { this.actionStatus(quotation.id, 'reject') }} className="btn btn-danger" style={{ width: "60px" }}><i className="fa fa-times-circle"></i> Reject</button> : null}
                                        {quotation.status === 'ready' && quotation.permission === 1 ? <button className="btn btn-success btn-sm " onClick={() => { this.actionStatus(quotation.id, 'submit') }} style={{ width: "60px" }}><i className="fa fa-check"></i> Submit</button> : null}
                                        {quotation.status === '!submitted' ? <button className="btn btn-success btn-sm m-1"><i className="fa fa-check-circle"></i> Approved</button> : null}
                                        {quotation.status === '!submitted' ? <button className="btn btn-danger btn-sm m-1"><i className="fa fa-times-circle"></i> Disposed</button> : null}
                                    </div>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            :<>
            No Data
            </>}
        </>)
    }
}
QuickQuotation = withRouter(QuickQuotation);




function Quotation() {
    let { path } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route exact path={path} component={QuotationHome} />
                <Route exact path={`${path}/quick/edit/:id`} component={QuickQuotationEditor} />
                <Route exact path={`${path}/quick/preview/:id`} component={QuotationPreview} />
                <Route exact path={`${path}/draft`}><QuickQuotation title="Drafts" action="draft" /></Route>
                <Route exact path={`${path}/request`}><QuickQuotation title="Quotation Requests" action="request" /></Route>
                <Route exact path={`${path}/ready`}><QuickQuotation title="Print and Submit Quotations" action="ready" /></Route>
                <Route exact path={`${path}/submitted`} ><QuickQuotation title="Submitted Quotations" action="submitted" /></Route>
                <Route exact path={`${path}/approved`}><QuickQuotation title="Approved Quotations" action="approved" /></Route>
                <Route exact path={`${path}/disposed`}><QuickQuotation title="Disposed Quotations" action="disposed" /></Route>
                <Route exact path={`${path}/completed`}><QuickQuotation title="Disposed Quotations" action="completed" /></Route>
            </Switch>
        </>
    )
}
export default Quotation;