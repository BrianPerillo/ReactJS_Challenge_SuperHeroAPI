import React, {Fragment, useEffect, useState} from 'react'

import {Link,} from 'react-router-dom';
import { removeHero } from '../../store/actions/Team';
import { teamStats } from '../../store/actions/Team';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const PokeCard = ({pokes}, ...props) => {

    const dispatch = useDispatch();
    const [showNotification, setShowNotification] = useState(false);

    const {name} = useParams();

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
            <div className={props.size}>
                <div className="profile-card-1" style={{backgroundColor:'rgba(210, 57, 57, 0.937)'}}>
                
                    <div className="img">
                        <img src={pokes.sprites.front_default} style={{width:'150px'}}/>
                    </div>
                    <Link to={`/${name}/poke_detail/${pokes.id}`}
                        style={{textDecoration: 'none', color:'white'}}>
                        <button className="btn btn-propio">
                            <a className="view-more">
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            </a>
                        </button>
                    </Link>
                    {/* <div className="popup"></div> */}
                    <div className="mid-section" style={{backgroundColor:'rgba(210, 57, 57, 0.937)'}}>
                        <div className="name mt-2">
                            {pokes.name}
                        </div>
                        {/* <div className="col mt-1">
                            <strong style={{color:'orange'}}>Stats</strong>
                        </div> */}
                        <div className="row description mt-3">
                            <div className="col">
                                  <p className="m-1">Intelligence:</p>
                                   0
                                  <p className="m-1">Strength:</p>
                                    0
                                  <p className="m-1">Speed: </p>
                                   0
                            </div>
                            <div className="col">
                                <p className="m-1">Durability:</p>
                                    0
                                <p className="m-1">Power:</p>
                                   0
                                <p className="m-1">Combat:</p>
                                    0
                            </div>
                        </div>
                        {/* <div className="line"></div> */}
                        <div className="stats mt-4">

                        {/* {
                            props.teamView ?

                            <form onSubmit={handleOnSubmit}>
                                <button type='submit' name="delete" className="btn btn-danger">Eliminar</button>
                            </form>

                        :
                            <div className="stat">
                            </div>  
                        } */}
                        </div> 
                    
                    </div>
            
                
                </div>
            </div>

            {/* <div className='col-md-2'>
                <div className="profile-card-1" style={{backgroundColor:'rgba(210, 57, 57, 0.937)'}}>>
                
                    <div className="" style={{ display:'flex', justifyItems:'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={pokes.sprites.front_default} style={{width:'150px'}} />
                    </div>
                    <div className="mid-section">
                        <div className="name mt-2">
                            
                        </div>
                    </div>
                </div>
            </div> */}


        </Fragment>


     );
}
 
export default PokeCard;
