import { FIND_CURRENT_HERO, FIND_SELECTED_HERO, GET_HEROS, SEARCH_ERROR } from "../actions/Heros";

const INITIAL_STATE = {
    list: [],
    selected: null,
    error_values: {
        response_data:'',
        response_status:'',
        response_headers:'',
    },
};

const HeroReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_HEROS:

            return {
                ...state,
                list: action.list,
            };
        case FIND_CURRENT_HERO:
            // console.log(action.list[0]);
            if(typeof action.list[0] !== 'undefined'){
                return {
                    ...state,
                    list: action.list[0],
                };
            }
            else {
                return {
                    ...state,
                    list: [],
                };
            }
           
        case FIND_SELECTED_HERO:   
             return {
                ...state,
                selected: action.hero, //guardo el hero seleccionado (objeto) para en la vista detalle mostrar solo el hero almacendo en este atributo
            };

        case SEARCH_ERROR:   
            return {
               ...state,
               error_values: action.error_values,
        };
            
        default:
          return { ...state };
          
      }

}
 
export default HeroReducer;