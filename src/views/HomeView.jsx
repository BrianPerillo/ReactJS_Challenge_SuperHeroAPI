import React, {Fragment} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Team from "../components/Team";

const Home = () => {

    return ( 

        <Fragment>
            <NavBar></NavBar>
            <Team/>
            <Footer/>
        </Fragment>

     );
}
 
export default Home;