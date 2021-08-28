import {Link, NavLink} from 'react-router-dom';
import React, {Fragment} from 'react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const NavBar = (props) => {

    const team = useSelector(state => state.team.team) || '';

    const [logo, setLogo] = useState()
    const [searchTxt, setSearchTxt] = useState() 
    const [teamIcon, setTeamIcon] = useState()
    const [headerColor, setHeaderColor] = useState()

    useEffect(() => {

        if(props.choose == 'pokemon'){
            
            console.log('ZI ZEÑODA');
            setLogo('../imgs/pokemon-logo.ico')
            setSearchTxt('Search Poke')
            setTeamIcon('../imgs/pokeball.ico')
            setHeaderColor("#d23939ef")
        }
        else{

            console.log('NO ZEÑODA');
            setLogo('../imgs/cape_icon.png')
            setSearchTxt('Search Hero')
            setTeamIcon('../imgs/spartan_icon.png')
            setHeaderColor("#3d3d3d")
        }

    }, [])

    return ( 

        <Fragment>

            <header style={{backgroundColor:headerColor}}>
                <div className="container">

                    <nav className="row">

                        <div className="col-1 ml-3 mt-3">
                            <h1 hidden></h1>
                        
                            <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}> {/*Sección Logo*/}
                            
                                <Link to={'/'}>
                                    <img src={logo} alt="team_icon" style={{width:50}} />
                                </Link>

                            </div>
                        </div>

                        <div id="categorias" className="col-11 col-md-7" style={{display:'flex', alignContent:'center', justifyContent:'center'}}>

                            <ul className="menu menu m-0">
                            <NavLink to={`/${props.choose}/team`}><li className=""> Team
                                    <ul className="pb-2">
                                    </ul>
                                </li></NavLink>
                            </ul>

                            <ul className="menu menu m-0">
                            <NavLink to={`/${props.choose}/search`}><li className=""> {searchTxt}
                                    <ul className="pb-2">
                                    </ul>
                                </li></NavLink>
                            </ul>

                        </div>

                        <div className="col-1 col-md-2">

                            <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <img id="" src={teamIcon} alt="team_icon" style={{maxHeight:'50px'}} />
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