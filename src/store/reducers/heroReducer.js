import { FIND_CURRENT_HERO, FIND_SELECTED_HERO, GET_HEROS } from "../actions/Heros";

const INITIAL_STATE = {
    list: [],
    // filteredHeros: [],
    selected: null,
};

const HeroReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_HEROS:

            return {
                ...state,
                list: action.list //pedido axios por los primeros 8 heros
            };
        case FIND_CURRENT_HERO:
            // console.log(action.list[0]);
            return {
                ...state,
                list: action.list[0] //pedido axios por el name del Hero
            };
        case FIND_SELECTED_HERO:   
             return {
                ...state,
                selected: action.hero, //guardo el hero seleccionado (objeto) para en la vista detalle mostrar solo el hero almacendo en este atributo
            };
            
        default:
          return { ...state };
          
      }

}
 
export default HeroReducer;