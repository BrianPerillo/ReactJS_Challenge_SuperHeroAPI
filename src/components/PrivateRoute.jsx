import { Redirect } from 'react-router-dom'
import { Route } from "react-router";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component:Component, ...props}) => {

    const logged = useSelector(state => state.log.logged)

    return <Route {...props}>{logged ? <Component/> : <Redirect to="/login" />}</Route>;

}
 
export default PrivateRoute;