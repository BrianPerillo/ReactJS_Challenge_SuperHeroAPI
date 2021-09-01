export const ADD_POKE = 'ADD_POKE';
export const REMOVE_POKE = 'REMOVE_HERO';
export const POKES_TEAM_STATS = 'TEAM_STATS';


export const addPoke = (poke) => {
    
    return { 
        type: ADD_POKE,
        poke: poke,
    };

};

export const removePoke = (id) => {
    
    return { 
        type: REMOVE_POKE,
        id: id,
    };

}

export const teamStats = () => {

    return { 
        type: POKES_TEAM_STATS,
    };
    
}