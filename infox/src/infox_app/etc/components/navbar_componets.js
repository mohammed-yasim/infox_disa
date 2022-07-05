import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { InfoXContext } from "../context";
class NavProfileMenu extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#infox" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.context.profile.u_name}</span>
                    <i className="fas fa-user fa-fw"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <div className="dropdown-item d-none d-sm-block d-md-none text-gray-600 small">{this.context.profile.u_name}</div>
                    {this.context.u_type === 'admin' || this.context.u_type === 'root' ?
                        <>
                            <Link className="dropdown-item" to="/setting/activity">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </Link>
                            <Link className="dropdown-item" to="/setting/profile">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </Link>
                            <Link className="dropdown-item" to="/setting">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </Link>
                            <div className="dropdown-divider"></div>
                        </> : <>
                            <Link className="dropdown-item" to="/setting/profile">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </Link>
                            <div className="dropdown-divider"></div>
                        </>}
                    <a className="dropdown-item" href="#infox" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>
        )
    }
}

class NavMessage extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (

            <li className="nav-item dropdown no-arrow mx-1">
                <NavLink className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    {
                        //<span className="badge badge-danger badge-counter">7</span>
                    }
                </NavLink>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                            <div className="status-indicator"></div>
                        </div>
                        <div>
                            <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                            <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                            <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#infox">Read More Messages</a>
                </div>
            </li>
        )
    }
}

class NavAlerts extends React.Component {
    static contextType = InfoXContext
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <li className="nav-item dropdown no-arrow mx-1">
                <NavLink className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    {
                        //<span className="badge badge-danger badge-counter">3+</span>
                    }
                </NavLink>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                        Notifications
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 12, 2019</div>
                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="mr-3">
                            <div className="icon-circle bg-success">
                                <i className="fas fa-donate text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 7, 2019</div>
                            $290.29 has been deposited into your account!
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#infox">
                        <div className="mr-3">
                            <div className="icon-circle bg-warning">
                                <i className="fas fa-exclamation-triangle text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 2, 2019</div>
                            Spending Alert: We've noticed unusually high spending for your account.
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#infox">Show All</a>
                </div>
            </li>
        )
    }
}

NavAlerts = withRouter(NavAlerts);
NavProfileMenu = withRouter(NavProfileMenu);
NavMessage = withRouter(NavMessage)
export { NavProfileMenu, NavMessage, NavAlerts }