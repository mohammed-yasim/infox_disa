import { Modal, Toast } from "antd-mobile";
import React from "react";
import { Switch, Route, withRouter, useRouteMatch, Link } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
import { InfoXContext } from "../../etc/context";
import { Designations, Locations, Schedules } from "./config";

class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.load_data();
    }
    goBack = () => {
        this.props.history.goBack();
    }
    load_data = () => { }
    render() {
        return (
            <>
            </>
        )
    }
}

class Home extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props);
        this.state = {
            data: { locations: 0, designations: 0, schedules: 0, users: 0 },
        }
    }
    load_data = () => {
        infoxAPI.get('/settings').then(response => this.setState({ data: response.data }));
    }
    componentDidMount() {
        this.load_data()
    }
    render() {
        return (
            <>
                <h1 className="h3 mb-2 text-gray-800"><i className="fa fa-cog"> </i> Settings            <button className="float-right btn btn-sm btn-secondary" onClick={this.load_data}><i className="fa fa-sync"></i></button>
                </h1>
                <div className="row justify-content-center">
                    <div className="col-xl-2 col-md-3 col-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <Link className="text-decoration-none" to="setting/locations">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Locations</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.locations}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-globe-asia fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <Link className="text-decoration-none" to="setting/designations">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Designations</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.designations}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-briefcase fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-md-3 col-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <Link className="text-decoration-none" to="setting/schedules">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Schedules</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.schedules}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-user-clock fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <Link className="text-decoration-none" to="setting/users">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Users</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.users}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-cogs"></i> Configuration Variables</h6>
                    </div>
                    <div className="card-body">
                    </div>
                </div>
            </>
        )
    }

}
class Profile extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                Profile
            </>
        )
    }

}

