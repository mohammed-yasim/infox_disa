import { Route, Redirect } from "react-router-dom";
const getToken = () => {
    return sessionStorage.getItem("token") || null;
};
const removeUserSession = () => {
    sessionStorage.removeItem("token");
  };
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                !getToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/" }} />
                )
            }
        />
    );
}
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                getToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )
            }
        />
    );
}

export { PrivateRoute, PublicRoute,removeUserSession,getToken }