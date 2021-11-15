import { Modal, Toast } from "antd-mobile";
import React from "react";
import { Switch, Route, withRouter, useRouteMatch, Link } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
import { InfoXContext } from "../../etc/context";
class Home extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <h1 className="h3 mb-2 text-gray-800"><i className="fa fa-cog"> Settings</i></h1>
                <div className="row">
                    <div className="col-xl-2 col-md-3 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <Link className="text-decoration-none" to="setting/users">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Users</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">1</div>
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
                        <h6 className="m-0 font-weight-bold text-primary">Basic</h6>
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
            formdata: {
                username: '',
                password: '',
                confirm_password: '',
                u_name: '',
                u_email: '',
                u_contact: '',
                u_type: ''
            }

        }
    }
    componentDidMount() {
        this.load_users_data();
    }
    load_users_data = () => {
        infoxAPI.get('/settings/users').then((response) => {
            this.setState({
                users_data: response.data
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
            infoxAPI.post('settings/users?action=add', this.state.formdata)
                .then((response) => {
                    let data = this.state.users_data;
                    data.push(response.data)
                    this.setState({
                        users_data: data,
                        formdata: {
                            username: '',
                            password: '',
                            confirm_password: '',
                            u_name: '',
                            u_email: '',
                            u_contact: '',
                            u_type: ''
                        },
                        modal: false
                    })
                })
        }
        else {
            Toast.fail('Password Not Matching')
        }
    }
    render() {
        return (
            <>

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
                                            <td>{user.u_name}</td>
                                            <td>{user.u_email}</td>
                                            <td>{user.u_contact}</td>
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
                            <input className=" form-control  form-control-sm" placeholder="Name" name="u_name" value={this.state.formdata.u_name} onChange={this.OnFormChange} pattern=".{6,}" required type="text" title="minimum 6 characters" />
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Email" name="u_email" value={this.state.formdata.u_email} onChange={this.OnFormChange} required type="email" />
                        </div>
                        <div className="input-group mb-2">
                            <input className=" form-control  form-control-sm" placeholder="Contact No" name="u_contact" value={this.state.formdata.u_contact} onChange={this.OnFormChange} required type="tel" pattern="[0-9]{10}" title="Enter a Valid Mobile Number " />
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
    let { path, url } = useRouteMatch();
    return (<>
        <Switch>
            <Route exact path={path} component={Home}></Route>
            <Route path={`${path}/profile`} component={Profile}></Route>
            <Route path={`${path}/activity`} component={Activity}></Route>
            <Route path={`${path}/users`} component={Users}></Route>
        </Switch>
    </>)
}
export default Setting;