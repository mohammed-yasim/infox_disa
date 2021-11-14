import React from "react";
import InfoXLogin from "./Login";
import InfoXApp from "./App";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import { getToken, PrivateRoute, PublicRoute, removeUserSession } from './etc/auth_handler';
import { InfoXContext } from './etc/context';
import { Toast } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';
import { userDB } from "./etc/api";
class InfoXAppHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infox_user_data: null,
            infox_loaded: false,
            error: []
        }
        this.load_infox_user_data = this.load_infox_user_data.bind(this);
    }
    componentDidMount() {
        Toast.loading("Loading", 0);
        let token = getToken();
        if (token) {
            this.load_infox_user_data()
        } else {
            removeUserSession()
            this.props.history.replace('/login');
        }
    }
    load_infox_user_data = () => {
        userDB.get('https://console.nooneducare.in/api/profile')
            .then(response => {
                this.setState({ infox_user_data: response.data, infox_loaded: true });
                Toast.hide();
            }).catch((err) => {
                Toast.hide();
                //removeUserSession();
                //this.props.history.replace('/login');
                this.setState({ infox_user_data: null, infox_loaded: true, error: err });

            });
    }
    render() {
        return (<>
            {this.state.infox_user_data !== null && this.state.infox_loaded === true ?
                <InfoXContext.Provider value={this.state.infox_user_data}>
                    <InfoXApp />
                </InfoXContext.Provider>
                : <>{this.state.infox_loaded === true ? <>
                    <div id="wrapper">
                        <div id="content-wrapper" className="d-flex flex-column ">
                            <div id="content">
                                <div class="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                                    <div class="container-fluid">

                                        <div class="text-center">
                                            {this.state.error.response ? <div class="error mx-auto" data-text={this.state.error.response.status}>{this.state.error.response.status}</div> : null}
                                            <p class="lead text-gray-800 mb-3">{this.state.error.message}</p>
                                            <p class="text-gray-500 mb-0">It looks like you found a glitch in the infox...</p>
                                            <a href="tel:00000">&larr; Contact Support</a>
                                            <hr width="20%"/>
                                            <Link to="/logout">Reset</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>Loading</>}</>}
        </>)
    }
}

function App() {
    return (
        <Router basename="/infox">
            <Switch>
                <Route path="/logout" render={() => {
                    removeUserSession();
                    return <Redirect to="login" />
                }}></Route>
                <PublicRoute path="/login" component={InfoXLogin} />
                <PrivateRoute path="/" component={InfoXAppHandler} />
            </Switch>
        </Router>
    )
}
export default App;