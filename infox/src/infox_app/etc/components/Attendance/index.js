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
                this.get_place_locationiq()
            },
            err => { console.log(err) }
        );
    }
    render() {
        return (
            <>
                <button onClick={this.position} class="btn btn-primary btn-lg">
                    <i class="fa fa-street-view"></i> Clock In
                </button>
                <hr/>
                {this.state.locationiq.display_name !== undefined ? <p>
                    {this.state.locationiq.display_name}</p>
                    : <>Place</>}
            </>
        )
    }
}
export default withRouter(AttendanceApp);