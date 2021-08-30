import React, {Fragment} from "react";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SliderMenu from "../components/SliderMenu";
import Team from "../components/Team";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const TeamView = () => {

    const params = useParams();
    
    //Estados para contralar el SideBarMenu - pueden ser seteados desde Team y desde el propio SliderMenu
    const [collapsed, setCollapsed] = useState(true)
    const [toggled, setToggled] = useState(false)
    //

    //Consulto team y stats para pasar info al SideBarMenu y a Team
    const team = useSelector(state => state.team.team) || {}

    const stats = useSelector(state => state.team.teamStats) || null;

    const teamLength = team.length;
    //

    console.log("params");
    console.log(params);

    useEffect(() => {

        

    }, [])


    return ( 

        <Fragment>

           
            <NavBar choose={params.name} /> 
            <SliderMenu stats={stats} teamLength={teamLength} collapsed={collapsed} toggled={toggled} setCollapsed={setCollapsed} setToggled={setToggled} />
            <Team setCollapsed={setCollapsed} setToggled={setToggled} stats={stats} teamLength={teamLength} team={team} choose={params.name} />
            <Footer />

        </Fragment>

     );
}
 
export default TeamView;