import { Redirect } from 'react-router-dom'
import { Route } from "react-router";

const PrivateRoute = ({component:Component, ...props}) => {

    let hasToken = false;

    const token = localStorage.getItem('token'); // Chequeo si está el token en localStorage en lugar de consultarlo al Estado. Si recarga la página no tiene
    // que loguearse de nuevo

    if(token !== null){
         hasToken = true
    }
    else{
         hasToken = false
    }

    return <Route {...props}>{hasToken ? <Component/> : <Redirect to="/login" />}</Route>;

}
 
export default PrivateRoute;