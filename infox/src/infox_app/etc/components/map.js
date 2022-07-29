import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { infoxAPI } from '../api';
import icon from './../../lib/emp.png';

let DefaultIcon = L.icon({
    iconUrl: icon
});

L.Marker.prototype.options.icon = DefaultIcon;
class EmployeeMap extends React.Component {
    constructor(props) {
        super(props);
        this.load_data = this.load_data.bind(this);
        this.interval = ''
        this.state = {
            data: {
                attendances: [],
                users: []
            }
        }
    }
    componentDidMount() {
        this.load_data();
        this.interval = setInterval(() => { this.load_data() }, 120000)
    }
    load_data = () => {
        infoxAPI.get('/map').then((response) => {
            this.setState({ data: response.data })
        })
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <>

                <div className="row">
                    <div className="col-xl-3 col-md-3 col-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Present</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {this.state.data.attendances.length}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-users fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 col-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">On Time</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {this.state.data.attendances.filter((data) => { return parseInt(data.clock_in_status) < 0 }).length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 col-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Late</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.attendances.filter((data) => { return parseInt(data.clock_in_status) > 0 }).length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user-clock fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 col-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Absent</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.users.length - this.state.data.attendances.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user-slash fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
            <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
            */}
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Active Users : {this.state.data.attendances.filter(user => user.clock_out_server === null).length}</h6>
                                <a href="#reload" onClick={this.load_data}><i className="fa fa-sync"></i></a>
                            </div>
                            <div className="card-body">
                                <MapContainer style={{ height: '50vh', width: '100%' }} center={[10.1, 76.5]} zoom={8} scrollWheelZoom={true}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {this.state.data.attendances.filter(user => user.clock_out_server === null).map((data) => {
                                        return (
                                            <Marker position={[data.clock_in_lat, data.clock_in_lng]}>
                                                <Popup>
                                                    <b>{data.u_name}</b><br />
                                                    {data.clock_in_position}
                                                </Popup>
                                            </Marker>
                                        )
                                    })}
                                </MapContainer>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">User By Location</h6>
                            </div>
                            <div className="card-body" style={{ height: '53.5vh', width: '100%',overflow:'scroll' }} >
                                <div className="table-responsive">
                                    <table className="table table-sm table-striped ">
                                        <thead>
                                            <tr>
                                                <th scope="col">User</th>
                                                <th>Time In</th>
                                                <th>Point</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.attendances.filter(user => user.clock_out_server === null).map((data) => {
                                                let user = this.state.data.users.find((user) => { return user.u_id === data.u_id })
                                                return (<tr>
                                                    <th>{user.profile.u_name}</th>
                                                    <td>{data.clock_in_server}</td>
                                                    <td>{data.clock_in_position}</td>
                                                </tr>)
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Attendace Summary</h6>
                            </div>
                            <div className="card-body" style={{ height: '53.5vh', width: '100%',overflow:'scroll' }}>
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
                </div>
            </>
        )
    }
}
export default EmployeeMap