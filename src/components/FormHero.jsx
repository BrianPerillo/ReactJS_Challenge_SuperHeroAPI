import React, {Fragment, useEffect, useState} from 'react'

import { findCurrentHero } from '../store/actions/Heros';
import { getHeros } from '../store/actions/Heros';
import { useDispatch } from 'react-redux';

const FormHero = (props) => {

    const dispatch = useDispatch();
    const [disableInput, setDisableInput] = useState(false)

    let name = '';


    const handleOnChange = async (e) => {

        props.setLoading(true)
        props.setFirstTime(false)
        name = e.target.value

        //Si el texto del input es mayor a 0 busco hero por nombre:
        if(name.length > 0){
            
            dispatch(findCurrentHero(name))
            .then(()=>props.setLoading(false))

        }//Si el texto del input es 0 porque borraron lo que escribieron x ejemplo, vuelvo a cargar en la lista el resultado inicial (los 1eros 8 Heros)
        else{
            props.setFirstTime(true)
        }

        
        
    }
    
    useEffect(() => {

        
    }, [name])
    
    return ( 
        
        <Fragment> 
            
                <form className="col-md-8 mx-auto m-4">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mr-2"> 
                        { disableInput ?
                            <input className="form-control my-2 p-2" type="text" name="name" placeholder="Buscar por Nombre" onChange={handleOnChange} disabled/>
                            :
                            <input className="form-control my-2 p-2" type="text" name="name" placeholder="Buscar por Nombre" onChange={handleOnChange}/>
                        }
                        </div>
                    </div>
                </form>
                
        </Fragment>


     );
}
 
export default FormHero;