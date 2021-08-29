import {Link, NavLink} from 'react-router-dom';
import React, {Fragment} from "react";

import Footer from "../components/Footer";
import {NavBar} from "../components/NavBar";
import SliderMenu from "../components/SliderMenu";
import Team from "../components/Team";
import { useSelector } from "react-redux";

const Home = () => {

    

    return ( 

        <Fragment>
            
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', height:'100vh', width:'100vw'}}>
                
               <div className="" style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>

                    <div id='choose-poketeam' style={{display:'flex',justifyContent:'space-around', alignContent:'center', alignItems:'center',height:'100vh',width:'50vw'}}>
                        <Link to={'/pokemon/team'} >
                            <img src="../imgs/pokeball.ico" alt=""/>
                        </Link>
                    </div>

                    <div id='choose-super-hero-team' style={{display:'flex',justifyContent:'space-around', alignContent:'center', alignItems:'center',height:'100vh', width:'50vw'}}>
                        <Link to={'/superHeros/team'} >
                            <img src="../imgs/spartan_icon.png" alt=""/>
                        </Link>
                    </div>

                </div>
                
            </div>

        </Fragment>

     );
}
 
export default Home;