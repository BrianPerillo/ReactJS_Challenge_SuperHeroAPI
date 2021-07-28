import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import FormHero from './FormHero'
import ListadoCards from './ListadoCards'
import Login from './Login';
import axios from 'axios';
import { getAllHeros } from '../services/Heros';
import { getHeros } from '../store/actions/Heros';

const SearchHero = () => {

    const dispatch = useDispatch();

    const baseUrl = process.env.REACT_APP_SUPER_HERO_BASE_URL;

    // const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(true)

    const [loadFirsts, setLoadFirsts] = useState(false)

    useEffect(() => {

        dispatch(getHeros());
        
    }, [])

    const heros = useSelector(state => state.heros.list) || {}
    
    return ( 
        
        <Fragment> 

                <FormHero setLoadFirsts={setLoadFirsts} loadFirsts={loadFirsts}/>
                
                {
                    heros.length > 0 ?
                    
                        <ListadoCards heros={heros}/> //searchIn indica a la card donde tiene que buscar al hero para ver su detalle.
                    
                    : 

                        <p>Loading ...</p>
                }

        </Fragment>


     );
}
 
export default SearchHero;
