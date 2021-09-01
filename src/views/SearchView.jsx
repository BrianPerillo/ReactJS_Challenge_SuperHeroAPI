import React, {Fragment} from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import { useParams } from "react-router";

const SearchView = () => {

    const params = useParams();

    console.log("params");
    console.log(params);

    return (                 
    
        <Fragment>
            <NavBar choose={params.name}/>
            <Search choose={params.name}/>
            <Footer/>
        </Fragment> );

}
 
export default SearchView;