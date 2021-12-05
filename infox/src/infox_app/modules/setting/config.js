import React from "react";
import { infoxAPI } from "../../etc/api";
class Locations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.load_data();
    }
    load_data = () => {
        infoxAPI.get('/settings/config/locations').then(response => this.setState({ data: response.data }))
    }
    onSubmit = (event) => {
        event.preventDefault();
        infoxAPI.post('/settings/config/locations/add', {
            name: event.target.location_name.value
        })
            .then(response => { event.target.reset(); this.load_data(); });
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <>
                <div className="d-print-none">
                    <h4><button onClick={this.goBack} className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Locations </h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <div className="accordion" id="loc_collapse">
                                {this.state.data.map((data, key) => {
                                    return (
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={'#loc_collapse_' + key} aria-expanded="true" aria-controls={'loc_collapse_' + key}>
                                                        {data.name}
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id={'loc_collapse_' + key} className="collapse" data-parent="#loc_collapse">
                                                <div className="card-body">
                                                    {data.users.map((user) => {
                                                        return (<>{JSON.stringify(user)}</>);
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-group">
                                <input className="form-control" type="text" name="location_name" required pattern=".{5,}" />
                                <div className="input-group-append">
                                    <input className="btn btn-sm btn-primary" type="submit" value="Save" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                
            </>
        )
    }
}
class Designations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.load_data();
    }
    load_data = () => {
        infoxAPI.get('/settings/config/designations').then(response => this.setState({ data: response.data }))
    }
    onSubmit = (event) => {
        event.preventDefault();
        infoxAPI.post('/settings/config/designations/add', {
            name: event.target.location_name.value
        })
            .then(response => { event.target.reset(); this.load_data(); });
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <>
                <div className="d-print-none">
                    <h4><button onClick={this.goBack} className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Designations </h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <div className="accordion" id="loc_collapse">
                                {this.state.data.map((data, key) => {
                                    return (
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={'#loc_collapse_' + key} aria-expanded="true" aria-controls={'loc_collapse_' + key}>
                                                        {data.name}
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id={'loc_collapse_' + key} className="collapse" data-parent="#loc_collapse">
                                                <div className="card-body">
                                                    {data.users.map((user) => {
                                                        return (<>{JSON.stringify(user)}</>);
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-group">
                                <input className="form-control" type="text" name="location_name" required pattern=".{3,}" />
                                <div className="input-group-append">
                                    <input className="btn btn-sm btn-primary" type="submit" value="Save" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                
            </>
        )
    }
}

class Schedules extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.load_data();
    }
    load_data = () => {
        infoxAPI.get('/settings/config/schedules').then(response => this.setState({ data: response.data }))
    }
    onSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        console.log(data, event)
        infoxAPI.post('/settings/config/schedules/add', Object.fromEntries(data.entries()))
            .then(response => { event.target.reset(); this.load_data(); });
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <>
                <div className="d-print-none">
                    <h4><button onClick={this.goBack} className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Schedules </h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <div className="accordion" id="loc_collapse">
                                {this.state.data.map((data, key) => {
                                    return (
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={'#loc_collapse_' + key} aria-expanded="true" aria-controls={'loc_collapse_' + key}>
                                                    {data.id}. <b>{data.clock_in} - {data.clock_out}</b>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id={'loc_collapse_' + key} className="collapse" data-parent="#loc_collapse">
                                                <div className="card-body">
                                                    {data.users.map((user) => {
                                                        return (<>{JSON.stringify(user)}</>);
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-group">
                                <div className="input-group-append"><span className="btn ">Clock In</span></div>
                                <input className="form-control" type="time" name="clock_in" />
                                <div className="input-group-append"><span className="btn ">Clock Out</span></div>
                                <input className="form-control" type="time" name="clock_out" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-primary" type="submit">Save</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                
            </>
        )
    }
}

export {
    Locations, Schedules, Designations
}