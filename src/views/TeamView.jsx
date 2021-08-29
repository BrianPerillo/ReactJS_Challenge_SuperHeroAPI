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

    console.log("params");
    console.log(params);

    useEffect(() => {

        

    }, [])

    return ( 

        <Fragment>
            
            <NavBar choose={params.name} />
            <Team choose={params.name } />
            <Footer />

        </Fragment>

     );
}
 
export default TeamView;