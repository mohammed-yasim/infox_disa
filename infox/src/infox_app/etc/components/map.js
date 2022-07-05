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
        this.state = { data: [] }
    }
    componentDidMount() {
        this.load_data()
    }
    load_data = () => {
        infoxAPI.get('/map').then((response) => {
            this.setState({ data: response.data })
        })
    }
    render() {
        return (
            <>
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Active Users : {this.state.data.length}</h6>
                            <a href="#reload" onClick={this.load_data}><i className="fa fa-sync"></i></a>
                        </div>
                        <div className="card-body">
                            <MapContainer style={{ height: '50vh', width: '100%' }} center={[10.1, 76.5]} zoom={8} scrollWheelZoom={true}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {this.state.data.map((data) => {
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
                        <div className="card-body" style={{ height: '53.5vh', width: '100%' }} >
                            <div className="table-responsive">
                                <table className="table table-sm table-striped ">
                                    <thead>
                                        <tr>
                                        <th scope="col">User</th>
                                        <th>Location</th>
                                        <th>Time In</th>
                                        <th>Point</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map((data) => {
                                            return (<tr>
                                                <th>{data.u_name}</th>
                                                <th></th>
                                                <td>{data.clock_in}</td>
                                                <td>{data.clock_in_position}</td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default EmployeeMap