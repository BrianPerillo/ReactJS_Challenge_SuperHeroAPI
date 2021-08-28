import React, {Fragment, useContext} from 'react'

import { FaBeer } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Atributtes = (props) => {

    const stats = props.stats;
    let teamLength = props.teamLength;

    if(teamLength == 0){
        teamLength = 1; //Para que no muestre NaN en caso de ser 0 el teamLength
    }

    return ( 
        
        <Fragment>
            
            <div id="" className=''>

                    <hr/>
                    
                        <div id="" className="row">
                            <div className="col">
                                <p style={{fontSize:14, color:'#e9e9e9'}}><strong>Combat: <p>{stats.stats.combat}</p></strong></p>
                                <p style={{fontSize:14, color:'#e9e9e9'}}><strong>Intelligence: <p>{stats.stats.intelligence}</p></strong> </p>
                                <p style={{color:'#e9e9e9'}}><strong>Strength: <p>{stats.stats.strength}</p></strong></p>
                            </div>
                            <div className="col">
                                <p style={{fontSize:14, color:'#e9e9e9'}} className="col"><strong>Power: <p>{stats.stats.power}</p> </strong></p>
                                <p style={{fontSize:14, color:'#e9e9e9'}} className="col"><strong>Speed: <p>{stats.stats.speed}</p></strong> </p>
                                <p style={{fontSize:14, color:'#e9e9e9'}} className="col"><strong>Durability: <p>{stats.stats.durability}</p></strong> </p>
                            </div>
                        </div>

                        <div id="" className="col">
                            
                            <p><strong style={{fontSize:14}}>Peso promedio: {Math.round(stats.stats.weight/teamLength)} kg </strong></p>
                            <p><strong style={{fontSize:14}}>Altura promedio: {Math.round(stats.stats.height/teamLength)} cm </strong> </p>
                        </div>
                        
             

                    <hr/>

                    <h5>Atributo Principal: </h5>
                    <p className="col">{stats.maxState.stat}: <strong>{stats.maxState.power}</strong></p>
                    
               
            </div>

        </Fragment>


     );
}
 
export default Atributtes;
