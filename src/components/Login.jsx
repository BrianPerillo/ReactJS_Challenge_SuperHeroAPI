import React, {Fragment, useEffect, useState} from 'react'

import { Redirect } from 'react-router';
import { Route } from 'react-router';
import axios from 'axios';
import { logIn } from '../store/actions/Login';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();

    const logged = useSelector(state => state.log.logged)

    const validate = values => {
        const errors = {};
        // mail: challenge@alkemy.org - password: react
        if (!values.email) {
            errors.email = 'Email Requerido';
        }
        if (!values.password) {
            errors.password = 'Password Requerido';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
            // login(values)
            dispatch(logIn(values));

        },
    });

    useEffect(() => {


    }, [])

    const log_error = useSelector(state => state.log.error_values)
    console.log('aca');
    console.log(log_error.response_data.error);

    return ( 

        logged ? 

        <Redirect to="/"/>
        
        :

        <Fragment>
            {
                typeof log_error.response_data.error !== "undefined" ?
                
                <div class="alert alert-danger alert-dismissible fade show m-auto col-md-4" role="alert">
                    <strong>{log_error.response_data.error}</strong>
                </div>
                    
                :

                ''
            }
            <div id="login_form" className="container">
                
                <h2>Log In</h2>

                <form className="col-md-6 form-group m-auto" onSubmit={formik.handleSubmit}>
                    
                    <div className="form-input">
                        <input 
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    
                    <div className="form-input">
                        <input 
                            className="form-control"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>

                    <div>{formik.errors.email ? <p>{formik.errors.email}</p> : null}</div>
                    <div>{formik.errors.password ? <p>{formik.errors.password}</p> : null}</div>

                    <div id="login-button" className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit">Log In</button>
                    </div>

                </form>

            </div>

        </Fragment>

     );

}
 
export default Login;
