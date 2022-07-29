import React from "react";
import { infoxAPI } from "../../etc/api";
class AttendanceReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                attendances: [],
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
        infoxAPI.post('/reports/attendance', Object.fromEntries(data.entries())).then((response) => {
            this.setState({ data: response.data, loaded: true })
        })
    }
    render() {
        return (
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Attendance Report</h1>
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
                                                <th>Time In</th>
                                                <th>Time Out</th>
                                                <th>status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.attendances.filter(user => user.clock_out_server !== null).map((data) => {
                                                let user = this.state.data.users.find((user) => { return user.u_id === data.u_id })
                                                return (<tr>
                                                    <th>{user.profile.u_name}</th>
                                                    <td><b>{data.clock_in_server}</b><br />
                                                        {data.clock_in_position}<br />
                                                        <b>{data.clock_in_ip}</b>-
                                                        {data.clock_in_agent}<br />
                                                    </td>
                                                    <td><b>{data.clock_out_server}
                                                    </b><br />{data.clock_out_position}<br />
                                                        <b>{data.clock_out_ip}</b>-
                                                        {data.clock_out_agent}<br />
                                                    </td>
                                                    <td>
                                                        {(data.clock_out_hours / 60).toFixed(2)}Hours <br />
                                                        {data.clock_in_status < 0 ? <span className="text-primary">Arrived {-1 * data.clock_in_status} Mins Early</span> : <span className="text-danger">{data.clock_in_status} Mins Late</span>}<br />
                                                        {data.clock_out_status > 0 ? <span className="text-success"> Overtime {data.clock_out_status} Mins</span> : <span className="text-warning">Leaved {-1 * data.clock_out_status} Mins Early</span>}<br />
                                                    </td>
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
export default AttendanceReport