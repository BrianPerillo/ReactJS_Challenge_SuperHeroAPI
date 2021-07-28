export const ADD_HERO = 'ADD_HERO';
export const REMOVE_HERO = 'REMOVE_HERO'

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
    
}