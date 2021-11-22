import React, { Suspense, lazy } from 'react';
import { Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { removeUserSession } from './etc/auth_handler';
import { NavMessage, NavProfileMenu, NavAlerts, AttendanceApp } from './etc/components';
import { InfoXContext } from './etc/context';
import LoadingGif from './lib/load.gif';
const Setting = lazy(() => import('./modules/setting'));
const Catalogue = lazy(() => import('./modules/catalogue'));
const Quotation = lazy(() => import('./modules/quotation'));


class InfoXApp extends React.Component {
    static contextType = InfoXContext;
    constructor(props) {
        super(props);
        this.state = {
            infox_user_data: null
        }
    }
    componentDidMount() {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = '/infox/js/sb-admin-2.min.js';
        head.appendChild(script);
    }
    render() {
        return (<>
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-dark sidebar toggled sidebar-dark accordion d-print-none" id="accordionSidebar">

                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">InfoX<sup>{process.env.REACT_APP_VERSION}</sup></div>
                    </Link>

                    <hr className="sidebar-divider my-0" />

                    <NavLink className="nav-item text-decoration-none" to="/dashboard">
                        <span className="nav-link" href="#dashboard">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></span>
                    </NavLink>
                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">
                        Assets
                    </div>
                    <NavLink className="nav-item text-decoration-none" to="/catalogue">
                        <span className="nav-link">
                            <i className="fas fa-fw fa-book"></i>
                            <span>catalogue</span></span>
                    </NavLink>
                    <hr className="sidebar-divider" />

                    <NavLink className="nav-item text-decoration-none" to="/quotation">
                        <span className="nav-link">
                            <i className="fas fa-fw fa-quote-left"></i>
                            <span>Quotation</span></span>
                    </NavLink>

                    <hr className="sidebar-divider d-none d-md-block" />
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                </ul>
                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content" className="amy-crisp-gradient">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            <form className="d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <div className="input-group-append"> <button className="btn btn-success btn-sm" type="button"> <i className="fas fa-building" aria-hidden="true"></i> </button> </div>
                                    <input readOnly id="infoxserver" type="text" value="Dream india School Aid (2022-23)" className="form-control bg-light border-0 font-weight-bold" aria-label="Search" aria-describedby="basic-addon2" />
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <NavAlerts />
                                <NavMessage />
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <NavProfileMenu />
                            </ul>

                        </nav>
                        <div className="container-fluid">
                            <Suspense fallback={<div><img alt="loadimage" src={LoadingGif} /></div>}>
                                <Switch>
                                    <Route path="/dashboard">Dashboard</Route>
                                    <Route path="/setting" component={Setting} />
                                    <Route path="/catalogue" component={Catalogue} />
                                    <Route path="/quotation" component={Quotation} />
                                    <Route path="/">
                                        <h5>Welcome, {this.context.u_name}</h5>
                                        <AttendanceApp/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </div>


                    </div>



                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span> &copy; Azba India </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top" title="scroll to top">
                <i className="fas fa-angle-up"></i>
            </a>
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-dismiss="modal" onClick={() => {
                                removeUserSession();
                                this.props.history.replace('/');
                            }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default withRouter(InfoXApp);

/*
                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">
                        Assets
                    </div>
                    <li className="nav-item text-decoration-none">
                        <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-book"></i>
                            <span>Catalogue</span>
                        </NavLink>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <NavLink className="collapse-item" to="buttons.html">Buttons</NavLink>
                                <NavLink className="collapse-item" to="cards.html">Cards</NavLink>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item text-decoration-none">
                        <NavLink className="nav-link collapsed" to="/yasim" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-users"></i>
                            <span>Employees</span>
                        </NavLink>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <Link className="collapse-item" to="utilities-color.html">Create/Edit</Link>
                                <Link className="collapse-item" to="utilities-border.html">Activity</Link>
                                <Link className="collapse-item" to="utilities-animation.html">Animations</Link>
                                <Link className="collapse-item" to="utilities-other.html">Other</Link>
                            </div>
                        </div>
                    </li>
                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">
                        Reports
                    </div>
                    <NavLink className="nav-item text-decoration-none" to="/attendance">
                        <span className="nav-link">
                            <i className="fas fa-fw fa-file"></i>
                            <span>Attendance</span></span>
                    </NavLink>
                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">
                        Reports
                    </div>
                    <NavLink className="nav-item text-decoration-none" to="/quotation">
                        <span className="nav-link">
                            <i className="fas fa-fw fa-quote-left"></i>
                            <span>Quotation</span></span>
                    </NavLink>

*/