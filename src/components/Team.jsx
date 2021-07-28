import {
    Link,
    NavLink,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Atributtes from '../components/Atributtes'
import Card from './Card'
import ListadoCards from '../components/ListadoCards'
import {db} from '../firebase';

// import {TeamContext} from '../context/TeamContext';


const Team = (props) => {

    // const teamContext = useContext(TeamContext) //guardo context

    
    // useEffect(() => {

    //     teamContext.getTeam() // Cada vez que se cargue este componente consulta el team    
    //     teamContext.getTeamSize()
    //     teamContext.setMessage('')
    //     teamContext.getStats()

    // }, [teamContext.deleteHeroBool])

    useEffect(() => {

    }, [])

    const team = useSelector(state => state.heros.team) || {}
    console.log(team);

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

                    {/* COMPS Atributtes y .map para cargar los comps Card de los heros que haya: 

                    <Atributtes/>*/}

                    {
                        team.map((hero) => 
                             <Card hero={hero} teamView={true} size={'col-sm-6 col-md-6 col-xl-4 p-3'}/> //searchIn indica a la card donde tiene que buscar al hero para ver su detalle.
                        )
                    
                    }

                        {/*Cargo los stats del equipo*/}
                            
                   
            </div>   

        </Fragment>


     );
}
 
export default Team;
