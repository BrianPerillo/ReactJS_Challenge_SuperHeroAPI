import React, {Fragment, useEffect, useState} from 'react'

import { findCurrentHero } from '../store/actions/Heros';
import { findCurrentPoke } from '../store/actions/Pokes';
import { useDispatch } from 'react-redux';

const Form = (props) => {
    
    console.log("props.search");
    console.log(props.search);
    const dispatch = useDispatch();

    const [name, setName] = useState('')

    const handleOnSubmit = (e) => {
        
        console.log(e);
        e.preventDefault();

    }

    //HandleOnKey para evitar cambio de url al presionar Enter (poder aplicar el  e.preventDefault si el user da Enter)
    const handleOnKey = (e) => {
        
        console.log(e.which);

        //Si hay que buscar un pokemon: 
        if(props.search == 'pokemon'){
            //Si tocaron enter: 
            if(e.which==13){

                props.setLoading(true)
                props.setFirstTime(false)
                e.preventDefault();
                console.log('BUSCAR POKEMON');

                if(name.length > 0){
                    
                    console.log(name);console.log(name);console.log(name);
                    dispatch(findCurrentPoke(name))
                    .then(()=>props.setLoading(false))
    
                }
                else{
                    props.setFirstTime(true)
                }

            }
        }
        //Si no hay que buscar un pokemon (o sea hay que buscar un Hero): 
        else{
            if(e.which==13){
                props.setLoading(true)
                props.setFirstTime(false)
                e.preventDefault();
    
                if(name.length > 0){
                    
                    console.log(name);console.log(name);console.log(name);
                    dispatch(findCurrentHero(name))
                    .then(()=>props.setLoading(false))
    
                }
                else{
                    props.setFirstTime(true)
                }
            }
        }

    }

    const handleOnClick = (e) => {

            if(props.search == 'pokemon'){
                console.log('BUSCAR POKEMON');
            }
            else{
                if(name.length > 0){
                    props.setLoading(true)
                    props.setFirstTime(false)
                    console.log(name);console.log(name);console.log(name);
                    dispatch(findCurrentHero(name))
                    .then(()=>props.setLoading(false))
    
                }
                else{
                    props.setFirstTime(true)
                }
            }

        

    }

    const handleOnChange = async (e) => {

        // name = e.target.value
        // console.log(name);

        setName(e.target.value);

        // props.setLoading(true)
        // props.setFirstTime(false)

        // //Si el texto del input es mayor a 0 busco hero por nombre:
        // if(name.length > 0){
            
        //     console.log(name);console.log(name);console.log(name);
        //     dispatch(findCurrentHero(name))
        //     .then(()=>props.setLoading(false))

        // }
        // else{
        //     props.setFirstTime(true)
        // }
        
    }
    
    useEffect(() => {

        
    }, [name])
 
    return ( 
        
        <Fragment> 
            
                <form className="col-md-8 mx-auto m-4">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mr-2"> 
                            <form className="row d-flex justify-content-center" action="" onSubmit={e => handleOnSubmit(e)}>
                                <i id="icon-search" class="my-2 fa fa-search" aria-hidden="true" onClick={()=>handleOnClick()}></i>
                                <input id="search-input" 
                                    className="col-9 col-sm-8 col-md-9 form-control my-2 p-2" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Buscar por Nombre" 
                                    onKeyPress={e => handleOnKey(e)} 
                                    onChange={e => handleOnChange(e)}
                                /> {/* onChange={handleOnChange} */}
                            </form>
                        </div>
                    </div>
                </form>
                
        </Fragment>

     );
}
 
export default Form;