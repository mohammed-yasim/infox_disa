import React from 'react';
import { Toast } from 'antd-mobile';
import { infoxAPI } from '../../api';
import { withRouter } from 'react-router-dom';
import ReactSwipeButton from 'react-swipe-button'
import Clock from 'react-live-clock';
import 'moment-timezone';
import './style.scss';
class AttendanceApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clock_status: 0,
            locationiq: [],
            color: '',
            text: ''
        }
    }
    position = async () => {
        this.setState({ color: 'yellow', text: 'getting location' });
        await navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    color: 'Green', text: 'Sending Location'
                });
                this.clock_post();
            },
            err => { 
                this.setState({clock_status:0});
             }
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
    load_env = () => {
        infoxAPI.get('/clock')
            .then((response) => {
                if (response.data !== '') {
                    this.setState({
                        clock_status: response.data.clock_status,
                        color: response.data.color,
                        text: response.data.text
                    })
                }
            })
            .catch(err => { 
                this.setState({clock_status:0});
             });
    }
    clock_post = () => {
        infoxAPI.post('/clock', { test : 0, latitude: this.state.latitude, longitude: this.state.longitude,clock_status:this.state.clock_status }).then((response) => {
            if (response.data !== '') {
                this.setState({
                    clock_status: response.data.clock_status,
                    color: response.data.color,
                    text: response.data.text
                })
            }
        }).catch(err => { 
            this.setState({clock_status:0});
         });
    }
    componentDidMount() {
        this.handlePermission()
    }
    render() {
        return (
            <div id="attendance_app">
                {this.state.geolocation === 'granted' || this.state.geolocation === 'prompt' ? <>
                    {this.state.clock_status === 0 ? <>
                        <h3 className="mb-3">{this.state.text} </h3>

                        <button onClick={this.load_env} className="btn btn-primary">Connect</button>

                    </> : null
                    }
                    {this.state.clock_status === 1 ?
                        <div>
                            <h2><Clock
                                format={'h:mm:ss A'}
                                ticking={true}
                                timezone={'Asia/Kolkata'} /></h2>
                            <ReactSwipeButton
                                text='Swipe To Clock In'
                                text_unlocked={this.state.text}
                                color={this.state.color}
                                onSuccess={this.position}
                                onFailure={() => { Toast.fail("Swipe Error") }}
                            />
                        </div> : null
                    }
                    {this.state.clock_status === 2 ? <>
                        <div>
                            <h2><Clock
                                format={'h:mm:ss A'}
                                ticking={true}
                                timezone={'Asia/Kolkata'} /></h2>
                            <h3>{this.state.text} </h3>
                            <ReactSwipeButton
                                text='Swipe To Clock Out'
                                text_unlocked={this.state.text}
                                color={this.state.color}
                                onSuccess={this.position}
                                onFailure={() => { Toast.fail("Swipe Error") }}
                            />
                        </div>
                    </> : null
                    }
                    {this.state.clock_status === 3 ? <>
                        <div>
                            <h3>{this.state.text} </h3>
                        </div>
                    </> : null
                    }
                </> : <>
                    <h3><i className="fas fa-exclamation-triangle"></i> Location permission {this.state.geolocation}</h3>
                    <p>Please reset the site setting/permissions</p>
                </>}
            </div>
        )
    }
}
export default withRouter(AttendanceApp);