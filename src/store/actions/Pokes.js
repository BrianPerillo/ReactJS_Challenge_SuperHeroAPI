import { getPokesByName } from "../../services/Pokemons";

export const GET_POKES = 'GET_POKES';
export const FIND_CURRENT_POKE = 'FIND_CURRENT_POKE';
export const FIND_SELECTED_POKE = 'FIND_SELECTED_POKE';
export const SEARCH_ERROR = 'SEARCH_ERROR';

//POKES

const nameUrlPoke = process.env.REACT_APP_POKE_API_BASE_URL;

export const findCurrentPoke = (name) => {

    return async dispatch => {

        try {
            const result = await getPokesByName(nameUrlPoke, name);
            console.log(result);
            dispatch({ type: FIND_CURRENT_POKE, list: result});
        }
        catch (error) {
            if (error.response){

                dispatch({ 
                    type: SEARCH_ERROR, 
                    error_values: {
                        response_data: error.response.data, 
                        response_status: error.response.status, 
                        response_headers: error.response.headers,
                    }
                });
            }

        }   
       
        
    }

};