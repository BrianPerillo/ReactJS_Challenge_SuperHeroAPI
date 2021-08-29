import React, {Fragment, useEffect, useState} from 'react'

import {Link,} from 'react-router-dom';
import { removeHero } from '../../store/actions/Team';
import { teamStats } from '../../store/actions/Team';
import { useDispatch } from 'react-redux';

const CardPoke = ({pokes}) => {

    const dispatch = useDispatch();
    const [showNotification, setShowNotification] = useState(false);
    
    console.log(pokes);

    const handleOnSubmit = (e) => {
        
        // e.preventDefault();
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
            
            <div className='col-md-2'>
                <div className="profile-card-1" style={{backgroundColor:'rgba(210, 57, 57, 0.937)'}}>
                
                    <div className="" style={{ display:'flex', justifyItems:'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={pokes.sprites.front_default} style={{width:'150px'}} />
                    </div>
                    <div className="mid-section">
                        <div className="name mt-2">
                            {pokes.name}
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>


     );
}
 
export default CardPoke;
