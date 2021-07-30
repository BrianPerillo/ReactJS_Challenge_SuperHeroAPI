import { LOG_IN_ERROR, LOG_IN_OK } from "../actions/Login";

const INITIAL_STATE = {

    user_values: {
        email:'',
        pass:'',
    },
    error_values: {
        response_data:'',
        response_status:'',
        response_headers:'',
    },
    logged: false,
    token: '',

}

const LogInReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
         
        case LOG_IN_OK: 
        console.log("ok");
            return {

                ...state, 
                user_values: action.user_values,
                logged: true,
                token: localStorage.getItem('token'),

            }
            

        case LOG_IN_ERROR:
            console.log("error");
            return {

                ...state,
                error_values: action.error_values,
                logged: false,
            
            };

        default:

            return { ...state };

    }

}

export default LogInReducer;