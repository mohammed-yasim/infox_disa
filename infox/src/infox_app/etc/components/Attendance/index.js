import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
class AttendanceApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationiq: []
        }
    }
    get_place = () => {
        axios.get(`http://api.positionstack.com/v1/reverse?access_key=8adeff7f3eba5e4af8e780bb0172c545&limit=1&query=${this.state.latitude},${this.state.longitude}`)
            .then((response) => {
                this.setState({ positionStack: response.data });
            }).catch((err) => {
                this.setState({ error: `${err}` })
            })
    }
    get_place_locationiq = () => {
        axios.get(`https://us1.locationiq.com/v1/reverse.php?key=78a0e5fd31043f&lat=${this.state.latitude}&lon=${this.state.longitude}&format=json`)
            .then((response) => {
                this.setState({ locationiq: response.data });
            }).catch((err) => {
                this.setState({ error: `${err}` })
            })
    }
    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                this.get_place_locationiq();
            },
            err => { console.log(err) }
        );
    }
    handlePermission = () => {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            this.setState({ geolocation: result.state });
            result.onchange = () => {
                this.setState({ geolocation: result.state });
            }
        });
    }
    componentDidMount() {
        this.handlePermission();
    }
    render() {
        return (
            <>
               
                <hr />
                {this.state.geolocation === 'granted' || this.state.geolocation === 'prompt' ? <>
                    <button onClick={this.position} className="btn btn-primary btn-lg">
                        <i className="fa fa-street-view"></i> Clock In
                    </button>
                    <hr /> {this.state.geolocation} - 
                    {this.state.locationiq.display_name !== undefined ? <p>
                        {this.state.locationiq.display_name}</p>
                        : <>Place</>}
                </> : <>
                    <h3><i className="fas fa-exclamation-triangle"></i> Location permission {this.state.geolocation}</h3>
                    <p>Please reset the site setting/permissions</p>
                </>}
            </>
        )
    }
}
export default withRouter(AttendanceApp);