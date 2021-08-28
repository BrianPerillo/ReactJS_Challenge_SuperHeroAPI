import React, {Fragment, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Atributtes from '../components/Atributtes'
import Card from './Cards/Card'
import HeroCard from './Cards/HeroCard';
import {NavLink} from 'react-router-dom';
import SliderMenu from './SliderMenu';
import { teamStats } from '../store/actions/Team';
import { useParams } from 'react-router';

const Team = (props) => {
    
    const params = useParams();

    const dispatch = useDispatch();

    const team = useSelector(state => state.team.team) || {}

    const stats = useSelector(state => state.team.teamStats) || null;
    
    const teamLength = team.length;

    useEffect(() => {

        dispatch(teamStats());

    }, [])

    console.log(team);
    console.log(stats);
    
    return ( 

        <Fragment>

            <div className="row" style={{margin:'0px', minHeight:'100vh'}} >

                <div className="">
                    <SliderMenu teamLength={teamLength} stats={stats} />
                    {/* <Atributtes stats={stats} teamLength={teamLength}/> */}
                </div>
           
                <div id="" className="col" style={{overflow:'auto', height:'100vh'}}>

                    <div className="container" >
            
                    {/*Si el equipo no está completo muestro botón para agregar personajes*/}

                            { 
                                team.length < 6 ? 
                                <div className="col d-flex justify-content-center mt-5" style={{marginLeft: '30px'}}>
                                    <NavLink to={`/${params.choose}/search`}
                                    style={{textDecoration: 'none', color:'white'}}>
                                        <i id="add-from-home-button" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                                
                                :

                                    ''
                            }
 
                        <div className='row' style={{marginLeft: '50px'}}>   

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
            
        </Fragment>

     );
}
 
export default Team;
