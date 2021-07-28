import { applyMiddleware, combineReducers, createStore } from 'redux';

import HeroReducer from './reducers/heroReducer';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({

  heros: HeroReducer,

})

export default createStore(RootReducer, applyMiddleware(thunk,promise))