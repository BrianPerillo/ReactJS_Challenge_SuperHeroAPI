import {Link, NavLink} from 'react-router-dom';
import React, {Fragment} from 'react';

import { useSelector } from 'react-redux';

const NavBar = (props) => {

    const team = useSelector(state => state.team.team) || '';

    return ( 

        <Fragment>

            <header>
                <div className="container">

                    <nav className="row">

                        <div className="col-1 ml-3 mt-3">
                            <h1 hidden></h1>
                        
                            <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}> {/*Sección Logo*/}
                            
                                <Link to={'/'}>
                                    <img src="../imgs/cape_icon.png" alt="team_icon" style={{width:50}} />
                                </Link>

                            </div>
                        </div>

                        <div id="categorias" className="col-11 col-md-7" style={{display:'flex', alignContent:'center', justifyContent:'center'}}>

                            <ul className="menu menu m-0">
                            <NavLink to={`/`}><li className=""> Team
                                    <ul className="pb-2">
                                    </ul>
                                </li></NavLink>
                            </ul>

                            <ul className="menu menu m-0">
                            <NavLink to={`/search`}><li className=""> Buscar Heros
                                    <ul className="pb-2">
                                    </ul>
                                </li></NavLink>
                            </ul>

                        </div>

                        <div className="col-1 col-md-2">

                            <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <img id="team-icon" src="../imgs/spartan_icon.png" alt="team_icon" style={{width:20}} />
                                <i style={{position:'relative', left:-9, top:14, color:'red'}} class="fas fa-circle fa-1x" aria-hidden="true">
                                    <span style={{position:'relative', left:-12, color:'white'}}>{team.length}</span>
                                </i>

                            </div>

                        </div>


                    </nav>
                </div>
                
            </header>

        </Fragment>

     );

}
 
export default NavBar;