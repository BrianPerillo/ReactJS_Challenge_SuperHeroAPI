import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Alert from './Alert';
import FormHero from './FormHero'
import ListadoCards from './ListadoCards'
import { getHeros } from '../store/actions/Heros';

const SearchHero = () => {

    const dispatch = useDispatch();

    const heros = useSelector(state => state.heros.list) || {}
    const error_values = useSelector(state => state.heros.error_values) || {}
    const [loading, setLoading] = useState(true)

    var result = null;  


    useEffect(() => {

        dispatch(getHeros())
        .then(()=> setLoading(false))
        
    }, [])

    if(heros.length > 0){
        result = <ListadoCards heros={heros}/>   
    }
    else if(loading == true){
        result = <Alert color='secondary' message={'Loading...'} gifUrl="https://gifimage.net/wp-content/uploads/2018/04/loading-gif-orange-8.gif"/> 
    }
    else if(heros.length == 0){
        result = <Alert color='danger' message='No se encontraron resultados :('/>
    }
    else if(typeof error_values.response_data.error !== "undefined"){
        result = <Alert color='danger' message={error_values.response_data.error}/> 
    }


    console.log(heros.length);
    
    
    return ( 
        
        <Fragment> 

                <FormHero/>
                
                { result }

        </Fragment>


     );
}
 
export default SearchHero;
