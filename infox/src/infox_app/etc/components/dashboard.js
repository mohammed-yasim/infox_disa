import React from "react";
import Clock from 'react-live-clock';
import 'moment-timezone';
class DashboardAttendance extends React.Component {
    render() {
        return (<>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <span className="text-right"><Clock
                    format={'DD MMM YYYY h:mm:ss A'}
                    ticking={true}
                    timezone={'Asia/Kolkata'} /></span>
            </div>
            
        </>)
    }
}

export { DashboardAttendance }