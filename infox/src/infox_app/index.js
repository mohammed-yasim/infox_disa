import React from "react";
import InfoXLogin from "./Login";
import InfoXApp from "./App";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import { getToken, PrivateRoute, PublicRoute, removeUserSession } from './etc/auth_handler';
import { InfoXContext } from './etc/context';
import { Toast } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';
import { infoxAPI } from "./etc/api";
import LoadingGif from './lib/load.gif';

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
        infoxAPI.get('/sync_user')
            .then(response => {
                this.setState({ infox_user_data: response.data, infox_loaded: true });
                Toast.hide();
            }).catch((err) => {
                Toast.hide();
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
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                                    <div className="container-fluid">

                                        <div className="text-center">
                                            {this.state.error.response ? <div className="error mx-auto" data-text={this.state.error.response.status}>{this.state.error.response.status}</div> : null}
                                            <p className="lead text-gray-800 mb-3">{this.state.error.message}</p>
                                            <p className="text-gray-500 mb-0">It looks like you found a glitch in the infox...</p>
                                            <a href="tel:00000">&larr; Contact Support</a>
                                            <hr width="20%" />
                                            <Link to="/logout">Reset</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>
                <img src={LoadingGif} alt="Loader" style={{
                    position:'fixed',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    margin:'auto'
                }} />
                </>}</>}
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