import React from "react";
import { useRouteMatch, Switch, Route, NavLink, Link,Redirect} from "react-router-dom";
import AllProducts from "./all";
import CatalogueForm from "./new";

class Home extends React.Component {
    render() {
        return (
            <>
            </>
        )
    }
}


function Catalogue() {
    let { path } = useRouteMatch();
    return (<>
        <nav className="navbar navbar-expand navbar-light bg-light">
        <Link to="/catalogue" className="navbar-brand"><h3>Catalogue</h3></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><NavLink exact className="nav-link" to="/catalogue">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/catalogue/all">All Products</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link " to="/catalogue/go">Add New</NavLink></li>
            </ul>
            </div>
        </nav>
        <Switch>
            <Route exact path={path} component={Home} />
            <Route exact path={`${path}/edit/:p_id`} component={CatalogueForm} />
            <Route exact path={`${path}/go`}><Redirect to="/catalogue/add"/></Route>
            <Route exact path={`${path}/add`}><CatalogueForm action='add' /></Route>
            <Route exact path={`${path}/all`} component={AllProducts}></Route>
        </Switch>
    </>)
}
export default Catalogue