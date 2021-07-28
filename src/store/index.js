import { applyMiddleware, combineReducers, createStore } from 'redux';

import HeroReducer from './reducers/heroReducer';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import TeamReducer from './reducers/teamReducer';

const RootReducer = combineReducers({

  heros: HeroReducer,
  team: TeamReducer,

})

export default createStore(RootReducer, applyMiddleware(thunk,promise))