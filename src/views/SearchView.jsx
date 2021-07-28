import React, {Fragment} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SearchHero from "../components/SearchHero";

const Search = () => {

    return (                 
    
        <Fragment>
            <NavBar></NavBar>
            <SearchHero/>
            <Footer/>
        </Fragment> );

}
 
export default Search;