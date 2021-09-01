import React, {Fragment} from "react";

import Footer from "../components/Footer";
import HeroDetail from "../components/Cards/Details/HeroDetail";
import NavBar from "../components/NavBar";
import { useParams } from "react-router";

const HeroDetailView = () => {

    const params = useParams();

    console.log("params");console.log("params");console.log("params");console.log("params");
    console.log(params.name);
    
    return ( 
        
        <Fragment>
            <NavBar choose={params.name}/>
            <HeroDetail/>
            <Footer/>
        </Fragment>

     );

}
 
export default HeroDetailView;