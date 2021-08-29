import { FIND_CURRENT_POKE, FIND_SELECTED_POKE, GET_POKES, SEARCH_ERROR } from "../actions/Pokes";

const INITIAL_STATE = {
    list: [],
    selected: null,
    error_values: {
        response_data:'',
        response_status:'',
        response_headers:'',
    },
};

const PokesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_POKES:

            return {
                ...state,
                list: action.list,
            };
        case FIND_CURRENT_POKE:
            // console.log(action.list);console.log(action.list);console.log(action.list);
            return {
                ...state,
                list: action.list[0],
            };
            
        case FIND_SELECTED_POKE:   
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
 
export default PokesReducer;