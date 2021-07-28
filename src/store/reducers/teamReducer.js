import { ADD_HERO, FIND_CURRENT_HERO, FIND_SELECTED_HERO, GET_HEROS, REMOVE_HERO } from "../actions/Team";

const INITIAL_STATE = {
    team: [],
    teamDetails: {goodAlignment:0,badAlignment:0},
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
            if(!heroAlreadyExist && state.team.length < 6){
                console.log(state);
                //Si el alignment es bad y hay menos de 3 integrantes:
                if(action.hero.biography.alignment == 'bad' && state.teamDetails.badAlignment < 3){
                    const badAlignmentLength = state.teamDetails.badAlignment + 1;
                    return {
                        ...state,
                        team: [...state.team, action.hero], //Agrego al array un hero
                        teamDetails: {...state.teamDetails, badAlignment:badAlignmentLength}
                    };    
                }
                //Si el alignment es good y hay menos de 3 integrantes:
                else if(action.hero.biography.alignment == 'good' && state.teamDetails.goodAlignment < 3){
                    const goodAlignmentLength = state.teamDetails.goodAlignment + 1;
                    return {
                        ...state,
                        team: [...state.team, action.hero], //Agrego al hero al array
                        teamDetails: {...state.teamDetails, goodAlignment: goodAlignmentLength} //Contabilizo el alignment 
                    };    
                }
            }

        case REMOVE_HERO: 
    
            if(action.alignment == 'bad'){
                const badAlignmentLength = state.teamDetails.badAlignment - 1;
                return {
                    ...state,
                    team: state.team.filter((hero) => hero.id !== action.id), //Remuevo el Hero del array
                    teamDetails: {...state.teamDetails, badAlignment:badAlignmentLength}
                }   
            }     
            else if(action.alignment == 'good'){
                const goodAlignmentLength = state.teamDetails.goodAlignment - 1;
                return {
                    ...state,
                    team: state.team.filter((hero) => hero.id !== action.id), //Remuevo el Hero del array
                    teamDetails: {...state.teamDetails, goodAlignment:goodAlignmentLength}
                }  
            }

                    
        default:
            return { ...state };

    }

}

export default TeamReducer;