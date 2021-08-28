import React, {Fragment} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SliderMenu from "../components/SliderMenu";
import Team from "../components/Team";
import { useSelector } from "react-redux";

const Home = () => {

    return ( 

        <Fragment>
            <NavBar/>
            <Team/>
            <Footer/>
        </Fragment>

     );
}
 
export default Home;