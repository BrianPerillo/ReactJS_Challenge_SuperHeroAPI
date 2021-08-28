import React, {Fragment, useEffect, useState} from 'react'

import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { removeHero } from '../../store/actions/Team';
// import { teamStats } from '../../store/actions/Team';


const HeroCard = (props) => {

    const dispatch = useDispatch();
    const [showNotification, setShowNotification] = useState(false);
    

    const handleOnSubmit = (e) => {
        
        e.preventDefault();
        console.log('Handle Poke');
        // //Remuevo el Hero
        // dispatch(removeHero(props.hero.id,props.hero.biography.alignment));
        // //Recalculo stats
        // dispatch(teamStats());
        // setShowNotification(true);
        
    };

    useEffect(() => {



    }, [])

    return ( 

        <Fragment>
            
            <p>POKE CARD</p>

        </Fragment>

     );

}
 
export default HeroCard;