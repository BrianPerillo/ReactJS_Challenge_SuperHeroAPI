import { ADD_POKE, POKES_TEAM_STATS, REMOVE_POKE } from "../actions/TeamPokes";

const INITIAL_STATE = {
    team: [],
    stats:[],
    message: '',
}

let pokeAlreadyExist = false;

const TeamPokesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
         
        case ADD_POKE:  
            console.log(action.poke);
            // Chequeo que el poke no se encuentre ya agregado:
            pokeAlreadyExist = false;
            state.team.map((poke)=>{
                if(poke.id === action.poke.id){
                    pokeAlreadyExist = true;
                    return
                }
            })
            //Si el team está completo: 
            if(state.team.length == 6){
                return {
                    ...state,
                    message: '¡Tu equipo se encuentra completo!. Debés eliminar un Pokémon para poder sumar otro!',
                };    
            }
            //Si ya existe:
            else if(pokeAlreadyExist){
                return {
                    ...state,
                    message: '¡Éste Pokémon ya se encuentra en tu Team :) !',
                };    
            }
            //Lo agrego al team
            else {
                console.log('AGREGO POKE');
                return {
                    ...state,
                    team: [...state.team, action.poke], //Agrego al hero al array
                    message: '¡Pokémon Agregado!',
                }; 
            }            

        case REMOVE_POKE: 

            return { ...state };

        case POKES_TEAM_STATS: 
  
            return { ...state };

     
        default:
            return { ...state };

    }

}

export default TeamPokesReducer;