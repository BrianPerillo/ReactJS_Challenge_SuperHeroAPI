import React, {Fragment, useEffect} from 'react'

import Card from './Cards/Card';
import HeroCard from './Cards/HeroCard';

const ListadoCards = (props) => {


    useEffect(() => {


        }, [])

    

    return ( 
        
        <Fragment>
                  <div className="container">
                    <div className="row">
                        {
                            props.heros.map((hero) =>

                                <HeroCard searchIn={props.searchIn} hero={hero} size={'col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3'}/>

                            )
                        }
                    </div>
                </div>
        </Fragment>


     );
}
 
export default ListadoCards;
