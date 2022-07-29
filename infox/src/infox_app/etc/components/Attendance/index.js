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
                this.setState({ clock_status: 0, text: '' });
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
        infoxAPI.get('/clock_')
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
                this.setState({ clock_status: 0, text: '' });
            });
    }
    clock_post = () => {
        infoxAPI.post('/clock_', {
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            clock_status: this.state.clock_status,
            clock: new Date().toISOString(),
            agent: window.navigator.userAgent
        }).then((response) => {
            if (response.data !== '') {
                this.setState({
                    clock_status: response.data.clock_status,
                    color: response.data.color,
                    text: response.data.text
                })
            }
        }).catch(err => {
            this.setState({ clock_status: 0, text: '' });
        });
    }
    componentDidMount() {
        this.handlePermission()
    }
    render() {
        return (
            <div className="my-3" id="attendance_app">
                {this.state.geolocation === 'granted' || this.state.geolocation === 'prompt' ? <>
                    {this.state.clock_status === 0 ? <>
                        <h3 className="mb-3">{this.state.text} </h3>

                        <button onClick={this.load_env} className="btn btn-primary"><i className="fa fa-sync"></i> Sync Clock</button>

                    </> : <button onClick={this.load_env} className="btn btn-primary"><i className="fa fa-sync"></i> Refresh</button>
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
                        </div> : this.state.clock_status === 2 ? <>
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
                        </> : this.state.clock_status === 3 ? <>
                            <div className='m-2'>
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