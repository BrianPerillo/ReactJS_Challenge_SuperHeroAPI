import axios from "axios";

export const LOG_IN_OK = 'LOG_IN_OK';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

const login_url = process.env.REACT_APP_LOGIN_URL;


export const logIn = (values) => {
    
    return async dispatch => {
        console.log(login_url);
    // mail: challenge@alkemy.org - password: react
            try {
                console.log(values);
                const res = await axios.post(login_url, values)
                localStorage.setItem('token', res.data.token)
                console.log(res.data.token);
                dispatch({ 
                    type: LOG_IN_OK, 
                    user_values: values
                });
            }
            catch (error) {
                console.log(error);
                if (error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    dispatch({ 
                        type: LOG_IN_ERROR, 
                        error_values: {
                            response_data: error.response.data, 
                            response_status: error.response.status, 
                            response_headers: error.response.headers,
                        }
                    });
                }

            } 
    }


};
