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
            <div>
                <p> <button className="btn btn-sm btn-info" onClick={this.load_data}>refresh</button> Active users : {this.state.data.length}</p>
                <MapContainer style={{ height: '80vh',width:'450px' }} center={[10.1, 76.5]} zoom={8} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.data.map((data) => {
                        return (
                            <Marker position={[data.clock_in_lat, data.clock_in_lng]}>
                                <Popup>
                                    <b>{data.u_name}</b><br/>
                                   {data.clock_in_position}
                                </Popup>
                            </Marker>
                        )
                    })}


                </MapContainer>
            </div>
        )
    }
}
export default EmployeeMap