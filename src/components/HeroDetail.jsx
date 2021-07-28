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
    let message = '';
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        dispatch(addHero(hero));
        setShowNotification(true);
        // teamContext.add_hero(hero);

    }
    

    const obtenerHero = async () => {
        const res = await getHero(baseUrl,id)
        setHero(res);
        setLoading(false);
    }
    
    message = useSelector(state => state.team.message) || '';
    
    useEffect(() => {
        
        // dispatch(selectedHero(id));
        let message = '';

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

            {
                showNotification ?

                <div class="alert alert-primary alert-dismissible fade show m-auto col-md-4" role="alert">
                    <strong >{message}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                    :

                    ''
            }
            

                <div className="col-md-7 col-lg-8 col-xl-4 p-3 m-auto">
                    
                    <div className="profile-card-1">
                    
                        <div className="img" style={{height: '160px'}} >
                            <img style={{height: '250px'}} src={hero.image.url}/>
                        </div>

                        <div className="mid-section mid-section-detail" style={{margin:'140px 0px 0px 0px'}}>
                            <div className="name">
                                {hero.name}
                            </div>

                            <div className="col description mt-1">

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