class Activity extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                Activity
            </>
        )
    }

}
class Users extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            users_data: [],
            schedules: [],
            locations: [],
            designations: [],
            formdata: {
                username: '',
                password: '',
                confirm_password: '',
                u_name: '',
                u_email: '',
                u_contact: '',
                u_type: '',
                designation_: '',
                location_: '',
                schedule_: '',
            }

        }
    }
    componentDidMount() {
        this.load_users_data();
    }
    load_users_data = () => {
        infoxAPI.get('/settings/config/users').then((response) => {
            this.setState({
                users_data: response.data.users,
                locations: response.data.locations,
                designations: response.data.designations,
                schedules: response.data.schedules,
            })
        });
    }
    OnFormChange = (event) => {
        let data = this.state.formdata
        data[event.target.getAttribute('name')] = event.target.value;
        this.setState({
            formdata: data
        })
    }
    addNewuser = (event) => {
        event.preventDefault();
        if (this.state.formdata.confirm_password === this.state.formdata.password) {
            infoxAPI.post('settings/config/users/add', this.state.formdata)
                .then((response) => {
                    this.setState({
                        formdata: {
                            username: '',
                            password: '',
                            confirm_password: '',
                            u_name: '',
                            u_email: '',
                            u_contact: '',
                            u_type: '',
                            designation_: '',
                            location_: '',
                            schedule_: '',
                        },
                        modal: false
                    });
                    this.load_users_data();
                })
        }
        else {
            Toast.fail('Password Not Matching')
        }
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <>
                <div className="d-print-none">

                    <h4><button onClick={this.goBack} className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Users </h4>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h6>All User</h6>
                    </div>
                    <div className="card-body">
                        <table className="table table-sm table-responsive-sm table-striped">
                            <thead>
                                <tr>
                                    <th >SINo.</th>
                                    <th >Type</th>
                                    <th >Username</th>
                                    <th >Name</th>
                                    <th >Email</th>
                                    <th >Contact</th>
                                    <th >actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users_data.map((user, key) => {
                                    return (
                                        <tr key={"user_" + key}>
                                            <th scope="row">&nbsp;&nbsp;{key + 1}&nbsp;&nbsp;</th>
                                            <td>{user.u_type}</td>
                                            <td>{user.username}</td>
                                            <td>{user.profile.u_name}</td>
                                            <td>{user.profile.u_email}</td>
                                            <td>{user.profile.u_contact}</td>
                                            <td>
                                                {user.active === 1 ? <button className="btn btn-sm btn-warning m-2">Deacivate</button> : <button className="btn btn-sm btn-success mr-2">Activate</button>}
                                                {user.active === 0 ? <button className="btn btn-sm btn-danger m-2">Suspend</button> : null}
                                                <button className="btn btn-sm btn-info m-2">Reset Password</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <button className="btn btm-sm btn-primary" onClick={() => {
                            this.setState({ modal: true })
                        }}><i className="fa fa-plus"></i></button>
                    </div>
                </div>
                <Modal visible={this.state.modal} transparent
                    title="Add New User"
                    footer={[{ text: 'Cancel', onPress: () => { this.setState({ modal: false }) } }]}
                >
                    <form onSubmit={this.addNewuser}>
                        <div className="input-group mb-2">
                            <select className=" form-control  form-control-sm" name="u_type" value={this.state.formdata.u_type} onChange={this.OnFormChange} required>
                                <option value="" disabled>User type</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="root">Root</option>
                            </select>
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Username" name="username" value={this.state.formdata.username} onChange={this.OnFormChange} required type="text" pattern=".{5,}" title="At least 5 or more characters" />
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Password" name="password" value={this.state.formdata.password} onChange={this.OnFormChange} required type="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Confirm Password" name="confirm_password" value={this.state.formdata.confirm_password} onChange={this.OnFormChange} required type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
                        </div>
                        <div className="input-group mb-2">

                            <select className=" form-control  form-control-sm" name="location_" value={this.state.formdata.location_} onChange={this.OnFormChange} required>
                                <option value="" disabled>Work Location</option>
                                {this.state.locations.map((location, key) => {
                                    return (<option key={`location_${key}`} value={location.id}>{location.name}</option>)
                                })}
                            </select>
                        </div>
                        <div className="input-group mb-2">

                            <select className=" form-control  form-control-sm" name="designation_" value={this.state.formdata.designation_} onChange={this.OnFormChange} required>
                                <option value="" disabled>Designations</option>

                                {this.state.designations.map((designation, key) => {
                                    return (<option key={`location_${key}`} value={designation.id}>{designation.name}</option>)
                                })}
                            </select>
                        </div>
                        <div className="input-group mb-2">

                            <select className=" form-control  form-control-sm" name="schedule_" value={this.state.formdata.schedule_} onChange={this.OnFormChange} required>
                                <option value="" disabled>Schedules</option>

                                {this.state.schedules.map((schedule, key) => {
                                    return (<option key={`location_${key}`} value={schedule.id}>{schedule.clock_in}-{schedule.clock_out}</option>)
                                })}
                            </select>
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Name" name="u_name" value={this.state.formdata.u_name} onChange={this.OnFormChange} pattern=".{6,}" required type="text" title="minimum 6 characters" />
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Email" name="u_email" value={this.state.formdata.u_email} onChange={this.OnFormChange} required type="email" />
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Contact No" name="u_contact" value={this.state.formdata.u_contact} onChange={this.OnFormChange} required type="tel" pattern="[0-9]{10}" size={10} maxLength={10} title="Enter a Valid Mobile Number " />
                        </div>
                        <button className="btn btn-success btn-block btn-sm">Add</button>
                    </form>
                </Modal>
            </>
        )
    }

}
Home = withRouter(Home);
Profile = withRouter(Profile);
Activity = withRouter(Activity);
Users = withRouter(Users);
function Setting() {
    let { path } = useRouteMatch();
    return (<>
        <Switch>
            <Route exact path={path} component={Home}></Route>
            <Route path={`${path}/profile`} component={Profile}></Route>
            <Route path={`${path}/activity`} component={Activity}></Route>
            <Route path={`${path}/users`} component={Users}></Route>
            <Route path={`${path}/locations`} component={Locations}></Route>
            <Route path={`${path}/designations`} component={Designations}></Route>
            <Route path={`${path}/schedules`} component={Schedules}></Route>
        </Switch>
    </>)
}
export default Setting;