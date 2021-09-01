import React, {Fragment} from "react";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SliderMenu from "../components/SliderMenu";
import Team from "../components/Team";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const TeamView = () => {

    //por params llega name que nos permite saber si al comp Team debemos pasarle el team de pokes o de superHeros
    const params = useParams();
    
    //Estados para contralar el SideBarMenu - pueden ser seteados desde Team y desde el propio SliderMenu
    const [collapsed, setCollapsed] = useState(true)
    const [toggled, setToggled] = useState(false)
    //

    //HEROS: Consulto team y stats para pasar info al SideBarMenu y a Team
    const team = useSelector(state => state.team.team) || {}

    const stats = useSelector(state => state.team.teamStats) || null;

    const teamLength = team.length;
    //
    
    //POKES: Consulto
    const pokesTeam = useSelector(state => state.pokeTeam.team) || {}

    const teamPokesLength = pokesTeam.length;
    //



    console.log("params");
    console.log(params.name);

    useEffect(() => {

        

    }, [])


    return ( 

        <Fragment>

           
            <NavBar choose={params.name} /> 
            <SliderMenu stats={stats} teamLength={teamLength} collapsed={collapsed} toggled={toggled} setCollapsed={setCollapsed} setToggled={setToggled} />
            { //Cago PokeTeam o SuperHerosTeam según el caso
                params.name == 'pokemon' ? 

                    <Team setCollapsed={setCollapsed} setToggled={setToggled} teamLength={teamPokesLength} team={pokesTeam} choose={params.name} />

                : 

                    <Team setCollapsed={setCollapsed} setToggled={setToggled} stats={stats} teamLength={teamLength} team={team} choose={params.name} />
            }
         
            <Footer />

        </Fragment>

     );
}
 
export default TeamView;