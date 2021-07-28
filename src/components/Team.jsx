import {
    Link,
    NavLink,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { teamStats } from '../store/actions/Team';
import Atributtes from '../components/Atributtes'
import Card from './Card'
import ListadoCards from '../components/ListadoCards'
import {db} from '../firebase';

// import {TeamContext} from '../context/TeamContext';


const Team = (props) => {

    const dispatch = useDispatch();

    const team = useSelector(state => state.team.team) || {}
    const message = useSelector(state => state.team.message) || null;

    const stats = useSelector(state => state.team.teamStats) || null;

    useEffect(() => {

        dispatch(teamStats());

    }, [])

    console.log(team);
    console.log(stats);
    
    return ( 
        <Fragment>

            <div id="team-container" className="container">
                {/* Alert */}


                {/* Fin Alert */}

                {/*Muestro atributo principal*/}

             
                    {/* teamContext.loading == false ?
                            
                        {teamContext.maxStat.stat} team */}
            
        
                {/*Si el equipo no está completo muestro botón para agregar personajes*/}

                        {/* teamContext.heros.length < 6 ? */}


                {/*Cargo los stats y personajes del Team*/}

                    {/* COMPS Atributtes y .map para cargar los comps Card de los heros que haya: */}
                <div className='row'>

                    <Atributtes stats={stats}/>

                    <div className="col mt-5">  
                    
                    <div className="row"> 
                    {
                        team.map((hero) => 
                             <Card hero={hero} teamView={true} size={'col-sm-6 col-md-6 col-xl-4 p-3'}/> //searchIn indica a la card donde tiene que buscar al hero para ver su detalle.
                        )
                    
                    }

                        {/*Cargo los stats del equipo*/}
                            
                        </div>
                    </div>
                </div> 

            </div>   

        </Fragment>


     );
}
 
export default Team;
