import React, { useEffect, useState } from "react";
import { infoxAPI } from "../../api";

function Status() {
    const [activity, setActivity] = useState({ txt: 'Not Updated' });

    const save_activity = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        infoxAPI.post('/activity_status', Object.fromEntries(data.entries())).then((response) => {
            setActivity(response.data)
            event.target.reset();
        })
    }
    useEffect(() => {
        const load_activity = () => {
            infoxAPI.get('/activity_status').then((response) => {
                console.log(response.data)
                if (response.data !== null) {
                    if (response.data.activity !== null) {
                        setActivity(response.data.activity);
                    }
                }
            })
        }
        load_activity();
    }, []);
    return (<>
        <div className="mt-5">
            <div className="row">
                <div className="col-lg">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Job Status <span className="text-danger" style={{ fontSize: '7pt' }}>Beta</span></h6>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="">{activity.txt}</h4>
                            <p className="text-sm"><b>Updated on : {activity.updatedAt} </b></p>
                            <div>
                                <form onSubmit={save_activity}>
                                    <div className="input-group">
                                        <select required name="txt" className="custom-select form-control">
                                            <option value="" selected>Choose...</option>
                                            <option >Delevery</option>
                                            <option >Route Sales</option>
                                            <option >Field Work</option>
                                            <option >At Warehouse</option>
                                            <option >At Office</option>
                                            <option >No Duty</option>
                                            <option >On Leave</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="input-group-append">
                                            <button className="btn btn-circle btn-success "><i className="fas fa-check"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-footer "><a href="#log" className="badge badge-light float-right">view log</a></div>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default Status;