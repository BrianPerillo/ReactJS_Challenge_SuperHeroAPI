import React, {Fragment} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SearchHero from "../components/SearchHero";
import { useParams } from "react-router";

const Search = () => {

    const params = useParams();

    console.log("params");
    console.log(params);

    return (                 
    
        <Fragment>
            <NavBar choose={params.name}/>
            <SearchHero choose={params.name}/>
            <Footer/>
        </Fragment> );

}
 
export default Search;