import React from "react";
import axios from "axios";
import { api_login_url } from './config';
import { Toast } from "antd-mobile";
class InfoXLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            username: '',
            password: ''
        }
    }
    onChangeHandler = (event) => {
        let handle_data = {};
        handle_data[event.target.getAttribute('name')] = event.target.value
        this.setState(handle_data)
    }
    LoginFormHandle = (event) => {
        event.preventDefault();
        Toast.loading('Please wait',0)
        axios.post(api_login_url, this.state)
            .then((response) => {
                Toast.hide()
                sessionStorage.setItem("token", response.data.data.token);
                this.props.history.push('/')
            }).catch((error) => {
                Toast.hide()
            });
    }
    render() {
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                background: "url(https://picsum.photos/1360/768)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div class="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="container pt-5">
                        <div className="row justify-content-center mt-5">
                            <div className="col-xl-6 col-lg-6 col-md-9">
                                <div className="card o-hidden border-0 shadow-lg my-5">
                                    <div className="card-body p-0">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                                            </div>
                                            <form className="user" autoComplete="off" onSubmit={this.LoginFormHandle}>
                                                <div className="form-group">
                                                    <select
                                                        value={this.state.role}
                                                        name="role"
                                                        onChange={this.onChangeHandler}
                                                        className="custom-control custom-select"
                                                        required>
                                                        <option disabled value=''>Choose Role</option>
                                                        <option value={'Admin'}>Admin</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <input name="username"
                                                        onChange={this.onChangeHandler}
                                                        value={this.state.username}
                                                        type="username"
                                                        className="form-control form-control-user"
                                                        aria-describedby="usernameHelp"
                                                        placeholder="Username"
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <input name="password"
                                                        onChange={this.onChangeHandler}
                                                        value={this.state.password}
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        placeholder="Password"
                                                        required />
                                                </div>
                                                <button className="btn btn-primary btn-user btn-block">Login</button>
                                            </form>
                                        </div>
                                        <p className="text-center" style={{ fontSize: '7pt' }}>&copy;2022 Diya infocare</p>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoXLogin;