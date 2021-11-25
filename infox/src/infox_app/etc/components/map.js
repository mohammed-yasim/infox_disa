import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { infoxAPI } from '../api';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
class EmployeeMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        infoxAPI.get('/map').then((response) => {
            this.setState({ data: response.data })
        })
    }
    render() {
        return (
            <div>
                <MapContainer style={{ height: '450px',width:'450px' }} center={[10, 76]} zoom={8} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.data.map((data) => {
                        return (
                            <Marker position={[data.clock_in_lat, data.clock_in_lng]}>
                                <Popup>
                                    <b>{data.u_name}</b>
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