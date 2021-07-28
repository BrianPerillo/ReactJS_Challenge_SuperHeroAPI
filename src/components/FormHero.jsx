import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ListadoCards from './ListadoCards'
import axios from 'axios';
import { findCurrentHero } from '../store/actions/Heros';

// import {getAllHeros, getHero} from '../services/Hero';


const FormHero = (props) => {

    const dispatch = useDispatch();

    const [baseUrl, setBaseUrl] = useState(process.env.REACT_APP_SUPER_HERO_BASE_URL);
    const [name, setName] = useState('');


    const handleOnChange = async (e) => {
    
        const name = e.target.value
        dispatch(findCurrentHero(name));

    }
    
    useEffect(() => {

        
    }, [name])
    
    return ( 
        
        <Fragment> 
            
                <form className="col-md-8 mx-auto m-4">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mr-2"> 
                            <input className="form-control my-2 p-2" type="text" name="name" placeholder="Buscar por Nombre" onChange={handleOnChange}/>
                        </div>
                    </div>
                </form>
                
        </Fragment>


     );
}
 
export default FormHero;

