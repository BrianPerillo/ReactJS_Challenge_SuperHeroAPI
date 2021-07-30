import React, {Fragment} from "react";

const Alert = (props) => {

    const color = props.color;
    const message = props.message;
    const gifUrl = props.gifUrl; 

    const clase = "alert alert-" + color + " alert-dismissible fade show m-auto col-md-4"

    return ( 
        
        gifUrl ? 
            <Fragment>
                <div className="d-flex justify-content-center mt-5">
                    <img src={gifUrl} alt="loading" style={{width:60,heigth:60}}/> 
                </div>
            </Fragment>
        :
            <Fragment>

                    <div className={clase} role="alert">
                        <strong>{message}</strong>
                    </div>
                
            </Fragment>

     );
}
 
export default Alert;