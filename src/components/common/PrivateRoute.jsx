import React, {useMemo} from "react"
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux"




const PrivateRoute = ({component: Component, redirectTo, shouldBeRedirected, ...rest}) => {

    const user = useSelector(state => state.auth.user)

    return (
       <Route {...rest} render={props => {
           return user ? !shouldBeRedirected ? <Component {...props}/> : <Redirect to={redirectTo}/> : <Redirect to="/login"/>
       }}/>
    )
}

export default PrivateRoute