import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Atributtes from '../components/Atributtes'
import Card from './Cards/Card'
import HeroCard from './Cards/HeroCard';
import {NavLink} from 'react-router-dom';
import SliderMenu from './SliderMenu';
import { teamStats } from '../store/actions/Team';
import { useParams } from 'react-router';
import { IoMenuSharp } from "react-icons/io5";

const Team = ({stats, teamLength, team, ...props}) => {

    const params = useParams();

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(teamStats());

    }, [])
    
    console.log(team);
    console.log(stats);

    const handleOnClick = () => {

        //cambio el valro de collapsed y toggled mediante métodos recibidos desde TeamView para cambiar estos estados en ese componente

        props.setCollapsed(prevState => !prevState)
        props.setToggled(prevState => !prevState)

    }



    return ( 

        <Fragment>

        {props.choose == 'superHeros' ?
        
            <div className="row" style={{margin:'0px', minHeight:'100vh'}} >

                <div className="">

             
                    {/* <Atributtes stats={stats} teamLength={teamLength}/> */}
                </div>
        
                <div id="" className="col" style={{overflow:'auto', height:'100vh'}}>
               
                    <div className="container" >
                    <button id='menuButton' className="btn btn-dark" style={{position:'absolute', left:10, top:20, borderRadius:50}} onClick={()=>handleOnClick()}>
                        <IoMenuSharp />
                    </button>
                    {/*Si el equipo no está completo muestro botón para agregar personajes*/}

                            { 
                                team.length < 6 ? 
                                <div className="col d-flex justify-content-center mt-5">
                                    <NavLink to={`/${params.choose}/search`}
                                    style={{textDecoration: 'none', color:'white'}}>
                                        <i id="add-from-home-button" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                                
                                :

                                    ''
                            }

                        <div className='row'>   

                            <div className="col mt-5">  
                                
                                <div className="row"> 
                                {
                                    team.map((hero) => 
                                        <HeroCard hero={hero} teamView={true} size={'col-sm-6 col-md-6 col-xl-3 p-3'}/>
                                    )
                                    
                                }
                                            
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>   
            </div>

        : 

            <p>Team Poke</p>

        }

            
            
        </Fragment>

     );
}
 
export default Team;