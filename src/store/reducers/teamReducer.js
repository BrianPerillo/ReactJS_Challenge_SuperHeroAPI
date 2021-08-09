import { ADD_HERO, REMOVE_HERO, TEAM_STATS } from "../actions/Team";

const INITIAL_STATE = {
    team: [],
    teamAlignment: {goodAlignment:0,badAlignment:0},
    teamStats: {  
        stats: {
            combat:null, 
            intelligence:null, 
            durability:null, 
            strength:null, 
            power:null, 
            speed:null, 
            intelligence:null, 
            weight:null, 
            height:null, 
        },
        maxState: {
            stat:'',
            power:null
        },    
    },
    message: '',
}

let heroAlreadyExist = false;

const TeamReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
         
        case ADD_HERO:  
            //Chequeo que el hero no se encuentre ya agregado:
            heroAlreadyExist = false;
            state.team.map((hero)=>{
                if(hero.id === action.hero.id){
                    heroAlreadyExist = true;
                    return
                }
            })
            //Si el team está completo: 
            if(state.team.length == 6){
                return {
                    ...state,
                    message: '¡Tu equipo se encuentra completo!. Debés eliminar un integrante para poder sumar otro!',
                };    
            }
            //Si ya existe:
            else if(heroAlreadyExist){
                return {
                    ...state,
                    message: '¡Éste Heroe ya se encuentra en tu Team :) !',
                };    
            }
            else if(!heroAlreadyExist && state.team.length < 6){
                console.log(state);
                //Si el alignment es bad y hay menos de 3 integrantes:
                if(action.hero.biography.alignment == 'bad' && state.teamAlignment.badAlignment < 3){
                    const badAlignmentLength = state.teamAlignment.badAlignment + 1;
                    return {
                        ...state,
                        team: [...state.team, action.hero], //Agrego al array un hero
                        teamAlignment: {...state.teamAlignment, badAlignment:badAlignmentLength},
                        message: '¡Heroe Agregado!',
                    };    
                }
                else if (action.hero.biography.alignment == 'bad' && state.teamAlignment.badAlignment == 3){
                    return {
                        ...state,
                        message: '¡Ya tenés el máximo permitido de heroes con alignment bad!',
                    };   
                }
                //Si el alignment es good y hay menos de 3 integrantes:
                else if(action.hero.biography.alignment == 'good' && state.teamAlignment.goodAlignment < 3){
                    const goodAlignmentLength = state.teamAlignment.goodAlignment + 1;
                    return {
                        ...state,
                        team: [...state.team, action.hero], //Agrego al hero al array
                        teamAlignment: {...state.teamAlignment, goodAlignment: goodAlignmentLength}, //Contabilizo el alignment 
                        message: '¡Heroe Agregado!',
                    };    
                }
                else if(action.hero.biography.alignment == 'good' && state.teamAlignment.goodAlignment == 3){
                    return {
                        ...state,
                        message: '¡Ya tenés el máximo permitido de heroes con alignment good!',
                    };   
                }
                console.log(state);
            }

        case REMOVE_HERO: 

            if(action.alignment == 'bad'){
                const badAlignmentLength = state.teamAlignment.badAlignment - 1;
                return {
                    ...state,
                    team: state.team.filter((hero) => hero.id !== action.id), //Remuevo el Hero del array
                    teamAlignment: {...state.teamAlignment, badAlignment:badAlignmentLength},
                    message: 'Héroe Removido',
                }   
            }     
            else if(action.alignment == 'good'){
                const goodAlignmentLength = state.teamAlignment.goodAlignment - 1;
                return {
                    ...state,
                    team: state.team.filter((hero) => hero.id !== action.id), //Remuevo el Hero del array
                    teamAlignment: {...state.teamAlignment, goodAlignment:goodAlignmentLength},
                    message: 'Héroe Removido',
                }  
            }

        case TEAM_STATS: 

                console.log(state.team.length);

                if(state.team.length == 0){

                    const teamStats = {  
                        stats: {
                            combat:null, 
                            intelligence:null, 
                            durability:null, 
                            strength:null, 
                            power:null, 
                            speed:null, 
                            intelligence:null, 
                            weight:null, 
                            height:null, 
                        },
                        maxState: {stat:'',power:null},    
                    }

                    return {
                        ...state,
                        teamStats:teamStats,
                    }

                }
                else if(state.team.length > 0){
                    var combat = 0;
                    var intelligence = 0;
                    var durability = 0;
                    var strength = 0;
                    var power = 0;
                    var speed = 0;
                    var intelligence = 0;
                    var weight = 0;
                    var height = 0;
                    var stats = {}

                    state.team.forEach((hero) => {

                        combat = combat + parseInt(hero.powerstats.combat) 
                        intelligence = intelligence + parseInt(hero.powerstats.intelligence) 
                        durability = durability + parseInt(hero.powerstats.durability) 
                        strength = strength + parseInt(hero.powerstats.strength) 
                        power = power + parseInt(hero.powerstats.power) 
                        speed = speed + parseInt(hero.powerstats.speed)
              
                        //HEIGHT Y WEIGHT: Dado que weight y lenght son strings, creo variables para calcular el la cantidad de posiciones del string y luego recortar y parsear a integer
                          var weight_length = hero.appearance.weight[1].length - 1
                          var height_length = hero.appearance.height[1].length - 1
                          weight = weight + parseInt(hero.appearance.weight[1].substr(0,weight_length-2)) //Suma de todos los pesos
                          height = height + parseInt(hero.appearance.height[1].substr(0,height_length-2)) //Suma de todos los pesos
              
                      });

                        stats = {combat:combat, intelligence:intelligence, durability:durability, strength:strength, power:power, speed:speed, weight:weight, height:height}
                    //   console.log(stats)

                      //Creo variable maxState, recorro el objeto stats, y guardo el state más alto
                        var maxState = {stat:'',power:0}
                        
                        for (var key in stats) {

                            if(stats[key] > maxState.power){ //Si, el stat es más alto que maxState.power, reemplazo valores de maxState

                                maxState.stat = key
                                maxState.power = stats[key]

                            }

                        }

                        // console.log(maxState)

                    return {
                        ...state, 
                        teamStats: {...state.teamStats, stats:stats, maxState:maxState}
                    }

                }



                    
        default:
            return { ...state };

    }

}

export default TeamReducer;