import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Alert from './Alert';
import FormHero from './FormHero'
import ListadoCards from './ListadoCards'
import { getHeros } from '../store/actions/Heros';
import { useParams } from 'react-router';

const SearchHero = () => {

    const dispatch = useDispatch();

    const heros = useSelector(state => state.heros.list) || {}
    const error_values = useSelector(state => state.heros.error_values) || {}
    const [loading, setLoading] = useState(true)
    const [firstTime, setFirstTime] = useState(true)

    var result = null;  


    useEffect(() => {

 
        
    }, [])

    console.log(heros);

    if(firstTime){
        result = 
        <Fragment>
            <div className='col'>
                <div className="d-flex justify-content-center" style={{height:'40vh',alignItems:'center'}}>
                    <i style={{color:'#e5e5e5'}} class="fas fa-search fa-10x" aria-hidden="true"></i>
                </div>
                <div className="d-flex justify-content-center">
                    <p style={{color:'#b9b9b9', fontSize:'30px'}}>Buscar Héroe</p>
                </div>
            </div>
        </Fragment>
    }
    else if(loading == true){
        result = <Alert color='secondary' message={'Loading...'} gifUrl="imgs/loading-gif-orange-8.gif"/> 
    }
    else if(heros.length > 0){
        result = <ListadoCards heros={heros}/>   
    }
    else if(heros.length == 0){
        result = <Alert color='danger' message='No se encontraron resultados :('/>
    }
    else if(typeof error_values.response_data.error !== "undefined"){
        result = <Alert color='danger' message={error_values.response_data.error}/> 
    }


    console.log(loading);
    
    
    return ( 
        
        <Fragment> 

                <FormHero setFirstTime={setFirstTime} loading={loading} setLoading={setLoading}/>
                
                { result }

        </Fragment>


     );
}
 
export default SearchHero;