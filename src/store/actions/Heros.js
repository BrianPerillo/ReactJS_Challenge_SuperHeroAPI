import { getAllHeros, getHero, getHerosByName } from "../../services/Heros";

export const GET_HEROS = 'GET_HEROS';
export const FIND_CURRENT_HERO = 'FIND_CURRENT_HERO';
export const FIND_SELECTED_HERO = 'FIND_SELECTED_HERO';
export const ADD_HERO = 'ADD_HERO';
export const REMOVE_HERO = 'REMOVE_HERO'

const baseUrl = process.env.REACT_APP_SUPER_HERO_BASE_URL;
const baseNameUrl = process.env.REACT_APP_SUPER_HERO_BASE_URL+'/search/';

export const getHeros = () => {

    return async dispatch => {
        
        const result = await getAllHeros(baseUrl);

        dispatch({ type: GET_HEROS, list: result});
        
    }

};

export const findCurrentHero = (name) => {

    return async dispatch => {
        
        const result = await getHerosByName(baseNameUrl, name);
       
        dispatch({ type: FIND_CURRENT_HERO, list: result});
        
    }

};

export const selectedHero = (id) => {
    // console.log(id + ' ' + searchIn);
    // return { 
    //     type: FIND_SELECTED_HERO,
    //     id: id,
    //     searchIn: searchIn,
    // };

    return async dispatch => {
        
        const result = await getHero(baseUrl, id);
                
        dispatch({ type: FIND_SELECTED_HERO, hero: result});

    }

};

export const addHero = (hero) => {
    
    return { 
        type: ADD_HERO,
        hero: hero,
    };

};

export const removeHero = (id,alignment) => {
    
    return { 
        type: REMOVE_HERO,
        id: id,
        alignment: alignment,
    };

};