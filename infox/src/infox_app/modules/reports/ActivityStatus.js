import React from "react";
import { infoxAPI } from "../../etc/api";
class ActivitystatusReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                activity_status: [],
                users: [],
            },
            loaded: false
        }
        this.curr = new Date();
        this.date = this.curr.toISOString().substring(0, 10);
        this.generateReport = this.generateReport.bind(this)
    }
    generateReport = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        infoxAPI.post('/reports/activity_status', Object.fromEntries(data.entries())).then((response) => {
            this.setState({ data: response.data, loaded: true })
        })
    }
    render() {
        return (
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Activity Report</h1>
                    <form className="form" onSubmit={this.generateReport}>
                        <div className="input-group input-group-sm  mb-2">
                            <input name="from" className="form-control" type="date" defaultValue={this.date} />
                            <input name="to" className="form-control" type="date" defaultValue={this.date} />

                            <div className="input-group-append">
                                <button type="submit" className="btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.state.loaded === true ?
                    <div className="col-xl-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Attendace Summary</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-sm table-striped ">
                                        <thead>
                                            <tr>
                                                <th scope="col">User</th>
                                                <th>Status</th>
                                                <th>Updated</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.activity_status.filter(user => user.clock_out_server !== null).map((data) => {
                                                let user = this.state.data.users.find((user) => { return user.u_id === data.u_id })
                                                return (<tr>
                                                    <th>{user.profile.u_name}</th>
                                                    <td>{data.txt}</td>
                                                    <td>{data.updatedAt}</td>
                                                </tr>)
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
            </>
        )
    }
}
export default ActivitystatusReport