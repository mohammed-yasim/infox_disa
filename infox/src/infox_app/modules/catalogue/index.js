import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import AllProducts from "./all";
import CatalogueForm from "./new";
import AdvancedQuotationTool from './../quotation_plus/index';
import { infoxAPI } from "../../etc/api";

class Home extends React.Component {
    componentDidMount() {
        this.load_data();
    }
    load_data = () => {
        infoxAPI.get('/catalogue').then((response) => {
            this.setState(response.data);
            this.drawgraph();
        })
    }
    drawgraph = () => {
        new window.Chart(document.getElementById("myPieChart"), {
            type: 'polarArea',
            data: {
                labels: ["Verified", "Not Verified", "Discontinued", "Total", "No MRP", "Image Uploaded", "No Image"],
                datasets: [{
                    label: 'My First Dataset',
                    data: [this.state.verified, this.state.totel - this.state.verified, this.state.discontinued, this.state.totel, this.state.mrp, this.state.image, this.state.noimage],
                    backgroundColor: ['green', 'red', 'yellow', 'blue', 'violet', 'orange', 'pink']
                }],
            },
            options: {
                maintainAspectRatio: true,
                legend: {
                    position: 'bottom',
                    title: { text: 'Product Catalogue Report', fontColor: 'black' }
                }
            }

        });
    }
    render() {
        return (
            <>
                <h2 className="text-center">Catelogue Report</h2>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <canvas id="myPieChart"></canvas>
                    </div>
                </div>
                {
                    //JSON.stringify(this.state)
                }

            </>
        )
    }
}


function Catalogue() {
    let { path } = useRouteMatch();
    return (<>
        <Switch>
            <Route exact path={path} component={Home} />
            <Route exact path={`${path}/edit/:p_id`} component={CatalogueForm} />
            <Route exact path={`${path}/go`}><Redirect to="/catalogue/add" /></Route>
            <Route exact path={`${path}/add`}><CatalogueForm action='add' /></Route>
            <Route exact path={`${path}/all`} component={AllProducts}></Route>
            <Route exact path={`${path}/advanced`} component={AdvancedQuotationTool} />
        </Switch>
    </>)
}
export default Catalogue