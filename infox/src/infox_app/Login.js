import React from "react";
import { withRouter } from "react-router-dom";
import { Toast } from "antd-mobile";
import { infoxAPI } from "./etc/api";
import logo from './lib/logo.png'
class InfoXLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }
    onChangeHandler = (event) => {
        let handle_data = {};
        handle_data[event.target.getAttribute('name')] = event.target.value
        this.setState(handle_data)
    }
    LoginFormHandle = (event) => {
        event.preventDefault();
        Toast.loading('Please wait', { username: this.state.username, password: this.state.password })
        infoxAPI.post('/login', this.state)
            .then((response) => {
                Toast.hide()
                this.setState({ error: null });
                sessionStorage.setItem("token", response.data.token);
                this.props.history.push('/');
            }).catch((error) => {
                Toast.fail(`${error}`, 0.8)
                this.setState({ error: `invalid login` });
            });
    }
    render() {
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                background: "url(https://picsum.photos/1280/720)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="container">
                        <div className="row justify-content-center mt-5">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card o-hidden border-0 shadow my-5">
                                    <div className="card-body">
                                        <div className="p-3">
                                            <div className="text-center mb-4">
                                                <img src={logo} alt="logo" className="img-fluid col-10" />
                                                {this.state.error !== null ? <p className="m-1 text-danger">{this.state.error}</p> : null}
                                            </div>
                                            <form className="user" autoComplete="off" onSubmit={this.LoginFormHandle}>
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
                                        <p className="text-center" style={{ fontSize: '7pt' }}>&copy; Azba India</p>
                                    </div>
                                    <p className="text-center" style={{ fontSize: '8pt' }}><b>V {process.env.REACT_APP_VERSION}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(InfoXLogin);