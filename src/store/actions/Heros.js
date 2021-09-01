import { getAllHeros, getHero, getHerosByName } from "../../services/Heros";

export const GET_HEROS = 'GET_HEROS';
export const FIND_CURRENT_HERO = 'FIND_CURRENT_HERO';
export const FIND_SELECTED_HERO = 'FIND_SELECTED_HERO';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const baseUrl = process.env.REACT_APP_SUPER_HERO_BASE_URL;
const baseNameUrl = process.env.REACT_APP_SUPER_HERO_BASE_URL+'/search/';

export const getHeros = () => {

    return async dispatch => {

        try {
            const result = await getAllHeros(baseUrl);
            dispatch({ type: GET_HEROS, list: result});
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

export const findCurrentHero = (name) => {

    return async dispatch => {

        try {
            const result = await getHerosByName(baseNameUrl, name);
            dispatch({ type: FIND_CURRENT_HERO, list: result});
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

export const selectedHero = (id) => {

    return async dispatch => {

        try {
            const result = await getHero(baseUrl, id);
            dispatch({ type: FIND_SELECTED_HERO, hero: result});
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

