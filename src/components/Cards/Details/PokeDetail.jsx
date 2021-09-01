import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Alert from '../../Alert';
import { addPoke } from '../../../store/actions/TeamPokes';
import { getPokeById } from '../../../services/Pokemons';
import {useParams} from 'react-router-dom';

// import { getHero } from '../../../services/Heros';


const PokeDetail = () => {

    //Modificar para que en lugar de mostrar un detalle de un SuperHeroe muestre el de un Pokemon (en lugar de obtenerHero crear obtenerPoke() y ejecutar
    //en el useEffect)

    const dispatch = useDispatch();
    const baseUrl = process.env.REACT_APP_POKE_API_BASE_URL;

    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [poke, setPoke] = useState()

    const [showNotification, setShowNotification] = useState(false);
    
    const message = useSelector(state => state.team.message) || '';

    const handleSubmit = (e) => {
        
        e.preventDefault();
        dispatch(addPoke(poke));
        setShowNotification(true);
        // teamContext.add_hero(hero);

    }
    
    const obtenerPoke= async () => {
        const res = await getPokeById(baseUrl,id)
        setPoke(res);
        setLoading(false);console.log("poke");

    }
    
    useEffect(() => {
        
        obtenerPoke();
        
    }, []) 

    return ( 

        <Fragment>

            { loading ?

                <Alert color='secondary' message={'Loading...'} gifUrl="https://gifimage.net/wp-content/uploads/2018/04/loading-gif-orange-8.gif"/>

            :

                <div id="main_detail_container" className="mt-5 mb-5">

            
                    <Fragment>

                        <div className='col-md-2' style={{margin:'auto'}}>
                            <div className="profile-card-1" style={{backgroundColor:'rgba(210, 57, 57, 0.937)'}}>
                            
                                <div className="img">
                                    <img src={poke.sprites.front_default} style={{width:'150px'}}/>
                                </div>

                                {/* <div className="popup"></div> */}
                                <div className="mid-section" style={{backgroundColor:'rgba(210, 57, 57, 0.937)'}}>
                                    <div className="name mt-2">
                                        {poke.name}
                                    </div>
                                    {/* <div className="col mt-1">
                                        <strong style={{color:'orange'}}>Stats</strong>
                                    </div> */}
                                    <div className="row description mt-3">
                                        <p>Detalle</p>
                                        {/* <div className="col">
                                            <p className="m-1">Intelligence:</p>
                                            0
                                            <p className="m-1">Strength:</p>
                                                0
                                            <p className="m-1">Speed: </p>
                                            0
                                        </div>
                                        <div className="col">
                                            <p className="m-1">Durability:</p>
                                                0
                                            <p className="m-1">Power:</p>
                                            0
                                            <p className="m-1">Combat:</p>
                                                0
                                        </div> */}
                                    </div>
                                    {/* <div className="line"></div> */}

                                    <div className="stats">

                                    <form onSubmit={handleSubmit}>
                                            <button className="btn btn-success">Agregar al Equipo</button>
                                        </form>
                                
                                    </div> 
    
                                </div>
                        
                            
                            </div>
                        </div>

            
                    </Fragment>

                </div>

            }

        </Fragment>


     );
}




  
export default PokeDetail;
