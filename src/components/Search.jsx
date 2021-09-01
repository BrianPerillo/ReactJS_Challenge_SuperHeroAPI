import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Alert from './Alert';
import Form from './Form'
import ListadoCards from './ListadoCards'
import PokeCard from './Cards/PokeCard';

const SearchHero = (props) => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState(props.choose) // Esta const guarda el dato de lo que hay que buscar (si un hero o un pokemon)

    const heros = useSelector(state => state.heros.list) || {}
    const pokes = useSelector(state => state.pokes.list) || {}
    const error_values = useSelector(state => state.heros.error_values) || {}
    const [loading, setLoading] = useState(true)
    const [firstTime, setFirstTime] = useState(true)

    var result = null;  

    useEffect(() => {

        if(search == 'pokemon'){
            console.log('pika pika');
        }
        else{
            console.log('superHero');
        }
        
    }, []) 
    console.log("sssss");
    console.log(pokes.name);
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
    else if(heros.length > 0 && search == 'superHeros'){
        result = <ListadoCards heros={heros}/>   
    }
    else if(pokes && search == 'pokemon'){
        result = <PokeCard pokes={pokes}/>
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

                <div style={{minHeight:'100vh'}}>

                    <Form search={search} setFirstTime={setFirstTime} loading={loading} setLoading={setLoading}/>
                    
                    { result }

                </div>
        </Fragment>


     );
}
 
export default SearchHero;