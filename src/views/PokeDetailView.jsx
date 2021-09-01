import React, {Fragment} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PokeDetail from "../components/Cards/Details/PokeDetail";
import { useParams } from "react-router";

const PokeDetailView = () => {

    const params = useParams();

    console.log("params");console.log("params");console.log("params");console.log("params");
    console.log(params.name);
    
    return ( 
        
        <Fragment>
            <NavBar choose={params.name}/>
            <PokeDetail/>
            <Footer/>
        </Fragment>

     );

}
 
export default PokeDetailView;