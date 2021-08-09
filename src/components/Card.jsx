import React, {Fragment, useEffect, useState} from 'react'

import {Link,} from 'react-router-dom';
import { removeHero } from '../store/actions/Team';
import { teamStats } from '../store/actions/Team';
import { useDispatch } from 'react-redux';

const Card = (props) => {

    const dispatch = useDispatch();
    const [showNotification, setShowNotification] = useState(false);
    

    const handleOnSubmit = (e) => {
        
        e.preventDefault();
        //Remuevo el Hero
        dispatch(removeHero(props.hero.id,props.hero.biography.alignment));
        //Recalculo stats
        dispatch(teamStats());
        setShowNotification(true);
        
    };

    useEffect(() => {



    }, [])

    return ( 
        <Fragment>
            
            <div className={props.size}>
                <div className="profile-card-1">
                
                    <div className="img">
                        <img src={props.hero.image.url}/>
                    </div>
                    <Link to={'/hero_detail/' + props.hero.id}
                        style={{textDecoration: 'none', color:'white'}}>
                        <button className="btn btn-propio">
                            <a className="view-more">
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            </a>
                        </button>
                    </Link>
                    {/* <div className="popup"></div> */}
                    <div className="mid-section">
                        <div className="name mt-2">
                            {props.hero.name}
                        </div>
                        {/* <div className="col mt-1">
                            <strong style={{color:'orange'}}>Stats</strong>
                        </div> */}
                        <div className="row description mt-3">
                            <div className="col">
                                  <p className="m-1">Intelligence:</p>
                                    {props.hero.powerstats.intelligence}
                                  <p className="m-1">Strength:</p>
                                    {props.hero.powerstats.strength}
                                  <p className="m-1">Speed: </p>
                                    {props.hero.powerstats.speed}
                            </div>
                            <div className="col">
                                <p className="m-1">Durability:</p>
                                    {props.hero.powerstats.durability}
                                <p className="m-1">Power:</p>
                                    {props.hero.powerstats.power}
                                <p className="m-1">Combat:</p>
                                    {props.hero.powerstats.combat}
                            </div>
                        </div>
                        {/* <div className="line"></div> */}
                        <div className="stats mt-4">

                        {
                            props.teamView ?

                            <form onSubmit={handleOnSubmit}>
                                <button type='submit' name="delete" className="btn btn-danger">Eliminar</button>
                            </form>

                        :
                            <div className="stat">
                            </div>  
                        }
                        </div> 
                    
                    </div>
            
                
                </div>
            </div>


        </Fragment>


     );
}
 
export default Card;
