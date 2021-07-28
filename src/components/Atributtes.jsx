import React, {Fragment, useContext} from 'react'

import { useSelector } from 'react-redux';


const Atributtes = (props) => {


    const stats = props.stats;

    return ( 
        
        <Fragment>
            
            <div id="atributos" className='col-md-3'>

                <div className="col">
                    
                    <h4>Team Stats</h4>

                    <hr/>

                    <div id="all-stats" className="row">

                        <div id="stats-first-col" className="col">
                            <p style={{color:'red'}}><strong>Combat: <p>{stats.stats.combat}</p></strong></p>
                            <p style={{color:'#1c98c2'}}><strong>Intelligence: <p>{stats.stats.intelligence}</p></strong> </p>
                            <p style={{color:'green'}}><strong>Strength: <p>{stats.stats.strength}</p></strong></p>
                    
                        
                            <p style={{color:'orange'}} className="col"><strong>Power: <p>{stats.stats.power}</p> </strong></p>
                            <p style={{color:'#64d2f7'}} className="col"><strong>Speed: <p>{stats.stats.speed}</p></strong> </p>
                            <p style={{color:'#4e4e4e'}} className="col"><strong>Durability: <p>{stats.stats.durability}</p></strong> </p>
                        </div>

                        <div id="stats-second-col" className="col">
                            
                            <p><strong>Peso promedio: {stats.stats.weight} kg </strong></p>
                            <p><strong>Altura promedio: {stats.stats.height} cm </strong> </p>
                        </div>
                        
                    </div>

                    <hr/>

                    <h5>Atributo Principal: </h5>
                    <p className="col">{stats.maxState.stat}: <strong>{stats.maxState.power}</strong></p>
                    
                </div>
            </div>

        </Fragment>


     );
}
 
export default Atributtes;