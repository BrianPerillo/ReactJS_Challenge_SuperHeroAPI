import React, {Fragment} from "react";

import Footer from "../components/Footer";
import HeroDetail from "../components/HeroDetail";
import NavBar from "../components/NavBar";

const HeroDetailView = () => {

    
    return ( 
        
        <Fragment>
            <NavBar/>
            <HeroDetail/>
            <Footer/>
        </Fragment>

     );

}
 
export default HeroDetailView;