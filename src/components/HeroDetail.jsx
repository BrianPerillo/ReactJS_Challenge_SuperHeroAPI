import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import { addHero } from '../store/actions/Heros';
import { addHero } from '../store/actions/Team';
import axios from 'axios';
import {db} from '../firebase';
import { getHero } from '../services/Heros';
import { selectedHero } from '../store/actions/Heros';
import {useParams} from 'react-router-dom';

// import {TeamContext} from '../context/TeamContext';

const HeroDetail = () => {

    const dispatch = useDispatch();
    const baseUrl = process.env.REACT_APP_SUPER_HERO_BASE_URL;
    
    const {id} = useParams();
    // const hero = useSelector(state => state.heros.selected) || []
    // const teamContext = useContext(TeamContext) //guardo context
    const [detail, setDetail] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [hero, setHero] = useState()
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        dispatch(addHero(hero));
        
        // teamContext.add_hero(hero);

    }

    const obtenerHero = async () => {
        const res = await getHero(baseUrl,id)
        setHero(res);
        setLoading(false);
    }
    
    useEffect(() => {
        
        // dispatch(selectedHero(id));
        
        obtenerHero();

        // teamContext.getTeam() // Cada vez que se cargue este componente consulta el team    
        // teamContext.getTeamSize()
        
    }, []) // [teamContext.message]


    return ( 

        <Fragment>

            

            { loading ?

            <p>Loading...</p>

            :

            <div id="main_detail_container" className="mt-5">


                <div className="col-md-7 col-lg-8 col-xl-4 p-3 m-auto">
                    
                    <div className="profile-card-1">
                    
                        <div className="img" style={{height: '200px'}} >
                            <img style={{height: '350px'}} src={hero.image.url}/>
                        </div>

                        <div className="mid-section mid-section-detail">
                            <div className="name mt-4">
                                {hero.name}
                            </div>

                            <div className="col description mt-3">

                                {/*ALIAS*/}
                                <div id="Alias" className="col">
                                    <p><strong> Alias: </strong></p>
                                        <p>
                                            {
                                                hero.biography.aliases.map((alias) =>
                                                    <span>{alias + ' / '}</span>
                                                )

                                            }
                                        </p> 
                                </div>

                                {/*PESO-ALTURA*/}
                                <div id="" className="row">
                                    <div className='col'>
                                        <p><strong> Peso: </strong></p>
                                        <p>
                                            <span>{hero.appearance.weight[0]} / {hero.appearance.weight[1]}</span>
                                        </p> 
                                    </div>
                                    
                                    <div className='col'>
                                        <p><strong> Altura: </strong></p>
                                        <p>
                                            <span>{hero.appearance.height[0]} / {hero.appearance.height[1]}</span>
                                        </p> 
                                    </div>
                                </div>

                                {/*OJOS-CABELLO*/}
                                <div id="" className="row">
                                    <div className='col'>
                                        <p><strong> Ojos: </strong></p>
                                        <p>
                                            <span>{hero.appearance['eye-color']}</span>
                                        </p> 
                                    </div>
                                    
                                    <div className='col'>
                                        <p><strong> Cabello: </strong></p>
                                        <p>
                                            <span>{hero.appearance['hair-color']}</span>
                                        </p> 
                                    </div>
                                </div>  

                                {/*LUGAR DE TRABAJO*/}
                                <div id="Alias" className="col">
                                    <p><strong> Lugar de Trabjo: </strong></p>
                                        <p>
                                            <span>{hero.work.base}</span>
                                        </p> 
                                </div>

                                {/*LUGAR DE TRABAJO*/}
                                <div id="Alias" className="col">
                                    <p><strong> Alignment: </strong></p>
                                        <p>
                                            <span>{hero.biography.alignment}</span>
                                        </p> 
                                </div>
                                
                            </div>
                            <div className="line"></div>

                            <div className="stats m-5">
                                

                                <form onSubmit={handleSubmit}>
                                    <button className="btn btn-success">Agregar al Equipo</button>
                                </form>
                                
                            </div> 
    
                        </div>
                
                    
                    </div>
                </div>
            </div>

        }

        </Fragment>


     );
}




  
export default HeroDetail;
